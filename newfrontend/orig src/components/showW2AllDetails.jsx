import React, { useState, useEffect } from 'react';
import PrintIcon from '@mui/icons-material/Print';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import { Link } from "react-router-dom";

const showW2AllDetails = () => {
  return (
   <>
    <div className='main-inner-sec content-main'>

          <div class=" emp-main-heading-emp show-margn-more">
          <div class="main-heading-sec ">
            
            <div class="col-md-12">
              <div class="head-inner">
                
                <h2>W2 Details</h2>
                <div class="head-right">
                  <span className='print-icon show-prnt'  ><PrintIcon /></span>
                  {/* <button class="btn btn-submit btn-clear" onClick={(e) => handleClearFilter()}>Clear Filter</button> */}
                </div>
              </div>
            </div>
            <div className='back-sec'>
            <Link to="/" className="back-btn-sec back-news"><KeyboardDoubleArrowLeftIcon />Back</Link>
            </div>
          </div>
        </div>

        <div className='show-detail-sec'>
             <div className="emp-table-sec">

                 <div className='form-table-sec emp-table-inner form-show-ws-main'>
                    <div className='row'>
                       

                    <div className='col-md-12' >
                        <div className='search-sec-pay payroll-deatil-inner show-ws-details mid-ws-details'>
                    
                        <div className='payroll-details-data ws-all-details margin-ws'>
                            <h3>Employer</h3>
                            <p>Jersey City Board of Education</p>
                        </div>
                        <div className='payroll-details-data ws-all-details margin-ws'>
                            <h3>Employer EIN</h3>
                            <p>226002012</p>
                        </div>
                        <div className='payroll-details-data ws-all-details margin-ws'>
                            <h3>Employer Address</h3>
                            <p>346 Claremont Avenue </p>
                        </div>
                        <div className='payroll-details-data ws-all-details margin-ws'>
                            <h3>Employer City/State/Zip</h3>
                            <p>Jersey City, NJ  073051634</p>
                        </div>
                       
                        </div>
                    
                    </div>

                    </div>
                
                </div>



                <div className='form-table-sec emp-table-inner form-show-ws-main'>
                    <div className='row'>

                    <div className='col-md-12' >
                        <div className='search-sec-pay payroll-deatil-inner show-ws-details'>
                    
                        
                        <div className='payroll-details-data ws-details margin-ws'>
                            <h3>Employee Name</h3>
                            <p>RIVERO, JOHN J</p>
                        </div>
                        <div className='payroll-details-data ws-details margin-ws'>
                            <h3>Employee Id</h3>
                            <p>10415 </p>
                        </div>
                        <div className='payroll-details-data ws-details margin-ws'>
                            <h3> Employee's SSN </h3>
                            <p>123456789</p>
                        </div>
                        <div className='payroll-details-data ws-details margin-ws'>
                            <h3>LIN</h3>
                            <p>2</p>
                        </div>

                        <div className='payroll-details-data ws-details margin-ws'>
                            <h3>Address</h3>
                            <p>185 WEBSTER AVENUE</p>
                        </div>

                        <div className='payroll-details-data ws-details margin-ws'>
                            <h3>Address 1</h3>
                            <p>UNIT 3C</p>
                        </div>

                        <div className='payroll-details-data ws-details margin-ws'>
                            <h3>City, State,Zip</h3>
                            <p>JERSEY CITY, NJ 239</p>
                        </div>

                       
                       
                       
                        </div>
                    
                    </div>

                    </div>
                
                </div>

                  <div className="year-show-data">
                    <p>Year 2022</p>
                </div>

                 <div className='row margin-top-po-table margin-top-ws-main'>
                                    {/* table section start from here */}
                                    <div className='col-md-6'>
                                        <div class="table-main-sec diff-po-table">
                                            <table className='table table-sec tabl-ws-details'>
                                                <tbody class="tbody-light tbody-po-light tbody-left-po">
                                                    <tr>
                                                        <th><p className='num-sec'>1.</p><p className='num-valu'>Wages, tips</p></th>
                                                        <td class="value-table">
                                                            <p>$40,480.52</p>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th><p className='num-sec'>3.</p><p className='num-valu'>Social security wages</p></th>
                                                        <td class="value-table">
                                                            <p>$43,284.51 </p>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <th><p className='num-sec'>5.</p><p className='num-valu'>Medicare wages and tips</p></th>
                                                        <td class="value-table">
                                                            <p>$43,284.64</p>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th><p className='num-sec'>7.</p><p className='num-valu'>Social security tips</p></th>
                                                        <td class="value-table">
                                                            <p>$0.0</p>


                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <th><p className='num-sec'>10.</p><p className='num-valu'>Dependent care benefits</p></th>
                                                        <td class="value-table">
                                                            <p>$0.0</p>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th><p className='num-sec'>12a.</p><p className='num-valu'>403B</p></th>
                                                        <td class="value-table">
                                                            <p>$0.0</p>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <th><p className='num-sec'>12c.</p><p className='num-valu'></p></th>
                                                        <td class="value-table">
                                                            <p>$0.0</p>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th><p className='num-sec'>13.</p><p className='num-valu'>Retirement</p></th>
                                                        <td class="value-table">
                                                            <p>X</p>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <th><p className='num-sec'>14.</p><p className='num-valu'>Other WD/HC</p></th>
                                                        <td class="value-table">
                                                            <p></p>
                                                        </td>
                                                    </tr>
                                                     <tr>
                                                        <th><p className='num-sec'>14.</p><p className='num-valu'>Other</p></th>
                                                        <td class="value-table">
                                                            <p></p>
                                                        </td>
                                                    </tr>

                                                     <tr>
                                                        <th><p className='num-sec'>15.</p><p className='num-valu'>State</p></th>
                                                        <td class="value-table">
                                                            <p>NEW JERSEY</p>
                                                        </td>
                                                    </tr>
                                                        <tr>
                                                        <th><p className='num-sec'>15.</p><p className='num-valu'>State-2</p></th>
                                                        <td class="value-table">
                                                            <p></p>
                                                        </td>
                                                    </tr>

                                                     <tr>
                                                        <th><p className='num-sec'>16.</p><p className='num-valu'>State wages, tips, etc.</p></th>
                                                        <td class="value-table">
                                                            <p>$43,523.64</p>
                                                        </td>
                                                    </tr>

                                                     <tr>
                                                        <th><p className='num-sec'>18.</p><p className='num-valu'>Local wages, tips, etc.</p></th>
                                                        <td class="value-table">
                                                            <p>$43,523.64</p>
                                                        </td>
                                                    </tr>

                                                     <tr>
                                                        <th><p className='num-sec'>20.</p><p className='num-valu'>Local Name</p></th>
                                                        <td class="value-table">
                                                            <p></p>
                                                        </td>
                                                    </tr>

                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                    <div className='col-md-6'>
                                        <div class="table-main-sec diff-po-table">
                                            <table className='table table-sec show-right-po'>
                                                <tbody class="tbody-light tbody-po-light">
                                                    <tr>
                                                        <th><p className='num-sec'>2.</p><p className='num-valu'>Federal income tax withheld</p></th>
                                                        <td class="value-table">
                                                            <p>$40,480.52</p>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th><p className='num-sec'>4.</p><p className='num-valu'>Social security tax withheld</p></th>
                                                        <td class="value-table">
                                                            <p>$2,683.64</p>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <th><p className='num-sec'>6.</p><p className='num-valu'>Medicare tax withheld</p></th>
                                                        <td class="value-table">
                                                            <p>$627.55</p>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th><p className='num-sec'>8.</p><p className='num-valu'>Allocated tips</p></th>
                                                        <td class="value-table">
                                                            <p>$0.0</p>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <th><p className='num-sec'>11.</p><p className='num-valu'>Nonqualified plans</p></th>
                                                        <td class="value-table">
                                                            <p>$0.0</p>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th><p className='num-sec'>12b.</p><p className='num-valu'></p></th>
                                                        <td class="value-table">
                                                            <p>$0.0</p>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <th><p className='num-sec'>12d.</p><p className='num-valu'></p></th>
                                                        <td class="value-table">
                                                            <p> $0.0</p>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th><p className='num-sec'>14.</p><p className='num-valu'>Other 414G</p></th>
                                                        <td class="value-table">
                                                            <p>$1,243.12 </p>
                                                        </td>
                                                    </tr>

                                                     <tr>
                                                        <th><p className='num-sec'>14.</p><p className='num-valu'>Other </p></th>
                                                        <td class="value-table">
                                                            <p>$0.0</p>
                                                        </td>
                                                    </tr>
                                                      <tr>
                                                        <th><p className='num-sec'>14.</p><p className='num-valu'>Other </p></th>
                                                        <td class="value-table">
                                                            <p></p>
                                                        </td>
                                                    </tr>

                                                     <tr>
                                                        <th><p className='num-sec square-sec'></p><p className='num-valu'>Employer's state Id no.</p></th>
                                                        <td class="value-table">
                                                            <p>12345-00-3 </p>
                                                        </td>
                                                    </tr>
                                                     <tr>
                                                        <th><p className='num-sec'>15</p><p className='num-valu'>State Id</p></th>
                                                        <td >
                                                            <p> </p>
                                                        </td>
                                                    </tr>

                                                     <tr>
                                                        <th><p className='num-sec'>17.</p><p className='num-valu'>State income tax</p></th>
                                                        <td class="value-table">
                                                            <p>$956.02</p>
                                                        </td>
                                                    </tr>

                                                     <tr>
                                                        <th><p className='num-sec'>19.</p><p className='num-valu'>Local income tax</p></th>
                                                        <td class="value-table">
                                                            <p>$0.0</p>
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

    </div>

  </>
  )
}

export default showW2AllDetails;

