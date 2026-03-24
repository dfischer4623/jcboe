import React, { useContext, useState, useEffect } from 'react';



import logoimg from "../assets/img/logob.png";
import { systempurchasewornumber, systemvendorchecksrnumber } from '../actions/systemadmin.actions';

import secureLocalStorage from "react-secure-storage";
import {
  useNavigate
} from "react-router-dom";
import axios from 'axios';
import { AppContext } from '../context';
function formatDate(date) {
  if (!date) return '';

  let d;

  // Check if format is YYYY-MM-DD
  if (date.includes('-')) {
    d = new Date(date);
  }
  // Check if format is M/D/YYYY or MM/DD/YYYY
  else if (date.includes('/')) {
    let parts = date.split('/');
    let month = parts[0].padStart(2, '0');
    let day = parts[1].padStart(2, '0');
    let year = parts[2];
    return `${month}/${day}/${year}`;
  }

  if (isNaN(d)) return '';

  let month = String(d.getMonth() + 1).padStart(2, '0');
  let day = String(d.getDate()).padStart(2, '0');
  let year = d.getFullYear();

  return `${month}/${day}/${year}`;
}
function formatYearRange(yearStr) {
  if (!yearStr || yearStr.length !== 8) return yearStr; // safety check

  let startYear = yearStr.substring(0, 4);
  let endYear = yearStr.substring(4, 8);

  return `${startYear}-${endYear}`;
}

const formatDateTime = (dateString) => {
  if (!dateString) return ""; // Handle undefined or null values

  const date = new Date(dateString);
  if (isNaN(date)) return ""; // Handle invalid date

  const formattedDate = date.toLocaleDateString("en-US", {
    timeZone: 'America/Indiana/Marengo',
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
  });

  const formattedTime = date.toLocaleTimeString("en-US", {
    timeZone: 'America/Indiana/Marengo',
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  return `${formattedDate} ${formattedTime}`;
};

function Pdf() {
  let navigate = useNavigate();


  const [viewData, setViewData] = useState([]);
  const [viewDataForm, setViewDataForm] = useState([]);
  const [viewDocumentForm, setViewDocumentForm] = useState([]);
  const [viewDataFormChild, setViewDataFormChild] = useState([]);
  const [formname, setformname] = useState("");
  const { storage } = useContext(AppContext);
  const Axios = axios.create({
    baseURL: storage[0].backEndUrl
    // baseURL: process.env.REACT_APP_ENV_URL
  });
  const [employeeData, setEmployeeData] = useState(null);
  useEffect(() => {

    var userid = secureLocalStorage.getItem('showsystemPODataid');
    var podat = secureLocalStorage.getItem('vendorSystemNumberData');

    if ((userid) == null || (userid) == undefined) {


      navigate(`/systemshowPO`);

    } else {
      systempurchasewornumber(userid).then((res) => {
        console.log('add-user res=====>>>>', res.data);
        setViewData(res.data);

        setTimeout(function () {
          triggerPrint();
        }, 1000);


      }).catch((error) => {

        console.log('error occurs while registring the user', error);
      });


    }

  }, []);
  const triggerPrint = () => {



    document.title = 'PO Details';


    setTimeout(function () {
      window.print();
      document.title = 'Legacy System';
      window.close();
    }, 500);
    ;
  }







  const styles = {
    body: {
      WebkitPrintColorAdjust: "exact",
    },
    pageBreak: {
      pageBreakAfter: "always",
    },
  };
  let dollarUS = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  function formatCurrency(value) {
    if (!value) return "$0.00";

    // Remove commas and convert to number
    let num = Number(String(value).replace(/,/g, ""));

    // If invalid, return as is
    if (isNaN(num)) return value;

    return dollarUS.format(num);
  }

  return (
    <>
      <div style={styles.body}>
        {viewData.length > 0 &&
          <>


            <div className="conatiner-pdf pagebrpr" style={styles.pageBreak}>
              <div className="pdf-section">
                <table style={{ width: '100%', marginTop: '10px' }}>

                  <tr>
                    <td colSpan="2" class="pdf-header">
                      <img src={logoimg} />
                    </td>
                  </tr>

                </table>
                <div class=" ">
                  <div class="main-heading-sec ">
                    <div class="col-md-12">
                      <div class="head-inner head-inner-main reqid-sec reqid-sec-pdf padding-top-pdf pdf-po">
                        {viewData.length > 0 &&
                          <>
                            {/* <h2>Purchase Order Search</h2> */}
                            <h2 className='po-doc-pdf'>Purchase Orders</h2>
                            <h3 className='po-num-pdf'>Vendor Number: {viewData[0].vendorNumber}</h3>

                          </>
                        }


                      </div>

                    </div>
                  </div>
                </div>
                {/* general section start pdf code */}

                <div className="pdf-section padf-sec-top">
                  <table className="table-status" style={{ width: '100%' }}>
                    {viewData.length > 0 ?
                      <><thead>
                        <tr>
                          <th className='pf-sl pdf-job-cde pdf-po-sys'>PO</th>
                          <th className='pf-wl pdf-absne pdf-pay-sys'>PAYMENTS</th>
                          <th className='pf-date pdf-begn-bal pdf-sys-date'>DATE </th>
                          <th className='pf-time pdf-earn pdf-sys-year'>YEAR </th>

                        </tr>
                      </thead></>
                      :
                      null}
                    {viewData.length > 0 ?

                      viewData.map((item, index) =>
                        <tr>
                          <td class="border-right">  {item?.poNumber} </td>
                          <td class="border-right"> {formatCurrency(item.payments)}</td>
                          <td class="border-right">  {formatDate(item.date)}</td>
                          <td class="border-right">  {formatYearRange(item.year)}</td>


                        </tr>
                      ) : ""}

                  </table>

                </div>

                {/* footer section add end*/}


              </div>

            </div>



          </>}
      </div>
    </>
  )
}
export default Pdf
