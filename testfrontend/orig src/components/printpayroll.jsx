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
  const [viewDataForm, setViewDataForm] = useState(null);
  const [viewDocumentForm, setViewDocumentForm] = useState([]);
  const [viewDataFormChild, setViewDataFormChild] = useState([]);
  const [formname, setformname] = useState("");
  const [grossPay, setGrossPay] = useState(0);
  const [deductions, setDeductions] = useState(0);
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
      console.log(userid);
      var allprintnew = JSON.parse(window.localStorage.getItem('allpoch'));;
      console.log(allprintnew);
      setEmployeeData(userid);
      setViewDataForm(allprintnew);
      var allprintnewdd = JSON.parse(window.localStorage.getItem('allpayrollch'));;
      setViewDocumentForm(allprintnewdd);
      if (allprintnewdd.length > 0) {
        var customerList_temp = allprintnewdd;
        var grossPayn = 0;
        for (let i = 0; i < customerList_temp.length; i++) {

          grossPayn += Number(customerList_temp[i].PACUR);
        }
        console.log(customerList_temp);
        console.log('grossPay', grossPayn);
        setGrossPay(grossPayn);

      }
      var allprintnewchild = JSON.parse(window.localStorage.getItem('allpayrollchdeduct'));;
      setViewDataFormChild(allprintnewchild);

      if (allprintnewchild.length > 0) {
        var customerList_temph = allprintnewchild;
        var grossPaynj = 0;
        for (let i = 0; i < customerList_temph.length; i++) {

          grossPaynj += Number(customerList_temph[i].DEAMT);
        }
        console.log(customerList_temph);
        console.log('grossPay', grossPayn);
        setDeductions(grossPaynj);

      }

    }

    setTimeout(function () {
      triggerPrint();
    }, 1000);
  }, []);
  const triggerPrint = () => {



    document.title = 'Payroll Check Details';


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
      marginTop: '10px',
    },
  };
  const dollarUS = Intl.NumberFormat("en-US", { style: "currency", currency: "USD" });
  return (
    <>

      <div style={styles.body}>

        {employeeData != null &&
          <>


            <div className="conatiner-pdf " style={styles.pageBreak}>
              <div className="pdf-section">
                <table style={{ width: '100%', marginTop: '10px' }}>

                  <tr>
                    <td colSpan="2" class="pdf-header">
                      <img src={logoimg} />
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="2" className="reqid-sec reqid-sec-pdf padding-top-pdf" >
                  
                    Payroll Check Details
                    </td>

                  </tr>
                  <tr>
                    <td colSpan="2" className="reqid-sec reqid-sec-pdf " >
                      Employee Name: {employeeData.EMLNAM}, {employeeData.EMFNAM} {employeeData.EMMNAM}
                    </td>

                  </tr>
                  <tr>
                    <td colSpan="2" className="reqid-sec reqid-sec-pdf padding-bottom-pdf" >
                      Emp Id:  {employeeData.EMSSAN}
                    </td>

                  </tr>
                </table>
                {/* general section start pdf code */}

                <div className="main-pdf-sec pagebrpr">

                  <table className="general-sec-pdf">
                    <tbody>
                      {viewDataForm != null &&
                        <>
                          <tr>
                            <td className="main-gen-inner">
                              <table style={{ width: '100%' }}>
                                <tbody><tr>
                                  <td className="main-gen-width main-gen-width-new"><b> Check #:</b></td>
                                  <td className="pdf-data">  {viewDataForm?.CHECK || "N/A"}
                                  </td>
                                </tr>
                                </tbody></table>
                            </td>
                            <td className="main-gen-inner">
                              <table style={{ width: '100%' }}>
                                <tbody>
                                  <tr>
                                    <td className="main-gen-width main-gen-width-new">
                                      <b>Check Date:</b>
                                    </td>
                                    <td className="pdf-data">   {viewDataForm?.CHKDT || "N/A"}</td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                          <tr>
                            <td className="main-gen-inner">
                              <table style={{ width: '100%' }}>
                                <tbody><tr>
                                  <td className="main-gen-width main-gen-width-new"><b>Gross Pay:</b></td>
                                  <td className="pdf-data">   {dollarUS.format(grossPay)}
                                  </td>
                                </tr>
                                </tbody></table>
                            </td>
                            <td className="main-gen-inner">
                              <table style={{ width: '100%' }}>
                                <tbody>
                                  <tr>
                                    <td className="main-gen-width  main-gen-width-new">
                                      <b>Deductions:</b>
                                    </td>
                                    <td className="pdf-data">  {dollarUS.format(deductions)}</td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                          <tr>
                            <td className="main-gen-inner">
                              <table style={{ width: '100%' }}>
                                <tbody><tr>
                                  <td className="main-gen-width  main-gen-width-new"><b>  Net Pay:</b></td>
                                  <td className="pdf-data">  {dollarUS.format(grossPay + deductions)}
                                  </td>
                                </tr>
                                </tbody></table>
                            </td>

                          </tr>
                        </>
                      }






                    </tbody>

                  </table>
                </div>
                <div className="pdf-section padf-sec-top">
                  <table className="table-status" style={{ width: '100%' }}>
                    {(viewDocumentForm.length > 0 || viewDataFormChild.length > 0) ?
                     <><thead>
                      <tr>
                        <th className='pf-sl pdf-payroll-desc'>Description	</th>
                        <th className='pf-wl pdf-payroll-ref'>Ref 1 </th>
                        <th className='pf-date pdf-payroll-ref-sec'>Ref 2 </th>
                        <th className='pf-time pdf-payroll-type'>Type</th>
                        <th className='pf-resn pdf-payroll-cal-amt'>Cal Amount </th>
                        <th className='pf-wo pdf-payroll-chk-amt'>Check Amount</th>

                      </tr>
                      </thead>
                      </>
                      :
                      null}
                    {viewDocumentForm.length > 0 ?

                      viewDocumentForm.map((item, index) =>
                        <tr>
                          <td class="border-right">  {item?.JDTITL} </td>
                          <td class="border-right">  {item?.PAJOB}</td>
                          <td class="border-right">  {item?.PAADN}</td>
                          <td class="border-right">  {item?.PATYP} </td>
                          <td class="border-right">{dollarUS.format(item.PACAL)} </td>
                          <td class="border-right"> {dollarUS.format(item.PACUR)} </td>

                        </tr>
                      ) : ""}


                    {viewDataFormChild.length > 0 ?

                      viewDataFormChild.map((item, index) =>
                        <tr>
                          <td class="border-right">  {item?.DEDESC} </td>
                          <td class="border-right">  {item?.DECODE}</td>
                          <td class="border-right">  {item?.DEJUR}</td>
                          <td class="border-right">  {item?.DETYP} </td>
                          <td class="border-right">{dollarUS.format(item.DECAL)} </td>
                          <td class="border-right"> {dollarUS.format(item.DEAMT)} </td>

                        </tr>
                      ) : ""}

                  </table>

                </div>





              </div>

            </div>



          </>}

      </div>
    </>
  )
}
export default Pdf
