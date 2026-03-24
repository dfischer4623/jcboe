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

    var userid = secureLocalStorage.getItem('employeeData');



    if (Object.keys(userid).length === 0) {


      navigate(`/employeedata`);

    } else {
      var allprintnew = JSON.parse(window.localStorage.getItem('allprintnew'));;
      console.log(allprintnew);
      setEmployeeData(userid);
      setViewDataForm(allprintnew);
    }

    setTimeout(function () {
      triggerPrint();
    }, 1000);
  }, []);
  const triggerPrint = () => {



    document.title = 'Attendance Data';


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
  const padValue = (value) => {
  return value.toString().padStart(4, '0');
};

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
        {employeeData != null &&
          <>


            <div className="conatiner-pdf pagebrpr" style={styles.pageBreak}>
              <div className="pdf-section">
                <table style={{ width: '100%', marginTop: '10px' }}>

                  <tr>
                    <td colSpan="2" class="pdf-header">
                      <img src={logoimg} />
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="2" className="reqid-sec reqid-sec-pdf padding-top-pdf" >
                  
                    Attendance Data
                    </td>

                  </tr>
                  <tr>
                    <td colSpan="2" className="reqid-sec reqid-sec-pdf">
                      Employee Name: {employeeData.EMLNAM}, {employeeData.EMFNAM} {employeeData.EMMNAM}
                    </td>

                  </tr>
                  <tr>
                    <td colSpan="2" className="reqid-sec reqid-sec-pdf padding-bottom-pdf">
                      Emp Id:  {employeeData.EMSSAN}
                    </td>

                  </tr>
                </table>
                {/* general section start pdf code */}

                <div className="pdf-section padf-sec-top">
                  <table className="table-status" style={{ width: '100%' }}>
                    {viewDataForm.length > 0 ?
                     <><thead>
                      <tr>
                        <th className='pf-sl pdf-job-cde'>Job Code	</th>
                        <th className='pf-wl pdf-absne'>Absence Type</th>
                        <th className='pf-date pdf-begn-bal'>Beginning Balance </th>
                        <th className='pf-time pdf-earn'>Earned</th>
                        <th className='pf-resn pdf-used'>Used</th>
                        <th className='pf-wo pdf-end-bal'>Ending Balance</th>
                        <th className='pf-wt pad-wrk-tpe'>Work Type</th>
                      </tr>
                      </thead>
                      </>
                      :
                      null}
                    {viewDataForm.length > 0 ?

                      viewDataForm.map((item, index) =>
                        <tr>
                          <td class="border-right">  {padValue(item.HAJOB)} </td>
                          <td class="border-right">  {item?.HAABS}</td>
                          <td class="border-right">  {item?.HAFBBL}</td>
                          <td class="border-right">  {item?.HAFERN} </td>
                          <td class="border-right">  {item?.HAFUSE} </td>
                          <td class="border-right">  {item?.HABAL} </td>
                          <td class="border-right">  {item?.MEMBER} </td>
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
