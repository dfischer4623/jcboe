import React, { useContext, useState, useEffect } from 'react';



import logoimg from "../assets/img/logob.png";


import secureLocalStorage from "react-secure-storage";
import {
  useNavigate
} from "react-router-dom";
import axios from 'axios';
import { AppContext } from '../context';
const formatDate = (date, format = null) => {
  const hasSlash = date.includes("/");
  const hasDash = date.includes("-");
  if (hasDash == true) {
    const myArray = date.split("-");
    var d = new Date(date);
    var month = myArray[1];
    var day = myArray[2];
    var year = myArray[0];
    var daten = month + '/' + day + '/' + year;
    if (month === "00" || day === "00") {
      return ""; // Return blank if invalid
    } else {
      return daten;
    }
  }
  if (hasSlash == true) {
    if (date === '00/00/0000' || date === '00/00/1900' || date === '00/00/2000') {
      return ""; // Return blank if invalid
    } else {
      return date;
    }

  }
  // if (month.length < 2) month = '0' + month;
  // if (day.length < 2) day = '0' + day;

  // if (format && format == 'Y-m-d') return [month, day, year].join('-');
  // else return [month, day, year].join('-');

}
function normalize(phoneStr) {
  if (typeof phoneStr !== 'string') phoneStr = String(phoneStr || "");
  phoneStr = phoneStr.replace(/[^\d]/g, "");
  if (phoneStr.length === 7) {
    return phoneStr.replace(/(\d{3})(\d{4})/, "$1-$2");
  }
  return ""; // Or return original if not 7 digits, depending on desired behavior
}
function normalizeophone(EMOTL2) {
  var ophone = "";
  if (EMOTL2 !== null && EMOTL2 !== undefined) {
    ophone = normalize(EMOTL2.toString());
  }
  return ophone;
}


