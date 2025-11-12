
import React, { useState, useEffect } from 'react';
import Header from './headersystem';
import Sidebar from './systemsidebar';
import PrintIcon from '@mui/icons-material/Print';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import { Link } from 'react-router-dom';
import secureLocalStorage from "react-secure-storage";
import {
    useNavigate
} from "react-router-dom";
import { showpodeat } from '../actions/admin.actions';
function formatDate(date) {
    if (!date) return '';

    let d;

    // Check if format is YYYY-MM-DD
    if (date.includes('-')) {
        d = new Date(date);
    }
    // Check if format is M/D/YYYY or MM/DD/YYYY
    else if (date.includes('/')) {
        let parts = date.split('/');
        let month = parts[0].padStart(2, '0');
        let day = parts[1].padStart(2, '0');
        let year = parts[2];
        return `${month}/${day}/${year}`;
    }

    if (isNaN(d)) return '';

    let month = String(d.getMonth() + 1).padStart(2, '0');
    let day = String(d.getDate()).padStart(2, '0');
    let year = d.getFullYear();

    return `${month}/${day}/${year}`;
}
function formatYearRange(yearStr) {
    if (!yearStr || yearStr.length !== 8) return yearStr; // safety check

    let startYear = yearStr.substring(0, 4);
    let endYear = yearStr.substring(4, 8);

    return `${startYear}-${endYear}`;
}
function formatValue(input) {
    if (input != null && input != undefined && input != '') {
        const str = input.toString();
        return `${str.slice(0, 2)}-${str.slice(2, 5)}-${str.slice(5, 8)}-${str.slice(8, 11)}-${str.slice(11, 14)}-${str.slice(14, 16)}-${str.slice(16)}`;
    } else {
        return '';
    }
}

