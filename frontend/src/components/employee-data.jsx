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


            navigate(`/employee-search`);

        } else {
            console.log(userid);
            setEmployeeData(userid);

        }

    }, []);
    const formatDate = (date, format = null) => {
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

    }
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
    function normalizezipnew(EMPZP1) {

        var zipCodeP = "";
        if (EMPZP1 !== null && EMPZP1 !== undefined) {
            zipCodeP = EMPZP1.toString();
            if (zipCodeP.length > 0 && zipCodeP.length < 5) {
                zipCodeP = '0'.repeat(5 - zipCodeP.length) + zipCodeP;
            } else if (zipCodeP.length !== 5) {
                zipCodeP = ""; // Or handle as invalid
            }
        }
        return zipCodeP;
    }
    function formaDatenew(date) {
        const rawDate = date;
        const dateStr = rawDate.toString();

        const year = dateStr.substring(0, 4);
        const month = dateStr.substring(4, 6);
        const day = dateStr.substring(6, 8);

        const formattedDate = `${month}/${day}/${year}`;
        // if (month.length < 2) month = '0' + month;
        // if (day.length < 2) day = '0' + day;

        // if (format && format == 'Y-m-d') return [month, day, year].join('-');
        // else return [month, day, year].join('-');
        return formattedDate;

    }
    function formaEMADAT(EMADAT) {
        if (EMADAT !== 0) {
            var dateString = EMADAT.toString();
            var year = dateString.substring(0, 2);
            if (year > '30') {
                year = '19' + year
            } else {
                year = '20' + year
            }
            var month = dateString.substring(2, 4);
            var day = dateString.substring(4, 6);
            var EMADAT = month + '/' + day + '/' + year
        } else {
            EMADAT = ''
        }
        return EMADAT;

    }


    const exportTopdf = (e) => {





        window.open('printemployee/', '_blank', 'noopener,noreferrer');




    };

    const formatDateemdt = (dateStringji) => {
        console.log('dateStringji', dateStringji);
        if (dateStringji !== 0) {
            var dateString = dateStringji.toString();
            if (dateString.length === 5) {
                year = dateString.substring(3, 5)
                month = '0' + dateString.substring(0, 1);
                day = dateString.substring(1, 3);
            } else {
                var year = dateString.substring(4, 6)
                var month = dateString.substring(0, 2);
                var day = dateString.substring(2, 4);
            }
            if (year > '30') {
                year = '19' + year
            } else {
                year = '20' + year
            }
            var ETMDAT = month + '/' + day + '/' + year
        } else {
            ETMDAT = ''
        }
        return ETMDAT
    }
    const formatDateemdtapplication = (dateStringji) => {
        var EMADAT_formatted = '';
        if (dateStringji !== null && dateStringji !== undefined && dateStringji !== 0) {
            let dateString = dateStringji.toString();
            let year = dateString.substring(0, 2);
            let month = dateString.substring(2, 4);
            let day = dateString.substring(4, 6);
            year = parseInt(year, 10) > 30 ? '19' + year : '20' + year;
            EMADAT_formatted = `${month}/${day}/${year}`;
        }
        return EMADAT_formatted

    }
    const padValue = (value) => {
        if(value!== null && value !== undefined && value !== 0 && value !== '') {
        return value.toString().padStart(4, '0');
        }
    };
    ;

    const formatDateemdtsenior = (dateStringji) => {
        var EMSRDT_formatted = '';
        if (dateStringji !== null && dateStringji !== undefined && dateStringji !== 0) {
            let dateString = dateStringji.toString();
            let year = dateString.substring(0, 2);
            let month = dateString.substring(2, 4);
            let day = dateString.substring(4, 6);
            year = parseInt(year, 10) > 30 ? '19' + year : '20' + year;
            EMSRDT_formatted = `${month}/${day}/${year}`;
        }
        return EMSRDT_formatted

    }




    const formatDateemdttermisinfor = (dateStringji) => {
        var ETMDAT_formatted = '';
        if (dateStringji !== null && dateStringji !== undefined && dateStringji !== 0) {
            let dateString = dateStringji.toString();
            let year = '', month = '', day = '';
            // Simplified logic assuming MMDDYY or similar 6-digit format from context
            if (dateString.length === 6) { // MMDDYY
                month = dateString.substring(0, 2);
                day = dateString.substring(2, 4);
                year = dateString.substring(4, 6);
            } else if (dateString.length === 5) { // Attempt to handle M D D Y Y or M M D Y Y (less common for raw numbers)
                // This part is tricky without knowing the exact 5-digit format.
                // Assuming MMDDY => month = dateString.substring(0,2), day = dateString.substring(2,4), year = '0' + dateString.substring(4,5)
                // For now, let's assume it's an error or needs specific parsing rules if it's 5 digits.
                // Defaulting to an empty string or error for unexpected 5-digit formats.
            } // Add more specific parsing if other formats are expected for ETMDAT

            if (year && month && day) {
                year = parseInt(year, 10) > 30 && parseInt(year, 10) <= 99 ? '19' + year : '20' + year;
                ETMDAT_formatted = `${month}/${day}/${year}`;
            } else {
                ETMDAT_formatted = "Invalid Date";
            }
        }
        return ETMDAT_formatted

    }


    return (
        <>
            <Header />
            <Sidebar />

            <div className='main-inner-sec content-main'>
                <div className='main-inner-heading'>
                    <div className='col-md-12'>
                        <div className='emp-main-serach'>
                            <div className='emp-serach emp-data-head'>
                                {employeeData != null &&
                                    <>
                                        <h2>{employeeData.EMLNAM}, {employeeData.EMFNAM} {employeeData.EMMNAM} </h2>
                                        <h3>Emp Id:- <span> {employeeData.EMSSAN}</span></h3>
                                    </>
                                }

                                <div className='print-sec-inner emp-print'>
                                    <span className='print-icon' onClick={(e) => exportTopdf()}><PrintIcon /></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="emp-data-inner margin-all-sec accordion-margin">
                    <div className='row'>
                        <div className='col-md-12'>
                            <div className='emp-data-sec form-accor-sec'>
                                {/* personal Information section */}
                                <Accordion
                                    expanded={expandedPanels.panel1}
                                    onChange={handleChange('panel1')}
                                >
                                    <AccordionSummary
                                        expandIcon={
                                            expandedPanels.panel1 ? <RemoveIcon /> : <AddIcon />
                                        }
                                        aria-controls="panel1-content"
                                        id="panel1-header"
                                    >
                                        <Typography component="span">Personal Information</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography className='form-detail-main'>
                                            {employeeData != null &&
                                                <>
                                                    <div className='emp-data-value-sec form-detail-inner'>
                                                        <div className='row'>
                                                            <div className=' form-detail-left'>
                                                                <div className='row'>
                                                                    <div className='form-detail-left-inner'>
                                                                        <div className='form-details-label'>
                                                                            <h3>Employee Number</h3>
                                                                            <p className='semicolon'>:</p>
                                                                        </div>

                                                                    </div>
                                                                    <div className='form-detail-right-inner'>
                                                                        <div className='form-details-value'>
                                                                            <p>{employeeData.EMSSAN}</p>
                                                                        </div>

                                                                    </div>
                                                                </div>

                                                                <div className='row'>
                                                                    <div className='form-detail-left-inner'>
                                                                        <div className='form-details-label'>
                                                                            <h3>Name</h3>
                                                                            <p className='semicolon'>:</p>
                                                                        </div>

                                                                    </div>
                                                                    <div className='form-detail-right-inner'>
                                                                        <div className='form-details-value'>
                                                                            <p>{employeeData.EMLNAM}, {employeeData.EMFNAM} {employeeData.EMMNAM} </p>
                                                                        </div>

                                                                    </div>
                                                                </div>
                                                                <div className='row'>
                                                                    <div className='form-detail-left-inner'>
                                                                        <div className='form-details-label'>
                                                                            <h3>Gender
                                                                            </h3>
                                                                            <p className='semicolon'>:</p>
                                                                        </div>

                                                                    </div>
                                                                    <div className='form-detail-right-inner'>
                                                                        <div className='form-details-value'>
                                                                            <p>{employeeData.EMSEX}, {employeeData.EMSEX == 'F' && 'FEMALE'} {employeeData.EMSEX == 'M' && 'MALE'}  {(employeeData.EMSEX != 'F' && employeeData.EMSEX != 'M') && 'OTHER'} </p>
                                                                        </div>

                                                                    </div>
                                                                </div>

                                                                <div className='row'>
                                                                    <div className='form-detail-left-inner last-right-data'>
                                                                        <div className='form-details-label'>
                                                                            <h3>Ethnic Description
                                                                            </h3>
                                                                            <p className='semicolon'>:</p>
                                                                        </div>

                                                                    </div>
                                                                    <div className='form-detail-right-inner'>
                                                                        <div className='form-details-value'>
                                                                            <p>{employeeData.ETDESC}</p>
                                                                        </div>

                                                                    </div>
                                                                </div>

                                                            </div>
                                                            <div className='form-detail-midle'>
                                                                <div className='border-after'></div>
                                                            </div>
                                                            <div className=' form-detail-right'>

                                                                <div className='row'>
                                                                    <div className='form-detail-left-innerss'>
                                                                        <div className='form-details-label'>
                                                                            <h3>SSN</h3>
                                                                            <p className='semicolon'>:</p>
                                                                        </div>

                                                                    </div>
                                                                    <div className='form-detail-right-innerss'>
                                                                        <div className='form-details-value'>
                                                                            <p>{employeeData.EMPSSN}</p>
                                                                        </div>

                                                                    </div>
                                                                </div>

                                                                <div className='row'>
                                                                    <div className='form-detail-left-innerss'>
                                                                        <div className='form-details-label'>
                                                                            <h3>Active</h3>
                                                                            <p className='semicolon'>:</p>
                                                                        </div>

                                                                    </div>
                                                                    <div className='form-detail-right-innerss'>
                                                                        <div className='form-details-value'>
                                                                            <p>{employeeData.EMSTAT}</p>
                                                                        </div>

                                                                    </div>
                                                                </div>
                                                                <div className='row'>
                                                                    <div className='form-detail-left-innerss'>
                                                                        <div className='form-details-label'>
                                                                            <h3>Ethnic Code

                                                                            </h3>
                                                                            <p className='semicolon'>:</p>
                                                                        </div>

                                                                    </div>
                                                                    <div className='form-detail-right-innerss'>
                                                                        <div className='form-details-value'>
                                                                            <p>{employeeData.EMETH}</p>
                                                                        </div>

                                                                    </div>
                                                                </div>
                                                                <div className='row'>
                                                                    <div className='form-detail-left-innerss last-right-data'>
                                                                        <div className='form-details-label'>
                                                                            <h3>Birth Date

                                                                            </h3>
                                                                            <p className='semicolon'>:</p>
                                                                        </div>

                                                                    </div>
                                                                    <div className='form-detail-right-innerss'>
                                                                        <div className='form-details-value'>
                                                                            <p>
                                                                                {employeeData.DOB != '' && employeeData.DOB != null && formatDate(employeeData.DOB)}
                                                                            </p>
                                                                        </div>

                                                                    </div>
                                                                </div>

                                                            </div>

                                                        </div>
                                                    </div>
                                                </>
                                            }

                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>

                                {/* Contact Information section */}
                                <Accordion
                                    expanded={expandedPanels.panel2}
                                    onChange={handleChange('panel2')}
                                >
                                    <AccordionSummary
                                        expandIcon={
                                            expandedPanels.panel2 ? <RemoveIcon /> : <AddIcon />
                                        }
                                        aria-controls="panel2-content"
                                        id="panel2-header"
                                    >
                                        <Typography component="span">Contact Information</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography className='form-detail-main'>
                                            {employeeData != null &&
                                                <>
                                                    <div className='emp-data-value-sec form-detail-inner'>
                                                        <div className='row'>
                                                            <div className=' form-detail-left'>
                                                                <div className='row'>
                                                                    <div className='form-detail-left-inner'>
                                                                        <div className='form-details-label'>
                                                                            <h3>Office Phone</h3>
                                                                            <p className='semicolon'>:</p>
                                                                        </div>

                                                                    </div>
                                                                    <div className='form-detail-right-inner'>
                                                                        <div className='form-details-value'>
                                                                            <p> ({employeeData.EMOTL0}) {normalizeophone(employeeData.EMOTL2)} ext. {employeeData.EMEXTN ? `${employeeData.EMEXTN}` : ''} {employeeData.EMOTLS ? `${employeeData.EMOTLS}` : ''} </p>
                                                                        </div>

                                                                    </div>
                                                                </div>

                                                                <div className='row'>
                                                                    <div className='form-detail-left-inner'>
                                                                        <div className='form-details-label'>
                                                                            <h3>Address</h3>
                                                                            <p className='semicolon'>:</p>
                                                                        </div>

                                                                    </div>
                                                                    <div className='form-detail-right-inner'>
                                                                        <div className='form-details-value'>
                                                                            <p>{employeeData.EMADD1}</p>
                                                                        </div>

                                                                    </div>
                                                                </div>
                                                                <div className='row'>
                                                                    <div className='form-detail-left-inner'>
                                                                        <div className='form-details-label'>
                                                                            <h3>Country
                                                                            </h3>
                                                                            <p className='semicolon'>:</p>
                                                                        </div>

                                                                    </div>
                                                                    <div className='form-detail-right-inner'>
                                                                        <div className='form-details-value'>
                                                                            <p>{employeeData.EMCTRY}</p>
                                                                        </div>

                                                                    </div>
                                                                </div>

                                                                <div className='row'>
                                                                    <div className='form-detail-left-inner '>
                                                                        <div className='form-details-label'>
                                                                            <h3>Location
                                                                            </h3>
                                                                            <p className='semicolon'>:</p>
                                                                        </div>

                                                                    </div>
                                                                    <div className='form-detail-right-inner'>
                                                                        <div className='form-details-value'>
                                                                            <p>    {employeeData.EMLOC && employeeData.LCNAME && <>{employeeData.EMLOC} {employeeData.LCNAME}</>}</p>
                                                                        </div>

                                                                    </div>
                                                                </div>

                                                                <div className='row'>
                                                                    <div className='form-detail-left-inner last-right-data'>
                                                                        <div className='form-details-label'>
                                                                            <h3>Sub Location
                                                                            </h3>
                                                                            <p className='semicolon'>:</p>
                                                                        </div>

                                                                    </div>
                                                                    <div className='form-detail-right-inner'>
                                                                        <div className='form-details-value'>
                                                                            <p>{employeeData.EMLOC2}, {employeeData.CLNAME}</p>
                                                                        </div>

                                                                    </div>
                                                                </div>

                                                            </div>
                                                            <div className='form-detail-midle'>
                                                                <div className='border-after'></div>
                                                            </div>
                                                            <div className=' form-detail-right'>

                                                                <div className='row'>
                                                                    <div className='form-detail-left-innerss'>
                                                                        <div className='form-details-label'>
                                                                            <h3>Home Phone</h3>
                                                                            <p className='semicolon'>:</p>
                                                                        </div>

                                                                    </div>
                                                                    <div className='form-detail-right-innerss'>
                                                                        <div className='form-details-value'>
                                                                            <p>({employeeData.EMHTL0}) {normalizehphone(employeeData.EMHTL2)} {employeeData.EMHTLS ? `${employeeData.EMHTLS}` : ''}</p>
                                                                        </div>

                                                                    </div>
                                                                </div>

                                                                <div className='row'>
                                                                    <div className='form-detail-left-innerss'>
                                                                        <div className='form-details-label'>
                                                                            <h3>Address Security</h3>
                                                                            <p className='semicolon'>:</p>
                                                                        </div>

                                                                    </div>
                                                                    <div className='form-detail-right-innerss'>
                                                                        <div className='form-details-value'>
                                                                            <p>{employeeData.EMADSC}</p>
                                                                        </div>

                                                                    </div>
                                                                </div>
                                                                <div className='row'>
                                                                    <div className='form-detail-left-innerss'>
                                                                        <div className='form-details-label'>
                                                                            <h3>Permanent Address
                                                                            </h3>
                                                                            <p className='semicolon'>:</p>
                                                                        </div>

                                                                    </div>
                                                                    <div className='form-detail-right-innerss'>
                                                                        <div className='form-details-value'>
                                                                            <p>Y</p>
                                                                        </div>

                                                                    </div>
                                                                </div>
                                                                <div className='row'>
                                                                    <div className='form-detail-left-innerss'>
                                                                        <div className='form-details-label'>
                                                                            <h3>District

                                                                            </h3>
                                                                            <p className='semicolon'>:</p>
                                                                        </div>

                                                                    </div>
                                                                    <div className='form-detail-right-innerss'>
                                                                        <div className='form-details-value'>
                                                                            <p> {employeeData.EMHDT}</p>
                                                                        </div>

                                                                    </div>
                                                                </div>

                                                                <div className='row'>
                                                                    <div className='form-detail-left-innerss last-right-data'>
                                                                        <div className='form-details-label'>
                                                                            <h3>City/State/Zip

                                                                            </h3>
                                                                            <p className='semicolon'>:</p>
                                                                        </div>

                                                                    </div>
                                                                    <div className='form-detail-right-innerss'>
                                                                        <div className='form-details-value'>
                                                                            <p>{employeeData.EMCITY}, {employeeData.EMST} {normalizezip(employeeData.EMZIP1)}</p>
                                                                        </div>

                                                                    </div>
                                                                </div>

                                                            </div>

                                                        </div>
                                                    </div>
                                                </>
                                            }

                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>

                                {/* Employment Information section */}
                                <Accordion
                                    expanded={expandedPanels.panel2}
                                    onChange={handleChange('panel3')}
                                >
                                    <AccordionSummary
                                        expandIcon={
                                            expandedPanels.panel3 ? <RemoveIcon /> : <AddIcon />
                                        }
                                        aria-controls="panel3-content"
                                        id="panel3-header"
                                    >
                                        <Typography component="span">Employment Information</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography className='form-detail-main'>
                                            {employeeData != null &&
                                                <>
                                                    <div className='emp-data-value-sec form-detail-inner'>
                                                        <div className='row'>
                                                            <div className=' form-detail-left'>
                                                                <div className='row'>
                                                                    <div className='form-detail-left-inner'>
                                                                        <div className='form-details-label'>
                                                                            <h3>Department</h3>
                                                                            <p className='semicolon'>:</p>
                                                                        </div>

                                                                    </div>
                                                                    <div className='form-detail-right-inner'>
                                                                        <div className='form-details-value'>
                                                                            <p>{employeeData.EMDEPT}</p>
                                                                        </div>

                                                                    </div>
                                                                </div>

                                                                <div className='row'>
                                                                    <div className='form-detail-left-inner'>
                                                                        <div className='form-details-label'>
                                                                            <h3>Pay Location</h3>
                                                                            <p className='semicolon'>:</p>
                                                                        </div>

                                                                    </div>
                                                                    <div className='form-detail-right-inner'>
                                                                        <div className='form-details-value'>
                                                                            <p>{employeeData.EMLOCP}, {employeeData.LPNAME}</p>
                                                                        </div>

                                                                    </div>
                                                                </div>


                                                                <div className='row'>
                                                                    <div className='form-detail-left-inner last-right-data'>
                                                                        <div className='form-details-label'>
                                                                            <h3>Termination Date
                                                                            </h3>
                                                                            <p className='semicolon'>:</p>
                                                                        </div>

                                                                    </div>
                                                                    <div className='form-detail-right-inner'>
                                                                        <div className='form-details-value'>
                                                                            <p>{employeeData.TRD != null && employeeData.TRD != '' && formatDate(employeeData.TRD)}</p>
                                                                        </div>

                                                                    </div>
                                                                </div>

                                                            </div>
                                                            <div className='form-detail-midle'>
                                                                <div className='border-after'></div>
                                                            </div>
                                                            <div className=' form-detail-right'>

                                                                <div className='row'>
                                                                    <div className='form-detail-left-innerss'>
                                                                        <div className='form-details-label'>
                                                                            <h3>Assignment</h3>
                                                                            <p className='semicolon'>:</p>
                                                                        </div>

                                                                    </div>
                                                                    <div className='form-detail-right-innerss'>
                                                                        <div className='form-details-value'>
                                                                            <p>{employeeData.EMPASN}, {employeeData.JDTITL}</p>
                                                                        </div>

                                                                    </div>
                                                                </div>

                                                                <div className='row'>
                                                                    <div className='form-detail-left-innerss last-right-data'>
                                                                        <div className='form-details-label'>
                                                                            <h3>Seniority Date</h3>
                                                                            <p className='semicolon'>:</p>
                                                                        </div>

                                                                    </div>
                                                                    <div className='form-detail-right-innerss'>
                                                                        <div className='form-details-value'>
                                                                            <p> {employeeData.EMSRDT != null && employeeData.EMSRDT != '' && formatDateemdtsenior(employeeData.EMSRDT)}</p>
                                                                        </div>

                                                                    </div>
                                                                </div>



                                                            </div>

                                                        </div>
                                                    </div>
                                                </>
                                            }
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>

                                {/* Emp School Information section */}
                                <Accordion
                                    expanded={expandedPanels.panel4}
                                    onChange={handleChange('panel4')}
                                >
                                    <AccordionSummary
                                        expandIcon={
                                            expandedPanels.panel4 ? <RemoveIcon /> : <AddIcon />
                                        }
                                        aria-controls="panel4-content"
                                        id="panel4-header"
                                    >
                                        <Typography component="span">Emp School Information</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography className='form-detail-main'>
                                            {employeeData != null &&
                                                <>
                                                    <div className='emp-data-value-sec form-detail-inner'>
                                                        <div className='row'>
                                                            <div className=' form-detail-left'>
                                                                <div className='row'>
                                                                    <div className='form-detail-left-inner'>
                                                                        <div className='form-details-label'>
                                                                            <h3>School</h3>
                                                                            <p className='semicolon'>:</p>
                                                                        </div>

                                                                    </div>
                                                                    <div className='form-detail-right-inner'>
                                                                        <div className='form-details-value'>
                                                                            <p>{employeeData.EMHSC}</p>
                                                                        </div>

                                                                    </div>
                                                                </div>

                                                                <div className='row'>
                                                                    <div className='form-detail-left-inner'>
                                                                        <div className='form-details-label'>
                                                                            <h3>Address</h3>
                                                                            <p className='semicolon'>:</p>
                                                                        </div>

                                                                    </div>
                                                                    <div className='form-detail-right-inner'>
                                                                        <div className='form-details-value'>
                                                                            <p>{employeeData.EMPAD1 || employeeData.EMPAD2
                                                                                &&
                                                                                `${employeeData.EMPAD1 || ''} ${employeeData.EMPAD2 || ''}`}</p>
                                                                        </div>

                                                                    </div>
                                                                </div>
                                                                <div className='row'>
                                                                    <div className='form-detail-left-inner last-right-data'>
                                                                        <div className='form-details-label'>
                                                                            <h3>Country
                                                                            </h3>
                                                                            <p className='semicolon'>:</p>
                                                                        </div>

                                                                    </div>
                                                                    <div className='form-detail-right-inner'>
                                                                        <div className='form-details-value'>
                                                                            <p>{employeeData.EMPCTR}</p>
                                                                        </div>

                                                                    </div>
                                                                </div>



                                                            </div>
                                                            <div className='form-detail-midle'>
                                                                <div className='border-after'></div>
                                                            </div>
                                                            <div className=' form-detail-right'>

                                                                <div className='row'>
                                                                    <div className='form-detail-left-innerss'>
                                                                        <div className='form-details-label'>
                                                                            <h3>Room</h3>
                                                                            <p className='semicolon'>:</p>
                                                                        </div>

                                                                    </div>
                                                                    <div className='form-detail-right-innerss'>
                                                                        <div className='form-details-value'>
                                                                            <p>{employeeData.EMROOM}</p>
                                                                        </div>

                                                                    </div>
                                                                </div>

                                                                <div className='row'>
                                                                    <div className='form-detail-left-innerss last-right-data'>
                                                                        <div className='form-details-label'>
                                                                            <h3>City/State/Zip</h3>
                                                                            <p className='semicolon'>:</p>
                                                                        </div>

                                                                    </div>
                                                                    <div className='form-detail-right-innerss'>
                                                                        <div className='form-details-value'>
                                                                            <p>{employeeData.EMPCTY || ''} {employeeData.EMPST || ''}, {normalizezipnew(employeeData.EMPZP1)}</p>
                                                                        </div>

                                                                    </div>
                                                                </div>


                                                            </div>

                                                        </div>
                                                    </div>
                                                </>
                                            }
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>


                                {/* Service Details section */}
                                <Accordion
                                    expanded={expandedPanels.panel5}
                                    onChange={handleChange('panel5')}
                                >
                                    <AccordionSummary
                                        expandIcon={
                                            expandedPanels.panel5 ? <RemoveIcon /> : <AddIcon />
                                        }
                                        aria-controls="panel5-content"
                                        id="panel5-header"
                                    >
                                        <Typography component="span">Service Details</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography className='form-detail-main'>
                                            {employeeData != null &&
                                                <>
                                                    <div className='emp-data-value-sec form-detail-inner'>
                                                        <div className='row'>
                                                            <div className=' form-detail-left'>
                                                                <div className='row'>
                                                                    <div className='form-detail-left-inner'>
                                                                        <div className='form-details-label'>
                                                                            <h3>Previous Service Credit</h3>
                                                                            <p className='semicolon'>:</p>
                                                                        </div>

                                                                    </div>
                                                                    <div className='form-detail-right-inner'>
                                                                        <div className='form-details-value'>
                                                                            <p>{employeeData.EMPREV}</p>
                                                                        </div>

                                                                    </div>
                                                                </div>

                                                                <div className='row'>
                                                                    <div className='form-detail-left-inner'>
                                                                        <div className='form-details-label'>
                                                                            <h3>State </h3>
                                                                            <p className='semicolon'>:</p>
                                                                        </div>

                                                                    </div>
                                                                    <div className='form-detail-right-inner'>
                                                                        <div className='form-details-value'>
                                                                            <p>{employeeData.EMSST}</p>
                                                                        </div>

                                                                    </div>
                                                                </div>
                                                                <div className='row'>
                                                                    <div className='form-detail-left-inner'>
                                                                        <div className='form-details-label'>
                                                                            <h3>Full Time Hire Date
                                                                            </h3>
                                                                            <p className='semicolon'>:</p>
                                                                        </div>

                                                                    </div>
                                                                    <div className='form-detail-right-inner'>
                                                                        <div className='form-details-value'>
                                                                            <p> {employeeData.HID != '' && employeeData.HID != null && formatDate(employeeData.HID)}</p>
                                                                        </div>

                                                                    </div>
                                                                </div>

                                                                <div className='row'>
                                                                    <div className='form-detail-left-inner'>
                                                                        <div className='form-details-label'>
                                                                            <h3>Original Hire Date
                                                                            </h3>
                                                                            <p className='semicolon'>:</p>
                                                                        </div>

                                                                    </div>
                                                                    <div className='form-detail-right-inner'>
                                                                        <div className='form-details-value'>
                                                                            <p>{employeeData.OHD != '' && employeeData.OHD != null && formatDate(employeeData.OHD)}</p>
                                                                        </div>

                                                                    </div>
                                                                </div>

                                                                <div className='row'>
                                                                    <div className='form-detail-left-inner'>
                                                                        <div className='form-details-label'>
                                                                            <h3>Termination Date
                                                                            </h3>
                                                                            <p className='semicolon'>:</p>
                                                                        </div>

                                                                    </div>
                                                                    <div className='form-detail-right-inner'>
                                                                        <div className='form-details-value'>
                                                                            <p> {employeeData.TRD != '' && employeeData.TRD != null && formatDate(employeeData.TRD)}</p>
                                                                        </div>

                                                                    </div>
                                                                </div>

                                                                <div className='row'>
                                                                    <div className='form-detail-left-inner'>
                                                                        <div className='form-details-label'>
                                                                            <h3>Title Change Date
                                                                            </h3>
                                                                            <p className='semicolon'>:</p>
                                                                        </div>

                                                                    </div>
                                                                    <div className='form-detail-right-inner'>
                                                                        <div className='form-details-value'>
                                                                            <p>{employeeData.HID != '' && employeeData.HID != null && formatDate(employeeData.HID)}</p>
                                                                        </div>

                                                                    </div>
                                                                </div>

                                                                <div className='row'>
                                                                    <div className='form-detail-left-inner last-right-data'>
                                                                        <div className='form-details-label'>
                                                                            <h3>Next Update for Longevity
                                                                            </h3>
                                                                            <p className='semicolon'>:</p>
                                                                        </div>

                                                                    </div>
                                                                    <div className='form-detail-right-inner  last-right-data'>
                                                                        <div className='form-details-value'>
                                                                            <p>{employeeData.EMMSC2}</p>
                                                                        </div>

                                                                    </div>
                                                                </div>

                                                            </div>
                                                            <div className='form-detail-midle'>
                                                                <div className='border-after'></div>
                                                            </div>
                                                            <div className=' form-detail-right'>

                                                                <div className='row'>
                                                                    <div className='form-detail-left-innerss'>
                                                                        <div className='form-details-label'>
                                                                            <h3>District </h3>
                                                                            <p className='semicolon'>:</p>
                                                                        </div>

                                                                    </div>
                                                                    <div className='form-detail-right-innerss'>
                                                                        <div className='form-details-value'>
                                                                            <p>{employeeData.EMSDST}</p>
                                                                        </div>

                                                                    </div>
                                                                </div>

                                                                <div className='row'>
                                                                    <div className='form-detail-left-innerss'>
                                                                        <div className='form-details-label'>
                                                                            <h3>Application Date</h3>
                                                                            <p className='semicolon'>:</p>
                                                                        </div>

                                                                    </div>
                                                                    <div className='form-detail-right-innerss'>
                                                                        <div className='form-details-value'>
                                                                            <p>{formatDateemdtapplication(employeeData.EMADAT)}</p>
                                                                        </div>

                                                                    </div>
                                                                </div>
                                                                <div className='row'>
                                                                    <div className='form-detail-left-innerss'>
                                                                        <div className='form-details-label'>
                                                                            <h3>Seniority Date

                                                                            </h3>
                                                                            <p className='semicolon'>:</p>
                                                                        </div>

                                                                    </div>
                                                                    <div className='form-detail-right-innerss'>
                                                                        <div className='form-details-value'>
                                                                            <p>

                                                                                {employeeData.EMSRDT != '' && employeeData.EMSRDT != null && formatDateemdtsenior(employeeData.EMSRDT)}
                                                                            </p>
                                                                        </div>

                                                                    </div>
                                                                </div>
                                                                <div className='row'>
                                                                    <div className='form-detail-left-innerss '>
                                                                        <div className='form-details-label'>
                                                                            <h3>Seniority Number

                                                                            </h3>
                                                                            <p className='semicolon'>:</p>
                                                                        </div>

                                                                    </div>
                                                                    <div className='form-detail-right-innerss'>
                                                                        <div className='form-details-value'>
                                                                            <p>{employeeData.EMSR != null && employeeData.EMSR != '' && (employeeData.EMSR)}</p>
                                                                        </div>

                                                                    </div>
                                                                </div>

                                                                <div className='row'>
                                                                    <div className='form-detail-left-innerss'>
                                                                        <div className='form-details-label'>
                                                                            <h3>Salary Change Date

                                                                            </h3>
                                                                            <p className='semicolon'>:</p>
                                                                        </div>

                                                                    </div>
                                                                    <div className='form-detail-right-innerss'>
                                                                        <div className='form-details-value'>
                                                                            <p>
                                                                                {employeeData.SCD != '' && employeeData.SCD != null && formatDate(employeeData.SCD)}
                                                                            </p>
                                                                        </div>

                                                                    </div>
                                                                </div>

                                                                <div className='row'>
                                                                    <div className='form-detail-left-innerss'>
                                                                        <div className='form-details-label'>
                                                                            <h3>Last Update for Longevity

                                                                            </h3>
                                                                            <p className='semicolon'>:</p>
                                                                        </div>

                                                                    </div>
                                                                    <div className='form-detail-right-innerss'>
                                                                        <div className='form-details-value'>
                                                                            <p>{(employeeData.EMMSC1)}</p>
                                                                        </div>

                                                                    </div>
                                                                </div>

                                                                <div className='row'>
                                                                    <div className='form-detail-left-innerss last-right-data'>
                                                                        <div className='form-details-label'>
                                                                            <h3>Total Year of Longevity

                                                                            </h3>
                                                                            <p className='semicolon'>:</p>
                                                                        </div>

                                                                    </div>
                                                                    <div className='form-detail-right-innerss'>
                                                                        <div className='form-details-value'>
                                                                            <p>{(employeeData.EMMSC3)}</p>
                                                                        </div>

                                                                    </div>
                                                                </div>

                                                            </div>

                                                        </div>
                                                    </div>
                                                </>
                                            }

                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>


                                {/* Pension Details section */}
                                <Accordion
                                    expanded={expandedPanels.panel6}
                                    onChange={handleChange('panel6')}
                                >
                                    <AccordionSummary
                                        expandIcon={
                                            expandedPanels.panel6 ? <RemoveIcon /> : <AddIcon />
                                        }
                                        aria-controls="panel6-content"
                                        id="panel6-header"
                                    >
                                        <Typography component="span">Pension Details</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography className='form-detail-main'>
                                            {employeeData != null &&
                                                <>
                                                    <div className='emp-data-value-sec form-detail-inner'>
                                                        <div className='row'>
                                                            <div className=' form-detail-left'>
                                                                <div className='row'>
                                                                    <div className='form-detail-left-inner'>
                                                                        <div className='form-details-label'>
                                                                            <h3>Pension Number</h3>
                                                                            <p className='semicolon'>:</p>
                                                                        </div>

                                                                    </div>
                                                                    <div className='form-detail-right-inner'>
                                                                        <div className='form-details-value'>
                                                                            <p>{employeeData.EXPENS}</p>
                                                                        </div>

                                                                    </div>
                                                                </div>

                                                                <div className='row'>
                                                                    <div className='form-detail-left-inner'>
                                                                        <div className='form-details-label'>
                                                                            <h3>Pension Full Rate % </h3>
                                                                            <p className='semicolon'>:</p>
                                                                        </div>

                                                                    </div>
                                                                    <div className='form-detail-right-inner'>
                                                                        <div className='form-details-value'>
                                                                            <p>{employeeData.EXFRPC}</p>
                                                                        </div>

                                                                    </div>
                                                                </div>
                                                                <div className='row'>
                                                                    <div className='form-detail-left-inner'>
                                                                        <div className='form-details-label'>
                                                                            <h3>Job Code for GTL Addenda
                                                                            </h3>
                                                                            <p className='semicolon'>:</p>
                                                                        </div>

                                                                    </div>
                                                                    <div className='form-detail-right-inner'>
                                                                        <div className='form-details-value'>
                                                                            <p>{padValue(employeeData.EXJOB)}</p>
                                                                        </div>

                                                                    </div>
                                                                </div>

                                                                <div className='row'>
                                                                    <div className='form-detail-left-inner'>
                                                                        <div className='form-details-label'>
                                                                            <h3>Number of GTL Distributions
                                                                            </h3>
                                                                            <p className='semicolon'>:</p>
                                                                        </div>

                                                                    </div>
                                                                    <div className='form-detail-right-inner'>
                                                                        <div className='form-details-value'>
                                                                            <p>{employeeData.EXPAYP}</p>
                                                                        </div>

                                                                    </div>
                                                                </div>

                                                                <div className='row'>
                                                                    <div className='form-detail-left-inner'>
                                                                        <div className='form-details-label'>
                                                                            <h3>State
                                                                            </h3>
                                                                            <p className='semicolon'>:</p>
                                                                        </div>

                                                                    </div>
                                                                    <div className='form-detail-right-inner'>
                                                                        <div className='form-details-value'>
                                                                            <p>{employeeData.EXSEXP}</p>
                                                                        </div>

                                                                    </div>
                                                                </div>

                                                                <div className='row'>
                                                                    <div className='form-detail-left-inner last-right-data'>
                                                                        <div className='form-details-label'>
                                                                            <h3>Out-of-State
                                                                            </h3>
                                                                            <p className='semicolon'>:</p>
                                                                        </div>

                                                                    </div>
                                                                    <div className='form-detail-right-inner'>
                                                                        <div className='form-details-value'>
                                                                            <p>{employeeData.EXOEXP}</p>
                                                                        </div>

                                                                    </div>
                                                                </div>



                                                            </div>
                                                            <div className='form-detail-midle'>
                                                                <div className='border-after'></div>
                                                            </div>
                                                            <div className=' form-detail-right'>

                                                                <div className='row'>
                                                                    <div className='form-detail-left-innerss'>
                                                                        <div className='form-details-label'>
                                                                            <h3>10/12 Column Value </h3>
                                                                            <p className='semicolon'>:</p>
                                                                        </div>

                                                                    </div>
                                                                    <div className='form-detail-right-innerss'>
                                                                        <div className='form-details-value'>
                                                                            <p>{employeeData.EX1012}</p>
                                                                        </div>

                                                                    </div>
                                                                </div>

                                                                <div className='row'>
                                                                    <div className='form-detail-left-innerss'>
                                                                        <div className='form-details-label'>
                                                                            <h3>TPAF,PERS, CNTY or NOPP</h3>
                                                                            <p className='semicolon'>:</p>
                                                                        </div>

                                                                    </div>
                                                                    <div className='form-detail-right-innerss'>
                                                                        <div className='form-details-value'>
                                                                            <p>{employeeData.EXTYPE}</p>
                                                                        </div>

                                                                    </div>
                                                                </div>
                                                                <div className='row'>
                                                                    <div className='form-detail-left-innerss'>
                                                                        <div className='form-details-label'>
                                                                            <h3>GTL Salary Override

                                                                            </h3>
                                                                            <p className='semicolon'>:</p>
                                                                        </div>

                                                                    </div>
                                                                    <div className='form-detail-right-innerss'>
                                                                        <div className='form-details-value'>
                                                                            <p>{employeeData.EXSALO}</p>
                                                                        </div>

                                                                    </div>
                                                                </div>
                                                                <div className='row'>
                                                                    <div className='form-detail-left-innerss '>
                                                                        <div className='form-details-label'>
                                                                            <h3>Years of Experience

                                                                            </h3>
                                                                            <p className='semicolon'>:</p>
                                                                        </div>

                                                                    </div>
                                                                    <div className='form-detail-right-innerss'>
                                                                        <div className='form-details-value'>
                                                                            <p></p>
                                                                        </div>

                                                                    </div>
                                                                </div>

                                                                <div className='row'>
                                                                    <div className='form-detail-left-innerss last-right-data'>
                                                                        <div className='form-details-label'>
                                                                            <h3>District

                                                                            </h3>
                                                                            <p className='semicolon'>:</p>
                                                                        </div>

                                                                    </div>
                                                                    <div className='form-detail-right-innerss'>
                                                                        <div className='form-details-value'>
                                                                            <p>{employeeData.EXDEXP}</p>
                                                                        </div>

                                                                    </div>
                                                                </div>





                                                            </div>
                                                        </div>

                                                        <div className='form-large-data-sec form-large-fill'>
                                                            <div className='row'>
                                                                <div className='form-detail-left-inner form-neww-details-se form-newsss-pure'>
                                                                    <div className='form-details-label'>
                                                                        <h3>Employee Contribute to Cost of Life Insurance?</h3>
                                                                        <p className='semicolon'>:</p>
                                                                    </div>

                                                                </div>
                                                                <div className='form-detail-right-inner form-neww-rightss form-newss-right-pure'>
                                                                    <div className='form-details-value'>
                                                                        <p>{employeeData.EXCNTB}</p>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </>
                                            }


                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>


                                {/* Termination Information section */}
                                <Accordion
                                    expanded={expandedPanels.panel7}
                                    onChange={handleChange('panel7')}
                                >
                                    <AccordionSummary
                                        expandIcon={
                                            expandedPanels.panel7 ? <RemoveIcon /> : <AddIcon />
                                        }
                                        aria-controls="panel7-content"
                                        id="panel7-header"
                                    >
                                        <Typography component="span">Termination Information</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography className='form-detail-main'>
                                            {employeeData != null &&
                                                <>
                                                    <div className='emp-data-value-sec form-detail-inner form-detail-terminate'>
                                                        <div className='row'>
                                                            <div className=' form-detail-left'>
                                                                <div className='row'>
                                                                    <div className='form-detail-left-inner'>
                                                                        <div className='form-details-label'>
                                                                            <h3>Termination Date</h3>
                                                                            <p className='semicolon'>:</p>
                                                                        </div>

                                                                    </div>
                                                                    <div className='form-detail-right-inner'>
                                                                        <div className='form-details-value'>
                                                                            <p> {employeeData.ETMDAT != '' && employeeData.ETMDAT != null && formatDateemdttermisinfor(employeeData.ETMDAT)}
                                                                               </p>
                                                                        </div>

                                                                    </div>
                                                                </div>
                                                                {(employeeData.ETMCDE && employeeData.TRMTTL) &&
                                                                    <div className='row'>
                                                                        <div className='form-detail-left-inner'>
                                                                            <div className='form-details-label'>
                                                                                <h3>Termination Code</h3>
                                                                                <p className='semicolon'>:</p>
                                                                            </div>

                                                                        </div>
                                                                        <div className='form-detail-right-inner'>
                                                                            <div className='form-details-value'>
                                                                                <p> 
                                                                                   {employeeData.ETMCDE} {employeeData.TRMTTL}</p>
                                                                            </div>

                                                                        </div>
                                                                    </div>
                                                                }
                                                                <div className='row'>
                                                                    <div className='form-detail-left-inner'>
                                                                        <div className='form-details-label'>
                                                                            <h3>Employee Details </h3>
                                                                            <p className='semicolon'>:</p>
                                                                        </div>

                                                                    </div>
                                                                    <div className='form-detail-right-inner'>
                                                                        <div className='form-details-value'>
                                                                            <p>{(employeeData.ETMDS1 === null || employeeData.ETMDS1 === undefined) ? '-' : employeeData.ETMDS1}



                                                                            </p>
                                                                        </div>

                                                                    </div>
                                                                </div>



                                                                <div className='row'>
                                                                    <div className='form-detail-left-inner last-right-data'>
                                                                        <div className='form-details-label'>
                                                                            <h3>Additional Details
                                                                            </h3>
                                                                            <p className='semicolon'>:</p>
                                                                        </div>

                                                                    </div>
                                                                    <div className='form-detail-right-inner  last-right-data'>
                                                                        <div className='form-details-value'>
                                                                            <p>
                                                                                {/* {employeeData.ETMDS2} 
                                                                                {employeeData.ETMDS3} 
                                                                                 {employeeData.ETMDS4}  
                                                                                 {employeeData.ETMDS5} 
                                                                                  {employeeData.ETMDS6} */}
                                                                                 {(employeeData.ETMDS2 === null || employeeData.ETMDS2 === undefined) ? '-' : employeeData.ETMDS2}  {(employeeData.ETMDS3 === null || employeeData.ETMDS3 === undefined) ? '-' : employeeData.ETMDS3} {(employeeData.ETMDS4 === null || employeeData.ETMDS4 === undefined) ? '-' : employeeData.ETMDS4} {(employeeData.ETMDS5 === null || employeeData.ETMDS5 === undefined) ? '-' : employeeData.ETMDS5} {(employeeData.ETMDS6 === null || employeeData.ETMDS6 === undefined) ? '-' : employeeData.ETMDS6}
                                                                                
                                                                                </p>
                                                                        </div>

                                                                    </div>
                                                                </div>

                                                            </div>


                                                        </div>
                                                    </div>
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
