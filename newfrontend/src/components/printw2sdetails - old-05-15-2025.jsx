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



    document.title = 'Wage and Tax Statement';


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

  function normalizezip(EMZIP1) {
    var zipCode = "";
    if (EMZIP1 !== null && EMZIP1 !== undefined) {
      zipCode = EMZIP1.toString();
      if (zipCode.length > 0 && zipCode.length < 5) {
        zipCode = '0'.repeat(5 - zipCode.length) + zipCode;
      } else if (zipCode.length !== 5) {
        zipCode = ""; // Or handle as invalid
      }
    }
    return zipCode;


  }
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

                  {/* <tr>
                    <td colSpan="2" className="reqid-sec reqid-sec-pdf padding-top-pdf" >
                      Employee Name: {employeeData.EMLNAM}, {employeeData.EMFNAM} {employeeData.EMMNAM}
                    </td>

                  </tr>
                  <tr>
                    <td colSpan="2" className="reqid-sec reqid-sec-pdf " >
                      Emp Id:  {employeeData.EMSSAN}
                    </td>

                  </tr> */}
                  <tr>
                    <td colSpan="2" className="reqid-sec reqid-sec-pdf padding-bottom-pdf padding-top-pdf" >
                      W2 Details  Year:  {viewDataForm}
                    </td>

                  </tr>
                </table>
                <div className="main-pdf-sec pagebrpr ws-main-pdf-sec">
                  <div className="emp-table-pdf pdf-ws-emp-table-pdf">
                    <div className='po-details-sec pdf-po-details new-ws-pdf-po'>
                      <div className="row">
                        <div className='col-md-12  empoyee-detmd'>
                          <div className='po-details-head pdf-details-headss empoyee-detpdfti'>
                            <h2>Employer Details</h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <table className="general-sec-pdf">
                    <tbody>
                      <tr>
                        <td className="main-gen-inner main-gen-inner-ws">
                          <table style={{ width: '100%' }}>
                            <tbody><tr>
                              <td className="main-gen-width main-gen-width-new   main-w2s-det"><b>Employer:</b></td>
                              <td className="pdf-data">
                              </td>
                            </tr>
                            </tbody></table>
                        </td>
                        {employeeData != null &&
                          <>
                            {viewDocumentForm.length > 0 &&
                              <>
                                {/* {viewDocumentForm.map((entry, index) => (
                                <> */}


                                <td className="main-gen-inner main-gen-inner-ws">
                                  <table style={{ width: '100%' }}>
                                    <tbody>
                                      <tr>
                                        <td className="main-gen-width main-gen-width-new   main-w2s-det">
                                          <b>Employer EIN:</b>
                                        </td>
                                        <td className="pdf-data"> {viewDocumentForm[0].W2FEIN}</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>

                              </>


                            }
                          </>
                        }
                      </tr>
                      <tr>

                        <td className="main-gen-inner main-gen-inner-ws">
                          <table style={{ width: '100%' }}>
                            <tbody>
                              <tr>
                                <td className="main-gen-width  main-gen-width-new">
                                  <b>Address:</b>
                                </td>
                                <td className="pdf-data"></td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                        <td className="main-gen-inner main-gen-inner-ws">
                          <table style={{ width: '100%' }}>
                            <tbody><tr>
                              <td className="main-gen-width  main-gen-width-new"><b>City, State, Zip:</b></td>
                              <td className="pdf-data">
                              </td>
                            </tr>
                            </tbody></table>
                        </td>
                      </tr>








                    </tbody>

                  </table>
                  <div className="emp-table-pdf pdf-ws-emp-table-pdf">
                    <div className='po-details-sec pdf-po-details new-ws-pdf-po'>
                      <div className="row">
                        <div className='col-md-12 empoyee-detmd'>
                          <div className='po-details-head pdf-details-headss empoyee-detpdfti'>
                            <h2>Employee Details</h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>


                  <table className="general-sec-pdf">
                    <tbody>


                      {employeeData != null &&
                        <>
                          {viewDocumentForm.length > 0 &&
                            <>
                              {/* {viewDocumentForm.map((entry, index) => (
                                <> */}

                              <tr>
                                <td className="main-gen-inner main-gen-inner-ws">
                                  <table style={{ width: '100%' }}>
                                    <tbody><tr>
                                      <td className="main-gen-width main-gen-width-new   main-w2s-det"><b> Emp Id:</b></td>
                                      <td className="pdf-data"> {employeeData.EMSSAN}
                                      </td>
                                    </tr>
                                    </tbody></table>
                                </td>
                                <td className="main-gen-inner main-gen-inner-ws">
                                  <table style={{ width: '100%' }}>
                                    <tbody><tr>
                                      <td className="main-gen-width main-gen-width-new   main-w2s-det"><b> Name:</b></td>
                                      <td className="pdf-data">  {employeeData.EMLNAM}, {employeeData.EMFNAM} {employeeData.EMMNAM}
                                      </td>
                                    </tr>
                                    </tbody></table>
                                </td>
                              </tr>
                              <tr>
                                <td className="main-gen-inner main-gen-inner-ws">
                                  <table style={{ width: '100%' }}>
                                    <tbody><tr>
                                      <td className="main-gen-width main-gen-width-new   main-w2s-det"><b> Employee's SSN:</b></td>
                                      <td className="pdf-data"> {viewDocumentForm[0].W2SSN}
                                      </td>
                                    </tr>
                                    </tbody></table>
                                </td>
                                <td className="main-gen-inner main-gen-inner-ws">
                                  <table style={{ width: '100%' }}>
                                    <tbody><tr>
                                      <td className="main-gen-width main-gen-width-new   main-w2s-det"><b>Address:</b></td>
                                      <td className="pdf-data">  {employeeData.EMADD1}
                                      </td>
                                    </tr>
                                    </tbody></table>
                                </td>
                              </tr>
                              {/* </>



                              ))} */}
                            </>


                          }
                          <tr>

                            <td className="main-gen-inner main-gen-inner-ws">
                              <table style={{ width: '100%' }}>
                                <tbody>
                                  <tr>
                                    <td className="main-gen-width  main-gen-width-new">
                                      <b>Address 1:</b>
                                    </td>
                                    <td className="pdf-data"> {employeeData.EMADD2}</td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                            <td className="main-gen-inner main-gen-inner-ws">
                              <table style={{ width: '100%' }}>
                                <tbody><tr>
                                  <td className="main-gen-width  main-gen-width-new"><b>  City, State, Zip:</b></td>
                                  <td className="pdf-data"> {employeeData.EMCITY}, {employeeData.EMST} {normalizezip(employeeData.EMZIP1)}
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
                {/* general section start pdf code */}
                {viewDocumentForm.length > 0 &&
                  <>
                    {viewDocumentForm.map((entry, index) => (
                      <>

                        <div className="emp-table-pdf pdf-ws-emp-table-pdf">
                          <div className='po-details-sec pdf-po-details'>

                            <div className='row margin-top-po-table margin-top-po-pdf' style={{ paddingLeft: '0px', paddingRight: '0px', marginTop: '0px' }}>
                              {/* table section start from here */}
                              <div className='col-md-12' style={{ paddingLeft: '0px', paddingRight: '0px' }}>
                                <div class="table-main-sec diff-po-table diff-po-table-pdf">
                                  <table className='table table-sec  table-sec-po-light new-tablews'>
                                    <tbody class="tbody-light tbody-po-light">
                                      <tr>
                                        <th>1. Wages, tips</th>
                                        <td class="value-table">
                                          <p>{dollarUS.format(entry.W2WAGE)}</p>
                                        </td>
                                      </tr>
                                      <tr>
                                        <th>2. Federal income tax withheld</th>
                                        <td class="value-table">
                                          <p>{dollarUS.format(entry.W2FEDT)}</p>
                                        </td>
                                      </tr>
                                      <tr>
                                        <th>3. Social security wages</th>
                                        <td class="value-table">
                                          <p>{dollarUS.format(entry.W2FICW)} </p>
                                        </td>
                                      </tr>
                                      <tr>
                                        <th>4. Social security tax withheld</th>
                                        <td class="value-table">
                                          <p>{dollarUS.format(entry.W2FTWH)}</p>
                                        </td>
                                      </tr>
                                      <tr>
                                        <th>5. Medicare wages and tips</th>
                                        <td class="value-table">
                                          <p>{dollarUS.format(entry.W2FICM)}</p>
                                        </td>
                                      </tr>
                                      <tr>
                                        <th>6. Medicare tax withheld</th>
                                        <td class="value-table">
                                          <p>{dollarUS.format(entry.W2FMWH)}</p>
                                        </td>
                                      </tr>
                                      <tr>
                                        <th>7. Social security tips</th>
                                        <td class="value-table">
                                          <p>{dollarUS.format(entry.W2FICT)}

                                          </p>


                                        </td>
                                      </tr>
                                      <tr>
                                        <th>8. Allocated tips</th>
                                        <td class="value-table">
                                          <p>{dollarUS.format(entry.W2ALOT)}</p>
                                        </td>
                                      </tr>
                                      <tr>
                                        <th>10. Dependent care benefits</th>
                                        <td class="value-table">
                                          <p>{dollarUS.format(entry.W2DCC)}</p>




                                        </td>
                                      </tr>
                                               
                                        <tr className="page-breaknewsw"></tr>
                                     
                                      <tr>
                                        <th className='marginws-border-grey-pdf'>11. Nonqualified plans</th>
                                        <td class="value-table">
                                          <p>{dollarUS.format(entry.W2N457)}</p>
                                        </td>
                                      </tr>
                                      <tr className='pagebreakddnn'>
                                        <th className="top-space">12a. {entry.W2DMS1}</th>
                                        <td class="value-table top-space">
                                          <p>{dollarUS.format(entry.W2DAMT)}</p>
                                        </td>
                                      </tr>

                                      <tr>
                                        <th>12b. {entry.W2DMS2}</th>
                                        <td class="value-table">
                                          <p> {dollarUS.format(entry.W2DAM2)}</p>
                                        </td>
                                      </tr>
                             



                                    </tbody>
                                  </table>
                                </div>
                              </div>

                              <div className='col-md-12  pagebreakddnn' style={{ paddingLeft: '0px', paddingRight: '0px' }}>
                                <div class="table-main-sec diff-po-table diff-po-table-pdf">

                                  <table className='table table-sec table-sec-po-light'>
                                    <tbody class="tbody-light tbody-po-light sec-tbody-light tbody-po-light-ws">





                                      <tr>
                                        <th>12c. {entry.W2DMS3}</th>
                                        <td class="value-table">
                                          <p> {dollarUS.format(entry.W2DAM3)}</p>
                                        </td>
                                      </tr>
                                      <tr>
                                        <th>12d. {entry.W2DMS4}</th>
                                        <td class="value-table">
                                          <p> {dollarUS.format(entry.W2DAM4)}</p>
                                        </td>
                                      </tr>
                                      <tr>
                                        <th>13. Retirement</th>
                                        <td class="value-table">
                                          <p>{(entry.W2RET)}</p>
                                        </td>
                                      </tr>

                                      <tr>
                                        <th>14. Other {entry.W2MSG1}</th>
                                        <td class="value-table">
                                          <p>{dollarUS.format(entry.W2B181)}</p>
                                        </td>
                                      </tr>

                                      <tr>
                                        <th>14. Other {entry.W2MSG2}</th>
                                        <td class="value-table">
                                          <p>{dollarUS.format(entry.W2B182)}</p>
                                        </td>
                                      </tr>



                                      <tr>
                                        <th>14.  Other  {entry.W2MSG3}</th>
                                        <td class="value-table">
                                          <p> {dollarUS.format(entry.W2B183)}</p>
                                        </td>
                                      </tr>

                                      <tr>
                                        <th>15. State</th>
                                        <td class="value-table">
                                          <p>{entry.W2SNAM}</p>
                                        </td>
                                      </tr>
                                      <tr>
                                        <th>Employer's state Id no.</th>
                                        <td class="value-table">
                                          <p>  {entry.W2SEIN}</p>
                                        </td>
                                      </tr>


                                      <tr>
                                        <th>16. State wages, tips, etc.</th>
                                        <td class="value-table">
                                          <p>{dollarUS.format(entry.W2SWAG)}</p>
                                        </td>
                                      </tr>

                                      <tr>
                                        <th>17. State income tax</th>
                                        <td class="value-table">
                                          <p>  {dollarUS.format(entry.W2SITW)}</p>
                                        </td>
                                      </tr>


                                      <tr>
                                        <th>18. Local wages, tips, etc.</th>
                                        <td class="value-table">
                                          <p>{dollarUS.format(entry.W2SWAG)}</p>
                                        </td>
                                      </tr>

                                      <tr>
                                        <th>19. Local income tax</th>
                                        <td class="value-table">
                                          <p> {dollarUS.format(entry.W2LITW)}</p>
                                        </td>
                                      </tr>

                                      <tr>
                                        <th>20. Local Name</th>
                                        <td class="value-table">
                                          <p>{entry.W2LNA2}</p>
                                        </td>
                                      </tr>




                                    </tbody>
                                  </table>
                                </div>
                              </div>
                              {/* table section end from here */}

                              {/* pagination section start here */}


                              {/* pagination section end here */}

                            </div>
                          </div>
                        </div>

                      </>



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

      </div >
    </>
  )
}
export default Pdf
