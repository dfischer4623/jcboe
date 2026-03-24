@ -0,0 +1,734 @@
import React, { useState, useEffect } from 'react';
import Sidebar from './sidebar';
import Header from './header';
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import PrintIcon from '@mui/icons-material/Print'; // Assuming you're using this
import secureLocalStorage from "react-secure-storage";
import {
    useNavigate
} from "react-router-dom";

import { useSelector } from 'react-redux';
import { updateNullOfObjectValues } from '../helpers/helper';
import { showW2s } from '../actions/admin.actions';

import { AppContext } from '../context';
import { Link } from "react-router-dom";
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
const EmployeeData = () => {

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
    return (
        <>
            {/* <Header />
            <Sidebar /> */}

            <div className='main-inner-sec content-main'>
                <div className='main-inner-heading'>
                    <div className='col-md-12'>
                        <div className='emp-main-serach'>
                            <div className='emp-serach emp-data-head'>

                                {employeeData != null &&
                                    <>
                                        <h2>{employeeData.EMLNAM}, {employeeData.EMFNAM} {employeeData.EMMNAM} </h2>
                                        <h3 style={{margin:'14px 0px'}}>Emp Id:- <span> {employeeData.EMSSAN}</span></h3>
                                        {w2sID != null &&
                                            <h3>Year:- <span> {w2sID}</span></h3>
                                        }

                                    </>
                                }

                                <div className='print-sec-inner emp-print'>
                                    <span className='print-icon' onClick={(e) => exportTopdf()}><PrintIcon /></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div class=" emp-main-heading-emp">
                    <div class="main-heading-sec ">
                        <div class="col-md-12">
                            <div class="head-inner">
                                <h2>W2s Details</h2>

                            </div>
                        </div>
                    </div>
                </div> */}

                 <div class=" emp-main-heading-emp accordion-margin back-ws-below  accordian-margin-new">
                          <div class="main-heading-sec ">
                            
                            <div class="col-md-12">
                              <div class="head-inner">
                                
                               
                               
                              </div>
                            </div>
                            <div className='back-sec'>
                            <Link to="/W2s" className="back-btn-sec"><KeyboardDoubleArrowLeftIcon />Back</Link>
                            </div>
                          </div>
                        </div>
                <div className="emp-data-inner margin-all-sec accordion-margin accordian-margin-new">
                    <div className='row'>
                        <div className='col-md-12'>
                            <div className='emp-data-sec form-accor-sec'>
                                {/* personal Information section */}
                                <Accordion
                                    expanded={expandedPanels.panel1}
                                    // onChange={handleChange('panel1')}
                                >
                                    <AccordionSummary
                                        // expandIcon={
                                        //     expandedPanels.panel1 ? <RemoveIcon /> : <AddIcon />
                                        // }
                                        aria-controls="panel1-content"
                                        id="panel1-header"
                                    >
                                        <Typography component="span">W2 Details</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography className='form-detail-main'>
                                            {w2sData.length > 0 &&
                                                <>
                                                    {w2sData.map((entry, index) => (

                                                        <div className='emp-data-value-sec form-detail-inner'>
                                                            <div className='row'>
                                                                <div className=' form-detail-left'>
                                                                    <div className='row'>
                                                                        <div className='form-detail-left-inner'>
                                                                            <div className='form-details-label'>
                                                                                <h3>a Employee's SSN</h3>
                                                                                <p className='semicolon'>:</p>
                                                                            </div>

                                                                        </div>
                                                                        <div className='form-detail-right-inner'>
                                                                            <div className='form-details-value'>
                                                                                <p>{entry.W2SSN}</p>
                                                                            </div>

                                                                        </div>
                                                                    </div>

                                                                    <div className='row'>
                                                                        <div className='form-detail-left-inner'>
                                                                            <div className='form-details-label'>
                                                                                <h3>1 Wages, tips</h3>
                                                                                <p className='semicolon'>:</p>
                                                                            </div>

                                                                        </div>
                                                                        <div className='form-detail-right-inner'>
                                                                            <div className='form-details-value'>
                                                                                <p>{dollarUS.format(entry.W2WAGE) }</p>
                                                                            </div>

                                                                        </div>
                                                                    </div>
                                                                    <div className='row'>
                                                                        <div className='form-detail-left-inner'>
                                                                            <div className='form-details-label'>
                                                                                <h3>3 Social security wages
                                                                                </h3>
                                                                                <p className='semicolon'>:</p>
                                                                            </div>

                                                                        </div>
                                                                        <div className='form-detail-right-inner'>
                                                                            <div className='form-details-value'>
                                                                                <p>{dollarUS.format(entry.W2FICW)} </p>
                                                                            </div>

                                                                        </div>
                                                                    </div>

                                                                    <div className='row'>
                                                                        <div className='form-detail-left-inner '>
                                                                            <div className='form-details-label'>
                                                                                <h3>5 Medicare wages and tips
                                                                                </h3>
                                                                                <p className='semicolon'>:</p>
                                                                            </div>

                                                                        </div>
                                                                        <div className='form-detail-right-inner'>
                                                                            <div className='form-details-value'>
                                                                                <p>{dollarUS.format(entry.W2FICM)}</p>
                                                                            </div>

                                                                        </div>
                                                                    </div>

                                                                    <div className='row'>
                                                                        <div className='form-detail-left-inner '>
                                                                            <div className='form-details-label'>
                                                                                <h3>7 Social security tips
                                                                                </h3>
                                                                                <p className='semicolon'>:</p>
                                                                            </div>

                                                                        </div>
                                                                        <div className='form-detail-right-inner'>
                                                                            <div className='form-details-value'>
                                                                                <p>{dollarUS.format(entry.W2FICT)}</p>
                                                                            </div>

                                                                        </div>
                                                                    </div>
                                                                    
                                                                    <div className='row'>
                                                                        <div className='form-detail-left-inner '>
                                                                            <div className='form-details-label'>
                                                                                <h3>10 Dependent care benefits
                                                                                </h3>
                                                                                <p className='semicolon'>:</p>
                                                                            </div>

                                                                        </div>
                                                                        <div className='form-detail-right-inner'>
                                                                            <div className='form-details-value'>
                                                                                <p>{dollarUS.format(entry.W2DCC)}</p>
                                                                            </div>

                                                                        </div>
                                                                    </div>
                                                                    <div className='row'>
                                                                        <div className='form-detail-left-inner '>
                                                                            <div className='form-details-label'>
                                                                                <h3>12a {entry.W2DMS1}
                                                                                </h3>
                                                                                <p className='semicolon'>:</p>
                                                                            </div>

                                                                        </div>
                                                                        <div className='form-detail-right-inner'>
                                                                            <div className='form-details-value'>
                                                                                <p>{dollarUS.format(entry.W2DAMT)}</p>
                                                                            </div>

                                                                        </div>
                                                                    </div>

                                                                    <div className='row'>
                                                                        <div className='form-detail-left-inner '>
                                                                            <div className='form-details-label'>
                                                                                <h3>12c {entry.W2DMS3}
                                                                                </h3>
                                                                                <p className='semicolon'>:</p>
                                                                            </div>

                                                                        </div>
                                                                        <div className='form-detail-right-inner'>
                                                                            <div className='form-details-value'>
                                                                                <p>{dollarUS.format(entry.W2DAM3)}</p>
                                                                            </div>

                                                                        </div>
                                                                    </div>
                                                                   

                                                                    <div className='row'>
                                                                        <div className='form-detail-left-inner '>
                                                                            <div className='form-details-label'>
                                                                                <h3>13 Retirement
                                                                                </h3>
                                                                                <p className='semicolon'>:</p>
                                                                            </div>

                                                                        </div>
                                                                        <div className='form-detail-right-inner'>
                                                                            <div className='form-details-value'>
                                                                                <p>{(entry.W2RET)}</p>
                                                                               
                                                                            </div>

                                                                        </div>
                                                                    </div>


                                                                    <div className='row'>
                                                                        <div className='form-detail-left-inner '>
                                                                            <div className='form-details-label'>
                                                                                <h3>14 Other {entry.W2MSG2}
                                                                                </h3>
                                                                                <p className='semicolon'>:</p>
                                                                            </div>

                                                                        </div>
                                                                        <div className='form-detail-right-inner'>
                                                                            <div className='form-details-value'>
                                                                                <p>{dollarUS.format(entry.W2B182)}</p>
                                                                            </div>

                                                                        </div>
                                                                    </div>


                                                                    <div className='row'>
                                                                        <div className='form-detail-left-inner '>
                                                                            <div className='form-details-label'>
                                                                                <h3>15 State
                                                                                </h3>
                                                                                <p className='semicolon'>:</p>
                                                                            </div>

                                                                        </div>
                                                                        <div className='form-detail-right-inner'>
                                                                            <div className='form-details-value'>
                                                                                <p>{entry.W2SNAM}</p>
                                                                            </div>

                                                                        </div>
                                                                    </div>




                                                                    <div className='row'>
                                                                        <div className='form-detail-left-inner '>
                                                                            <div className='form-details-label'>
                                                                                <h3>16 State wages, tips, etc.
                                                                                </h3>
                                                                                <p className='semicolon'>:</p>
                                                                            </div>

                                                                        </div>
                                                                        <div className='form-detail-right-inner'>
                                                                            <div className='form-details-value'>
                                                                                <p>{dollarUS.format(entry.W2SWAG)}</p>
                                                                            </div>

                                                                        </div>
                                                                    </div>




                                                                    
                                                                    <div className='row'>
                                                                        <div className='form-detail-left-inner '>
                                                                            <div className='form-details-label'>
                                                                                <h3>18 Local wages, tips, etc.
                                                                                </h3>
                                                                                <p className='semicolon'>:</p>
                                                                            </div>

                                                                        </div>
                                                                        <div className='form-detail-right-inner'>
                                                                            <div className='form-details-value'>
                                                                                <p>{dollarUS.format(entry.W2SWAG)}</p>
                                                                            </div>

                                                                        </div>
                                                                    </div>




                                                                    <div className='row'>
                                                                        <div className='form-detail-left-inner last-right-data'>
                                                                            <div className='form-details-label'>
                                                                                <h3>20 Local name
                                                                                </h3>
                                                                                <p className='semicolon'>:</p>
                                                                            </div>

                                                                        </div>
                                                                        <div className='form-detail-right-inner'>
                                                                            <div className='form-details-value'>
                                                                                <p>{entry.W2LNA2}</p>
                                                                            </div>

                                                                        </div>
                                                                    </div>



                                                                </div>
                                                                <div className='form-detail-midle'>
                                                                    <div className='border-after'></div>
                                                                </div>
                                                                <div className=' form-detail-right'>

                                                                    <div className='row'>
                                                                        <div className='form-detail-left-innerss form-detail-left-innerss-ws'>
                                                                            <div className='form-details-label'>
                                                                                <h3>b Employer EIN</h3>
                                                                                <p className='semicolon'>:</p>
                                                                            </div>

                                                                        </div>
                                                                        <div className='form-detail-right-innerss form-detail-right-innerss-ws'>
                                                                            <div className='form-details-value'>
                                                                                <p>{entry.W2FEIN}</p>
                                                                            </div>

                                                                        </div>
                                                                    </div>

                                                                    <div className='row'>
                                                                        <div className='form-detail-left-innerss form-detail-left-innerss-ws'>
                                                                            <div className='form-details-label'>
                                                                                <h3>2 Federal income tax withheld	</h3>
                                                                                <p className='semicolon'>:</p>
                                                                            </div>

                                                                        </div>
                                                                        <div className='form-detail-right-innerss form-detail-right-innerss-ws'>
                                                                            <div className='form-details-value'>
                                                                                <p>{dollarUS.format(entry.W2FEDT)}</p>
                                                                            </div>

                                                                        </div>
                                                                    </div>
                                                                    <div className='row'>
                                                                        <div className='form-detail-left-innerss form-detail-left-innerss-ws'>
                                                                            <div className='form-details-label'>
                                                                                <h3>	4 Social security tax withheld

                                                                                </h3>
                                                                                <p className='semicolon'>:</p>
                                                                            </div>

                                                                        </div>
                                                                        <div className='form-detail-right-innerss form-detail-right-innerss-ws'>
                                                                            <div className='form-details-value'>
                                                                                <p>{dollarUS.format(entry.W2FTWH)}</p>
                                                                            </div>

                                                                        </div>
                                                                    </div>
                                                                    <div className='row'>
                                                                        <div className='form-detail-left-innerss form-detail-left-innerss-ws'>
                                                                            <div className='form-details-label'>
                                                                                <h3>6 Medicare tax withheld

                                                                                </h3>
                                                                                <p className='semicolon'>:</p>
                                                                            </div>

                                                                        </div>
                                                                        <div className='form-detail-right-innerss form-detail-right-innerss-ws'>
                                                                            <div className='form-details-value'>
                                                                                <p>
                                                                                    {dollarUS.format(entry.W2FMWH)}
                                                                                </p>
                                                                            </div>

                                                                        </div>
                                                                    </div>

                                                                    <div className='row'>
                                                                        <div className='form-detail-left-innerss form-detail-left-innerss-ws'>
                                                                            <div className='form-details-label'>
                                                                                <h3>8 Allocated tips

                                                                                </h3>
                                                                                <p className='semicolon'>:</p>
                                                                            </div>

                                                                        </div>
                                                                        <div className='form-detail-right-innerss form-detail-right-innerss-ws'>
                                                                            <div className='form-details-value'>
                                                                                <p>
                                                                                    {dollarUS.format(entry.W2ALOT)}
                                                                                </p>
                                                                            </div>

                                                                        </div>
                                                                    </div>
                                                                    <div className='row'>
                                                                        <div className='form-detail-left-innerss form-detail-left-innerss-ws'>
                                                                            <div className='form-details-label'>
                                                                                <h3>11 Nonqualified plans

                                                                                </h3>
                                                                                <p className='semicolon'>:</p>
                                                                            </div>

                                                                        </div>
                                                                        <div className='form-detail-right-innerss form-detail-right-innerss-ws'>
                                                                            <div className='form-details-value'>
                                                                                <p>
                                                                                    {dollarUS.format(entry.W2N457)}
                                                                                </p>
                                                                            </div>

                                                                        </div>
                                                                    </div>



                                                                    <div className='row'>
                                                                        <div className='form-detail-left-innerss form-detail-left-innerss-ws'>
                                                                            <div className='form-details-label'>
                                                                                <h3>12b {entry.W2DMS2}

                                                                                </h3>
                                                                                <p className='semicolon'>:</p>
                                                                            </div>

                                                                        </div>
                                                                        <div className='form-detail-right-innerss form-detail-right-innerss-ws'>
                                                                            <div className='form-details-value'>
                                                                                <p>
                                                                                {dollarUS.format(entry.W2DAM2)}
                                                                                </p>
                                                                            </div>

                                                                        </div>
                                                                    </div>


                                                                    
                                                                    <div className='row'>
                                                                        <div className='form-detail-left-innerss form-detail-left-innerss-ws'>
                                                                            <div className='form-details-label'>
                                                                                <h3>12d {entry.W2DMS4}

                                                                                </h3>
                                                                                <p className='semicolon'>:</p>
                                                                            </div>

                                                                        </div>
                                                                        <div className='form-detail-right-innerss form-detail-right-innerss-ws'>
                                                                            <div className='form-details-value'>
                                                                                <p>
                                                                                {dollarUS.format(entry.W2DAM4)}
                                                                                </p>
                                                                            </div>

                                                                        </div>
                                                                    </div>



                                                                    <div className='row'>
                                                                        <div className='form-detail-left-innerss form-detail-left-innerss-ws'>
                                                                            <div className='form-details-label'>
                                                                                <h3>14 Other {entry.W2MSG1}

                                                                                </h3>
                                                                                <p className='semicolon'>:</p>
                                                                            </div>

                                                                        </div>
                                                                        <div className='form-detail-right-innerss form-detail-right-innerss-ws'>
                                                                            <div className='form-details-value'>
                                                                                <p>
                                                                                {dollarUS.format(entry.W2B181)}
                                                                                </p>
                                                                            </div>

                                                                        </div>
                                                                    </div>



                                                                    
                                                                    <div className='row'>
                                                                        <div className='form-detail-left-innerss form-detail-left-innerss-ws'>
                                                                            <div className='form-details-label'>
                                                                                <h3>14 Other {entry.W2MSG3}

                                                                                </h3>
                                                                                <p className='semicolon'>:</p>
                                                                            </div>

                                                                        </div>
                                                                        <div className='form-detail-right-innerss form-detail-right-innerss-ws'>
                                                                            <div className='form-details-value'>
                                                                                <p>
                                                                                {dollarUS.format(entry.W2B183)}
                                                                                </p>
                                                                            </div>

                                                                        </div>
                                                                    </div>




                                                                        
                                                                    <div className='row'>
                                                                        <div className='form-detail-left-innerss form-detail-left-innerss-ws'>
                                                                            <div className='form-details-label'>
                                                                                <h3>Employer's state Id no.

                                                                                </h3>
                                                                                <p className='semicolon'>:</p>
                                                                            </div>

                                                                        </div>
                                                                        <div className='form-detail-right-innerss form-detail-right-innerss-ws'>
                                                                            <div className='form-details-value'>
                                                                                <p>
                                                                                {entry.W2SEIN}
                                                                                </p>
                                                                            </div>

                                                                        </div>
                                                                    </div>



                                                                        
                                                                    <div className='row'>
                                                                        <div className='form-detail-left-innerss form-detail-left-innerss-ws'>
                                                                            <div className='form-details-label'>
                                                                                <h3>17 State income tax

                                                                                </h3>
                                                                                <p className='semicolon'>:</p>
                                                                            </div>

                                                                        </div>
                                                                        <div className='form-detail-right-innerss form-detail-right-innerss-ws'>
                                                                            <div className='form-details-value'>
                                                                                <p>
                                                                                {dollarUS.format(entry.W2SITW)}
                                                                                </p>
                                                                            </div>

                                                                        </div>
                                                                    </div>

                                                                        
                                                                    <div className='row'>
                                                                        <div className='form-detail-left-innerss form-detail-left-innerss-ws'>
                                                                            <div className='form-details-label'>
                                                                                <h3>19 Local income tax

                                                                                </h3>
                                                                                <p className='semicolon'>:</p>
                                                                            </div>

                                                                        </div>
                                                                        <div className='form-detail-right-innerss form-detail-right-innerss-ws'>
                                                                            <div className='form-details-value'>
                                                                                <p>
                                                                                {dollarUS.format(entry.W2LITW)}
                                                                                </p>
                                                                            </div>

                                                                        </div>
                                                                    </div>

                                                                </div>

                                                            </div>
                                                        </div>
                                                    ))}

                                                </>
                                            }

                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>








                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EmployeeData;