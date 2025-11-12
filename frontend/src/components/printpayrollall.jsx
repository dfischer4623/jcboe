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
      var allprintnew = JSON.parse(window.localStorage.getItem('allprintpaytrollde'));;
      console.log(allprintnew);
      setEmployeeData(userid);
      setViewDataForm(allprintnew);
    }

    setTimeout(function () {
      triggerPrint();
    }, 1000);
  }, []);
  const triggerPrint = () => {



    document.title = 'Payroll  Details';


    setTimeout(function () {
      window.print();
      document.title = 'Legacy System';
      window.close();
    }, 500);
    ;
  }
  let percentageUS = Intl.NumberFormat("en-US", {
    style: "percent",
    maximumFractionDigits: 2
  });

  const styles = {
    body: {
      WebkitPrintColorAdjust: "exact",
    },
    pageBreak: {
      pageBreakAfter: "always",
    },
  };
  const formatDate = (dateStringji) => {
    console.log('dateStringji', dateStringji);
   let HRCKDT = dateStringji;
   let dateString = HRCKDT ? HRCKDT.toString() : "";

   let month, day, year;
   if (dateString.length === 3) {
     month = "0" + dateString.substring(0, 1);
     day = dateString.substring(1, 3);
     year = "2000";
   } else if (dateString.length === 4) {
     month = dateString.substring(0, 2);
     day = dateString.substring(2, 4);
     year = "2000";
   } else if (dateString.length === 5) {
     month = dateString.substring(1, 3);
     day = dateString.substring(3, 5);
     year = "200" + dateString.substring(0, 1);
   } else if (dateString.length === 6) {
     month = dateString.substring(2, 4);
     day = dateString.substring(4, 6);
     year = dateString.substring(0, 2);
     year = year > "30" ? "19" + year : "20" + year;
   } else {
     month = "12";
     day = "31";
     year = "9999";
   }
   HRCKDT = `${month}/${day}/${year}`;
    return HRCKDT
 }
 let dollarUS = Intl.NumberFormat("en-US", { style: "currency", currency: "USD" });

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

                    Payroll Details
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
                          <th className='pf-sl pdf-job-cde'>Check Date 	</th>
                          <th className='pf-wl pdf-absne'>Check #  </th>
                          <th className='pf-date pdf-begn-bal'>Form</th>
                          <th className='pf-date pdf-begn-bal'>Check Amt </th>
                          

                        </tr>
                      </thead>
                      </>

                      :
                      null}
                    {viewDataForm.length > 0 ?

                      viewDataForm.map((item, index) =>
                        <tr>
                          <td class="border-right">  {formatDate(item.HRCKDT)} </td>
                          <td class="border-right">  {(item.PCCK)}</td>
                          <td class="border-right">  {item?.HRFRM2}</td>
                          <td class="border-right"> {dollarUS.format(item.PCAMT)}</td>
                       

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
