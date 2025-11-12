
import React, { useState, useEffect } from 'react';
import Header from './header';
import Sidebar from './sidebar';
import PrintIcon from '@mui/icons-material/Print';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import { Link } from 'react-router-dom';
import secureLocalStorage from "react-secure-storage";
import {
    useNavigate
} from "react-router-dom";
const Podetails = () => {
    const [employeeData, setEmployeeData] = useState([]);
    const [poData, setPoData] = useState({});
    const [loader, setLoader] = useState(false);

    let navigate = useNavigate();
    useEffect(() => {
        var userid = secureLocalStorage.getItem('poData');

        var poid = secureLocalStorage.getItem('pobasicData');
        var checkforsh = secureLocalStorage.getItem('checkforsh');

        if ((userid) == null || (userid) == undefined) {


            navigate(`/posearch`);

        } else {

            setEmployeeData(userid);
            setPoData(poid);
            console.log('poid', poid);
            console.log('userid', userid);
            if (checkforsh == 'yes' && checkforsh != null && checkforsh != undefined) {
                setLoader(true);
            }
            secureLocalStorage.setItem("poDataprint", userid);
            secureLocalStorage.setItem("pobasicDataprint", poid);
            secureLocalStorage.removeItem('pobasicData');
            secureLocalStorage.removeItem('poData');

        }

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
    if(pPODAT!= null && pPODAT != undefined && pPODAT != ''){
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






    const exportTopdf = (e) => {





        window.open('Pdfpo/', '_blank', 'noopener,noreferrer');




    };
    return (
        <>
            <Header />
            <Sidebar />

            <div className='main-inner-sec content-main'>
                <div className='main-inner-heading'>
                    <div className='col-md-12'>
                        <div className='emp-main-serach'>
                            <div className='emp-serach emp-data-head emp-another-sec'>

                                <h2>Purchase Order Search</h2>

                            </div>
                        </div>


                    </div>
                </div>

                <div class=" emp-main-heading-emp">
                    <div class="main-heading-sec ">
                        <div class="col-md-12">
                            <div class="head-inner head-inner-main">
                                {poData != null &&
                                    <>
                                        <h2>Document : {poData.podoc}</h2>
                                        <h3>Number : {poData.ponum}</h3>
                                        <div class="head-right print-diff po-print-sec">
                                            <span className='print-icon' onClick={(e) => exportTopdf()}><PrintIcon /></span>

                                        </div>
                                    </>
                                }


                            </div>
                            {loader == true ?

                                <>
                                    <div className='back-sec'>
                                        <Link to="/showPO" className="back-btn-sec"><KeyboardDoubleArrowLeftIcon />Back</Link>
                                    </div>
                                </> :
                                <>
                                    <div className='back-sec'>
                                        <Link to="/posearch" className="back-btn-sec"><KeyboardDoubleArrowLeftIcon />Back</Link>
                                    </div>
                                </>}

                        </div>
                    </div>
                </div>
                {employeeData.length > 0 &&
                    <>
                        <div className="emp-table-sec">
                            <div className='po-details-sec'>
                                <div className="row">
                                    <div className='col-md-12'>
                                        <div className='po-details-head'>
                                            <h2>Vendor Name: <span>{employeeData[0].VNNAME} ({employeeData[0].POVEND})</span></h2>
                                        </div>
                                    </div>
                                </div>
                                <div className='row margin-top-po-table'>
                                    {/* table section start from here */}
                                    <div className='col-md-6'>
                                        <div class="table-main-sec diff-po-table">
                                            <table className='table table-sec'>
                                                <tbody class="tbody-light tbody-po-light tbody-left-po">
                                                    <tr>
                                                        <th>Vendor Address</th>
                                                        <td class="value-table">
                                                            <p>{employeeData[0].VNADDR}  ,{employeeData[0].VNCITY}, {employeeData[0].VNST} {checkWinzip(employeeData[0].VNZIP)}</p>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th>Ship To <span className='po-data-td'>({employeeData[0].POSHIP})</span></th>
                                                        <td class="value-table">
                                                            <p>{employeeData[0].SHNAME} </p>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <th>Ship Address</th>
                                                        <td class="value-table">
                                                            <p>{employeeData[0].SHADR1}    {employeeData[0].SHCITY}, {employeeData[0].SHST} {checkshizip(employeeData[0].SHZIP1)}</p>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th>P/O date</th>
                                                        <td class="value-table">
                                                            <p>{((employeeData[0].PODAT != null &&
                                                                employeeData[0].PODAT != undefined) ? employeeData[0].PODAT : '')}

                                                            </p>


                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <th>Date Request</th>
                                                        <td class="value-table">
                                                            <p>{employeeData[0].PODREQ === "00000" ?
                                                                "" : checkpdat(employeeData[0].PODREQ)}</p>




                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th>Requision</th>
                                                        <td class="value-table">
                                                            <p>{employeeData[0].POREQ}</p>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <th>Reference</th>
                                                        <td class="value-table">
                                                            <p> {employeeData[0].POREF}</p>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th>Created by</th>
                                                        <td class="value-table">
                                                            <p>{employeeData[0].POIUSR}</p>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <th>A/P Can close</th>
                                                        <td class="value-table">
                                                            <p>{employeeData[0].POAPCL}</p>
                                                        </td>
                                                    </tr>

                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                    <div className='col-md-6'>
                                        <div class="table-main-sec diff-po-table">
                                            <table className='table table-sec'>
                                                <tbody class="tbody-light tbody-po-light">
                                                    <tr>
                                                        <th>Receiving Required</th>
                                                        <td class="value-table">
                                                            <p>{employeeData[0].PORREC}</p>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th>Draft Copy</th>
                                                        <td class="value-table">
                                                            <p>{employeeData[0].PODRAF}</p>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <th>Hold Payments</th>
                                                        <td class="value-table">
                                                            <p>{employeeData[0].POHOLD}</p>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th>Purchase Order Line Total</th>
                                                        <td class="value-table">
                                                            <p>{dollarUS.format(employeeData[0].POTOT)}</p>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <th>Freight Total</th>
                                                        <td class="value-table">
                                                            <p>{dollarUS.format(employeeData[0].POFRT)}</p>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th>Sales Tax</th>
                                                        <td class="value-table">
                                                            <p>{dollarUS.format(employeeData[0].POTTAX)}</p>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <th>Purchase Order Total</th>
                                                        <td class="value-table">
                                                            <p> {dollarUS.format(checktotal(employeeData[0].POTOT, employeeData[0].POFRT, employeeData[0].POTTAX))}</p>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th>Total Accrued to Date</th>
                                                        <td class="value-table">
                                                            <p> {dollarUS.format(employeeData[0].POTPAY)}</p>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <th>Total Paid to Date</th>
                                                        <td class="value-table">
                                                            <p> {dollarUS.format(0)}</p>
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
                    </>

                }




            </div >

        </>
    )
}
export default Podetails;
