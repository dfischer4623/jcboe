import React, { useContext, useState, useEffect } from 'react';



import logoimg from "../assets/img/logob.png";


import secureLocalStorage from "react-secure-storage";
import {
  useNavigate
} from "react-router-dom";
import axios from 'axios';
import { AppContext } from '../context';

function formatDate(dateStr) {
  if (!dateStr) return "";

  // Try parsing with Date
  let date = new Date(dateStr);

  // If invalid, maybe it's in DD/MM/YYYY format
  if (isNaN(date)) {
    const parts = dateStr.split("/");
    if (parts.length === 3) {
      const [day, month, year] = parts;
      date = new Date(`${month}/${day}/${year}`); // flip to MM/DD/YYYY
    }
  }

  if (isNaN(date)) return dateStr; // still invalid, return as is

  return date.toLocaleDateString("en-US", {
    month: "2-digit",
    day: "2-digit",
    year: "numeric"
  });
}

function Pdf() {
  let navigate = useNavigate();


  const [viewData, setViewData] = useState([]);
  const [viewDataForm, setViewDataForm] = useState(null);
  const [viewDocumentForm, setViewDocumentForm] = useState([]);
  const [viewDataFormChild, setViewDataFormChild] = useState([]);
  const [formname, setformname] = useState("");
  const [earnings, setEarnings] = useState([]);
  const [deductions, setDeductions] = useState([]);
  const [taxes, setTaxes] = useState([]);
  const { storage } = useContext(AppContext);

  const Axios = axios.create({
    baseURL: storage[0].backEndUrl
    // baseURL: process.env.REACT_APP_ENV_URL
  });
  const [employeeData, setEmployeeData] = useState(null);
  useEffect(() => {


    var userid = secureLocalStorage.getItem('employeeSystemData');



    if (Object.keys(userid).length === 0) {


      navigate(`/employeesystemdata`);

    } else {
      console.log(userid);


      setEmployeeData(userid.data);

      var allprintnewdd = (secureLocalStorage.getItem('showallcheckregisdeatnew'));;
      console.log(allprintnewdd);
      setViewDocumentForm(allprintnewdd);
      allprintnewdd.forEach(row => {
        for (let i = 1; i <= 9; i++) {
          const dcode = row[`dcode${i}`];
          const amount = row[`amount${i}`];
          const desc = row[`ckdesc${i}`];

          if (!dcode || !amount) continue; // Skip empty

          // Extract numeric part: "1-012" -> 1012, "8-001" -> 8001
          const numCode = parseInt(dcode.replace('-', ''));

          const entry = {
            chkno: row.chkno,
            year: row.year,
            dcode,
            numCode,
            amount: parseFloat(amount),
            desc
          };

          if ((numCode >= 1000 && numCode <= 4999)) {
            earnings.push(entry);
          } else if (numCode >= 7000 && numCode <= 7999) {
            deductions.push(entry);
          } else if (numCode >= 8000 && numCode <= 8999) {
            taxes.push(entry);
          }
        }
      })



    }

    setTimeout(function () {
       triggerPrint();
    }, 1000);
  }, []);
  const triggerPrint = () => {



    document.title = 'Check Register';


    setTimeout(function () {
      window.print();
      document.title = 'Legacy System';
      window.close();
    }, 500);
    ;
  }


  const padValue = (value) => {
    if (value !== null && value !== undefined && value !== 0 && value !== '') {
      return value.toString().padStart(3, '0');
    }
  };
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




        <div className="conatiner-pdf " style={styles.pageBreak}>
          <div className="pdf-section">
            <table style={{ width: '100%', marginTop: '15px' }} className='checktbnew'>

              <tr>
                <td colSpan="1" class="pdf-header pdf-logos">
                  <img src={logoimg} />

                  <div className='pdf-header-right'>
                    <p>346 Claremont Avenue</p>
                    <p>Jersey City, NJ 07305</p>
                    <p className='num-pdf-count'>(201) 915-6000</p>
                  </div>
                </td>
                {/* <td colSpan="2" class="pdf-header">
                     <p>346 Claremont Avenue</p>
                      <p>Jersey City, NJ 07305</p>
                       <p>(201) 915-6000</p>
                    </td> */}
              </tr>
              <tr>
                <td colSpan="3" className="reqid-sec reqid-sec-pdf padding-top-pdf   head-check" >

                  Statement of Earnings and Deductions
                </td>

              </tr>

            </table>

            <div className="pdf-section">
              <table className="table-status " style={{ width: '100%' }}>

                <thead>
                  <tr>
                    <th className='pf-sl pdf-check-name'>Name	</th>
                    <th className='pf-wl pdf-check-emp'>Employee ID</th>
                    <th className='pf-date pdf-check-date'>Check Date</th>
                    <th className='pf-time pdf-check'></th>
                    <th className='pf-resn pdf-check'> </th>
                    <th className='pf-wo pdf-check-num'>Check Number</th>

                  </tr>
                </thead>
                {employeeData != null &&
                  <>
                    <tr>
                      <td class="border-right"> {employeeData.lastName}, {employeeData.firstName} {employeeData.middleInitial} </td>
                      <td class="border-right">  {employeeData.employee}</td>
                      {viewDocumentForm.length > 0 &&
                        <>

                          <td class="border-right">  {formatDate(viewDocumentForm[0].checkDate)}</td>
                          <td class="border-right">  </td>
                          <td class="border-right"></td>
                          <td class="border-right">{viewDocumentForm[0].chkno} </td>
                        </>
                      }

                    </tr>
                  </>
                }
                <tr>
                  <td class="border-right check-heading">  </td>
                  <td class="border-right check-heading pdf-check-emp"> Building Location</td>
                  <td class="border-right check-heading pdf-check-date">  Check Location</td>
                  <td class="border-right check-heading">  </td>
                  <td class="border-right check-heading"></td>
                  <td class="border-right check-heading"> </td>

                </tr>
                {viewDocumentForm.length > 0 &&
                  <>
                    <tr>
                      <td class="border-right pdf-check">  </td>
                      <td class="border-right pdf-check-name"> {padValue(viewDocumentForm[0].bldgLocation)} </td>
                      <td class="border-right pdf-check-name">  {padValue(viewDocumentForm[0].checkLocation)}</td>
                      <td class="border-right pdf-check ">  </td>
                      <td class="border-right pdf-check"></td>
                      <td class="border-right pdf-check"> </td>

                    </tr>
                  </>
                }
                <tr>
                  <td class="border-right check-heading pdf-check-name"> Current Gross Pay </td>
                  <td class="border-right check-heading pdf-check-emp pdf-check"> </td>
                  <td class="border-right check-heading pdf-check-date pdf-check"> </td>
                  <td colSpan="2" class="border-right check-heading pdf-check-date"> Current Net Pay </td>
                  {/* <td class="border-right check-heading"></td> */}
                  <td class="border-right check-heading pdf-check"> </td>

                </tr>
                {viewDocumentForm.length > 0 &&
                  <>

                    <tr>
                      <td class="border-right pdf-check"> {formatCurrency(viewDocumentForm[0].cgwages)}  </td>
                      <td class="border-right pdf-check-name"> </td>
                      <td class="border-right pdf-check-name">  </td>
                      <td colSpan="2" class="border-right pdf-check">{formatCurrency(viewDocumentForm[0].cnetwages)}</td>
                      <td class="border-right pdf-check"> </td>

                    </tr>


                  </>
                }


              </table>

            </div>


            <div className="pdf-section">
              <table style={{ width: '100%', marginTop: '15px' }} className='checktbnew'>

                <tr>
                  <td colSpan="3" className="reqid-sec reqid-sec-pdf padding-top-pdf   head-check" >
                    Earning
                  </td>
                </tr>

              </table>
              <table className="table-status" style={{ width: '100%' }}>

                <thead>
                  <tr>
                    <th className='pf-sl pdf-check-name'>Code/Description	</th>
                    <th className='pf-wl pdf-check-emp'>Current</th>
                    <th className='pf-date pdf-check-date'>YTD</th>


                  </tr>
                </thead>
                {earnings.length > 0 ?
                  earnings.map((entry, index) => (

                    <tr>

                      <td class="border-right">
                        {(entry.numCode)}/{(entry.desc)}
                      </td>
                      <td class="border-right">
                        {formatCurrency(entry.amount)}
                      </td>
                      <td class="border-right">

                      </td>


                    </tr>

                  ))

                  : <tr><td class="border-right" colSpan={3}></td></tr>}








              </table>

            </div>


            <div className="pdf-section">
              <table style={{ width: '100%', marginTop: '15px' }} className='checktbnew'>

                <tr>
                  <td colSpan="3" className="reqid-sec reqid-sec-pdf padding-top-pdf   head-check" >
                    Deduction
                  </td>
                </tr>

              </table>
              <table className="table-status" style={{ width: '100%' }}>

                <thead>
                  <tr>
                    <th className='pf-sl pdf-check-name'>Code/Description	</th>
                    <th className='pf-wl pdf-check-emp'>Current</th>
                    <th className='pf-date pdf-check-date'>YTD</th>


                  </tr>
                </thead>
                {deductions.length > 0 ?
                  deductions.map((entry, index) => (

                    <tr>

                      <td class="border-right">
                        {(entry.numCode)}/{(entry.desc)}
                      </td>
                      <td class="border-right">
                        {formatCurrency(entry.amount)}
                      </td>
                      <td class="border-right">

                      </td>


                    </tr>

                  ))

                  : <tr ><td class="border-right" colSpan={3}></td></tr>}






              </table>

            </div>

            <div className="pdf-section">
              <table style={{ width: '100%', marginTop: '15px' }} className='checktbnew'>

                <tr>
                  <td colSpan="3" className="reqid-sec reqid-sec-pdf padding-top-pdf  head-check" >
                    Taxes
                  </td>
                </tr>

              </table>
              <table className="table-status" style={{ width: '100%' }}>

                <thead>
                  <tr>
                    <th className='pf-sl pdf-check-name'>Code/Description	</th>
                    <th className='pf-wl pdf-check-emp'>Current</th>
                    <th className='pf-date pdf-check-date'>YTD</th>


                  </tr>
                </thead>

                                                {taxes.length > 0 ?
                                                    taxes.map((entry, index) => (

                                                        <tr>

                                                            <td  class="border-right">
                                                               {(entry.numCode)}/{(entry.desc)}
                                                            </td>
                                                            <td  class="border-right">
                                                                {formatCurrency(entry.amount)}
                                                            </td>
                                                            <td  class="border-right">
                                                              
                                                            </td>


                                                        </tr>

                                                    ))

                                                    : <tr><td  class="border-right" colSpan={3}></td></tr>}
               






              </table>

            </div>






          </div>

        </div>




      </div>
    </>
  )
}
export default Pdf
