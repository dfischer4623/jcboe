import React, { useState, useEffect } from 'react';



import logoimg from "../assets/img/logob.png";


import secureLocalStorage from "react-secure-storage";
import {
  useNavigate
} from "react-router-dom";
import axios from 'axios';
import { AppContext } from '../context';
function formatDate(date) {
    if (!date) return '';

    let d;

    // Check if format is YYYY-MM-DD
    if (date.includes('-')) {
        d = new Date(date);
    }
    // Check if format is M/D/YYYY or MM/DD/YYYY
    else if (date.includes('/')) {
        let parts = date.split('/');
        let month = parts[0].padStart(2, '0');
        let day = parts[1].padStart(2, '0');
        let year = parts[2];
        return `${month}/${day}/${year}`;
    }

    if (isNaN(d)) return '';

    let month = String(d.getMonth() + 1).padStart(2, '0');
    let day = String(d.getDate()).padStart(2, '0');
    let year = d.getFullYear();

    return `${month}/${day}/${year}`;
}
function formatYearRange(yearStr) {
    if (!yearStr || yearStr.length !== 8) return yearStr; // safety check

    let startYear = yearStr.substring(0, 4);
    let endYear = yearStr.substring(4, 8);

    return `${startYear}-${endYear}`;
}
function formatValue(input) {
    if(input!=null && input!=undefined && input!=''){
    const str = input.toString();
    return `${str.slice(0, 2)}-${str.slice(2, 5)}-${str.slice(5, 8)}-${str.slice(8, 11)}-${str.slice(11, 14)}-${str.slice(14, 16)}-${str.slice(16)}`;
    }else{
        return '';
    }
}