const Podetails = () => {
    const [employeeData, setEmployeeData] = useState(null);
    const [vendorData, setvendorData] = useState(null);
    const [poData, setPoData] = useState({});
    const [loader, setLoader] = useState(false);
    const [allpodeat, setAllpodeat] = useState([]);
    let navigate = useNavigate();
    useEffect(() => {
        var userid = secureLocalStorage.getItem('poSyetemnewData');
        var vendordata = secureLocalStorage.getItem('vendorSystemNumberData');
        var poid = secureLocalStorage.getItem('pobasicsystemData');
        var checkforsh = secureLocalStorage.getItem('checkforsh');

        if ((userid) == null || (userid) == undefined) {


            navigate(`/systemshowPO`);

        } else {
            console.log('userid', userid);
            console.log('vendordata', vendordata);
            setvendorData(vendordata);
            setEmployeeData(userid);
            setPoData(poid);
            console.log('poid', poid);
            console.log('userid', userid);
            if (checkforsh == 'yes' && checkforsh != null && checkforsh != undefined) {
                setLoader(true);
            }
            // showpodeat(poid.podoc, poid.ponum).then((res) => {
            //     console.log('add-user res=====>>>>', res.data);
            //     if (res.data == '' || res.data == null || res.data.length == 0) {
            //         setAllpodeat([]);
            //     } else {
            //         setAllpodeat(res.data);
            //         secureLocalStorage.setItem("showallpodeatnew", res.data);




            //     }

            // }).catch((error) => {
            //     setAllpodeat([]);
            //     console.log('error occurs while registring the user', error);
            // });
            secureLocalStorage.setItem("poDataprint", userid);
            secureLocalStorage.setItem("pobasicDataprint", poid);


            // secureLocalStorage.removeItem('pobasicData');
            // secureLocalStorage.removeItem('poData');

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





        window.open('Pdfsystempo/', '_blank', 'noopener,noreferrer');




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

                                <h2>Purchase Order </h2>

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

                                        <h3>PO Number : {poData.PO}</h3>
                                        <div class="head-right print-diff po-print-sec">
                                            <span className='print-icon sys-print-icon' onClick={(e) => exportTopdf()}><PrintIcon /></span>

                                        </div>
                                    </>
                                }


                            </div>
                            {loader == true ?

                                <>
                                    <div className='back-sec'>
                                        <Link to="/systemshowPO" className="back-btn-sec"><KeyboardDoubleArrowLeftIcon />Back</Link>
                                    </div>
                                </> :
                                <>
                                    <div className='back-sec'>
                                        <Link to="/systemshowPO" className="back-btn-sec"><KeyboardDoubleArrowLeftIcon />Back</Link>
                                    </div>
                                </>}

                        </div>
                    </div>
                </div>
                {employeeData != null &&
                    <>
                        <div className="emp-table-sec">
                            <div className='po-details-sec'>
                                <div className="row">
                                    <div className='col-md-12'>
                                        <div className='po-details-head'>
                                            <h2>Vendor Name: <span>{vendorData.indexName} ({vendorData.vendorNumber})</span></h2>
                                        </div>
                                    </div>
                                </div>
                                <div className='row margin-top-po-table margin-top-po-tabless'>
                                    {/* table section start from here */}
                                    <div className='col-md-6'>
                                        <div class="table-main-sec diff-po-table">
                                            <table className='table table-sec'>
                                                <tbody class="tbody-light tbody-po-light tbody-left-po tbody-maintain-high left-tbody-hight">
                                                    <tr>
                                                        <th >Vendor Address</th>
                                                        <td class="value-table">
                                                            <p>{vendorData.remitToAddressLine1} {vendorData.remitToAddressLine2 != '' && <>{',' + vendorData.remitToAddressLine2} </>} ,{vendorData.remitToCity}, {vendorData.remitToState} {(vendorData.remitToZip)}</p>
                                                        </td>
                                                    </tr>



                                                    <tr>
                                                        <th>Account Number</th>
                                                        <td class="value-table">
                                                            <p>{((employeeData.accnoD != null &&
                                                                employeeData.accnoD != undefined) ? (employeeData.accnoD) : '')}</p>
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
                                                        <th>PO date</th>
                                                        <td class="value-table">
                                                            <p>{((employeeData.date != null &&
                                                                employeeData.date != undefined) ? formatDate(employeeData.date) : '')}</p>
                                                        </td>
                                                    </tr>
                                                          <tr>
                                                        <th>Year</th>
                                                        <td class="value-table">
                                                            <p>{((employeeData.year != null &&
                                                                employeeData.year != undefined) ? formatYearRange(employeeData.year) : '')}</p>
                                                        </td>
                                                    </tr>
                                                    
                                                    {/* <tr>
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
                                                    </tr> */}
                                                    {/* <tr>
                                                        <th>Requested By</th>
                                                        <td class="value-table">
                                                            <p>{(employeeData[0].POTYPE)}</p>




                                                        </td>
                                                    </tr> */}
                                                   


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
                                <div className='row margin-top-po-table margin-top-po-tabless'>

                                    {
                                        employeeData!=null  && (
                                            <>
                                                <div className=''>

                                                    <div class="table-main-sec">
                                                        <table class="table table-sec">
                                                            <thead class="thead-before-sec thaed-colaps-sec">
                                                                <tr>

                                                                   

                                                                    <th className='used-width salary-width  cursorjob desc-details-widh sys-desc-widh-po'>DESCRIPTION </th>
                                                                    <th className='job-width schol-yr-width cursorjob qtn-details-widh sys-orida-widh-po' >ORIGAMT</th>
                                                                    <th className='abse-type-width loc-width  cursorjob unit-details-widh sys-cancel-widh-po' >CANCELLED  </th>
                                                                    <th className='abse-type-width loc-width cursorjob unit-details-widh sys-pay-widh-po' >PAYMENTS </th>
                                                                    
                                                                </tr>
                                                            </thead>
                                                            <tbody class="tbody-light">
                                                              
                                                                    <tr>
                                                                        <td class="value-table">
                                                                            <p>{(employeeData.poItems)}</p>
                                                                        </td>
                                                                        <td class="value-table">
                                                                            <p>{formatCurrency(employeeData.origAmt)}</p>
                                                                        </td>
                                                                        <td class="value-table">
                                                                            <p>{formatCurrency(employeeData.cancelled)}</p>
                                                                        </td>
                                                                        <td class="value-table">
                                                                            <p>{formatCurrency(employeeData.payments)}</p>
                                                                        </td>

                                                                      
                                                                    

                                                                    </tr>







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
