import React, { useState, useEffect, } from 'react';
import PrintIcon from '@mui/icons-material/Print';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import { Link, useNavigate } from "react-router-dom";
import secureLocalStorage from "react-secure-storage";
import { showW2s } from '../actions/admin.actions';

const ShowW2Details = () => {


    const [expandedPanels, setExpandedPanels] = useState({
        panel1: true,
        panel2: true,
        panel3: true,
        panel4: true,
        panel5: true,
        panel6: true,
        panel7: true,
    });
    const [employeeData, setEmployeeData] = useState(null);
    const [firstLoading, setFirstLoading] = useState(true);
    const [w2sData, setw2sData] = useState([]);
    const [w2slistdata, setw2slistdata] = useState(null);
    const [w2sID, setw2ID] = useState(null);
    const handleChange = (panel) => (event, isExpanded) => {
        setExpandedPanels((prev) => ({
            ...prev,
            [panel]: isExpanded,
        }));
    };
    let navigate = useNavigate();
    useEffect(() => {
        var userid = secureLocalStorage.getItem('employeeData');



        if (Object.keys(userid).length === 0) {


            navigate(`/employeedata`);

        } else {

            console.log(userid);
            setEmployeeData(userid);
            var allprintnew = JSON.parse(window.localStorage.getItem('allw2deatisl'));;
            setw2slistdata(allprintnew);

            setw2ID(allprintnew.YEAR < 10 ? `200${allprintnew.YEAR}` : `20${allprintnew.YEAR}`);
            showW2s(allprintnew.YEAR, allprintnew.SSN, allprintnew.ESTB).then((res) => {

                if (res.data.length > 0) {
                    setw2sData(res.data);

                }


                setFirstLoading(false);

            }).catch(err => {
                setFirstLoading(false);
            });


        }

    }, []);
    let dollarUS = Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    });


    const exportTopdf = (e) => {





        localStorage.setItem("allw2sdetalnew", JSON.stringify(w2sData));
        window.open('printw2sdetails/', '_blank', 'noopener,noreferrer');




    };
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
    return (
        <>
            <div className='main-inner-sec content-main'>

                <div class=" emp-main-heading-emp show-margn-more">
                    <div class="main-heading-sec ">

                        <div class="col-md-12">
                            <div class="head-inner">
                                {w2sID != null &&
                                    <h2>W2 Details <span style={{ color: '#EC6800' }}>Year {w2sID}</span>  </h2>
                                }

                                <div class="head-right">
                                    <span className='print-icon show-prnt' onClick={(e) => exportTopdf()}><PrintIcon /></span>
                                    {/* <button class="btn btn-submit btn-clear" onClick={(e) => handleClearFilter()}>Clear Filter</button> */}
                                </div>
                            </div>
                        </div>
                        <div className='back-sec'>
                            <Link to="/W2s" className="back-btn-sec back-news"><KeyboardDoubleArrowLeftIcon />Back</Link>
                        </div>
                    </div>
                </div>

                <div className='show-detail-sec'>
                    <div className="emp-table-sec">
                        <div className='form-table-sec emp-table-inner form-show-ws-main'>
                            <div className='row'>


                                <div className='col-md-12' >
                                    <div className='search-sec-pay payroll-deatil-inner show-ws-details mid-ws-details new-marg-ws'>

                                        <div className='payroll-details-data ws-all-details margin-ws margin-ws-more'>
                                            <h3>Employer</h3>
                                            <p >Jersey City Board of Education</p>
                                        </div>
                                        {w2sData.length > 0 &&
                                            <>
                                                <div className='payroll-details-data ws-all-details margin-ws margin-ws-more'>
                                                    <h3>Employer EIN</h3>
                                                    <p>{w2sData[0].W2FEIN}</p>
                                                </div>
                                            </>


                                        }
                                        <div className='payroll-details-data ws-all-details margin-ws margin-ws-more'>
                                            <h3>Employer Address and Zipcode</h3>
                                            <p >346 Claremont Avenue, Jersey City, NJ 073051634</p>
                                        </div>
                                        <div className='payroll-details-data ws-all-details margin-ws margin-ws-more'>
                                            <h3> Control number</h3>
                                             <p style={{visibility:'hidden'}}>fbgn</p>
                                        </div>
                                        

                                    </div>

                                </div>

                            </div>

                        </div>
                        <div className='form-table-sec emp-table-inner form-show-ws-main'>
                            <div className='row'>




                                <div className='col-md-12' >
                                    <div className='search-sec-pay payroll-deatil-inner show-ws-details new-marg-ws'>
                                        {employeeData != null &&
                                            <>

                                                <div className='payroll-details-data  ws-all-details margin-ws margin-ws-more'>
                                                    <h3>Employee Name</h3>
                                                    <p>{employeeData.EMLNAM}, {employeeData.EMFNAM} {employeeData.EMMNAM}</p>
                                                </div>
                                                <div className='payroll-details-data  ws-all-details margin-ws margin-ws-more'>
                                                    <h3>Employee Id</h3>
                                                    <p> {employeeData.EMSSAN} </p>
                                                </div>

                                            </>
                                        }
                                        {w2sData.length > 0 &&
                                            <>
                                                {/* {w2sData.map((entry, index) => ( */}
                                                {/* <> */}
                                                <div className='payroll-details-data  ws-all-details margin-ws margin-ws-more'>
                                                    <h3> Employee's SSN </h3>
                                                    <p>{w2sData[0].W2SSN}</p>
                                                </div>


                                                {/* </> */}

                                                {/* ))} */}
                                            </>


                                        }

                                        {employeeData != null &&
                                            <>
                                                <div className='payroll-details-data  ws-all-details margin-ws margin-ws-more'>
                                                    <h3>Address and Zipcode</h3>
                                                    <p>{employeeData.EMADD1},   {employeeData.EMADD2}, {employeeData.EMCITY}, {employeeData.EMST} {normalizezip(employeeData.EMZIP1)}</p>
                                                </div>

                                                {/* <div className='payroll-details-data  ws-all-details margin-ws margin-ws-more'>
                                                    <h3>Address 1</h3>
                                                    <p>{employeeData.EMADD2}</p>
                                                </div> */}
{/* 
                                                <div className='payroll-details-data  ws-all-details margin-ws margin-ws-more'>
                                                    <h3>City, State,Zip</h3>
                                                    <p>{employeeData.EMCITY}, {employeeData.EMST} {normalizezip(employeeData.EMZIP1)}</p>
                                                </div> */}




                                            </>
                                        }




                                    </div>

                                </div>

                            </div>

                        </div>
                        {/* {w2sID != null &&
                            <div className="year-show-data">
                                <p>Year  {w2sID}</p>
                            </div>
                        } */}


                        <div className='row margin-top-po-table margin-top-ws-main'>
                            {/* table section start from here */}
                            {w2sData.length > 0 &&
                                <>
                                    {w2sData.map((entry, index) => (
                                        <>
                                            <div className='col-md-6'>
                                                <div class="table-main-sec diff-po-table">
                                                    <table className='table table-sec tabl-ws-details'>
                                                        <tbody class="tbody-light tbody-po-light tbody-left-po">
                                                            <tr>
                                                                <th><p className='num-sec'>1.</p><p className='num-valu'>Wages, tips</p></th>
                                                                <td class="value-table">
                                                                    <p>{dollarUS.format(entry.W2WAGE)}</p>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th><p className='num-sec'>3.</p><p className='num-valu'>Social security wages</p></th>
                                                                <td class="value-table">
                                                                    <p>{dollarUS.format(entry.W2FICW)} </p>
                                                                </td>
                                                            </tr>

                                                            <tr>
                                                                <th><p className='num-sec'>5.</p><p className='num-valu'>Medicare wages and tips</p></th>
                                                                <td class="value-table">
                                                                    <p>{dollarUS.format(entry.W2FICM)}</p>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th><p className='num-sec'>7.</p><p className='num-valu'>Social security tips</p></th>
                                                                <td class="value-table">
                                                                    <p>  {(entry.W2FICT!='' && entry.W2FICT!=null && entry.W2FICT!=0 ) ? dollarUS.format(entry.W2FICT) : ''}</p>


                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th><p className='num-sec'>9.</p><p className='num-valu'>Advance EIC Payement</p></th>
                                                                <td class="value-table">
                                                                    <p></p>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th><p className='num-sec'>11.</p><p className='num-valu'>Nonqualified plans</p></th>
                                                                <td class="value-table">
                                                                    <p>  {(entry.W2N457!='' && entry.W2N457!=null && entry.W2N457!=0 ) ? dollarUS.format(entry.W2N457) : ''} 
                                                                        {/* {dollarUS.format(entry.W2N457)} */}
                                                                        </p>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th><p className='num-sec'>12b.</p><p className='num-valu'>{(entry.W2DAM2!='' && entry.W2DAM2!=null && entry.W2DAM2!=0 ) ? entry.W2DMS2 : ''} </p></th>
                                                                <td class="value-table">
                                                                    <p>   {(entry.W2DAM2!='' && entry.W2DAM2!=null && entry.W2DAM2!=0 ) ? dollarUS.format(entry.W2DAM2) : ''} 
                                                                        
                                                                         {/* {dollarUS.format(entry.W2DAM2)} */}
                                                                         </p>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th><p className='num-sec'>12d.</p><p className='num-valu'> 
                                                                    {/* {entry.W2DMS4} */}
                                                                     {(entry.W2DAM4!='' && entry.W2DAM4!=null && entry.W2DAM4!=0 ) ?  entry.W2DMS4 : ''}  
                                                                    </p></th>
                                                                <td class="value-table">
                                                                    <p> {(entry.W2DAM4!='' && entry.W2DAM4!=null && entry.W2DAM4!=0 ) ? dollarUS.format(entry.W2DAM4) : ''}  
                                                                          {/* {dollarUS.format(entry.W2DAM4)} */}

                                                                        
                                                                    </p>
                                                                </td>
                                                            </tr>


                                                            <tr>
                                                                <th><p className='num-sec'>14.</p><p className='num-valu'>Other  {(entry.W2B181!='' && entry.W2B181!=null && entry.W2B181!=0 ) ?  entry.W2MSG1 : ''}  
                                                                    {/* {entry.W2MSG1} */}
                                                                    
                                                                    </p></th>
                                                                <td class="value-table">
                                                                    <p> {(entry.W2B181!='' && entry.W2B181!=null && entry.W2B181!=0 ) ? dollarUS.format(entry.W2B181) : ''}  
                                                                        
                                                                        {/* {dollarUS.format(entry.W2B181)}  */}
                                                                        
                                                                        </p>
                                                                </td>
                                                            </tr>

                                                            <tr>
                                                                <th><p className='num-sec'>14.</p><p className='num-valu'>Other   {(entry.W2B183!='' && entry.W2B183!=null && entry.W2B183!=0 ) ?  entry.W2MSG3 : ''}  
                                                                     {/* {entry.W2MSG3}  */}
                                                                     </p></th>
                                                                <td class="value-table">
                                                                    <p> {(entry.W2B183!='' && entry.W2B183!=null && entry.W2B183!=0 ) ? dollarUS.format(entry.W2B183) : ''}  
                                                                        {/* {dollarUS.format(entry.W2B183)} */}
                                                                        </p>
                                                                </td>
                                                            </tr>

                                                            <tr>
                                                                <th><p className='num-sec square-sec'></p><p className='num-valu'>Employer's state Id no.</p></th>
                                                                <td class="value-table">
                                                                    <p>  {entry.W2SEIN} </p>
                                                                </td>
                                                            </tr>

                                                            <tr>
                                                                <th><p className='num-sec'>17.</p><p className='num-valu'>State income tax</p></th>
                                                                <td class="value-table">
                                                                    <p>  {dollarUS.format(entry.W2SITW)}</p>
                                                                </td>
                                                            </tr>

                                                            <tr>
                                                                <th><p className='num-sec'>19.</p><p className='num-valu'>Local income tax</p></th>
                                                                <td class="value-table">
                                                                    <p> {(entry.W2LITW!='' && entry.W2LITW!=null && entry.W2LITW!=0 ) ? dollarUS.format(entry.W2LITW) : ''}  
                                                                        {/* {dollarUS.format(entry.W2LITW)} */}
                                                                        </p>
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
                                                                    <p>{dollarUS.format(entry.W2FEDT)}</p>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th><p className='num-sec'>4.</p><p className='num-valu'>Social security tax withheld</p></th>
                                                                <td class="value-table">
                                                                    <p>{dollarUS.format(entry.W2FTWH)}</p>
                                                                </td>
                                                            </tr>

                                                            <tr>
                                                                <th><p className='num-sec'>6.</p><p className='num-valu'>Medicare tax withheld</p></th>
                                                                <td class="value-table">
                                                                    <p>{dollarUS.format(entry.W2FMWH)}</p>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th><p className='num-sec'>8.</p><p className='num-valu'>Allocated tips</p></th>
                                                                <td class="value-table">
                                                                    <p> {(entry.W2ALOT!='' && entry.W2ALOT!=null && entry.W2ALOT!=0 ) ? dollarUS.format(entry.W2ALOT) : ''} 
                                                                        
                                                                        {/* {dollarUS.format(entry.W2ALOT)} */}
                                                                        </p>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th><p className='num-sec'>10.</p><p className='num-valu'>Dependent care benefits</p></th>
                                                                <td class="value-table">
                                                                    <p> {(entry.W2DCC!='' && entry.W2DCC!=null && entry.W2DCC!=0 ) ? dollarUS.format(entry.W2DCC) : ''} 
                                                                        
                                                                        {/* {dollarUS.format(entry.W2DCC)} */}
                                                                        </p>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th><p className='num-sec'>12a.</p><p className='num-valu'>
                                                                     {/* {entry.W2DMS1} */}
                                                                      {(entry.W2DAMT!='' && entry.W2DAMT!=null && entry.W2DAMT!=0 ) ? (entry.W2DMS1) : ''}  
                                                                     </p></th>
                                                                <td class="value-table">
                                                                    <p> {(entry.W2DAMT!='' && entry.W2DAMT!=null && entry.W2DAMT!=0 ) ? dollarUS.format(entry.W2DAMT) : ''}  
                                                                        
                                                                        {/* {dollarUS.format(entry.W2DAMT)} */}
                                                                        </p>
                                                                </td>
                                                            </tr>

                                                            <tr>
                                                                <th><p className='num-sec'>12c.</p><p className='num-valu'>
                                                                    
                                                                    {/* {entry.W2DMS3} */}
                                                                      {(entry.W2DAM3!='' && entry.W2DAM3!=null && entry.W2DAM3!=0 ) ? (entry.W2DMS3) : ''}  
                                                                    </p></th>
                                                                <td class="value-table">
                                                                    <p>{(entry.W2DAM3!='' && entry.W2DAM3!=null && entry.W2DAM3!=0 ) ? dollarUS.format(entry.W2DAM3) : ''}  
                                                                        
                                                                        {/* {dollarUS.format(entry.W2DAM3)} */}
                                                                        </p>
                                                                </td>
                                                            </tr>

                                                            <tr>
                                                                <th><p className='num-sec'>13.</p><p className='num-valu'>Retirement</p></th>
                                                                <td class="value-table">
                                                                    <p>{(entry.W2RET)}</p>
                                                                </td>
                                                            </tr>

                                                            <tr>
                                                                <th><p className='num-sec'>14.</p><p className='num-valu'>Other   {(entry.W2B182!='' && entry.W2B182!=null && entry.W2B182!=0 ) ? (entry.W2MSG2) : ''}  
                                                                     {/* {entry.W2MSG2} */}
                                                                     </p></th>
                                                                <td class="value-table">
                                                                    <p>{(entry.W2B182!='' && entry.W2B182!=null && entry.W2B182!=0 ) ? dollarUS.format(entry.W2B182) : ''}  
                                                                        {/* {dollarUS.format(entry.W2B182)} */}
                                                                        </p>
                                                                </td>
                                                            </tr>

                                                            <tr>
                                                                <th><p className='num-sec'>15.</p><p className='num-valu'>State</p></th>
                                                                <td class="value-table">
                                                                    <p>{entry.W2SNAM}</p>
                                                                </td>
                                                            </tr>

                                                            <tr>
                                                                <th><p className='num-sec'>16.</p><p className='num-valu'>State wages, tips, etc.</p></th>
                                                                <td class="value-table">
                                                                    <p>{dollarUS.format(entry.W2SWAG)}</p>
                                                                </td>
                                                            </tr>

                                                            <tr>
                                                                <th><p className='num-sec'>18.</p><p className='num-valu'>Local wages, tips, etc.</p></th>
                                                                <td class="value-table">
                                                                    <p>{(entry.W2SWAG!='' && entry.W2SWAG!=null && entry.W2SWAG!=0 ) ? dollarUS.format(entry.W2SWAG) : ''}  
                                                                        {/* {dollarUS.format(entry.W2SWAG)} */}
                                                                        </p>
                                                                </td>
                                                            </tr>

                                                            <tr>
                                                                <th><p className='num-sec'>20.</p><p className='num-valu'>Locality Name</p></th>
                                                                <td class="value-table">
                                                                    <p>{(entry.W2LNA2!='' && entry.W2LNA2!=null && entry.W2LNA2!=0 ) ? (entry.W2LNA2) : ''}  
                                                                        {/* {entry.W2LNA2} */}
                                                                        </p>
                                                                </td>
                                                            </tr>




                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </>
                                    ))}
                                </>
                            }
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

export default ShowW2Details