function Pdf() {
  const [employeeData, setEmployeeData] = useState(null);
  const [vendorData, setvendorData] = useState(null);
  const [poData, setPoData] = useState({});
  const [loader, setLoader] = useState(false);
  const [allpodeat, setAllpodeat] = useState([]);
  const [showAll, setShowAll] = useState(null);
  let navigate = useNavigate();
  useEffect(() => {
    var userid = secureLocalStorage.getItem('poSyetemnewData');
    var vendordata = secureLocalStorage.getItem('vendorSystemNumberData');
    var poid = secureLocalStorage.getItem('pobasicsystemData');
   
    console.log('userid', userid);
    if ((userid) == null || (userid) == undefined) {


      navigate(`/vendorsearch`);

    } else {
      console.log(userid);
      setvendorData(vendordata);
      setEmployeeData(userid);
      setPoData(poid);
   
     const totalCost =userid.payments;
      setShowAll(totalCost);

    }
    setTimeout(function () {
     triggerPrint();
    }, 1000);
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





  const triggerPrint = () => {



    document.title = 'Po Details';


    setTimeout(function () {
      window.print();
      document.title = 'Legacy System';
      window.close();
    }, 500);
    ;
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


      <div style={styles.body} className="pdf-page" id="pdf-content">




        <div className="conatiner-pdf-new " style={styles.pageBreak}>
          <div className="pdf-section">
            <table style={{ width: '100%', marginTop: '15px' }} className='checktbnew'>
              <tr className='pdf-tr'>
                <td colSpan="3  " class="pdf-header pdf-logos po-new-heading  pdf-td-top">
                  <h1>This is A Requisition, Not An Actual PO </h1></td>
              </tr>
              <tr >

                <div className='pdf-sec-head'>
                  <div colSpan="3" className='pdf-td-top pdf-td-bottm'>
                    <div className='pdf-header-left'>
                      {/* <p>24-007642</p> */}
                      <h1 className='short-head-pdf'>Completed Requisition</h1>
                    </div>
                  </div>

                </div>

              </tr>

              <tr>
                <td colSpan="3" className="reqid-sec-pdf padding-top-pdf  head-check pdf-head-botm new-pdf-head" >

                  <p>Jersey City Board of Education</p>
                </td>

              </tr>

            </table>

            <table style={{ width: '100%', marginTop: '15px' }} className='checktbnew'>
              {employeeData != null  &&
                <>
                  <tr>
                    <td colSpan="1" class="pdf-header pdf-logos">
                      <div className='pdf-vendor-num'>
                        <p>Vendor # <span>  {vendorData.vendorNumber}</span></p>
                      </div>


                      <div className='pdf-header-right pdf-header-rightss'>
                        <p>Date <span>  {((employeeData.date != null &&
                          employeeData.date != undefined) ? formatDate(employeeData.date) : '')}</span></p>

                      </div>
                    </td>

                  </tr>
                </>

              }
              {/* <tr>
                <td colSpan="3" className="reqid-sec reqid-sec-pdf padding-top-pdf   head-check" >

                  Statement of Earnings and Deductions
                </td>

              </tr> */}

            </table>

            <table style={{ width: '100%', marginTop: '0px' }} className='checktbnew'>
              {vendorData != null  &&
                <>
                  <tr>
                    <td colSpan="2" class="pdf-header pdf-logos">
                      <div className='pdf-vendor-num psd-addr-left'>
                        <p className='head-talic'>Vendor: </p>
                        <p>{vendorData.indexName}  </p>
                        <p>{vendorData.remitToAddressLine1}  {vendorData.remitToAddressLine2 != '' && <>{',' + vendorData.remitToAddressLine2} </>} </p>
                        <p>{vendorData.remitToCity}, {vendorData.remitToState} {(vendorData.remitToZip)}</p>
                      </div>


                      {/* <div colSpan="2" className='pdf-header-right psd-addr-right'>
                        <p className='head-talic'>Ship To: </p>
                        <p>Attn To : {employeeData[0].POATTN}</p>
                        <p>{employeeData[0].SHNAME}</p>
                        <p>{employeeData[0].SHATTN != '' && <>{employeeData[0].SHATTN} </>}</p>
                        <p>{employeeData[0].SHADR1}</p>
                        <p> {employeeData[0].SHCITY}, {employeeData[0].SHST} {checkshizip(employeeData[0].SHZIP1)}</p>

                      </div> */}
                    </td>

                  </tr>
                </>

              }
            </table>
            <table className='pdf-table-data' style={{ width: '100%', marginTop: '15px' }}>
              <tbody>
                 {vendorData != null  &&
                  <>
                    <tr>
                      <td className='pdf-req-sec neww-pdf-way-code'>
                        <table>
                          <tr >
                            <td className='new-code-css'>
                              <p className='pdf-req-sec-head pdf-creat-neww newss-code-create'>Created by</p>
                              <p className='pdf-req-sec-data  newss-code-create-value'>: {employeeData.originallyEnteredBy}</p>
                            </td>
                          </tr>
                        </table>

                      </td>

                      <td className="pdf-po-type pdf-new-sys-po-type">
                        <table>
                          <tr>
                            <td>
                              <p className='pdf-req-sec-head pdf-req-sec-headss  newss-code-po'>PO Number </p>
                              <p className='pdf-req-sec-data pdf-po-no-datass  newss-code-po-value'>: {poData.PO}</p>
                            </td>
                          </tr>
                        </table>

                      </td>
                    </tr>
                  </>

                }
              </tbody>
            </table>

            <table className='pdf-table-data' style={{ width: '100%', marginTop: '12px' }}>
              <tbody>
                <tr>
                
                  {employeeData != null  &&
                    <>
                      <td className='pdf-req-sec neww-pdf-way-code'>
                    <table>
                      <tr>
                        <td className='new-code-css'>
                          <p className='pdf-req-sec-head pdf-creat-neww newss-code-create'>Year</p>
                          <p className='pdf-req-sec-data  newss-code-create-value' style={{paddingLeft:'12px'}}>: {formatYearRange(employeeData.year)}</p>
                        </td>
                      </tr>
                    </table>

                  </td>
                      <td className="pdf-po-type pdf-new-sys-po-type">
                        <table>
                          <tr>
                            <td>
                              <p className='pdf-req-sec-head pdf-req-sec-headss  newss-code-po'>Account Number </p>
                              <p className='pdf-req-sec-data pdf-po-no-datass  newss-code-po-value'>: {(employeeData.accnoD)}</p>
                            </td>
                          </tr>
                        </table>

                      </td>
                    </>}
                </tr>
              </tbody>
            </table>

            <table class="table-status table-new-pdf-tab" style={{ width: '100%', marginTop: '15px' }}>
              <thead>
                <tr>
                  <th class="pf-date pdf-check-date pdf-descs pdf-descption pdf-desc-newss pdf-descssa sys-po-descc-new ">PO DESCRIPTION</th>
         
                  <th class="pf-wl pdf-check-emp pdf-units pdf-unit-unitssa sys-po-orgmt-pdf">ORIGAMT</th>
                  <th class="pf-date pdf-check-date pdf-prices price-right  sys-po-cancelledss-new pdf-can-system">CANCELLED</th>
                  <th class="pf-date pdf-check-date pdf-extend-prcs price-right pdf-extenssa sys-po-pay-new">PAYMENTS</th>
                    
                </tr>
              </thead>
              {
                employeeData!=null && (
                  <>
                  

                      <tr>
                        <td class="border-right ">{(employeeData.poItems)}</td>
                       
                        <td class="price-right-data">{formatCurrency(employeeData.origAmt)}
                        </td>
                         <td className='price-right-data'> {formatCurrency(employeeData.cancelled)}</td>
                        <td class="price-right-data">
                          {formatCurrency(employeeData.payments)}
                        </td>
                       
             
                      </tr>

                   



                  </>
                )
              }




              <tr className='border-sec'>
                <td class="border-right "></td>
                <td class="border-right"></td>
                <td class="border-right"></td>
             
        
                <td className='price-right-data border-price-line'>
                  <div class="top-border"></div>
                  {formatCurrency(showAll)}</td>
              </tr>
              {/* {
                                        allpodeat.length > 0 && (
                                          <>
              <tr>
                <td colSpan={5}>
                  <p className='pdf-req-sec-head data-total-val'>{poData.ponum}/{formatValue(cleanedValue(allpodeat[0].POLACT))}-({dollarUS.format(showAll)})</p>
                </td>
              </tr>
     </>
                                        )
                                    } */}

            </table>

            <div className='print-footer'>
              <table>
                <thead>
                  <tr>
                    <th className='pdf-admins-sec'>Administrator Approval:</th>
                    <th className='pdf-date-sec-tab-mid'></th>
                    <th className='pdf-date-sec-tab'>Date:</th>
                  </tr>
                  <tr>
                    <td> <div className='pdf-sign-sec'>
                      <p className='pdf-req-sec-dataaa'></p>
                    </div></td>
                    <td></td>
                    <td> <p className='pdf-req-sec-date-sec'>
                      <input type="text" className='pdf-input' /> /

                      <input type="text" className='pdf-input' /> /
                      <input type="text" className='pdf-input' />

                    </p></td>
                  </tr>
                </thead>
              </table>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
export default Pdf
