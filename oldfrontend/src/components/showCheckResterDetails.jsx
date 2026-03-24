
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
import { checkresgterdtataempyear } from '../actions/systemadmin.actions';
function formatDate(dateStr) {
  if (!dateStr) return "";

  // Try parsing with Date
  let date = new Date(dateStr);

  // If invalid, maybe it's in DD/MM/YYYY format
  if (isNaN(date)) {
    const parts = dateStr.split("/");
    if (parts.length === 3) {
      const [day, month, year] = parts;
      date = new Date(`${month}/${day}/${year}`); // flip to MM/DD/YYYY
    }
  }

  if (isNaN(date)) return dateStr; // still invalid, return as is

  return date.toLocaleDateString("en-US", {
    month: "2-digit",
    day: "2-digit",
    year: "numeric"
  });
}
const Podetails = () => {
    const [employeeData, setEmployeeData] = useState([]);
    const [checkregData, setcheckregData] = useState({});
    const [loader, setLoader] = useState(false);
    const [allcheckregdeat, setAllcheckregdeat] = useState([]);
    const [earnings, setEarnings] = useState([]);
    const [deductions, setDeductions] = useState([]);
    const [taxes, setTaxes] = useState([]);
    let navigate = useNavigate();
    useEffect(() => {

        var userid = secureLocalStorage.getItem('employeeSystemData');



        if (Object.keys(userid).length === 0) {


            navigate(`/employeesystemdata`);

        } else {

            setEmployeeData(userid.data);
            var allprintnew = JSON.parse(window.localStorage.getItem('allCheckResterdeatislsystem'));;
            setcheckregData(allprintnew.alldata);



            checkresgterdtataempyear(allprintnew.chkno).then((res) => {
                console.log('add-user res=====>>>>', res.data);
                if (res.data == '' || res.data == null || res.data.length == 0) {
                    setAllcheckregdeat([]);
                } else {
                    setAllcheckregdeat(res.data);
                    res.data.forEach(row => {
                        for (let i = 1; i <= 9; i++) {
                            const dcode = row[`dcode${i}`];
                            const amount = row[`amount${i}`];
                            const desc = row[`ckdesc${i}`];

                            if (!dcode || !amount) continue; // Skip empty

                            // Extract numeric part: "1-012" -> 1012, "8-001" -> 8001
                            const numCode = parseInt(dcode.replace('-', ''));

                            const entry = {
                                chkno: row.chkno,
                                year: row.year,
                                dcode,
                                numCode,
                                amount: parseFloat(amount),
                                desc
                            };

                            if ((numCode >= 1000 && numCode <= 4999)) {
                                earnings.push(entry);
                            } else if (numCode >= 7000 && numCode <= 7999) {
                                deductions.push(entry);
                            } else if (numCode >= 8000 && numCode <= 8999) {
                                taxes.push(entry);
                            }
                        }
                    })
                    secureLocalStorage.setItem("showallcheckregisdeatnew", res.data);




                }

            }).catch((error) => {
                setAllcheckregdeat([]);
                console.log('error occurs while registring the user', error);
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


  const padValue = (value) => {
       if(value!== null && value !== undefined && value !== 0 && value !== '') {
    return value.toString().padStart(3, '0');
       }
  };



    const exportTopdf = (e) => {





        window.open('printsystemcheck/', '_blank', 'noopener,noreferrer');




    };
    return (
        <>
            {/* <Header />
            <Sidebar /> */}

            <div className='main-inner-sec content-main'>
                <div className='main-inner-heading'>
                    <div className='col-md-12'>
                        <div className='emp-main-serach'>
                            <div className='emp-serach emp-data-head emp-another-sec'>

                                <h2>Check Register Details Search</h2>

                            </div>
                        </div>


                    </div>
                </div>

                <div class=" emp-main-heading-emp">
                    <div class="main-heading-sec ">
                        <div class="col-md-12">
                            <div class="head-inner head-inner-main">
                                {employeeData != null &&
                                    <>
                                        <h2>{employeeData.lastName}, {employeeData.firstName} {employeeData.middleInitial} </h2>
                                        <h3>Emp Id:- <span> {employeeData.employee}</span></h3>
                                    </>
                                }
                                {allcheckregdeat.length > 0 &&
                                    <>

                                        <div class="head-right print-diff po-print-sec">
                                            <span className='print-icon' onClick={(e) => exportTopdf()}><PrintIcon /></span>

                                        </div>
                                    </>
                                }


                            </div>

                            <div className='back-sec'>
                                <Link to="/checkreister" className="back-btn-sec"><KeyboardDoubleArrowLeftIcon />Back</Link>
                            </div>


                        </div>
                    </div>
                </div>
                {allcheckregdeat.length > 0 &&
                    <>
                        <div className="emp-table-sec">
                            <div className='po-details-sec'>
                                <div className="row">
                                    <div className='col-md-12'>
                                        <div className='po-details-head'>
                                            <h2>Check Details</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className='row margin-top-po-table' style={{ marginBottom: '20px' }}>
                                    {/* table section start from here */}
                                    <div className='col-md-6'>
                                        <div class="table-main-sec diff-po-table">
                                            <table className='table table-sec'>
                                                <tbody class="tbody-light tbody-po-light tbody-left-po tbody-maintain-high">
                                                    <tr>
                                                        <th >Check Number</th>
                                                        <td class="value-table">
                                                            <p>{allcheckregdeat[0].chkno}  </p>
                                                        </td>
                                                    </tr>



                                                    <tr>
                                                        <th>Building Location	</th>
                                                        <td class="value-table">
                                                            <p>{padValue(allcheckregdeat[0].bldgLocation)}    </p>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th>Current Gross Pay</th>
                                                        <td class="value-table">
                                                            <p>  {formatCurrency(allcheckregdeat[0].cgwages)}</p>




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
                                                        <th>Check Date</th>
                                                        <td class="value-table">
                                                            <p>{formatDate(allcheckregdeat[0].checkDate)} </p>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th>Check Location	</th>
                                                        <td class="value-table">
                                                            <p>{padValue(allcheckregdeat[0].checkLocation)} </p>

                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <th>Current Net Pay	</th>
                                                        <td class="value-table">
                                                            <p> {formatCurrency(allcheckregdeat[0].cnetwages)}</p>
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
                                            <h2>Earning Details</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className='row margin-top-po-table' style={{ marginTop: '25px' }}>

                                    <div class="table-main-sec">
                                        <table class="table table-sec">
                                            <thead class="thead-before-sec thaed-colaps-sec">
                                                <tr>

                                                    <th className='job-width schol-yr-width cursorjob cod-systm-desc'>Code/Description</th>

                                                    <th className='abse-type-width loc-width cursorjob code-systm-curr' >Current </th>
                                                    <th className='used-width salary-width code-systm-ytd'>YTD </th>
                                                </tr>
                                            </thead>
                                            <tbody class="tbody-light">

                                                {earnings.length > 0 ?
                                                    earnings.map((entry, index) => (

                                                        <tr>

                                                            <td class="value-table">
                                                                <p>{(entry.numCode)}/{(entry.desc)} </p>
                                                            </td>
                                                            <td class="value-table">
                                                                <p>{formatCurrency(entry.amount)}</p>
                                                            </td>
                                                            <td class="value-table">
                                                                <p> </p>
                                                            </td>


                                                        </tr>

                                                    ))

                                                    : <tr><td colSpan={3}></td></tr>}





                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className='col-md-12'>
                                        <div className='po-details-head' style={{ marginTop: '20px' }}>
                                            <h2>Deduction Details</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className='row margin-top-po-table' style={{ marginTop: '25px' }}>

                                    <div class="table-main-sec">
                                        <table class="table table-sec">
                                            <thead class="thead-before-sec thaed-colaps-sec">
                                                <tr>

                                                    <th className='job-width schol-yr-width cursorjob cod-systm-desc'>Code/Description</th>

                                                    <th className='abse-type-width loc-width cursorjob code-systm-curr' >Current </th>
                                                    <th className='used-width salary-width code-systm-ytd'>YTD </th>
                                                </tr>
                                            </thead>
                                            <tbody class="tbody-light">

                                                {deductions.length > 0 ?
                                                    deductions.map((entry, index) => (

                                                        <tr>

                                                            <td class="value-table">
                                                                <p>{(entry.numCode)}/{(entry.desc)} </p>
                                                            </td>
                                                            <td class="value-table">
                                                                <p>{formatCurrency(entry.amount)}</p>
                                                            </td>
                                                            <td class="value-table">
                                                                <p> </p>
                                                            </td>


                                                        </tr>

                                                    ))

                                                    : <tr><td colSpan={3}></td></tr>}





                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className='col-md-12'>
                                        <div className='po-details-head' style={{ marginTop: '20px' }}>
                                            <h2>Taxes Details</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className='row margin-top-po-table' style={{ marginTop: '25px' }}>

                                    <div class="table-main-sec">
                                        <table class="table table-sec">
                                            <thead class="thead-before-sec thaed-colaps-sec">
                                                <tr>

                                                    <th className='job-width schol-yr-width cursorjob cod-systm-desc'>Code/Description</th>

                                                    <th className='abse-type-width loc-width cursorjob code-systm-curr' >Current </th>
                                                    <th className='used-width salary-width code-systm-ytd'>YTD </th>
                                                </tr>
                                            </thead>
                                            <tbody class="tbody-light">

                                                {taxes.length > 0 ?
                                                    taxes.map((entry, index) => (

                                                        <tr>

                                                            <td class="value-table">
                                                                <p>{(entry.numCode)}/{(entry.desc)} </p>
                                                            </td>
                                                            <td class="value-table">
                                                                <p>{formatCurrency(entry.amount)}</p>
                                                            </td>
                                                            <td class="value-table">
                                                                <p> </p>
                                                            </td>


                                                        </tr>

                                                    ))

                                                    : <tr><td colSpan={3}></td></tr>}





                                            </tbody>
                                        </table>
                                    </div>
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
