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

    var userid = secureLocalStorage.getItem('showPOData');


    if ((userid) == null || (userid) == undefined) {


      navigate(`/showPO`);

    } else {

      setViewData(userid);

    }

    setTimeout(function () {
      triggerPrint();
    }, 1000);
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
  const formatDate = (date, format = null) => {
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
  function normalize(phone) {
    phone = phone.toString();
    //normalize string and remove all unnecessary characters
    phone = phone.replace(/[^\d]/g, "");

    //check if number length equals to 10
    if (phone.length === 7) {
      //reformat and return phone number
      return phone.replace(/(\d{3})(\d{4})/, "$1-$2");
    }

    return "";
  }
  function normalizezip(zipCode) {
    var zipCode = zipCode.toString();
    if (zipCode.length !== 5) {
      zipCode = '0' + zipCode;
    }


    return "";
  }
  function normalizezipnew(zipCode) {

    var zipCodeP = zipCode.toString();
    if (zipCodeP.length !== 5) {
      zipCodeP = '0' + zipCodeP;
    }
    return "";
  }
  function formaDatenew(date) {
    const rawDate = date;
    const dateStr = rawDate.toString();

    const year = dateStr.substring(0, 4);
    const month = dateStr.substring(4, 6);
    const day = dateStr.substring(6, 8);

    const formattedDate = `${month}/${day}/${year}`;
    // if (month.length < 2) month = '0' + month;
    // if (day.length < 2) day = '0' + day;

    // if (format && format == 'Y-m-d') return [month, day, year].join('-');
    // else return [month, day, year].join('-');
    return formattedDate;

  }
  function formaEMADAT(EMADAT) {
    if (EMADAT !== 0) {
      var dateString = EMADAT.toString();
      var year = dateString.substring(0, 2);
      if (year > '30') {
        year = '19' + year
      } else {
        year = '20' + year
      }
      var month = dateString.substring(2, 4);
      var day = dateString.substring(4, 6);
      var EMADAT = month + '/' + day + '/' + year
    } else {
      EMADAT = ''
    }
    return EMADAT;

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
                            <h2 className='po-doc-pdf'>Purchase Orders</h2>
                            <h3 className='po-num-pdf'>Vendor Number: {viewData[0].POVEND}</h3>

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
                          <th className='pf-sl pdf-job-cde'>PO</th>
                          <th className='pf-wl pdf-absne'>PODOC</th>
                          <th className='pf-date pdf-begn-bal'>POATTN </th>
                          <th className='pf-time pdf-earn'>POTOT </th>
                          <th className='pf-time pdf-earn'>POIUSR </th>
                          <th className='pf-time pdf-earn'>POAUSR </th>
                        </tr>
                      </thead></>
                      :
                      null}
                    {viewData.length > 0 ?

                      viewData.map((item, index) =>
                        <tr>
                          <td class="border-right">  {item?.PO} </td>
                          <td class="border-right">  {item?.PODOC}</td>
                          <td class="border-right">  {item?.POATTN}</td>
                          <td class="border-right">  {item?.POTOT}</td>
                          <td class="border-right">  {item?.POIUSR}</td>
                          <td class="border-right">  {item?.POAUSR}</td>

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
