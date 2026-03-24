import React, { useState, useEffect, } from 'react';
import PrintIcon from '@mui/icons-material/Print';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import { Link, useNavigate } from "react-router-dom";
import secureLocalStorage from "react-secure-storage";
import { w2dtataempyear } from '../actions/systemadmin.actions';
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
        var userid = secureLocalStorage.getItem('employeeSystemData');



        if (Object.keys(userid).length === 0) {


            navigate(`/employeesystemdata`);

        } else {

            console.log(userid);
            setEmployeeData(userid.data);
            var allprintnew = JSON.parse(window.localStorage.getItem('allw2deatislsystem'));;
            setw2slistdata(allprintnew.alldata);

            setw2ID(allprintnew.year);
            w2dtataempyear(allprintnew.SSN, allprintnew.year).then((res) => {

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

    const exportTopdf = (e) => {





        localStorage.setItem("allw2sdetalnewsystem", JSON.stringify(w2sData));
        window.open('printw2sdetailssystem/', '_blank', 'noopener,noreferrer');




    };

   

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
                            <Link to="/w2ssystem" className="back-btn-sec back-news"><KeyboardDoubleArrowLeftIcon />Back</Link>
                        </div>
                    </div>
                </div>

                <div className='show-detail-sec'>
                    <div className="emp-table-sec">
                        <div className='form-table-sec emp-table-inner form-show-ws-main'>
                            <div className='row'>


                                <div className='col-md-12' >
                                    <div className='search-sec-pay payroll-deatil-inner show-ws-details mid-ws-details new-marg-ws'>


                                        {w2sData.length > 0 &&
                                            <>
                                                <div className='payroll-details-data ws-all-details margin-ws margin-ws-more'>
                                                    <h3>Employer</h3>
                                                    <p >{w2sData[0].employer}</p>
                                                </div>
                                                <div className='payroll-details-data ws-all-details margin-ws margin-ws-more'>
                                                    <h3>Employer EIN</h3>
                                                    <p>{w2sData[0].ein}</p>
                                                </div>
                                                <div className='payroll-details-data ws-all-details margin-ws margin-ws-more'>
                                                    <h3>Employer Address and Zipcode</h3>
                                                    <p >{w2sData[0].employerAddress}, {w2sData[0].employerCityStateZip}  </p>
                                                </div>
                                            </>


                                        }

                                        <div className='payroll-details-data ws-all-details margin-ws margin-ws-more'>
                                            <h3> Control number</h3>
                                            <p style={{ visibility: 'hidden' }}>fbgn</p>
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
                                                    <p>{employeeData.lastName}, {employeeData.firstName} {employeeData.middleInitial} </p>
                                                </div>
                                                <div className='payroll-details-data  ws-all-details margin-ws margin-ws-more'>
                                                    <h3>Employee Id</h3>
                                                    <p> {employeeData.employee} </p>
                                                </div>

                                            </>
                                        }
                                        {w2sData.length > 0 &&
                                            <>
                                                {/* {w2sData.map((entry, index) => ( */}
                                                {/* <> */}
                                                <div className='payroll-details-data  ws-all-details margin-ws margin-ws-more'>
                                                    <h3> Employee's SSN </h3>
                                                    <p>{w2sData[0].ssn}</p>
                                                </div>


                                                {/* </> */}

                                                {/* ))} */}
                                            </>


                                        }

                                        {w2sData.length > 0 &&
                                            <>
                                                <div className='payroll-details-data  ws-all-details margin-ws margin-ws-more'>
                                                    <h3>Address and Zipcode</h3>
                                                    <p>{w2sData[0].address},   {w2sData[0].address1}, {w2sData[0].ciyStateZip}</p>
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
                                                                    <p>{formatCurrency(entry.box1)}</p>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th><p className='num-sec'>3.</p><p className='num-valu'>Social security wages</p></th>
                                                                <td class="value-table">
                                                                    <p>{formatCurrency(entry.box3)} </p>
                                                                </td>
                                                            </tr>

                                                            <tr>
                                                                <th><p className='num-sec'>5.</p><p className='num-valu'>Medicare wages and tips</p></th>
                                                                <td class="value-table">
                                                                    <p>{formatCurrency(entry.box5)}</p>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th><p className='num-sec'>7.</p><p className='num-valu'>Social security tips</p></th>
                                                                <td class="value-table">
                                                                    <p>  {(entry.box7 != '' && entry.box7 != null && entry.box7 != 0) ? formatCurrency(entry.box7) : ''}</p>


                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th><p className='num-sec'>9.</p><p className='num-valu'>Advance EIC Payement</p></th>
                                                                <td class="value-table">
                                                                    <p>  {(entry.box9 != '' && entry.box9 != null && entry.box9 != 0) ? formatCurrency(entry.box9) : ''}</p>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th><p className='num-sec'>11.</p><p className='num-valu'>Nonqualified plans</p></th>
                                                                <td class="value-table">
                                                                    <p>  {(entry.box11 != '' && entry.box11 != null && entry.box11 != 0) ? formatCurrency(entry.box11) : ''}
                                                                        {/* {formatCurrency(entry.W2N457)} */}
                                                                    </p>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th><p className='num-sec'>12b.</p><p className='num-valu'>{(entry.box12bAmount != '' && entry.box12bAmount != null && entry.box12bAmount != 0) ? entry.box12bCode : ''} </p></th>
                                                                <td class="value-table">
                                                                    <p>   {(entry.box12bAmount != '' && entry.box12bAmount != null && entry.box12bAmount != 0) ? formatCurrency(entry.box12bAmount) : ''}

                                                                        {/* {formatCurrency(entry.W2DAM2)} */}
                                                                    </p>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th><p className='num-sec'>12d.</p><p className='num-valu'>
                                                                    {/* {entry.W2DMS4} */}
                                                                    {(entry.box12dAmount != '' && entry.box12dAmount != null && entry.box12dAmount != 0) ? entry.box12dCode : ''}
                                                                </p></th>
                                                                <td class="value-table">
                                                                    <p> {(entry.box12dAmount != '' && entry.box12dAmount != null && entry.box12dAmount != 0) ? formatCurrency(entry.box12dAmount) : ''}
                                                                        {/* {formatCurrency(entry.W2DAM4)} */}


                                                                    </p>
                                                                </td>
                                                            </tr>


                                                            <tr>
                                                                <th><p className='num-sec'>14.</p><p className='num-valu'>Other   {(entry.box14Amount1 != '' && entry.box14Amount1 != null && entry.box14Amount1 != 0) ? (entry.box14Code1) : ''}
                                                                    {/* {entry.W2MSG2} */}
                                                                </p></th>
                                                                <td class="value-table">
                                                                    <p>{(entry.box14Amount1 != '' && entry.box14Amount1 != null && entry.box14Amount1 != 0) ? formatCurrency(entry.box14Amount1) : ''}
                                                                        {/* {formatCurrency(entry.W2B182)} */}
                                                                    </p>
                                                                </td>
                                                            </tr>

                                                            <tr>
                                                                <th><p className='num-sec'>14.</p><p className='num-valu'>Other   {(entry.box14Amount3 != '' && entry.box14Amount3 != null && entry.box14Amount3 != 0) ? entry.box14Code3 : ''}
                                                                    {/* {entry.W2MSG3}  */}
                                                                </p></th>
                                                                <td class="value-table">
                                                                    <p> {(entry.box14Amount3 != '' && entry.box14Amount3 != null && entry.box14Amount3 != 0) ? formatCurrency(entry.box14Amount3) : ''}
                                                                        {/* {formatCurrency(entry.box14Amount3)} */}
                                                                    </p>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th><p className='num-sec'>14.</p><p className='num-valu'>Other   {(entry.box14Amount5 != '' && entry.box14Amount5 != null && entry.box14Amount5 != 0) ? entry.box14Code5 : ''}
                                                                    {/* {entry.W2MSG3}  */}
                                                                </p></th>
                                                                <td class="value-table">
                                                                    <p> {(entry.box14Amount5 != '' && entry.box14Amount5 != null && entry.box14Amount5 != 0) ? formatCurrency(entry.box14Amount5) : ''}
                                                                        {/* {formatCurrency(entry.box14Amount3)} */}
                                                                    </p>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th><p className='num-sec square-sec'></p><p className='num-valu'>Employer's state Id no.</p></th>
                                                                <td class="value-table">
                                                                    <p>  {entry.stateId} </p>
                                                                </td>
                                                            </tr>

                                                            <tr>
                                                                <th><p className='num-sec'>17.</p><p className='num-valu'>State income tax</p></th>
                                                                <td class="value-table">
                                                                    <p>  {formatCurrency(entry.box17)}</p>
                                                                </td>
                                                            </tr>

                                                            <tr>
                                                                <th><p className='num-sec'>19.</p><p className='num-valu'>Local income tax</p></th>
                                                                <td class="value-table">
                                                                    <p> 
                                                                        {/* {(entry.W2LITW != '' && entry.W2LITW != null && entry.W2LITW != 0) ? formatCurrency(entry.W2LITW) : ''} */}
                                                                        {/* {formatCurrency(entry.W2LITW)} */}
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
                                                                    <p>{formatCurrency(entry.box2)}</p>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th><p className='num-sec'>4.</p><p className='num-valu'>Social security tax withheld</p></th>
                                                                <td class="value-table">
                                                                    <p>{formatCurrency(entry.box4)}</p>
                                                                </td>
                                                            </tr>

                                                            <tr>
                                                                <th><p className='num-sec'>6.</p><p className='num-valu'>Medicare tax withheld</p></th>
                                                                <td class="value-table">
                                                                    <p>{formatCurrency(entry.box6)}</p>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th><p className='num-sec'>8.</p><p className='num-valu'>Allocated tips</p></th>
                                                                <td class="value-table">
                                                                    <p> {(entry.box8 != '' && entry.box8 != null && entry.box8 != 0) ? formatCurrency(entry.box8) : ''}

                                                                        {/* {formatCurrency(entry.W2ALOT)} */}
                                                                    </p>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th><p className='num-sec'>10.</p><p className='num-valu'>Dependent care benefits</p></th>
                                                                <td class="value-table">
                                                                    <p> {(entry.box10 != '' && entry.box10 != null && entry.box10 != 0) ? formatCurrency(entry.box10) : ''}

                                                                        {/* {formatCurrency(entry.W2DCC)} */}
                                                                    </p>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th><p className='num-sec'>12a.</p><p className='num-valu'>
                                                                    {/* {entry.W2DMS1} */}
                                                                    {(entry.box12aAmount != '' && entry.box12aAmount != null && entry.box12aAmount != 0) ? (entry.box12aCode) : ''}
                                                                </p></th>
                                                                <td class="value-table">
                                                                    <p> {(entry.box12aAmount != '' && entry.box12aAmount != null && entry.box12aAmount != 0) ? formatCurrency(entry.box12aAmount) : ''}

                                                                        {/* {formatCurrency(entry.W2DAMT)} */}
                                                                    </p>
                                                                </td>
                                                            </tr>

                                                            <tr>
                                                                <th><p className='num-sec'>12c.</p><p className='num-valu'>

                                                                    {/* {entry.W2DMS3} */}
                                                                    {(entry.box12cAmount != '' && entry.box12cAmount != null && entry.box12cAmount != 0) ? (entry.box12cCode) : ''}
                                                                </p></th>
                                                                <td class="value-table">
                                                                    <p>{(entry.box12cAmount != '' && entry.box12cAmount != null && entry.box12cAmount != 0) ? formatCurrency(entry.box12cAmount) : ''}

                                                                        {/* {formatCurrency(entry.W2DAM3)} */}
                                                                    </p>
                                                                </td>
                                                            </tr>

                                                            <tr>
                                                                <th><p className='num-sec'>13.</p><p className='num-valu'>Retirement</p></th>
                                                                <td class="value-table">
                                                                    <p>{(entry.column33)}</p>
                                                                </td>
                                                            </tr>

                                                            <tr>
                                                                <th><p className='num-sec'>14.</p><p className='num-valu'>Other   {(entry.box14Amount2 != '' && entry.box14Amount2 != null && entry.box14Amount2 != 0) ? (entry.box14Code2) : ''}
                                                                    {/* {entry.W2MSG2} */}
                                                                </p></th>
                                                                <td class="value-table">
                                                                    <p>{(entry.box14Amount2 != '' && entry.box14Amount2 != null && entry.box14Amount2 != 0) ? formatCurrency(entry.box14Amount2) : ''}
                                                                        {/* {formatCurrency(entry.W2B182)} */}
                                                                    </p>
                                                                </td>
                                                            </tr>

                                                            <tr>
                                                                <th><p className='num-sec'>14.</p><p className='num-valu'>Other   {(entry.box14Amount4 != '' && entry.box14Amount4 != null && entry.box14Amount4 != 0) ? (entry.box14Code4) : ''}
                                                                    {/* {entry.W2MSG2} */}
                                                                </p></th>
                                                                <td class="value-table">
                                                                    <p>{(entry.box14Amount4 != '' && entry.box14Amount4 != null && entry.box14Amount4 != 0) ? formatCurrency(entry.box14Amount4) : ''}
                                                                        {/* {formatCurrency(entry.W2B182)} */}
                                                                    </p>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th><p className='num-sec'>15.</p><p className='num-valu'>State</p></th>
                                                                <td class="value-table">
                                                                    <p>{entry.box15State}</p>
                                                                </td>
                                                            </tr>

                                                            <tr>
                                                                <th><p className='num-sec'>16.</p><p className='num-valu'>State wages, tips, etc.</p></th>
                                                                <td class="value-table">
                                                                    <p>{formatCurrency(entry.box16)}</p>
                                                                </td>
                                                            </tr>

                                                            <tr>
                                                                <th><p className='num-sec'>18.</p><p className='num-valu'>Local wages, tips, etc.</p></th>
                                                                <td class="value-table">
                                                                    <p>
                                                                        {/* {(entry.W2SWAG != '' && entry.W2SWAG != null && entry.W2SWAG != 0) ? formatCurrency(entry.W2SWAG) : ''} */}
                                                                        {/* {formatCurrency(entry.W2SWAG)} */}
                                                                    </p>
                                                                </td>
                                                            </tr>

                                                            <tr>
                                                                <th><p className='num-sec'>20.</p><p className='num-valu'>Locality Name</p></th>
                                                                <td class="value-table">
                                                                    <p>
                                                                        {/* {(entry.W2LNA2 != '' && entry.W2LNA2 != null && entry.W2LNA2 != 0) ? (entry.W2LNA2) : ''} */}
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

