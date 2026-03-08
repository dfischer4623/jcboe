import React, { useContext, useState, useEffect } from 'react';



import logoimg from "../assets/img/logob.png";


import secureLocalStorage from "react-secure-storage";
import {
  useNavigate
} from "react-router-dom";
import axios from 'axios';
import { AppContext } from '../context';
function formatDate(date, format = null) {
  const myArray = date.split("-");
  var d = new Date(date);
  var month = myArray[1];
  var day = myArray[2];
  var year = myArray[0];
  var daten = month + '/' + day + '/' + year;
  // if (month.length < 2) month = '0' + month;
  // if (day.length < 2) day = '0' + day;

  // if (format && format == 'Y-m-d') return [month, day, year].join('-');
  // else return [month, day, year].join('-');
  return daten;
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

    var userid = secureLocalStorage.getItem('bankDetailsData');


    if ((userid) == null || (userid) == undefined) {


      navigate(`/vendorsearch`);

    } else {

      setViewData(userid);

    }

    setTimeout(function () {
      triggerPrint();
    }, 1000);
  }, []);
  const triggerPrint = () => {



    document.title = 'Bank Details';


    setTimeout(function () {
      window.print();
      document.title = 'Legacy System';
      window.close();
    }, 500);
    ;
  }
  let dollarUS = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const chcekdate = (APHCDT) => {
    if (APHCDT.length === 1) {
      var APHCDT = '00000' + APHCDT
    } else if (APHCDT.length === 2) {
      APHCDT = '0000' + APHCDT
    } else if (APHCDT.length === 3) {
      APHCDT = '000' + APHCDT
    } else if (APHCDT.length === 4) {
      APHCDT = '00' + APHCDT
    } else if (APHCDT.length === 5) {
      APHCDT = '0' + APHCDT
    } else {
      APHCDT = APHCDT
    }

    var m = Number(APHCDT.substring(0, 2))
    var d = Number(APHCDT.substring(2, 4))
    var y = Number(APHCDT.substring(4, 6))
    if (y <= 50) {
      y = 2000 + y
    } else {
      y = 1900 + y
    }

    APHCDT = String(m) + '/' + String(d) + '/' + String(y)

    return APHCDT;
  }
  const chcekam = (APHCAM, index) => {

    var checkAmt = Number(APHCAM);
    var totAmt = 0;
    if (index === 0) {
      totAmt = checkAmt
    } else {
      totAmt = checkAmt + totAmt
    }

    return totAmt;
  }

  const styles = {
    body: {
      WebkitPrintColorAdjust: "exact",
    },
    pageBreak: {
      pageBreakAfter: "always",
    },
  };
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
                  <h2 className='po-doc-pdf'>Check Search</h2>
                  <h3 className='po-num-pdf'>Vendor Number: {viewData[0].APHVEN}</h3>
                 
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
                        <th className='pf-sl pdf-job-cde'>Bank</th>
                        <th className='pf-wl pdf-absne'>Bank Account</th>
                        <th className='pf-date pdf-begn-bal'>Form </th>
                        <th className='pf-time pdf-earn pdf-ven-no'>Vendor No  </th>
                        <th className='pf-time pdf-earn'>Check Number </th>
                        <th className='pf-time pdf-earn'>Check Date </th>
                        <th className='pf-time pdf-earn'>Reconciled?</th>
                        <th className='pf-time pdf-earn'>Reconciled Date</th>
                        <th className='pf-time pdf-earn'>Check Amount</th>
                      </tr>
                      </thead>
                      </>
                      :
                      null}
                    {viewData.length > 0 ?

                      viewData.map((item, index) =>
                        <tr>
                          <td class="border-right">  {item?.APHBNK} </td>
                          <td class="border-right">  {item?.APHBAC}</td>
                          <td class="border-right">  {item?.APHFRM}</td>
                      
                          <td class="border-right">  {item?.APHVEN}  {item?.APHNAM}</td>
                          <td class="border-right">  {item?.APHCHK}</td>
                          <td class="border-right">  {chcekdate(item.APHCDT)}</td>
                          <td class="border-right">  Y</td>
                          <td class="border-right">  {chcekdate(item.APHCDT)}</td>
                          <td class="border-right">  {dollarUS.format(chcekam(item.APHCAM, index))} </td>
                      
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
