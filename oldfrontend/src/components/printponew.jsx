import React, { useContext, useState, useEffect } from 'react';
const Printponew = () => {

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




        <div className="conatiner-pdf-new " style={styles.pageBreak}>
          <div className="pdf-section">
            <table style={{ width: '100%', marginTop: '15px' }} className='checktbnew'>
                <tr className='pdf-tr'>
                    <td colSpan="3  " class="pdf-header pdf-logos po-new-heading  pdf-td-top">
                         <h1>This is A Requisition, Not An Actual PO </h1></td>
                </tr>
                 <tr >
                
                <div className='pdf-sec-head'>
                    <div  colSpan="3" className='pdf-td-top pdf-td-bottm'>
                        <div className='pdf-header-left'>
                        <p>24-007642</p>
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

              <tr>
                <td colSpan="1" class="pdf-header pdf-logos">
                    <div className='pdf-vendor-num'>
                        <p>Ventor # <span>  1959</span></p>
                    </div>
                  

                  <div className='pdf-header-right pdf-header-rightss'>
                    <p>Date <span>  01/01/2024</span></p>
                 
                  </div>
                </td>
               
              </tr>
              {/* <tr>
                <td colSpan="3" className="reqid-sec reqid-sec-pdf padding-top-pdf   head-check" >

                  Statement of Earnings and Deductions
                </td>

              </tr> */}

            </table>

             <table style={{ width: '100%', marginTop: '0px' }} className='checktbnew'>

              <tr>
                <td colSpan="2" class="pdf-header pdf-logos">
                    <div className='pdf-vendor-num psd-addr-left'>
                        <p className='head-talic'>Vendor: </p>
                            <p>DCI TECHNOLOGY SOLUTIONS, LLC  </p>
                             <p>45 COLUMBIA ROAD</p>
                             <p>BRANCHBURG, NJ 08876</p>
                    </div>
                  

                  <div colSpan="2" className='pdf-header-right psd-addr-right'>
                  <p className='head-talic'>Ship To: </p>
                    <p>Attn To : Debasis Gupta</p>
                    <p>BUSINESS TECHNOLOGY ROOM</p>
                    <p>BDEBASIS GUPTA RM 717</p>
                    <p>346 CLAREMONT AVE</p>
                    <p>JERSEY SITY, NJ 07305</p>
                 
                  </div>
                </td>
               
              </tr>

            </table>
            <table className='pdf-table-data' style={{ width: '100%', marginTop: '15px' }}>
                <tbody>
                    <tr>
                        <td className='pdf-req-sec'>
                            <table>
                                <tr>
                                    <td>
                                        <p className='pdf-req-sec-head'>Requested by</p>
                                        <p className='pdf-req-sec-data'>GRANT20477C075</p>
                                    </td>
                                </tr>
                            </table>

                        </td>

                          <td className="pdf-po-type">
                                <table>
                                <tr>
                                    <td>
                                        <p className='pdf-req-sec-head pdf-req-sec-headss'>PO Type = </p>
                                        <p className='pdf-req-sec-data pdf-req-sec-datass'>State Contract</p>
                                    </td>
                                </tr>
                            </table>
                            
                        </td>
                    </tr>
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

                          <td className="pdf-po-type">
                                <table>
                                <tr>
                                    <td>
                                        <p className='pdf-req-sec-head pdf-req-sec-headss po-desc-sec'>PO Description </p>
                                        <p className='pdf-req-sec-data pdf-req-sec-datass'></p>
                                    </td>
                                </tr>
                            </table>
                            
                        </td>
                    </tr>
                </tbody>
            </table>

            <table class="table-status table-new-pdf-tab" style={{width: '100%',marginTop:'15px'}}>
                <thead>
                    <tr><th class="pf-sl pdf-check-name pdf-qty">Qty.</th>
                <th class="pf-wl pdf-check-emp pdf-units">Unit</th>
                <th class="pf-date pdf-check-date pdf-descs">Print Description</th>
                 <th class="pf-date pdf-check-date pdf-prices price-right">Price</th>
                  <th class="pf-date pdf-check-date pdf-extend-prcs price-right">Extended Price</th>
                </tr>
                </thead>
                <tr>
                    <td class="border-right ">556</td>
                    <td class="border-right">EA.</td>
                    <td class="border-right">Centralize Ink & Supplies 
                        HP Value Point Contract#MNNVP-133/PA M0483
                        NJ Naspo Value point Contract #89974
                        </td>
                        <td className='price-right-data'> 45.0000</td>
                        <td  className='price-right-data'>25,020.00</td>
                    </tr>

                     <tr>
                    <td class="border-right ">556</td>
                    <td class="border-right">Each.</td>
                    <td class="border-right">N.J. SCHOOL BOARDS CONVENTION

                        </td>
                        <td className='price-right-data'> 45.0000</td>
                        <td  className='price-right-data'>25,020.00</td>
                    </tr>

                      <tr className='border-sec'>
                    <td class="border-right "></td>
                    <td class="border-right"></td>
                    <td class="border-right"></td>
                        <td className='price-right-data'></td>
                        <td  className='price-right-data border-price-line'>
                            <div class="top-border"></div>
                            $50,040.00</td>
                    </tr>

                    <tr>
                        <td colSpan={5}>
                            <p className='pdf-req-sec-head data-total-val'>36588/20-487-100-500-075-00-0000-($50,040.00)</p>
                        </td>
                    </tr>
                  
                          
                          </table>

<div className='print-footer'>
              <table>
                    <thead>
                        <tr>
                            <th className='pdf-admins-sec'>Administartor Approval:</th>
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

export default Printponew;
