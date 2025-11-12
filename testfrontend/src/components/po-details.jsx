
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
import { showpodeat } from '../actions/admin.actions';
function formatDate(date, format = null) {
     if(date!=null && date!=undefined && date!=''){
 const myArray = date.split("-");
    var d = new Date(date);
    var month = myArray[1];
    var day = myArray[2];
    var year = myArray[0];
    var daten = month + '/' + day + '/' + year;
     return daten;
     }else{
       var daten = '';
         return daten;
     }
   
    // if (month.length < 2) month = '0' + month;
    // if (day.length < 2) day = '0' + day;

    // if (format && format == 'Y-m-d') return [month, day, year].join('-');
    // else return [month, day, year].join('-');
   
}
function formatValue(input) {
    if(input!=null && input!=undefined && input!=''){
    const str = input.toString();
    return `${str.slice(0, 2)}-${str.slice(2, 5)}-${str.slice(5, 8)}-${str.slice(8, 11)}-${str.slice(11, 14)}-${str.slice(14, 16)}-${str.slice(16)}`;
    }else{
        return '';
    }
}

const Podetails = () => {
    const [employeeData, setEmployeeData] = useState([]);
    const [vendorData, setvendorData] = useState(null);
    const [poData, setPoData] = useState({});
    const [loader, setLoader] = useState(false);
    const [allpodeat, setAllpodeat] = useState([]);
    let navigate = useNavigate();
    useEffect(() => {
        var userid = secureLocalStorage.getItem('poData');
        var vendordata = secureLocalStorage.getItem('vendorNumberData');
        var poid = secureLocalStorage.getItem('pobasicData');
        var checkforsh = secureLocalStorage.getItem('checkforsh');

        if ((userid) == null || (userid) == undefined) {


             navigate(`/vendorsearch`);

        } else {
            setvendorData(vendordata[0]);
            setEmployeeData(userid);
            setPoData(poid);
            console.log('poid', poid);
            console.log('userid', userid);
            if (checkforsh == 'yes' && checkforsh != null && checkforsh != undefined) {
                setLoader(true);
            }
            showpodeat(poid.podoc, poid.ponum).then((res) => {
                console.log('add-user res=====>>>>', res.data);
                if (res.data == '' || res.data == null || res.data.length == 0) {
                    setAllpodeat([]);
                } else {
                    setAllpodeat(res.data);
                    secureLocalStorage.setItem("showallpodeatnew", res.data);




                }

            }).catch((error) => {
                setAllpodeat([]);
                console.log('error occurs while registring the user', error);
            });
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




    const cleanedValue = (value) => {
        if (value !== null && value !== undefined && value !== 0 && value !== '') {
            return String(value).replace(/^"|"$/g, '');;
        }
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
                                            <h2>Vendor Name: <span>{vendorData.VNNAME} {vendorData.VNNAM2} ({employeeData[0].POVEND})</span></h2>
                                        </div>
                                    </div>
                                </div>
                                <div className='row margin-top-po-table'>
                                    {/* table section start from here */}
                                    <div className='col-md-6'>
                                        <div class="table-main-sec diff-po-table">
                                            <table className='table table-sec'>
                                                <tbody class="tbody-light tbody-po-light tbody-left-po tbody-maintain-high left-tbody-hight">
                                                    <tr>
                                                        <th >Vendor Address</th>
                                                        <td class="value-table">
                                                            <p>{vendorData.VNADDR} {vendorData.VNADD2 != '' && <>{',' + vendorData.VNADD2} </>} ,{vendorData.VNCITY}, {vendorData.VNST} {checkWinzip(vendorData.VNZIP)}</p>
                                                        </td>
                                                    </tr>



                                                    <tr>
                                                        <th>P/O date</th>
                                                        <td class="value-table">
                                                            <p>{((employeeData[0].PODATE != null &&
                                                                employeeData[0].PODATE != undefined) ? formatDate(employeeData[0].PODATE) : '')}</p>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th>Date Request</th>
                                                        <td class="value-table">
                                                            <p>{employeeData[0].POREDATE === "00000" ?
                                                                "" : formatDate(employeeData[0].POREDATE)}</p>




                                                        </td>
                                                    </tr>
                                                    {/* <tr>
                                                        <th>PO Type</th>
                                                        <td class="value-table">
                                                            <p>{(employeeData[0].POTYPE)}</p>




                                                        </td>
                                                    </tr> */}


                                                    <tr>
                                                        <th>Reference</th>
                                                        <td class="value-table">
                                                            <p> {employeeData[0].POREF}</p>
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
                                                <tbody class="tbody-light tbody-po-light tbody-maintain-high">

                                                    <tr>
                                                        <th>Ship To <span className='po-data-td'>({employeeData[0].POATTN})</span></th>
                                                        <td class="value-table">
                                                            <p>{employeeData[0].SHNAME} {employeeData[0].SHATTN != '' && <>{',' + employeeData[0].SHATTN} </>} </p>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th>Ship Address</th>
                                                        <td class="value-table">
                                                            <p>{employeeData[0].SHADR1}    {employeeData[0].SHCITY}, {employeeData[0].SHST} {checkshizip(employeeData[0].SHZIP1)}



                                                            </p>


                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <th>Requisition</th>
                                                        <td class="value-table">
                                                            <p>{employeeData[0].POREQ}</p>
                                                        </td>
                                                    </tr>
                                                    {/* <tr>
                                                        <th>Requested By</th>
                                                        <td class="value-table">
                                                            <p>{(employeeData[0].POTYPE)}</p>




                                                        </td>
                                                    </tr> */}
                                                    <tr>
                                                        <th>Created by</th>
                                                        <td class="value-table">
                                                            <p>{employeeData[0].POIUSR}</p>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <th>Purchase Order Total</th>
                                                        <td class="value-table">
                                                            <p> {dollarUS.format(checktotal(employeeData[0].POTOT, employeeData[0].POFRT, employeeData[0].POTTAX))}</p>
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


                                <div className="row">
                                    <div className='col-md-12'>
                                        <div className='po-details-head' style={{ marginTop: '20px' }}>
                                            <h2>Purchase Order Details</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className='row margin-top-po-table'>

                                    {
                                        allpodeat.length > 0 && (
                                            <>
                                                <div className=''>

                                                    <div class="table-main-sec">
                                                        <table class="table table-sec">
                                                            <thead class="thead-before-sec thaed-colaps-sec">
                                                                <tr>

                                                                    <th className='job-width schol-yr-width cursorjob qtn-details-widh' >Quantity</th>
                                                                    <th className='abse-type-width loc-width cursorjob unit-details-widh' >Unit </th>
                                                                    <th className='abse-type-width loc-width cursorjob desc-details-widh' >Description  </th>

                                                                    <th className='used-width salary-width ac-no-details-widh'>Account Number </th>
                                                                    <th className='used-width salary-width price-detail-widh'>Price</th>
                                                                    <th className='used-width salary-width ex-peice-width'>Extended Price</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody class="tbody-light">
                                                                {allpodeat.map((entry, index) => (
                                                                    <tr>
                                                                        <td class="value-table">
                                                                            <p>{(entry.POLQTY)}</p>
                                                                        </td>
                                                                        <td class="value-table">
                                                                            <p>{cleanedValue(entry.POLUM)}</p>
                                                                        </td>
                                                                        <td class="value-table">
                                                                            <p>{(entry.POLDES)}</p>
                                                                        </td>

                                                                        <td class="value-table">
                                                                            <p>{formatValue(cleanedValue((entry.POLACT)))}</p>
                                                                        </td>
                                                                        <td class="value-table">
                                                                            <p>{dollarUS.format(entry.POLCST)}</p>
                                                                        </td>
                                                                        <td class="value-table">
                                                                            <p>{dollarUS.format((entry.POLCST * entry.POLQTY))}</p>
                                                                        </td>

                                                                    </tr>


                                                                ))}





                                                            </tbody>
                                                        </table>
                                                    </div>



                                                </div>

                                            </>
                                        )
                                    }

                                    {/* {
                                        allpodeat.length > 0 && (
                                            <>
                                            
                                                {allpodeat.map((entry, index) => (

                                                    <div className='col-md-6'>




                                                        < div class="table-main-sec diff-po-table">
                                                            <table className='table table-sec'>
                                                                <tbody class={`tbody-light tbody-po-light  tbody-left-po tbody-maintain-high left-tbody-hight ${(index % 2 !== 0) && 'tbody-po-light'}`}>
                                                                    <tr>
                                                                        <th>Quantity</th>
                                                                        <td class="value-table">
                                                                            <p>{entry.POLQTY}</p>
                                                                        </td>
                                                                    </tr>


                                                                    <tr>
                                                                        <th>Description</th>
                                                                        <td class="value-table">
                                                                            <p>{entry.POLDES}</p>
                                                                        </td>
                                                                    </tr>


                                                                    <tr>
                                                                        <th>Line Unit of Measure</th>
                                                                        <td class="value-table">
                                                                            <p>{cleanedValue(entry.POLUM)}</p>




                                                                        </td>
                                                                    </tr>

                                                                    <tr>
                                                                        <th>Account Number</th>
                                                                        <td class="value-table">
                                                                            <p> {cleanedValue(entry.POLACT)}</p>
                                                                        </td>
                                                                    </tr>


                                                                    <tr>
                                                                        <th>Line Cost</th>
                                                                        <td class="value-table">
                                                                            <p>{dollarUS.format(entry.POLCST)}</p>
                                                                        </td>
                                                                    </tr>

                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>

                                                ))}

                                            </>
                                        )
                                    } */}
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
