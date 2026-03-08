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


  const [viewData, setViewData] = useState(null);
  const [viewDataForm, setViewDataForm] = useState(null);
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
      console.log(userid);
      setEmployeeData(userid);
      var allprintnew = JSON.parse(window.localStorage.getItem('allw2deatisl'));;
      setViewData(allprintnew);

      setViewDataForm(allprintnew.YEAR < 10 ? `200${allprintnew.YEAR}` : `20${allprintnew.YEAR}`);
      var allprintnewr = JSON.parse(window.localStorage.getItem('allw2sdetalnew'));;
      setViewDocumentForm(allprintnewr);
    }

    setTimeout(function () {
      triggerPrint();
    }, 1000);
  }, []);
  const triggerPrint = () => {



    document.title = 'W2S Details';


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

  const styles = {
    body: {
      WebkitPrintColorAdjust: "exact",
    },
    pageBreak: {
      pageBreakAfter: "always",
      marginTop: '10px',
    },
  };
  useEffect(() => {
    document.body.className = 'bodycloor';
    return () => {
      document.body.className = ''; // clean up
    };
  }, []);
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
                      Employee Name: {employeeData.EMLNAM}, {employeeData.EMFNAM} {employeeData.EMMNAM}
                    </td>

                  </tr>
                  <tr>
                    <td colSpan="2" className="reqid-sec reqid-sec-pdf " >
                      Emp Id:  {employeeData.EMSSAN}
                    </td>

                  </tr>
                  <tr>
                    <td colSpan="2" className="reqid-sec reqid-sec-pdf padding-bottom-pdf" >
                      Year:  {viewDataForm}
                    </td>

                  </tr>
                </table>
                {/* general section start pdf code */}
                {viewDocumentForm.length > 0 &&
                  <>
                    {viewDocumentForm.map((entry, index) => (
                      <div className="main-pdf-sec pagebrpr">

                        <table className="general-sec-pdf">
                          <thead
                          >
                            <tr>
                              <td colSpan="2" >
                                <h2 className='pdf-main-heads'>W2 Details</h2>
                              </td>

                            </tr></thead>                          <tbody>
                            <tr>
                              <td className="main-gen-inner">
                                <table style={{ width: '100%' }}>
                                  <tbody><tr>
                                    <td className="main-gen-width"><b>a Employee's SSN:</b></td>
                                    <td className="pdf-data">{entry.W2SSN}
                                    </td>
                                  </tr>
                                  </tbody></table>
                              </td>
                              <td className="main-gen-inner">
                                <table style={{ width: '100%' }}>
                                  <tbody>
                                    <tr>
                                      <td className="main-gen-width ">
                                        <b>b Employer EIN:</b>
                                      </td>
                                      <td className="pdf-data">{entry.W2FEIN}</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>


                            <tr>
                              <td className="main-gen-width main-margin">
                                <table style={{ width: '100%', marginBottom: '5px' }}>
                                  <tr>
                                    <td className="main-gen-width">
                                      <b>1 Wages, tips:</b></td>
                                    <td className="pdf-data">

                                      {dollarUS.format(entry.W2WAGE)}
                                    </td>
                                  </tr>
                                </table>
                              </td>
                              <td className="main-gen-width main-margin">
                                <table style={{ width: '100%', marginBottom: '5px' }}>
                                  <tr>
                                    <td className="main-gen-width">
                                      <b>2 Federal income tax withheld:</b>
                                    </td>
                                    <td className="pdf-data">  {dollarUS.format(entry.W2FEDT)}</td>
                                  </tr>
                                </table>
                              </td>
                            </tr>





                            <tr>
                              <td className="main-gen-width main-margin">
                                <table style={{ width: '100%', marginBottom: '5px' }}>
                                  <tr>
                                    <td className="main-gen-width">
                                      <b>3 Social security wages:</b></td>
                                    <td className="pdf-data">

                                      {dollarUS.format(entry.W2FICW)}
                                    </td>
                                  </tr>
                                </table>
                              </td>
                              <td className="main-gen-width main-margin">
                                <table style={{ width: '100%', marginBottom: '5px' }}>
                                  <tr>
                                    <td className="main-gen-width">
                                      <b>4 Social security tax withheld:</b>
                                    </td>
                                    <td className="pdf-data"> {dollarUS.format(entry.W2FTWH)}</td>
                                  </tr>
                                </table>
                              </td>
                            </tr>


                            <tr>
                              <td className="main-gen-width main-margin">
                                <table style={{ width: '100%', marginBottom: '5px' }}>
                                  <tr>
                                    <td className="main-gen-width">
                                      <b>5 Medicare wages and tips:</b></td>
                                    <td className="pdf-data">

                                      {dollarUS.format(entry.W2FICM)}
                                    </td>
                                  </tr>
                                </table>
                              </td>
                              <td className="main-gen-width main-margin">
                                <table style={{ width: '100%', marginBottom: '5px' }}>
                                  <tr>
                                    <td className="main-gen-width">
                                      <b>6 Medicare tax withheld:</b>
                                    </td>
                                    <td className="pdf-data"> {dollarUS.format(entry.W2FMWH)}</td>
                                  </tr>
                                </table>
                              </td>
                            </tr>








                            <tr>
                              <td className="main-gen-width main-margin">
                                <table style={{ width: '100%', marginBottom: '5px' }}>
                                  <tr>
                                    <td className="main-gen-width">
                                      <b>7 Social security tips:</b></td>
                                    <td className="pdf-data">

                                      {dollarUS.format(entry.W2FICT)}
                                    </td>
                                  </tr>
                                </table>
                              </td>
                              <td className="main-gen-width main-margin">
                                <table style={{ width: '100%', marginBottom: '5px' }}>
                                  <tr>
                                    <td className="main-gen-width">
                                      <b>8 Allocated tips:</b>
                                    </td>
                                    <td className="pdf-data">{dollarUS.format(entry.W2ALOT)}</td>
                                  </tr>
                                </table>
                              </td>
                            </tr>




                            <tr>
                              <td className="main-gen-width main-margin">
                                <table style={{ width: '100%', marginBottom: '5px' }}>
                                  <tr>
                                    <td className="main-gen-width">
                                      <b>10 Dependent care benefits:</b></td>
                                    <td className="pdf-data">

                                      {dollarUS.format(entry.W2DCC)}
                                    </td>
                                  </tr>
                                </table>
                              </td>
                              <td className="main-gen-width main-margin">
                                <table style={{ width: '100%', marginBottom: '5px' }}>
                                  <tr>
                                    <td className="main-gen-width">
                                      <b>11 Nonqualified plans:</b>
                                    </td>
                                    <td className="pdf-data">{dollarUS.format(entry.W2N457)}</td>
                                  </tr>
                                </table>
                              </td>
                            </tr>




                            <tr>
                              <td className="main-gen-width main-margin">
                                <table style={{ width: '100%', marginBottom: '5px' }}>
                                  <tr>
                                    <td className="main-gen-width">
                                      <b>12a {entry.W2DMS1}:</b></td>
                                    <td className="pdf-data">

                                      {dollarUS.format(entry.W2DAMT)}
                                    </td>
                                  </tr>
                                </table>
                              </td>
                              <td className="main-gen-width main-margin">
                                <table style={{ width: '100%', marginBottom: '5px' }}>
                                  <tr>
                                    <td className="main-gen-width">
                                      <b>12b {entry.W2DMS2}:</b>
                                    </td>
                                    <td className="pdf-data">{dollarUS.format(entry.W2DAM2)}</td>
                                  </tr>
                                </table>
                              </td>
                            </tr>





                            <tr>
                              <td className="main-gen-width main-margin">
                                <table style={{ width: '100%', marginBottom: '5px' }}>
                                  <tr>
                                    <td className="main-gen-width">
                                      <b>12c {entry.W2DMS3}:</b></td>
                                    <td className="pdf-data">

                                      {dollarUS.format(entry.W2DAM3)}
                                    </td>
                                  </tr>
                                </table>
                              </td>
                              <td className="main-gen-width main-margin">
                                <table style={{ width: '100%', marginBottom: '5px' }}>
                                  <tr>
                                    <td className="main-gen-width">
                                      <b>12d {entry.W2DMS4}:</b>
                                    </td>
                                    <td className="pdf-data">{dollarUS.format(entry.W2DAM4)}</td>
                                  </tr>
                                </table>
                              </td>
                            </tr>






                            <tr>
                              <td className="main-gen-width main-margin">
                                <table style={{ width: '100%', marginBottom: '5px' }}>
                                  <tr>
                                    <td className="main-gen-width">
                                      <b>13 Retirement:</b></td>
                                    <td className="pdf-data">

                                      {entry.W2RET}
                                    </td>
                                  </tr>
                                </table>
                              </td>
                              <td className="main-gen-width main-margin">
                                <table style={{ width: '100%', marginBottom: '5px' }}>
                                  <tr>
                                    <td className="main-gen-width">
                                      <b>14 Other {entry.W2MSG1}:</b>
                                    </td>
                                    <td className="pdf-data">{dollarUS.format(entry.W2B181)}</td>
                                  </tr>
                                </table>
                              </td>
                            </tr>





                            <tr>
                              <td className="main-gen-width main-margin">
                                <table style={{ width: '100%', marginBottom: '5px' }}>
                                  <tr>
                                    <td className="main-gen-width">
                                      <b>14 Other {entry.W2MSG2}:</b></td>
                                    <td className="pdf-data">

                                      {dollarUS.format(entry.W2B182)}
                                    </td>
                                  </tr>
                                </table>
                              </td>
                              <td className="main-gen-width main-margin">
                                <table style={{ width: '100%', marginBottom: '5px' }}>
                                  <tr>
                                    <td className="main-gen-width">
                                      <b>14 Other {entry.W2MSG3}:</b>
                                    </td>
                                    <td className="pdf-data">{dollarUS.format(entry.W2B183)}</td>
                                  </tr>
                                </table>
                              </td>
                            </tr>






                            <tr>
                              <td className="main-gen-width main-margin">
                                <table style={{ width: '100%', marginBottom: '5px' }}>
                                  <tr>
                                    <td className="main-gen-width">
                                      <b>15 State:</b></td>
                                    <td className="pdf-data">

                                      {entry.W2SNAM}
                                    </td>
                                  </tr>
                                </table>
                              </td>
                              <td className="main-gen-width main-margin">
                                <table style={{ width: '100%', marginBottom: '5px' }}>
                                  <tr>
                                    <td className="main-gen-width">
                                      <b>Employer's state Id no:</b>
                                    </td>
                                    <td className="pdf-data">{entry.W2SEIN}</td>
                                  </tr>
                                </table>
                              </td>
                            </tr>




                            <tr>
                              <td className="main-gen-width main-margin">
                                <table style={{ width: '100%', marginBottom: '5px' }}>
                                  <tr>
                                    <td className="main-gen-width">
                                      <b>16 State wages, tips, etc:</b></td>
                                    <td className="pdf-data">

                                      {dollarUS.format(entry.W2SWAG)}
                                    </td>
                                  </tr>
                                </table>
                              </td>
                              <td className="main-gen-width main-margin">
                                <table style={{ width: '100%', marginBottom: '5px' }}>
                                  <tr>
                                    <td className="main-gen-width">
                                      <b>17 State income tax:</b>
                                    </td>
                                    <td className="pdf-data">{dollarUS.format(entry.W2SITW)}</td>
                                  </tr>
                                </table>
                              </td>
                            </tr>





                            <tr>
                              <td className="main-gen-width main-margin">
                                <table style={{ width: '100%', marginBottom: '5px' }}>
                                  <tr>
                                    <td className="main-gen-width">
                                      <b>18 Local wages, tips, etc.:</b></td>
                                    <td className="pdf-data">

                                      {dollarUS.format(entry.W2SWAG)}
                                    </td>
                                  </tr>
                                </table>
                              </td>
                              <td className="main-gen-width main-margin">
                                <table style={{ width: '100%', marginBottom: '5px' }}>
                                  <tr>
                                    <td className="main-gen-width">
                                      <b>19 Local income tax:</b>
                                    </td>
                                    <td className="pdf-data">{dollarUS.format(entry.W2LITW)}</td>
                                  </tr>
                                </table>
                              </td>
                            </tr>






                            <tr>
                              <td className="main-gen-width main-margin">
                                <table style={{ width: '100%', marginBottom: '5px' }}>
                                  <tr>
                                    <td className="main-gen-width">
                                      <b>20 Local name:</b></td>
                                    <td className="pdf-data">

                                      {entry.W2LNA2}
                                    </td>
                                  </tr>
                                </table>
                              </td>

                            </tr>
                          </tbody>

                        </table>
                      </div>

                    ))}

                  </>
                }


                {/* <div className="main-pdf-sec">
                  <h2 className='pdf-main-heads'>Termination Information</h2>
                  <table className="general-sec-pdf">
                    <tbody>
                      <tr>
                        <td className="main-gen-inner">
                          <table style={{ width: '100%' }}>
                            <tbody><tr>
                              <td className="main-gen-width"><b>Termination Code:</b></td>
                              <td className="pdf-data"> {employeeData.ETMCDE && employeeData.TRMTTL && `${employeeData.ETMCDE} ${employeeData.TRMTTL}`}
                              </td>
                            </tr>
                            </tbody></table>
                        </td>
                        <td className="main-gen-inner">
                          <table style={{ width: '100%' }}>
                            <tbody>
                              <tr>
                                <td className="main-gen-width ">
                                  <b>Employee Details:</b>
                                </td>
                                <td className="pdf-data">{employeeData.ETMDS1}</td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td className="main-gen-width main-margin">
                          <table style={{ width: '100%', marginBottom: '5px' }}>
                            <tr>
                              <td className="main-gen-width">
                                <b>Additional Details:</b></td>
                              <td className="pdf-data">

                                {employeeData.ETMDS2} {employeeData.ETMDS3}  {employeeData.ETMDS4}  {employeeData.ETMDS5}  {employeeData.ETMDS6}
                              </td>
                            </tr>
                          </table>
                        </td>

                      </tr>





                    </tbody>

                  </table>
                </div> */}
                {/* footer section add end*/}


              </div>

            </div>



          </>}

      </div>
    </>
  )
}
export default Pdf
