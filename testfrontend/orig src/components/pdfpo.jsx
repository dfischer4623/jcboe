import React, { useState, useEffect } from 'react';



import logoimg from "../assets/img/logob.png";


import secureLocalStorage from "react-secure-storage";
import {
  useNavigate
} from "react-router-dom";
import axios from 'axios';
import { AppContext } from '../context';
function formatDate(date, format = null) {
  if (date != null && date != undefined && date != '') {
    const myArray = date.split("-");
    var d = new Date(date);
    var month = myArray[1];
    var day = myArray[2];
    var year = myArray[0];
    var daten = month + '/' + day + '/' + year;
    return daten;
  } else {
    var daten = '';
    return daten;
  }
}
function formatValue(input) {
  if (input != null && input != undefined && input != '') {
    const str = input.toString();
    return `${str.slice(0, 2)}-${str.slice(2, 5)}-${str.slice(5, 8)}-${str.slice(8, 11)}-${str.slice(11, 14)}-${str.slice(14, 16)}-${str.slice(16)}`;
  } else {
    return '';
  }
}

function Pdf() {
  const [employeeData, setEmployeeData] = useState([]);
  const [vendorData, setvendorData] = useState(null);
  const [poData, setPoData] = useState({});
  const [loader, setLoader] = useState(false);
  const [allpodeat, setAllpodeat] = useState([]);
  const [showAll, setShowAll] = useState(null);
  let navigate = useNavigate();
  useEffect(() => {
    var userid = secureLocalStorage.getItem('poDataprint');
    var vendordata = secureLocalStorage.getItem('vendorNumberData');
    var poid = secureLocalStorage.getItem('pobasicDataprint');
    var allpod = secureLocalStorage.getItem('showallpodeatnew');
    console.log('userid', userid);
    if ((userid) == null || (userid) == undefined) {


      navigate(`/vendorsearch`);

    } else {
      console.log(userid);
      setvendorData(vendordata[0]);
      setEmployeeData(userid);
      setPoData(poid);
      setAllpodeat(allpod);
      const totalCost = allpod.reduce((sum, entry) => {
        return sum + (entry.POLCST * entry.POLQTY);
      }, 0)
      setShowAll(totalCost);

    }
    setTimeout(function () {
      triggerPrint();
    }, 1000);
  }, []);
  let dollarUS = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const checkWinzip = (pVNZIP) => {


    if (pVNZIP !== null && pVNZIP != undefined && pVNZIP != '') {
      var VNZIP = pVNZIP.toString();
      if (VNZIP.length === 4) {
        VNZIP = "0" + VNZIP;
      }
      return VNZIP;
    } else {
      VNZIP = '';
      return VNZIP;
    }
  };

  const checkshizip = (pVNZIP) => {

    if (pVNZIP !== null && pVNZIP != undefined && pVNZIP != '') {

      if (pVNZIP.length === 4) {
        var SHZIP1 = "0" + pVNZIP;
      } else {
        SHZIP1 = pVNZIP;
      }
      return SHZIP1;
    } else {
      SHZIP1 = '';
      return SHZIP1;
    }
  };




  const checktotal = (pPOTOT, pPOFRT, pPOTTAX) => {


    let total = pPOTOT + pPOFRT + pPOTTAX;
    return total;

  };


  const checkpdat = (pPODAT) => {


    if (pPODAT.length === 1) {
      var PODAT = "0000" + pPODAT;
    } else if (pPODAT.length === 2) {
      PODAT = "000" + pPODAT;
    } else if (pPODAT.length === 3) {
      PODAT = "00" + pPODAT;
    } else if (pPODAT.length === 4) {
      PODAT = "0" + pPODAT;
    } else {
      PODAT = pPODAT;
    }
    if (pPODAT != null && pPODAT != undefined && pPODAT != '') {
      var ddd = PODAT.substring(2, 5);
      var m = Math.floor(Number(ddd) / 30) + 1;
      var d = Number(ddd) - 30 * (m - 1);
      var y = Number(PODAT.substring(0, 2));
      if (y <= 50) {
        y = 2000 + y;
      } else {
        y = 1900 + y;
      }

      PODAT = String(m) + "/" + String(d) + "/" + String(y);
    }
    return PODAT;
  };




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
  const cleanedValue = (value) => {
    if (value !== null && value !== undefined && value !== 0 && value !== '') {
      return String(value).replace(/^"|"$/g, '');;
    }
  };
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
              {employeeData.length > 0 &&
                <>
                  <tr>
                    <td colSpan="1" class="pdf-header pdf-logos">
                      <div className='pdf-vendor-num'>
                        <p>Vendor # <span>  {employeeData[0].POVEND}</span></p>
                      </div>


                      <div className='pdf-header-right pdf-header-rightss'>
                        <p>Date <span>  {((employeeData[0].PODATE != null &&
                          employeeData[0].PODATE != undefined) ? formatDate(employeeData[0].PODATE) : '')}</span></p>

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
              {employeeData.length > 0 &&
                <>
                  <tr>
                    <td colSpan="2" class="pdf-header pdf-logos">
                      <div className='pdf-vendor-num psd-addr-left'>
                        <p className='head-talic'>Vendor: </p>
                        <p>{vendorData.VNNAME} {vendorData.VNNAM2}  </p>
                        <p>{vendorData.VNADDR} {vendorData.VNADD2 != '' && <>{',' + vendorData.VNADD2} </>} </p>
                        <p>{vendorData.VNCITY}, {vendorData.VNST} {checkWinzip(vendorData.VNZIP)}</p>
                      </div>


                      <div colSpan="2" className='pdf-header-right psd-addr-right'>
                        <p className='head-talic'>Ship To: </p>
                        <p>Attn To : {employeeData[0].POATTN}</p>
                        <p>{employeeData[0].SHNAME}</p>
                        <p>{employeeData[0].SHATTN != '' && <>{employeeData[0].SHATTN} </>}</p>
                        <p>{employeeData[0].SHADR1}</p>
                        <p> {employeeData[0].SHCITY}, {employeeData[0].SHST} {checkshizip(employeeData[0].SHZIP1)}</p>

                      </div>
                    </td>

                  </tr>
                </>

              }
            </table>
            <table className='pdf-table-data' style={{ width: '100%', marginTop: '15px' }}>
              <tbody>
                {employeeData.length > 0 &&
                  <>
                    <tr>
                      <td className='pdf-req-sec'>
                        <table>
                          <tr>
                            <td>
                              <p className='pdf-req-sec-head'>Created by</p>
                              <p className='pdf-req-sec-data'>{employeeData[0].POIUSR}</p>
                            </td>
                          </tr>
                        </table>

                      </td>

                      <td className="pdf-po-type">
                        <table>
                          <tr>
                            <td>
                              <p className='pdf-req-sec-head pdf-req-sec-headss'>PO Number </p>
                              <p className='pdf-req-sec-data pdf-req-sec-datass'>: {poData.ponum}</p>
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
                  <td className='pdf-req-sec'>
                    <table>
                      <tr>
                        <td>
                          <p className='pdf-req-sec-head'>Control #</p>
                          <p className='pdf-req-sec-data'></p>
                        </td>
                      </tr>
                    </table>

                  </td>
                  {poData != null &&
                    <>
                      <td className="pdf-po-type">
                        <table>
                          <tr>
                            <td>
                              <p className='pdf-req-sec-head pdf-req-sec-headss po-desc-sec'>PO Document </p>
                              <p className='pdf-req-sec-data pdf-req-sec-datass'>: {poData.podoc}</p>
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
                <tr><th class="pf-sl pdf-check-name pdf-qty pdf-po-quntity-new pdf-po-qty-newssa">Qty.</th>
                  <th class="pf-wl pdf-check-emp pdf-units pdf-unit-unitssa">Unit</th>
                  <th class="pf-date pdf-check-date pdf-descs pdf-descption pdf-desc-newss pdf-descssa">PO Description</th>
                  <th class="pf-date pdf-check-date pdf-descs  pdf-po-account-new  pdf-po-account-newss pdf-accont-numbssa">Account Number</th>
                  <th class="pf-date pdf-check-date pdf-prices price-right pdf-pricessa">Price</th>
                  <th class="pf-date pdf-check-date pdf-extend-prcs price-right pdf-extenssa">Extended Price</th>
                </tr>
              </thead>
              {
                allpodeat.length > 0 && (
                  <>
                    {allpodeat.map((entry, index) => (

                      <tr>
                        <td class="border-right ">{(entry.POLQTY)}</td>
                        <td class="border-right">{cleanedValue(entry.POLUM)}</td>
                        <td class="border-right">{(entry.POLDES)}
                        </td>
                        <td class="border-right">
                          <p>{formatValue(cleanedValue((entry.POLACT)))}</p>
                        </td>
                        <td className='price-right-data'> {dollarUS.format(entry.POLCST)}</td>
                        <td className='price-right-data'>{dollarUS.format((entry.POLCST * entry.POLQTY))}</td>
                      </tr>

                    ))}



                  </>
                )
              }




              <tr className='border-sec'>
                <td class="border-right "></td>
                <td class="border-right"></td>
                <td class="border-right"></td>
                <td class="border-right"></td>
                <td className='price-right-data'></td>
                <td className='price-right-data border-price-line'>
                  <div class="top-border"></div>
                  {dollarUS.format(showAll)}</td>
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