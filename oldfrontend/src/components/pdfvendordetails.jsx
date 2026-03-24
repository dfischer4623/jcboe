import React, { useState, useEffect } from 'react';



import logoimg from "../assets/img/logob.png";


import secureLocalStorage from "react-secure-storage";
import {
  useNavigate
} from "react-router-dom";
import axios from 'axios';
import { AppContext } from '../context';


function Pdf() {
  const [VendorData, setVendorData] = useState([]);
  const [poData, setPoData] = useState({});

  let navigate = useNavigate();
  useEffect(() => {
    var userid = secureLocalStorage.getItem('VendorDataprint');

  

    console.log('userid', userid);
    if ((userid) == null || (userid) == undefined) {


      navigate(`/posearch`);

    } else {
      console.log(userid);
      setVendorData(userid[0]);
    



    }
    setTimeout(function () {
      triggerPrint();
    }, 1000);
  }, []);
  const triggerPrint = () => {



    document.title = 'Vendor Details';


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

let percentageUS = Intl.NumberFormat("en-US", {
    style: "percent",
    minimumFractionDigits: 4,
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
  return (
    <>

      <div className='conatiner-pdfss' style={styles.body}>
      
      {VendorData!=null &&
        <>

<div className="conatiner-pdf " style={styles.pageBreak}>
              <div className="pdf-section">
                <table style={{ width: '100%', marginTop: '10px'}}>

                  <tr>
                    <td colSpan="2" class="pdf-header">
                      <img src={logoimg} />
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="1" className="reqid-sec reqid-sec-pdf padding-top-pdf pdf-vend-deta"  >
                      Vendor Data
                    </td>

                  </tr>
                  
                </table>

                <table className="general-sec-pdf po-pdf-margin">
                    <tbody>
                      <tr>
                        <td className="main-gen-inner">
                          <table style={{ width: '100%' }}>
                            <tbody><tr>
                              <td className="main-gen-width"><b>Vendor Number:</b></td>
                              <td className="pdf-data"> {VendorData.VNNO}
                              </td>
                            </tr>
                            </tbody></table>
                        </td>
                        <td className="main-gen-inner">
                          <table style={{ width: '100%' }}>
                            <tbody>
                              <tr>
                                <td className="main-gen-width ">
                                  <b>Related to Vendor group:</b>
                                </td>
                                <td className="pdf-data">{VendorData.VNREL}</td>
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
                                <b>Vendor Name:</b></td>
                              <td className="pdf-data">
                              {VendorData.VNNAME}
                              
                              </td>
                            </tr>
                          </table>
                        </td>
                        <td className="main-gen-width main-margin">
                          <table style={{ width: '100%', marginBottom: '5px' }}>
                            <tr>
                              <td className="main-gen-width">
                                <b>Remit To (If Different):</b>
                              </td>
                              <td className="pdf-data">   {/* N/A */} </td>
                            </tr>
                          </table>
                        </td>
                      </tr>



                      <tr>
                        <td className="main-gen-width">
                          <table style={{ width: '100%', marginBottom: '5px' }}>
                            <tr>
                              <td className="main-gen-width">
                                </td>
                              <td className="pdf-data">
                              {VendorData.VNNAM2}
                               
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
                              <td className="pdf-data">  {VendorData.VNRMAT}</td>
                            </tr>
                          </table>
                        </td>
                      </tr>

                      <tr>
                        <td className="main-gen-width">
                          <table style={{ width: '100%', marginBottom: '5px' }}>
                            <tr>
                              <td className="main-gen-width">
                                <b>Address:</b></td>
                              <td className="pdf-data">
                              {VendorData.VNADDR} {VendorData.VNADD2}
                                
                              </td>
                            </tr>
                          </table>
                        </td>
                        <td className="main-gen-width">
                          <table style={{ width: '100%', marginBottom: '5px' }}>
                            <tr>
                              <td className="main-gen-width">
                                
                              </td>
                              <td className="pdf-data">  {VendorData.VNRMA1} {VendorData.VNRMA2} </td>
                            </tr>
                          </table>
                        </td>
                      </tr>

                      <tr>
                        <td className="main-gen-width">
                          <table style={{ width: '100%', marginBottom: '5px' }}>
                            <tr>
                              <td className="main-gen-width">
                                <b>City State Zip:</b></td>
                              <td className="pdf-data">
                              {VendorData.VNCITY}, {VendorData.VNST} {VendorData.VNZIP}
                                
                              </td>
                            </tr>
                          </table>
                        </td>
                        <td className="main-gen-width">
                          <table style={{ width: '100%', marginBottom: '5px' }}>
                            <tr>
                              <td className="main-gen-width">
                                
                              </td>
                              <td className="pdf-data">    {VendorData.VNRMCT}, {VendorData.VNRMST} {VendorData.VNRMZ1} </td>
                            </tr>
                          </table>
                        </td>
                      </tr>

                      <tr>
                        <td className="main-gen-width">
                          <table style={{ width: '100%', marginBottom: '5px' }}>
                            <tr>
                              <td className="main-gen-width">
                                <b>Province:</b></td>
                              <td className="pdf-data">
                              {VendorData.VNPROV} <strong>P/C</strong> {VendorData.VNPC}
                                
                              </td>
                            </tr>
                          </table>
                        </td>
                        <td className="main-gen-width">
                          <table style={{ width: '100%', marginBottom: '5px' }}>
                            <tr>
                              <td className="main-gen-width">
                                
                              </td>
                              <td className="pdf-data">    {VendorData.VNRMPR} <strong>P/C</strong> {VendorData.VNRMPC} </td>
                            </tr>
                          </table>
                        </td>
                      </tr>

                      <tr>
                        <td className="main-gen-width">
                          <table style={{ width: '100%', marginBottom: '5px' }}>
                            <tr>
                              <td className="main-gen-width">
                                <b>Phone:</b></td>
                              <td className="pdf-data">
                              ({VendorData.VNAREA}) {VendorData.VNPHON}
                                
                              </td>
                            </tr>
                          </table>
                        </td>
                        <td className="main-gen-width">
                          <table style={{ width: '100%', marginBottom: '5px' }}>
                            <tr>
                              <td className="main-gen-width">
                                <b>Shipping terms:</b>
                              </td>
                              <td className="pdf-data">   {VendorData.VNSHIP} </td>
                            </tr>
                          </table>
                        </td>
                      </tr>

                      <tr>
                        <td className="main-gen-width">
                          <table style={{ width: '100%', marginBottom: '5px' }}>
                            <tr>
                              <td className="main-gen-width">
                                <b>Vendor's Usual Terms:</b></td>
                              <td className="pdf-data">
                             <p></p>
                                
                              </td>
                            </tr>
                          </table>
                        </td>
                        <td className="main-gen-width">
                          <table style={{ width: '100%', marginBottom: '5px' }}>
                            <tr>
                              <td className="main-gen-width">
                                <b>Payment terms:</b>
                              </td>
                              <td className="pdf-data"> {VendorData.VNPMT}</td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      
                      <tr>
                        <td className="main-gen-width">
                          <table style={{ width: '100%', marginBottom: '5px' }}>
                            <tr>
                              <td className="main-gen-width">
                                <b>Cash Discount:</b></td>
                              <td className="pdf-data">
                                <p>{percentageUS.format(VendorData.VNCASH)}</p>
                                
                              </td>
                            </tr>
                          </table>
                        </td>
                        <td className="main-gen-width">
                          <table style={{ width: '100%', marginBottom: '5px' }}>
                            <tr>
                              <td className="main-gen-width">
                                <b>Recipient Number:</b>
                              </td>
                              <td className="pdf-data"> {VendorData.VN10RF}</td>
                            </tr>
                          </table>
                        </td>
                      </tr>

  
                      <tr>
                        <td className="main-gen-width">
                          <table style={{ width: '100%', marginBottom: '5px' }}>
                            <tr>
                              <td className="main-gen-width">
                                <b>Trade Discount:</b></td>
                              <td className="pdf-data">
                                <p>{percentageUS.format(VendorData.VNTRAD)}</p>
                                
                              </td>
                            </tr>
                          </table>
                        </td>
                        <td className="main-gen-width">
                          <table style={{ width: '100%', marginBottom: '5px' }}>
                            <tr>
                              <td className="main-gen-width">
                                <b>Open orders:</b>
                              </td>
                              <td className="pdf-data"> {dollarUS.format(VendorData.VNENC)}</td>
                            </tr>
                          </table>
                        </td>
                      </tr>

                      <tr>
                        <td className="main-gen-width">
                          <table style={{ width: '100%', marginBottom: '5px' }}>
                            <tr>
                              <td className="main-gen-width">
                                <b>Minimum Order $:</b></td>
                              <td className="pdf-data">
                                <p>{dollarUS.format(VendorData.VNMIN)}</p>
                                
                              </td>
                            </tr>
                          </table>
                        </td>
                        <td className="main-gen-width">
                          <table style={{ width: '100%', marginBottom: '5px' }}>
                            <tr>
                              <td className="main-gen-width">
                                <b>Unpaid Invoice:</b>
                              </td>
                              <td className="pdf-data"> {dollarUS.format(VendorData.VNACCR)}</td>
                            </tr>
                          </table>
                        </td>
                      </tr>

                      
                      <tr>
                        <td className="main-gen-width">
                          <table style={{ width: '100%', marginBottom: '5px' }}>
                            <tr>
                              <td className="main-gen-width">
                                <b>Hold new orders ?:</b></td>
                              <td className="pdf-data">
                                <p>N__BIZ  DIS  BID</p>
                                
                              </td>
                            </tr>
                          </table>
                        </td>
                        <td className="main-gen-width">
                          <table style={{ width: '100%', marginBottom: '5px' }}>
                            <tr>
                              <td className="main-gen-width">
                                <b>Volume this year:</b>
                              </td>
                              <td className="pdf-data">{dollarUS.format(VendorData.VNCUR)}</td>
                            </tr>
                          </table>
                        </td>
                      </tr>

                      <tr>
                        <td className="main-gen-width">
                          <table style={{ width: '100%', marginBottom: '5px' }}>
                            <tr>
                              <td className="main-gen-width">
                                <b>Hold payments ?:</b></td>
                              <td className="pdf-data">
                                <p>N___N___N___N</p>
                                
                              </td>
                            </tr>
                          </table>
                        </td>
                        <td className="main-gen-width">
                          <table style={{ width: '100%', marginBottom: '5px' }}>
                            <tr>
                              <td className="main-gen-width">
                                <b>Volume last year:</b>
                              </td>
                              <td className="pdf-data">  {dollarUS.format(VendorData.VNPRI)}</td>
                            </tr>
                          </table>
                        </td>
                      </tr>

                      
                      <tr>
                        <td className="main-gen-width">
                          <table style={{ width: '100%', marginBottom: '5px' }}>
                            <tr>
                              <td className="main-gen-width">
                                <b>Maximum Payable without P/O:</b></td>
                              <td className="pdf-data">
                              <p>{dollarUS.format(VendorData.VNNOPO)}</p>
                                
                              </td>
                            </tr>
                          </table>
                        </td>
                        <td className="main-gen-width">
                          <table style={{ width: '100%', marginBottom: '5px' }}>
                            <tr>
                              <td className="main-gen-width">
                                <b>Box Number if 1099 Vendor:</b>
                              </td>
                              <td className="pdf-data"> <p></p></td>
                            </tr>
                          </table>
                        </td>
                      </tr>

                       
                      <tr>
                        <td className="main-gen-width">
                          <table style={{ width: '100%', marginBottom: '5px' }}>
                            <tr>
                              <td className="main-gen-width">
                                <b>Payment Priority:</b></td>
                              <td className="pdf-data">
                              <p>{VendorData.VNPRY} (9 = Highest)</p>
                                
                              </td>
                            </tr>
                          </table>
                        </td>
                        <td className="main-gen-width">
                          <table style={{ width: '100%', marginBottom: '5px' }}>
                            <tr>
                              <td className="main-gen-width">
                                <b>1099 Volume</b>
                              </td>
                              <td className="pdf-data"> <p>{dollarUS.format(VendorData.VNCR10)}</p></td>
                            </tr>
                          </table>
                        </td>
                      </tr>

                      <tr>
                        <td className="main-gen-width">
                          <table style={{ width: '100%', marginBottom: '5px' }}>
                            <tr>
                              <td className="main-gen-width">
                                <b>Liability account keyword:</b></td>
                              <td className="pdf-data">
                              <p>{VendorData.VNACCT}</p>
                                
                              </td>
                            </tr>
                          </table>
                        </td>
                       
                      </tr>


                    </tbody>

                  </table>

                </div>
                </div>
        
           {/* <div className='emp-table-sec margin-top-po-table'>
                            <div className="emp-table-sec vendor-details-sec backg-shaw-main backg-detaisl form-detail-main border-top-sec margin-btm-vendtal">
                                <div className='emp-data-value-sec form-detail-inner'>
                                    <div className='row'>
                                        <div className=' form-detail-left vendor-detail-left pdf-vendor-left'>
                                            <div className='row'>

                                                <div className='form-detail-left-inner vebdor-details-left'>
                                                    <div className='form-details-label'>
                                                        <h3>Vendor Number</h3>
                                                        <p className='semicolon'>:</p>
                                                    </div>

                                                </div>
                                                <div className='form-detail-right-inner'>
                                                    <div className='form-details-value'>
                                                        <p>{VendorData.VNNO}</p>
                                                    </div>

                                                </div>
                                            </div>

                                            <div className='row'>
                                                <div className='form-detail-left-inner vebdor-details-left'>
                                                    <div className='form-details-label'>
                                                        <h3>Vendor Name</h3>
                                                        <p className='semicolon'>:</p>
                                                    </div>

                                                </div>
                                                <div className='form-detail-right-inner'>
                                                    <div className='form-details-value'>
                                                        <p>{VendorData.VNNAME}  </p>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className='form-detail-left-inner vebdor-details-left'>
                                                    <div className='form-details-label'>
                                                        <h3></h3>
                                                        <p className='semicolon'>:</p>
                                                    </div>

                                                </div>
                                                <div className='form-detail-right-inner'>
                                                    <div className='form-details-value'>
                                                        <p> {VendorData.VNNAM2} </p>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className='form-detail-left-inner vebdor-details-left'>
                                                    <div className='form-details-label'>
                                                        <h3>Address
                                                        </h3>
                                                        <p className='semicolon'>:</p>
                                                    </div>

                                                </div>
                                                <div className='form-detail-right-inner'>
                                                    <div className='form-details-value'>
                                                        <p>{VendorData.VNADDR} {VendorData.VNADD2} </p>
                                                    </div>

                                                </div>
                                            </div>

                                            <div className='row'>
                                                <div className='form-detail-left-inner vebdor-details-left'>
                                                    <div className='form-details-label'>
                                                        <h3>City State Zip
                                                        </h3>
                                                        <p className='semicolon'>:</p>
                                                    </div>

                                                </div>
                                                <div className='form-detail-right-inner'>
                                                    <div className='form-details-value'>
                                                        <p>{VendorData.VNCITY}, {VendorData.VNST} {VendorData.VNZIP}</p>
                                                    </div>

                                                </div>
                                            </div>

                                            <div className='row'>
                                                <div className='form-detail-left-inner vebdor-details-left'>
                                                    <div className='form-details-label'>
                                                        <h3>Province
                                                        </h3>
                                                        <p className='semicolon'>:</p>
                                                    </div>

                                                </div>
                                                <div className='form-detail-right-inner'>
                                                    <div className='form-details-value'>
                                                        <p>{VendorData.VNPROV} <strong>P/C</strong> {VendorData.VNPC}</p>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className='form-detail-left-inner vebdor-details-left'>
                                                    <div className='form-details-label'>
                                                        <h3>Phone
                                                        </h3>
                                                        <p className='semicolon'>:</p>
                                                    </div>

                                                </div>
                                                <div className='form-detail-right-inner'>
                                                    <div className='form-details-value'>
                                                        <p>({VendorData.VNAREA}) {VendorData.VNPHON}</p>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className='form-detail-left-inner vebdor-details-left'>
                                                    <div className='form-details-label'>
                                                        <h3>Vendor's Usual Terms
                                                        </h3>
                                                        <p className='semicolon'>:</p>
                                                    </div>

                                                </div>
                                                <div className='form-detail-right-inner'>
                                                    <div className='form-details-value'>
                                                        <p></p>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className='form-detail-left-inner vebdor-details-left'>
                                                    <div className='form-details-label'>
                                                        <h3>Cash Discount
                                                        </h3>
                                                        <p className='semicolon'>:</p>
                                                    </div>

                                                </div>
                                                <div className='form-detail-right-inner'>
                                                    <div className='form-details-value'>
                                                        <p>{percentageUS.format(VendorData.VNCASH)}</p>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className='form-detail-left-inner vebdor-details-left'>
                                                    <div className='form-details-label'>
                                                        <h3>Trade Discount
                                                        </h3>
                                                        <p className='semicolon'>:</p>
                                                    </div>

                                                </div>
                                                <div className='form-detail-right-inner'>
                                                    <div className='form-details-value'>
                                                        <p>{percentageUS.format(VendorData.VNTRAD)}</p>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className='form-detail-left-inner vebdor-details-left'>
                                                    <div className='form-details-label'>
                                                        <h3>Minimum Order $
                                                        </h3>
                                                        <p className='semicolon'>:</p>
                                                    </div>

                                                </div>
                                                <div className='form-detail-right-inner'>
                                                    <div className='form-details-value'>
                                                        <p>{dollarUS.format(VendorData.VNMIN)}</p>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className='form-detail-left-inner vebdor-details-left'>
                                                    <div className='form-details-label'>
                                                        <h3>Hold new orders ?
                                                        </h3>
                                                        <p className='semicolon'>:</p>
                                                    </div>

                                                </div>
                                                <div className='form-detail-right-inner'>
                                                    <div className='form-details-value'>
                                                        <p>N__BIZ  DIS  BID</p>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className='form-detail-left-inner vebdor-details-left'>
                                                    <div className='form-details-label'>
                                                        <h3>Hold payments ?
                                                        </h3>
                                                        <p className='semicolon'>:</p>
                                                    </div>

                                                </div>
                                                <div className='form-detail-right-inner'>
                                                    <div className='form-details-value'>
                                                        <p>N___N___N___N</p>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className='form-detail-left-inner last-right-data vebdor-details-left'>
                                                    <div className='form-details-label'>
                                                        <h3>Maximum Payable without P/O
                                                        </h3>
                                                        <p className='semicolon'>:</p>
                                                    </div>

                                                </div>
                                                <div className='form-detail-right-inner'>
                                                    <div className='form-details-value'>
                                                        <p>{dollarUS.format(VendorData.VNNOPO)}</p>
                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                        <div className='form-detail-midle vendor-detail-middle pdf-vendor-midle'>
                                            <div className='border-after'></div>
                                        </div>
                                        <div className=' form-detail-right vedor-detail-right pdf-vendor-right'>

                                            <div className='row'>
                                                <div className='form-detail-left-innerss vebdor-details-left'>
                                                    <div className='form-details-label'>
                                                        <h3>Payment Priority</h3>
                                                        <p className='semicolon'>:</p>
                                                    </div>

                                                </div>
                                                <div className='form-detail-right-innerss'>
                                                    <div className='form-details-value'>
                                                        <p>{VendorData.VNPRY} (9 = Highest)</p>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className='form-detail-left-innerss vebdor-details-left'>
                                                    <div className='form-details-label'>
                                                        <h3>Liability account keyword</h3>
                                                        <p className='semicolon'>:</p>
                                                    </div>

                                                </div>
                                                <div className='form-detail-right-innerss'>
                                                    <div className='form-details-value'>
                                                        <p>{VendorData.VNACCT}</p>
                                                    </div>

                                                </div>
                                            </div>
                                          
                                            <div className='row'>
                                                <div className='form-detail-left-innerss vebdor-details-left'>
                                                    <div className='form-details-label'>
                                                        <h3>Related to Vendor group</h3>
                                                        <p className='semicolon'>:</p>
                                                    </div>

                                                </div>
                                                <div className='form-detail-right-innerss'>
                                                    <div className='form-details-value'>
                                                        <p>{VendorData.VNREL}</p>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className='form-detail-left-innerss vebdor-details-left'>
                                                    <div className='form-details-label'>
                                                        <h3>Remit To (If Different)</h3>
                                                        <p className='semicolon'>:</p>
                                                    </div>

                                                </div>
                                                <div className='form-detail-right-innerss'>
                                                    <div className='form-details-value'>
                                                        <p>
                                                     
                                                        
                                                        </p>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className='form-detail-left-innerss vebdor-details-left'>
                                                    <div className='form-details-label'>
                                                        <h3></h3>
                                                        <p className='semicolon'>:</p>
                                                    </div>

                                                </div>
                                                <div className='form-detail-right-innerss'>
                                                    <div className='form-details-value'>
                                                        <p>
                                                        {VendorData.VNRMAT}
                                                        </p>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className='form-detail-left-innerss vebdor-details-left'>
                                                    <div className='form-details-label'>
                                                        <h3></h3>
                                                        <p className='semicolon'>:</p>
                                                    </div>

                                                </div>
                                                <div className='form-detail-right-innerss'>
                                                    <div className='form-details-value'>
                                                        <p>
                                                        {VendorData.VNRMA1} {VendorData.VNRMA2}
                                                        </p>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className='form-detail-left-innerss vebdor-details-left'>
                                                    <div className='form-details-label'>
                                                        <h3></h3>
                                                        <p className='semicolon'>:</p>
                                                    </div>

                                                </div>
                                                <div className='form-detail-right-innerss'>
                                                    <div className='form-details-value'>
                                                        <p>
                                                        {VendorData.VNRMCT}, {VendorData.VNRMST} {VendorData.VNRMZ1}
                                                        </p>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className='form-detail-left-innerss vebdor-details-left'>
                                                    <div className='form-details-label'>
                                                        <h3></h3>
                                                        <p className='semicolon'>:</p>
                                                    </div>

                                                </div>
                                                <div className='form-detail-right-innerss'>
                                                    <div className='form-details-value'>
                                                        <p>
                                                        {VendorData.VNRMPR} <strong>P/C</strong> {VendorData.VNRMPC}
                                                        </p>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className='form-detail-left-innerss vebdor-details-left'>
                                                    <div className='form-details-label'>
                                                        <h3>Shipping terms</h3>
                                                        <p className='semicolon'>:</p>
                                                    </div>

                                                </div>
                                                <div className='form-detail-right-innerss'>
                                                    <div className='form-details-value'>
                                                        <p>
                                                        {VendorData.VNSHIP}
                                                        </p>
                                                    </div>

                                                </div>
                                            </div>

                                            <div className='row'>
                                                <div className='form-detail-left-innerss vebdor-details-left'>
                                                    <div className='form-details-label'>
                                                        <h3>Payment terms</h3>
                                                        <p className='semicolon'>:</p>
                                                    </div>

                                                </div>
                                                <div className='form-detail-right-innerss'>
                                                    <div className='form-details-value'>
                                                        <p>
                                                        {VendorData.VNPMT}
                                                        </p>
                                                    </div>

                                                </div>
                                            </div>

                                            <div className='row'>
                                                <div className='form-detail-left-innerss vebdor-details-left'>
                                                    <div className='form-details-label'>
                                                        <h3>Recipient Number</h3>
                                                        <p className='semicolon'>:</p>
                                                    </div>

                                                </div>
                                                <div className='form-detail-right-innerss'>
                                                    <div className='form-details-value'>
                                                        <p>
                                                        {VendorData.VN10RF}
                                                        </p>
                                                    </div>

                                                </div>
                                            </div>

                                            <div className='row'>
                                                <div className='form-detail-left-innerss vebdor-details-left'>
                                                    <div className='form-details-label'>
                                                        <h3>Open orders</h3>
                                                        <p className='semicolon'>:</p>
                                                    </div>

                                                </div>
                                                <div className='form-detail-right-innerss'>
                                                    <div className='form-details-value'>
                                                        <p>
                                                        {dollarUS.format(VendorData.VNENC)}
                                                        </p>
                                                    </div>

                                                </div>
                                            </div>

                                            <div className='row'>
                                                <div className='form-detail-left-innerss vebdor-details-left'>
                                                    <div className='form-details-label'>
                                                        <h3>Unpaid Invoice</h3>
                                                        <p className='semicolon'>:</p>
                                                    </div>

                                                </div>
                                                <div className='form-detail-right-innerss'>
                                                    <div className='form-details-value'>
                                                        <p>
                                                        {dollarUS.format(VendorData.VNACCR)}
                                                        </p>
                                                    </div>

                                                </div>
                                            </div>

                                            <div className='row'>
                                                <div className='form-detail-left-innerss vebdor-details-left'>
                                                    <div className='form-details-label'>
                                                        <h3>Volume this year</h3>
                                                        <p className='semicolon'>:</p>
                                                    </div>

                                                </div>
                                                <div className='form-detail-right-innerss'>
                                                    <div className='form-details-value'>
                                                        <p>
                                                        {dollarUS.format(VendorData.VNCUR)}
                                                        </p>
                                                    </div>

                                                </div>
                                            </div>

                                            <div className='row'>
                                                <div className='form-detail-left-innerss vebdor-details-left'>
                                                    <div className='form-details-label'>
                                                        <h3>Volume last year  </h3>
                                                        <p className='semicolon'>:</p>
                                                    </div>

                                                </div>
                                                <div className='form-detail-right-innerss'>
                                                    <div className='form-details-value'>
                                                        <p>
                                                        {dollarUS.format(VendorData.VNPRI)}
                                                        </p>
                                                    </div>

                                                </div>
                                            </div>

                                            <div className='row'>
                                                <div className='form-detail-left-innerss vebdor-details-left'>
                                                    <div className='form-details-label'>
                                                        <h3>Box Number if 1099 Vendor</h3>
                                                        <p className='semicolon'>:</p>
                                                    </div>

                                                </div>
                                                <div className='form-detail-right-innerss'>
                                                    <div className='form-details-value'>
                                                        <p>
                                                            
                                                        </p>
                                                    </div>

                                                </div>
                                            </div>

                                            <div className='row'>
                                                <div className='form-detail-left-innerss last-right-data vebdor-details-left'>
                                                    <div className='form-details-label'>
                                                        <h3>1099 Volume</h3>
                                                        <p className='semicolon'>:</p>
                                                    </div>

                                                </div>
                                                <div className='form-detail-right-innerss'>
                                                    <div className='form-details-value'>
                                                        <p>
                                                        {dollarUS.format(VendorData.VNCR10)}
                                                        </p>
                                                    </div>

                                                </div>
                                            </div>




                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div> */
                        }
        </>

      }


    </div >
    </>
  )
}
export default Pdf