function normalizehphone(EMHTL2) {
  var hphone = "";
  if (EMHTL2 !== null && EMHTL2 !== undefined) {
    hphone = normalize(EMHTL2.toString());
  }
  return hphone;
}


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
function normalizezipnew(EMPZP1) {

  var zipCodeP = "";
  if (EMPZP1 !== null && EMPZP1 !== undefined) {
    zipCodeP = EMPZP1.toString();
    if (zipCodeP.length > 0 && zipCodeP.length < 5) {
      zipCodeP = '0'.repeat(5 - zipCodeP.length) + zipCodeP;
    } else if (zipCodeP.length !== 5) {
      zipCodeP = ""; // Or handle as invalid
    }
  }
  return zipCodeP;
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
const formatDateemdtapplication = (dateStringji) => {
  var EMADAT_formatted = '';
  if (dateStringji !== null && dateStringji !== undefined && dateStringji !== 0) {
    let dateString = dateStringji.toString();
    let year = dateString.substring(0, 2);
    let month = dateString.substring(2, 4);
    let day = dateString.substring(4, 6);
    year = parseInt(year, 10) > 30 ? '19' + year : '20' + year;
    EMADAT_formatted = `${month}/${day}/${year}`;
  }
  return EMADAT_formatted

}
const padValue = (value) => {
    if(value!== null && value !== undefined && value !== 0 && value !== '') {
        return value.toString().padStart(4, '0');
        }
};

const formatDateemdtsenior = (dateStringji) => {
  var EMSRDT_formatted = '';
  if (dateStringji !== null && dateStringji !== undefined && dateStringji !== 0) {
    let dateString = dateStringji.toString();
    let year = dateString.substring(0, 2);
    let month = dateString.substring(2, 4);
    let day = dateString.substring(4, 6);
    year = parseInt(year, 10) > 30 ? '19' + year : '20' + year;
    EMSRDT_formatted = `${month}/${day}/${year}`;
  }
  return EMSRDT_formatted

}




const formatDateemdttermisinfor = (dateStringji) => {
  var ETMDAT_formatted = '';
  if (dateStringji !== null && dateStringji !== undefined && dateStringji !== 0) {
    let dateString = dateStringji.toString();
    let year = '', month = '', day = '';
    // Simplified logic assuming MMDDYY or similar 6-digit format from context
    if (dateString.length === 6) { // MMDDYY
      month = dateString.substring(0, 2);
      day = dateString.substring(2, 4);
      year = dateString.substring(4, 6);
    } else if (dateString.length === 5) { // Attempt to handle M D D Y Y or M M D Y Y (less common for raw numbers)
      // This part is tricky without knowing the exact 5-digit format.
      // Assuming MMDDY => month = dateString.substring(0,2), day = dateString.substring(2,4), year = '0' + dateString.substring(4,5)
      // For now, let's assume it's an error or needs specific parsing rules if it's 5 digits.
      // Defaulting to an empty string or error for unexpected 5-digit formats.
    } // Add more specific parsing if other formats are expected for ETMDAT

    if (year && month && day) {
      year = parseInt(year, 10) > 30 && parseInt(year, 10) <= 99 ? '19' + year : '20' + year;
      ETMDAT_formatted = `${month}/${day}/${year}`;
    } else {
      ETMDAT_formatted = "Invalid Date";
    }
  }
  return ETMDAT_formatted

}

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
      console.log(userid);
      setEmployeeData(userid);

    }

    setTimeout(function () {
      triggerPrint();
    }, 1000);
  }, []);
  const triggerPrint = () => {



    document.title = 'Employee Details';


    setTimeout(function () {
      window.print();
      document.title = 'Legacy System';
      window.close();
    }, 500);
    ;
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

                      Employee Details
                    </td>

                  </tr>
                  <tr>
                    <td colSpan="2" className="reqid-sec reqid-sec-pdf" >
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
                  <h2 className='pdf-main-heads '>Personal Information</h2>
                  <table className="general-sec-pdf">
                    <tbody>
                      <tr>
                        <td className="main-gen-inner">
                          <table style={{ width: '100%' }}>
                            <tbody><tr>
                              <td className="main-gen-width"><b>Employee Number:</b></td>
                              <td className="pdf-data"> {employeeData.EMSSAN}
                              </td>
                            </tr>
                            </tbody></table>
                        </td>
                        <td className="main-gen-inner">
                          <table style={{ width: '100%' }}>
                            <tbody>
                              <tr>
                                <td className="main-gen-width ">
                                  <b>Name:</b>
                                </td>
                                <td className="pdf-data">{employeeData.EMLNAM} ,{employeeData.EMFNAM} {employeeData.EMMNAM}</td>
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
                                <b>Gender:</b></td>
                              <td className="pdf-data">

                                {employeeData.EMSEX}, {employeeData.EMSEX == 'F' && 'FEMALE'} {employeeData.EMSEX == 'M' && 'MALE'} {(employeeData.EMSEX != 'F' && employeeData.EMSEX != 'M') && 'OTHER'}
                              </td>
                            </tr>
                          </table>
                        </td>
                        <td className="main-gen-width main-margin">
                          <table style={{ width: '100%', marginBottom: '5px' }}>
                            <tr>
                              <td className="main-gen-width">
                                <b>Ethnic Description:</b>
                              </td>
                              <td className="pdf-data">  {employeeData.ETDESC}</td>
                            </tr>
                          </table>
                        </td>
                      </tr>



                      <tr>
                        <td className="main-gen-width">
                          <table style={{ width: '100%', marginBottom: '5px' }}>
                            <tr>
                              <td className="main-gen-width">
                                <b>SSN:</b></td>
                              <td className="pdf-data">

                                {employeeData.EMPSSN}
                              </td>
                            </tr>
                          </table>
                        </td>
                        <td className="main-gen-width">
                          <table style={{ width: '100%', marginBottom: '5px' }}>
                            <tr>
                              <td className="main-gen-width">
                                <b>Active:</b>
                              </td>
                              <td className="pdf-data">  {employeeData.EMSTAT}</td>
                            </tr>
                          </table>
                        </td>
                      </tr>

                      <tr>
                        <td className="main-gen-width">
                          <table style={{ width: '100%', marginBottom: '5px' }}>
                            <tr>
                              <td className="main-gen-width">
                                <b>Ethnic Code:</b></td>
                              <td className="pdf-data">

                                {employeeData.EMETH}
                              </td>
                            </tr>
                          </table>
                        </td>
                        <td className="main-gen-width">
                          <table style={{ width: '100%', marginBottom: '5px' }}>
                            <tr>
                              <td className="main-gen-width">
                                <b>Birth Date:</b>
                              </td>
                              <td className="pdf-data">   {employeeData.DOB != '' && employeeData.DOB != null && formatDate(employeeData.DOB)}</td>
                            </tr>
                          </table>
                        </td>
                      </tr>

                    </tbody>

                  </table>
                </div>


                <div className="main-pdf-sec">
                  <h2 className='pdf-main-heads'>Contact Information</h2>
                  <table className="general-sec-pdf">
                    <tbody>
                      <tr>
                        <td className="main-gen-inner">
                          <table style={{ width: '100%' }}>
                            <tbody><tr>
                              <td className="main-gen-width"><b>Office Phone:</b></td>
                              <td className="pdf-data">  ({employeeData.EMOTL0}) {normalizeophone(employeeData.EMOTL2)} ext. {employeeData.EMEXTN ? `${employeeData.EMEXTN}` : ''} {employeeData.EMOTLS ? `${employeeData.EMOTLS}` : ''}
                              </td>
                            </tr>
                            </tbody></table>
                        </td>
                        <td className="main-gen-inner">
                          <table style={{ width: '100%' }}>
                            <tbody>
                              <tr>
                                <td className="main-gen-width ">
                                  <b>Address:</b>
                                </td>
                                <td className="pdf-data">{employeeData.EMADD1}</td>
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
                                <b>Country:</b></td>
                              <td className="pdf-data">

                                {employeeData.EMCTRY}
                              </td>
                            </tr>
                          </table>
                        </td>
                        <td className="main-gen-width main-margin">
                          <table style={{ width: '100%', marginBottom: '5px' }}>
                            <tr>
                              <td className="main-gen-width">
                                <b>Location:</b>
                              </td>
                              <td className="pdf-data"> {employeeData.EMLOC && employeeData.LCNAME && <>{employeeData.EMLOC} {employeeData.LCNAME}</>}</td>
                            </tr>
                          </table>
                        </td>
                      </tr>



                      <tr>
                        <td className="main-gen-width">
                          <table style={{ width: '100%', marginBottom: '5px' }}>
                            <tr>
                              <td className="main-gen-width">
                                <b>Sub Location:</b></td>
                              <td className="pdf-data">

                                {employeeData.EMLOC2}, {employeeData.CLNAME}
                              </td>
                            </tr>
                          </table>
                        </td>
                        <td className="main-gen-width">
                          <table style={{ width: '100%', marginBottom: '5px' }}>
                            <tr>
                              <td className="main-gen-width">
                                <b>Home Phone:</b>
                              </td>
                              <td className="pdf-data"> ({employeeData.EMHTL0}) {normalizehphone(employeeData.EMHTL2)} {employeeData.EMHTLS ? `${employeeData.EMHTLS}` : ''}</td>
                            </tr>
                          </table>
                        </td>
                      </tr>

                      <tr>
                        <td className="main-gen-width">
                          <table style={{ width: '100%', marginBottom: '5px' }}>
                            <tr>
                              <td className="main-gen-width">
                                <b>Address Security:</b></td>
                              <td className="pdf-data">

                                {employeeData.EMADSC}
                              </td>
                            </tr>
                          </table>
                        </td>
                        <td className="main-gen-width">
                          <table style={{ width: '100%', marginBottom: '5px' }}>
                            <tr>
                              <td className="main-gen-width">
                                <b>Permanent Address:</b>
                              </td>
                              <td className="pdf-data">  Y</td>
                            </tr>
                          </table>
                        </td>
                      </tr>

                      <tr>
                        <td className="main-gen-width">
                          <table style={{ width: '100%', marginBottom: '5px' }}>
                            <tr>
                              <td className="main-gen-width">
                                <b>District</b></td>
                              <td className="pdf-data">

                                {employeeData.EMHDT}
                              </td>
                            </tr>
                          </table>
                        </td>
                        <td className="main-gen-width">
                          <table style={{ width: '100%', marginBottom: '5px' }}>
                            <tr>
                              <td className="main-gen-width">
                                <b>City/State/Zip:</b>
                              </td>
                              <td className="pdf-data"> {employeeData.EMCITY}, {employeeData.EMST} {normalizezip(employeeData.EMZIP1)}</td>
                            </tr>
                          </table>
                        </td>
                      </tr>

                    </tbody>

                  </table>
                </div>

                <div className="main-pdf-sec pagebrpr pagebreak">
                  <h2 className='pdf-main-heads'>Employment Information</h2>
                  <table className="general-sec-pdf">
                    <tbody>
                      <tr>
                        <td className="main-gen-inner">
                          <table style={{ width: '100%' }}>
                            <tbody><tr>
                              <td className="main-gen-width"><b>Department:</b></td>
                              <td className="pdf-data"> {employeeData.EMDEPT}
                              </td>
                            </tr>
                            </tbody></table>
                        </td>
                        <td className="main-gen-inner">
                          <table style={{ width: '100%' }}>
                            <tbody>
                              <tr>
                                <td className="main-gen-width ">
                                  <b>Pay Location:</b>
                                </td>
                                <td className="pdf-data">{employeeData.EMADD1}</td>
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
                                <b>Country:</b></td>
                              <td className="pdf-data">

                                {employeeData.EMCTRY}
                              </td>
                            </tr>
                          </table>
                        </td>
                        <td className="main-gen-width main-margin">
                          <table style={{ width: '100%', marginBottom: '5px' }}>
                            <tr>
                              <td className="main-gen-width">
                                <b>Location:</b>
                              </td>
                              <td className="pdf-data"> {employeeData.EMLOCP}, {employeeData.LPNAME}</td>
                            </tr>
                          </table>
                        </td>
                      </tr>



                      <tr>
                        <td className="main-gen-width">
                          <table style={{ width: '100%', marginBottom: '5px' }}>
                            <tr>
                              <td className="main-gen-width">
                                <b>Termination Date:</b></td>
                              <td className="pdf-data">

                                {employeeData.TRD != '' && employeeData.TRD != null && formatDate(employeeData.TRD)}
                              </td>
                            </tr>
                          </table>
                        </td>
                        <td className="main-gen-width">
                          <table style={{ width: '100%', marginBottom: '5px' }}>
                            <tr>
                              <td className="main-gen-width">
                                <b>Assignment:</b>
                              </td>
                              <td className="pdf-data"> {employeeData.EMPASN}, {employeeData.JDTITL}</td>
                            </tr>
                          </table>
                        </td>
                      </tr>

                      <tr>
                        <td className="main-gen-width">
                          <table style={{ width: '100%', marginBottom: '5px' }}>
                            <tr>
                              <td className="main-gen-width">
                                <b>Seniority Date:</b></td>
                              <td className="pdf-data">

                                {employeeData.EMSRDT != null && employeeData.EMSRDT != '' && formatDateemdtsenior(employeeData.EMSRDT)}
                              </td>
                            </tr>
                          </table>
                        </td>

                      </tr>



                    </tbody>

                  </table>
                </div>

                <div className="main-pdf-sec ">
                  <h2 className='pdf-main-heads'>Emp School Information</h2>
                  <table className="general-sec-pdf">
                    <tbody>
                      <tr>
                        <td className="main-gen-inner">
                          <table style={{ width: '100%' }}>
                            <tbody><tr>
                              <td className="main-gen-width"><b>School:</b></td>
                              <td className="pdf-data"> {employeeData.EMHSC}
                              </td>
                            </tr>
                            </tbody></table>
                        </td>
                        <td className="main-gen-inner">
                          <table style={{ width: '100%' }}>
                            <tbody>
                              <tr>
                                <td className="main-gen-width ">
                                  <b>Address:</b>
                                </td>
                                <td className="pdf-data">{employeeData.EMPAD1 || employeeData.EMPAD2
                                  &&
                                  `${employeeData.EMPAD1 || ''} ${employeeData.EMPAD2 || ''}`}</td>
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
                                <b>Country:</b></td>
                              <td className="pdf-data">

                                {employeeData.EMPCTR}
                              </td>
                            </tr>
                          </table>
                        </td>
                        <td className="main-gen-width main-margin">
                          <table style={{ width: '100%', marginBottom: '5px' }}>
                            <tr>
                              <td className="main-gen-width">
                                <b>Room:</b>
                              </td>
                              <td className="pdf-data"> {employeeData.EMROOM}</td>
                            </tr>
                          </table>
                        </td>
                      </tr>



                      <tr>
                        <td className="main-gen-width">
                          <table style={{ width: '100%', marginBottom: '5px' }}>
                            <tr>
                              <td className="main-gen-width">
                                <b>City/State/Zip:</b></td>
                              <td className="pdf-data">

                                {employeeData.EMPCTY || ''} {employeeData.EMPST || ''}, {normalizezipnew(employeeData.EMPZP1)}
                              </td>
                            </tr>
                          </table>
                        </td>

                      </tr>




                    </tbody>

                  </table>
                </div>



                <div className="main-pdf-sec">
                  <h2 className='pdf-main-heads'>Service Details</h2>
                  <table className="general-sec-pdf">
                    <tbody>
                      <tr>
                        <td className="main-gen-inner">
                          <table style={{ width: '100%' }}>
                            <tbody><tr>
                              <td className="main-gen-width"><b>Previous Service Credit:</b></td>
                              <td className="pdf-data"> {employeeData.EMPREV}
                              </td>
                            </tr>
                            </tbody></table>
                        </td>
                        <td className="main-gen-inner">
                          <table style={{ width: '100%' }}>
                            <tbody>
                              <tr>
                                <td className="main-gen-width ">
                                  <b>State:</b>
                                </td>
                                <td className="pdf-data">{employeeData.EMSST}</td>
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
                                <b>Full Time Hire Date:</b></td>
                              <td className="pdf-data">

                                {employeeData.HID != '' && employeeData.HID != null && formatDate(employeeData.HID)}
                              </td>
                            </tr>
                          </table>
                        </td>
                        <td className="main-gen-width">
                          <table style={{ width: '100%', marginBottom: '5px' }}>
                            <tr>
                              <td className="main-gen-width">
                                <b>Original Hire Date:</b></td>
                              <td className="pdf-data">

                                {employeeData.OHD != '' && employeeData.OHD != null && formatDate(employeeData.OHD)}
                              </td>
                            </tr>
                          </table>
                        </td>

                      </tr>



                      <tr>
                        <td className="main-gen-width">
                          <table style={{ width: '100%', marginBottom: '5px' }}>
                            <tr>
                              <td className="main-gen-width">
                                <b>Termination Date:</b></td>
                              <td className="pdf-data">

                                {employeeData.TRD != '' && employeeData.TRD != null && formatDate(employeeData.TRD)}
                              </td>
                            </tr>
                          </table>
                        </td>

                        <td className="main-gen-width main-margin">
                          <table style={{ width: '100%', marginBottom: '5px' }}>
                            <tr>
                              <td className="main-gen-width">
                                <b>Title Change Date:</b>
                              </td>
                              <td className="pdf-data">{employeeData.HID != '' && employeeData.HID != null && formatDate(employeeData.HID)}</td>
                            </tr>
                          </table>
                        </td>

                      </tr>

                      <tr>
                        <td className="main-gen-width">
                          <table style={{ width: '100%', marginBottom: '5px' }}>
                            <tr>
                              <td className="main-gen-width">
                                <b>Next Update for Longevity:</b></td>
                              <td className="pdf-data">

                                {employeeData.EMMSC2}
                              </td>
                            </tr>
                          </table>
                        </td>

                        <td className="main-gen-width main-margin">
                          <table style={{ width: '100%', marginBottom: '5px' }}>
                            <tr>
                              <td className="main-gen-width">
                                <b>District:</b>
                              </td>
                              <td className="pdf-data">{employeeData.EMSDST}</td>
                            </tr>
                          </table>
                        </td>

                      </tr>


                      <tr>
                        <td className="main-gen-width">
                          <table style={{ width: '100%', marginBottom: '5px' }}>
                            <tr>
                              <td className="main-gen-width">
                                <b>Application Date:</b></td>
                              <td className="pdf-data">
                                {formatDateemdtapplication(employeeData.EMADAT)}
                              </td>
                            </tr>
                          </table>
                        </td>

                        <td className="main-gen-width main-margin">
                          <table style={{ width: '100%', marginBottom: '5px' }}>
                            <tr>
                              <td className="main-gen-width">
                                <b>Seniority Date:</b>
                              </td>
                              <td className="pdf-data">  {employeeData.EMSRDT != '' && employeeData.EMSRDT != null && formatDateemdtsenior(employeeData.EMSRDT)}</td>
                            </tr>
                          </table>
                        </td>

                      </tr>





                      <tr>
                        <td className="main-gen-width">
                          <table style={{ width: '100%', marginBottom: '5px' }}>
                            <tr>
                              <td className="main-gen-width">
                                <b>Seniority Number:</b></td>
                              <td className="pdf-data">

                                {employeeData.EMSR != null && employeeData.EMSR != '' && (employeeData.EMSR)}
                              </td>
                            </tr>
                          </table>
                        </td>

                        <td className="main-gen-width main-margin">
                          <table style={{ width: '100%', marginBottom: '5px' }}>
                            <tr>
                              <td className="main-gen-width">
                                <b>Salary Change Date:</b>
                              </td>
                              <td className="pdf-data">  {employeeData.SCD != '' && employeeData.SCD != null && formatDate(employeeData.SCD)}</td>
                            </tr>
                          </table>
                        </td>

                      </tr>



                      <tr>
                        <td className="main-gen-width">
                          <table style={{ width: '100%', marginBottom: '5px' }}>
                            <tr>
                              <td className="main-gen-width">
                                <b>Last Update for Longevity:</b></td>
                              <td className="pdf-data">

                                {(employeeData.EMMSC1)}
                              </td>
                            </tr>
                          </table>
                        </td>

                        <td className="main-gen-width main-margin">
                          <table style={{ width: '100%', marginBottom: '5px' }}>
                            <tr>
                              <td className="main-gen-width">
                                <b>Total Year of Longevity:</b>
                              </td>
                              <td className="pdf-data">{(employeeData.EMMSC3)}</td>
                            </tr>
                          </table>
                        </td>

                      </tr>




                    </tbody>

                  </table>
                </div>

                <div className="main-pdf-sec pagebreak">
                  <h2 className='pdf-main-heads'>Pension Details</h2>
                  <table className="general-sec-pdf">
                    <tbody>
                      <tr>
                        <td className="main-gen-inner">
                          <table style={{ width: '100%' }}>
                            <tbody><tr>
                              <td className="main-gen-width"><b>Pension Number:</b></td>
                              <td className="pdf-data"> {employeeData.EXPENS}
                              </td>
                            </tr>
                            </tbody></table>
                        </td>
                        <td className="main-gen-inner">
                          <table style={{ width: '100%' }}>
                            <tbody>
                              <tr>
                                <td className="main-gen-width ">
                                  <b>Pension Full Rate %:</b>
                                </td>
                                <td className="pdf-data">{employeeData.EXFRPC}</td>
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
                                <b>Job Code for GTL Addenda:</b></td>
                              <td className="pdf-data">

                                {padValue(employeeData.EXJOB)}
                              </td>
                            </tr>
                          </table>
                        </td>
                        <td className="main-gen-width main-margin">
                          <table style={{ width: '100%', marginBottom: '5px' }}>
                            <tr>
                              <td className="main-gen-width">
                                <b>Number of GTL Distributions:</b>
                              </td>
                              <td className="pdf-data">{employeeData.EXPAYP}</td>
                            </tr>
                          </table>
                        </td>
                      </tr>



                      <tr>
                        <td className="main-gen-width">
                          <table style={{ width: '100%', marginBottom: '5px' }}>
                            <tr>
                              <td className="main-gen-width">
                                <b>State:</b></td>
                              <td className="pdf-data">

                                {employeeData.EXSEXP}
                              </td>
                            </tr>
                          </table>
                        </td>

                        <td className="main-gen-width main-margin">
                          <table style={{ width: '100%', marginBottom: '5px' }}>
                            <tr>
                              <td className="main-gen-width">
                                <b>Out-of-State:</b>
                              </td>
                              <td className="pdf-data">{employeeData.EXOEXP}</td>
                            </tr>
                          </table>
                        </td>

                      </tr>

                      <tr>
                        <td className="main-gen-width">
                          <table style={{ width: '100%', marginBottom: '5px' }}>
                            <tr>
                              <td className="main-gen-width">
                                <b>10/12 Column Value:</b></td>
                              <td className="pdf-data">

                                {employeeData.EX1012}
                              </td>
                            </tr>
                          </table>
                        </td>

                        <td className="main-gen-width main-margin">
                          <table style={{ width: '100%', marginBottom: '5px' }}>
                            <tr>
                              <td className="main-gen-width">
                                <b>TPAF,PERS, CNTY or NOPP:</b>
                              </td>
                              <td className="pdf-data">{employeeData.EXTYPE}</td>
                            </tr>
                          </table>
                        </td>

                      </tr>


                      <tr>
                        <td className="main-gen-width">
                          <table style={{ width: '100%', marginBottom: '5px' }}>
                            <tr>
                              <td className="main-gen-width">
                                <b>GTL Salary Override:</b></td>
                              <td className="pdf-data">

                                {employeeData.EXSALO}
                              </td>
                            </tr>
                          </table>
                        </td>

                        <td className="main-gen-width main-margin">
                          <table style={{ width: '100%', marginBottom: '5px' }}>
                            <tr>
                              <td className="main-gen-width">
                                <b>Years of Experience:</b>
                              </td>
                              <td className="pdf-data"></td>
                            </tr>
                          </table>
                        </td>

                      </tr>





                      <tr>
                        <td className="main-gen-width">
                          <table style={{ width: '100%', marginBottom: '5px' }}>
                            <tr>
                              <td className="main-gen-width">
                                <b>District:</b></td>
                              <td className="pdf-data">
                                {employeeData.EXDEXP}
                              </td>
                            </tr>
                          </table>
                        </td>

                        {/* <td className="main-gen-width main-margin">
                          <table style={{ width: '100%', marginBottom: '5px' }}>
                            <tr>
                              <td className="main-gen-width">
                                <b>Employee Contribute to Cost of Life Insurance?:</b>
                              </td>
                              <td className="pdf-data">{employeeData.EXCNTB}</td>
                            </tr>
                          </table>
                        </td> */}

                      </tr>


                    </tbody>

                  </table>
                </div>



                <table className="general-sec-pdf">
                  <tbody>
                    <tr>
                      <td className="main-gen-width main-margin">
                        <table style={{ width: '100%', marginBottom: '5px' }}>
                          <tr>
                            <td className="main-gen-width meaintot-diff-insure">
                              <b>Employee Contribute to Cost of Life Insurance?:</b>
                            </td>
                            <td className="pdf-data">{employeeData.EXCNTB}</td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>

                <div className="main-pdf-sec">
                  <h2 className='pdf-main-heads'>Termination Information</h2>
                  <table className="general-sec-pdf">
                    <tbody>
                      <tr>
                        <td className="main-gen-width main-margin">
                          <table style={{ width: '100%', marginBottom: '5px' }}>
                            <tr>
                              <td className="main-gen-width meaintot-diff-insure termin-width">
                                <b>Termination Date:</b>
                              </td>
                              <td className="pdf-data">
                                {employeeData.ETMDAT != '' && employeeData.ETMDAT != null && formatDateemdttermisinfor(employeeData.ETMDAT)}
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      {(employeeData.ETMCDE && employeeData.TRMTTL) &&
                        <tr>
                          <td className="main-gen-width main-margin">
                            <table style={{ width: '100%', marginBottom: '5px' }}>
                              <tr>
                                <td className="main-gen-width meaintot-diff-insure termin-width">
                                  <b>Termination Code:</b>
                                </td>
                                <td className="pdf-data">

                                  {employeeData.ETMCDE} {employeeData.TRMTTL}</td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      }
                      <tr>
                        <td className="main-gen-width main-margin">
                          <table style={{ width: '100%', marginBottom: '5px' }}>
                            <tr>
                              <td className="main-gen-width meaintot-diff-insure termin-width">
                                <b>Employee Details:</b>
                              </td>
                              <td className="pdf-data">{(employeeData.ETMDS1 === null || employeeData.ETMDS1 === undefined) ? '-' : employeeData.ETMDS1}</td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td className="main-gen-width main-margin">
                          <table style={{ width: '100%', marginBottom: '5px' }}>
                            <tr>
                              <td className="main-gen-width meaintot-diff-insure termin-width">
                                <b>Additional Details:</b>
                              </td>
                              <td className="pdf-data">  {(employeeData.ETMDS2 === null || employeeData.ETMDS2 === undefined) ? '-' : employeeData.ETMDS2}  {(employeeData.ETMDS3 === null || employeeData.ETMDS3 === undefined) ? '-' : employeeData.ETMDS3} {(employeeData.ETMDS4 === null || employeeData.ETMDS4 === undefined) ? '-' : employeeData.ETMDS4} {(employeeData.ETMDS5 === null || employeeData.ETMDS5 === undefined) ? '-' : employeeData.ETMDS5} {(employeeData.ETMDS6 === null || employeeData.ETMDS6 === undefined) ? '-' : employeeData.ETMDS6}</td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>



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
