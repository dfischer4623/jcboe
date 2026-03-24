import React, { useContext, useState, useEffect } from 'react';



import logoimg from "../assets/img/logob.png";


import secureLocalStorage from "react-secure-storage";
import {
  useNavigate
} from "react-router-dom";
import axios from 'axios';
import { AppContext } from '../context';

function phoneformatch(number) {
   if(number!="" && number!=null && number!=undefined){
  const cleaned = number.toString().replace(/\D/g, ''); // remove non-digit characters

  if (cleaned.length !== 10) return 'Invalid number';

  const areaCode = cleaned.slice(0, 3);
  const middle = cleaned.slice(3, 6);
  const last = cleaned.slice(6);

  return `(${areaCode}) ${middle}-${last}`;
   }else{
            return "";
        }
}

const formatDate = (date, format = null) => {
    if(date!="" && date!=null & date!=undefined){
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
}else{
            return "";
        }
}
function normalize(phoneStr) {
    if(phoneStr!='' && phoneStr!=null && phoneStr!=undefined){
  if (typeof phoneStr !== 'string') phoneStr = String(phoneStr || "");
  phoneStr = phoneStr.replace(/[^\d]/g, "");
  if (phoneStr.length === 7) {
    return phoneStr.replace(/(\d{3})(\d{4})/, "$1-$2");
  }
  return ""; // Or return original if not 7 digits, depending on desired behavior
    }else{
        return ""; // Or return original if not 7 digits, depending on desired behavior
    }
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
  if(EMZIP1!="" && EMZIP1!=null && EMZIP1!=undefined){
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
 }else{
        return "";
    }

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
  const [employeeDatassn, setEmployeeDatassn] = useState(null);
  const [employeeDatapay, setEmployeeDatapay] = useState(null);
  useEffect(() => {

    var userid = secureLocalStorage.getItem('employeeSystemData');



    if (Object.keys(userid).length === 0) {


      navigate(`/employeesystemdata`);

    } else {
      console.log(userid);
      setEmployeeData(userid.data);
      setEmployeeDatassn(userid.datawe.ssn);
      setEmployeeDatapay(userid.datapay);

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
                      Employee Name: {employeeData.lastName}, {employeeData.firstName} {employeeData.middleInitial}
                    </td>

                  </tr>
                  <tr>
                    <td colSpan="2" className="reqid-sec reqid-sec-pdf padding-bottom-pdf" >
                      Emp Id:  {employeeData.employee}
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
                              <td className="main-gen-width"><b>Employee Id:</b></td>
                              <td className="pdf-data">{employeeData.employee}
                              </td>
                            </tr>
                            </tbody></table>
                        </td>
                        <td className="main-gen-inner">
                          <table style={{ width: '100%' }}>
                            <tbody>
                              <tr>
                                <td className="main-gen-width ">
                                  <b>SSN:</b>
                                </td>
                                <td className="pdf-data">
                                  {employeeDatassn}
                                </td>
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
                                <b>Name:</b></td>
                              <td className="pdf-data">

                                {employeeData.lastName}, {employeeData.firstName} {employeeData.middleInitial}
                              </td>
                            </tr>
                          </table>
                        </td>
                        <td className="main-gen-width main-margin">
                          <table style={{ width: '100%', marginBottom: '5px' }}>
                            <tr>
                              <td className="main-gen-width">
                                <b>Active:</b>
                              </td>
                              <td className="pdf-data"> {employeeData.active == 'TRUE' ? 'Y' : 'N'}</td>
                            </tr>
                          </table>
                        </td>
                      </tr>



                      <tr>
                        <td className="main-gen-width">
                          <table style={{ width: '100%', marginBottom: '5px' }}>
                            <tr>
                              <td className="main-gen-width">
                                <b>Gender:</b></td>
                              <td className="pdf-data">

                                {employeeData.gender}, {employeeData.gender == 'F' && 'FEMALE'} {employeeData.gender == 'M' && 'MALE'}  {(employeeData.gender != 'F' && employeeData.gender != 'M') && 'OTHER'}
                              </td>
                            </tr>
                          </table>
                        </td>
                        <td className="main-gen-width">
                          <table style={{ width: '100%', marginBottom: '5px' }}>
                            <tr>
                              <td className="main-gen-width">
                                <b>Ethnic Code:</b>
                              </td>
                              <td className="pdf-data">   {employeeData.race}</td>
                            </tr>
                          </table>
                        </td>
                      </tr>

                      <tr>
                        <td className="main-gen-width">
                          <table style={{ width: '100%', marginBottom: '5px' }}>
                            <tr>
                              <td className="main-gen-width">
                                <b>Birth Date:</b></td>
                              <td className="pdf-data">

                                {employeeData.birthDate != '' && employeeData.birthDate != null && formatDate(employeeData.birthDate)}
                              </td>
                            </tr>
                          </table>
                        </td>
                        <td className="main-gen-width">
                          <table style={{ width: '100%', marginBottom: '5px' }}>
                            <tr>
                              <td className="main-gen-width">
                                <b>Ethnic Description:</b>
                              </td>
                              <td className="pdf-data">    {employeeData.racedesc}</td>
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
                              <td className="main-gen-width"><b>Address:</b></td>
                              <td className="pdf-data">{employeeData.addressLine1}, {employeeData.addressLine2} 
                              </td>
                            </tr>
                            </tbody></table>
                        </td>
                        <td className="main-gen-inner">
                          <table style={{ width: '100%' }}>
                            <tbody>
                              <tr>
                                <td className="main-gen-width ">
                                  <b>Home Phone:</b>
                                </td>
                                <td className="pdf-data"> {phoneformatch(employeeData.phone1)}</td>
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
                                <b>City/State/Zip:</b>
                              </td>
                              <td className="pdf-data">
                                {employeeData.city}, {employeeData.state} {normalizezip(employeeData.zip)}

                              </td>
                            </tr>
                          </table>
                        </td>
                        <td className="main-gen-width main-margin">
                          <table style={{ width: '100%', marginBottom: '5px' }}>
                            <tr>
                              <td className="main-gen-width">
                                <b>Work Email:</b>
                              </td>
                              <td className="pdf-data">  {employeeData.emEmail}</td>
                            </tr>
                          </table>
                        </td>
                      </tr>



                      <tr>
                        <td className="main-gen-width">
                          <table style={{ width: '100%', marginBottom: '5px' }}>
                            <tr>
                              <td className="main-gen-width">
                                <b>Permanent Address:</b></td>
                              <td className="pdf-data">

                                Y
                              </td>
                            </tr>
                          </table>
                        </td>
                        <td className="main-gen-width">
                          <table style={{ width: '100%', marginBottom: '5px' }}>
                            <tr>
                              <td className="main-gen-width">
                                <b></b>
                              </td>
                              <td className="pdf-data">  </td>
                            </tr>
                          </table>
                        </td>
                      </tr>





                    </tbody>

                  </table>
                </div>

                <div className="main-pdf-sec  ">
                  <h2 className='pdf-main-heads'>Employee Work Information</h2>
                  <table className="general-sec-pdf">
                    <tbody>
                      <tr>
                        <td className="main-gen-inner">
                          <table style={{ width: '100%' }}>
                            <tbody><tr>
                              <td className="main-gen-width"><b>Department/Location:</b></td>
                              <td className="pdf-data"> {employeeData.location}  {employeeData.loccode && employeeData.locdesc && <> {employeeData.locdesc}</>}
                              </td>
                            </tr>
                            </tbody></table>
                        </td>
                        <td className="main-gen-inner">
                          <table style={{ width: '100%' }}>
                            <tbody>
                              <tr>
                                <td className="main-gen-width ">
                                  <b>Hire Date:</b>
                                </td>
                                <td className="pdf-data">{employeeDatapay.hiredate}</td>
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
                                <b>Pay Location:</b></td>
                              <td className="pdf-data">

                                {employeeData.location}  {employeeData.loccode && employeeData.locdesc && <> {employeeData.locdesc}</>}
                              </td>
                            </tr>
                          </table>
                        </td>
                        <td className="main-gen-width main-margin">
                          <table style={{ width: '100%', marginBottom: '5px' }}>
                            <tr>
                              <td className="main-gen-width">
                                <b>Re-hire Date:</b>
                              </td>
                              <td className="pdf-data"> {employeeData.emRehire != null && employeeData.emRehire != '' && (employeeData.emRehire)}</td>
                            </tr>
                          </table>
                        </td>
                      </tr>



                      <tr>
                        <td className="main-gen-width">
                          <table style={{ width: '100%', marginBottom: '5px' }}>
                            <tr>
                              <td className="main-gen-width">
                                <b>Status Code:</b></td>
                              <td className="pdf-data">

                               {employeeData.emStatus}
                              </td>
                            </tr>
                          </table>
                        </td>
                        <td className="main-gen-width">
                          <table style={{ width: '100%', marginBottom: '5px' }}>
                            <tr>
                              <td className="main-gen-width">
                                <b>Termination Date:</b>
                              </td>
                              <td className="pdf-data">{employeeDatapay.termdate != null && employeeDatapay.termdate != '' && formatDate(employeeData.termdate)}</td>
                            </tr>
                          </table>
                        </td>
                      </tr>

                      <tr>
                        <td className="main-gen-width">
                          <table style={{ width: '100%', marginBottom: '5px' }}>
                            <tr>
                              <td className="main-gen-width">
                                <b>District Experience:</b></td>
                              <td className="pdf-data">

                               {employeeData.districtExperience}
                              </td>
                            </tr>
                          </table>
                        </td>
                          <td className="main-gen-width">
                          <table style={{ width: '100%', marginBottom: '5px' }}>
                            <tr>
                              <td className="main-gen-width">
                                <b>Job Code:</b>
                              </td>
                              <td className="pdf-data">{employeeData.code != null && employeeData.code != '' && (employeeData.code)}</td>
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

                              {employeeData.emSeniori != null && employeeData.emSeniori != '' && (employeeData.emSeniori)}
                              </td>
                            </tr>
                          </table>
                        </td>
                          <td className="main-gen-width">
                          <table style={{ width: '100%', marginBottom: '5px' }}>
                            <tr>
                              <td className="main-gen-width">
                                <b>Job Title:</b>
                              </td>
                              <td className="pdf-data"> {employeeData.jobTitle4 != null && employeeData.jobTitle4 != '' && (employeeData.jobTitle4)}</td>
                            </tr>
                          </table>
                        </td>

                      </tr>

         <tr>
                        <td className="main-gen-width">
                          <table style={{ width: '100%', marginBottom: '5px' }}>
                            <tr>
                              <td className="main-gen-width">
                                <b>UPC Code:</b></td>
                              <td className="pdf-data">

                              {employeeData.primUcode}
                              </td>
                            </tr>
                          </table>
                        </td>
                          <td className="main-gen-width">
                          <table style={{ width: '100%', marginBottom: '5px' }}>
                            <tr>
                              <td className="main-gen-width">
                                <b>UPC Description:</b>
                              </td>
                              <td className="pdf-data">{employeeData.primUdesc != null && employeeData.primUdesc != '' && (employeeData.primUdesc)}</td>
                            </tr>
                          </table>
                        </td>

                      </tr>


                    </tbody>

                  </table>
                </div>

                {/* <div className="main-pdf-sec ">
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
                </div> */}



                <div className="main-pdf-sec">
                  <h2 className='pdf-main-heads'>Employee Salary Information</h2>
                  <table className="general-sec-pdf">
                    <tbody>
                      <tr>
                        <td className="main-gen-inner">
                          <table style={{ width: '100%' }}>
                            <tbody><tr>
                              <td className="main-gen-width"><b>Calculated Salary:</b></td>
                              <td className="pdf-data">  {formatCurrency(employeeData.calculatedSalary)}
                              </td>
                            </tr>
                            </tbody></table>
                        </td>
                        <td className="main-gen-inner">
                          <table style={{ width: '100%' }}>
                            <tbody>
                              <tr>
                                <td className="main-gen-width ">
                                  <b>Salary:</b>
                                </td>
                                <td className="pdf-data">   {formatCurrency(employeeDatapay.salary)}</td>
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
                                <b>Job Title:</b></td>
                              <td className="pdf-data">
                               {employeeDatapay.scname}

                              </td>
                            </tr>
                          </table>
                        </td>
                        

                      </tr>



                      







                    </tbody>

                  </table>
                </div>

                <div className="main-pdf-sec ">
                  <h2 className='pdf-main-heads'>Pension Details</h2>
                  <table className="general-sec-pdf">
                    <tbody>
                      <tr>
                        <td className="main-gen-inner">
                          <table style={{ width: '100%' }}>
                            <tbody><tr>
                              <td className="main-gen-width"><b>Pension Code:</b></td>
                              <td className="pdf-data"> {employeeData.pensionCode}
                              </td>
                            </tr>
                            </tbody></table>
                        </td>
                        <td className="main-gen-inner">
                          <table style={{ width: '100%' }}>
                            <tbody>
                              <tr>
                                <td className="main-gen-width ">
                                  <b>Pension Number:</b>
                                </td>
                                <td className="pdf-data">{employeeData.pension}</td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>


                    </tbody>

                  </table>
                </div>




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
                                {employeeDatapay.termdate != null && employeeDatapay.termdate != '' && formatDate(employeeData.termdate)}
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      {/* {(employeeData.ETMCDE && employeeData.TRMTTL) &&
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
                      } */}
                      <tr>
                        <td className="main-gen-width main-margin">
                          <table style={{ width: '100%', marginBottom: '5px' }}>
                            <tr>
                              <td className="main-gen-width meaintot-diff-insure termin-width">
                                <b>Employee Details:</b>
                              </td>
                              <td className="pdf-data">-</td>
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
                              <td className="pdf-data">  	- - - - -</td>
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
