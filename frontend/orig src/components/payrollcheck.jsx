import React, { useState, useEffect } from 'react';
// import Header from './header';
// import Sidebar from './sidebar';
import PrintIcon from '@mui/icons-material/Print';
import SearchIcon from '@mui/icons-material/Search';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import VisibilityIcon from '@mui/icons-material/Visibility';
import filticon from '../assets/img/filter-icon-blue.png';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import { useSelector } from 'react-redux';
import { updateNullOfObjectValues } from '../helpers/helper';
import { payrollCheckDeductions, payrollCheck } from '../actions/admin.actions';
import secureLocalStorage from "react-secure-storage";
import { AppContext } from '../context';
import {
  useNavigate
} from "react-router-dom";
import { Link } from "react-router-dom";

import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';

const Salaries = () => {
  const [employeeData, setEmployeeData] = useState(null);
  const [allpayroll, setAllpayroll] = useState([]);
  const [allpayrolldeduct, setAllpayrollDeduction] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [perPage, setPerPage] = useState(25);
  const [grossPay, setGrossPay] = useState(0);
  const [deductions, setDeductions] = useState(0);
  const [netPay, setNetPay] = useState(0);
  const [checkde, setCheckde] = useState(null);
  const [firstLoading, setFirstLoading] = useState(true);
  const [loader, setLoader] = useState(false);
  const [totalCount, setTotalCount] = useState(0);
  const [totalPage, setTotalPage] = useState(1);
  const [searchPlaceholder, setSearchPlaceholder] = useState('School Year');
  const [searchBy, setSearchBy] = useState('school_year');
  const [searchValue, setSearchValue] = useState('');
  let navigate = useNavigate();
  useEffect(() => {
    var userid = secureLocalStorage.getItem('employeeData');



    if (Object.keys(userid).length === 0) {


      navigate(`/employeedata`);

    } else {
      setFirstLoading(true);
      console.log(userid);
      setEmployeeData(userid);
      var allprintnew = JSON.parse(window.localStorage.getItem('allpoch'));;
      console.log(allprintnew);
      setCheckde(allprintnew);
      payrollCheck(allprintnew.SSN, allprintnew.RUN).then((res) => {

        if (res.data.length > 0) {
          var customerList_temp = res.data;
          var grossPayn = 0;
          for (let i = 0; i < customerList_temp.length; i++) {
            console.log('get-attendence res====>>>', customerList_temp[i].PACUR);
            grossPayn += Number(customerList_temp[i].PACUR);
          }
          console.log(customerList_temp);
          console.log('grossPay', grossPayn);
          setGrossPay(grossPayn);
          setAllpayroll(res.data);
        }
        payrollCheckDeductions(allprintnew.SSN, allprintnew.RUN).then((res) => {
          console.log('get-attendence res====>>>', res.data);



          if (res.data.length > 0) {

            var customerList_temp = res.data;
            var grossPayn = 0;
            for (let i = 0; i < customerList_temp.length; i++) {
              console.log('get-attendence res====>>>', customerList_temp[i].PACUR);
              grossPayn += Number(customerList_temp[i].DEAMT);
            }
            console.log(customerList_temp);
            console.log('deductions', grossPayn);
            setDeductions(grossPayn);


            setAllpayrollDeduction(res.data);

          }


          setFirstLoading(false);

        }).catch(err => {
          setFirstLoading(false);
        })


        // setFirstLoading(false);

      }).catch(err => {
        setFirstLoading(false);
      });

      ;
    }

  }, []);


  const dollarUS = Intl.NumberFormat("en-US", { style: "currency", currency: "USD" });
  const exportTopdf = (e) => {

    localStorage.setItem("allpayrollch", JSON.stringify(allpayroll));
    localStorage.setItem("allpayrollchdeduct", JSON.stringify(allpayrolldeduct));
   window.open('printpayroll/', '_blank', 'noopener,noreferrer');
  
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
                {employeeData != null &&
                  <>
                    <h2>{employeeData.EMLNAM}, {employeeData.EMFNAM} {employeeData.EMMNAM} </h2>
                    <h3>Emp Id:- <span> {employeeData.EMSSAN}</span></h3>
                  </>
                }
                {/* <div className='print-sec-inner'>
                  <span className='print-icon'><PrintIcon /></span>
                </div> */}
              </div>
            </div>


          </div>
        </div>

        <div class=" emp-main-heading-emp">
          <div class="main-heading-sec ">
            
            <div class="col-md-12">
              <div class="head-inner">
                
                <h2>Payroll Check</h2>
                <div class="head-right">
                  <span className='print-icon'  onClick={(e) => exportTopdf()}><PrintIcon /></span>
                  {/* <button class="btn btn-submit btn-clear" onClick={(e) => handleClearFilter()}>Clear Filter</button> */}
                </div>
              </div>
            </div>
            <div className='back-sec'>
            <Link to="/payroll" className="back-btn-sec"><KeyboardDoubleArrowLeftIcon />Back</Link>
            </div>
          </div>
        </div>


        {/* table section start */}
        <div className="emp-table-sec">
          <div className='form-table-sec emp-table-inner'>
            <div className='row'>

              <div className='col-md-12' >
                <div className='search-sec-pay payroll-deatil-inner '>
                  {/* {checkde != null &&
                    <>

                      <h3>  Check #: <span>  {checkde?.CHECK || "N/A"}</span></h3>
                      <h3>  Check Date:  <span>  {checkde?.CHKDT || "N/A"}</span></h3>

                    </>
                  }

                  {checkde != null &&
                    <>

                      <h3>   Gross Pay: <span>  {dollarUS.format(grossPay)}</span></h3>
                      <h3>  Deductions:  <span> {dollarUS.format(deductions)}</span></h3>
                      <h3>   Net Pay:  <span> {dollarUS.format(grossPay + deductions)}</span></h3>

                    </>
                  } */}
                   {checkde != null &&
                    <>
                  <div className='payroll-details-data'>
                    <h3>Check #</h3>
                    <p>{checkde?.CHECK || "N/A"}</p>
                  </div>
                  <div className='payroll-details-data'>
                    <h3>Check Date</h3>
                    <p> {checkde?.CHKDT || "N/A"}</p>
                  </div>
                  <div className='payroll-details-data'>
                    <h3> Gross Pay</h3>
                    <p> {dollarUS.format(grossPay)}</p>
                  </div>
                  <div className='payroll-details-data'>
                    <h3>Deduction</h3>
                    <p>{dollarUS.format(deductions)}</p>
                  </div>
                  <div className='payroll-details-data'>
                    <h3>Net Pay</h3>
                    <p>{dollarUS.format(grossPay + deductions)}</p>
                  </div>
                  </>
                  }
                </div>
                {/* <div className='search-sec-pay payroll-deatil-inner'>
                <div className='payroll-details-data'>
                    <h3>Deduction</h3>
                    <p>$0.00</p>
                  </div>
                  <div className='payroll-details-data'>
                    <h3>Net Pay</h3>
                    <p>$350.00</p>
                  </div>
                </div> */}
              </div>

            </div>
            <div className='row'>
              {/* table section start from here */}
              <div class="table-main-sec">
                <table class="table table-sec">
                  <thead class="thead-before-sec thaed-colaps-sec">
                    <tr>
                      {/* <th className='check-width'>
                        <FormGroup>
                          <FormControlLabel control={<Checkbox />} label="" />
                        </FormGroup>
                      </th> */}
                      <th className='job-width schol-yr-width payroll-desc' >Description</th>

                      <th className='abse-type-width loc-width payroll-ref'>Ref 1  </th>
                      <th className='used-width salary-width payroll-ref-sec'>Ref 2 </th>
                      <th className='used-width salary-width payroll-type'>Type</th>
                      <th className='used-width salary-width payroll-cal-amt'>Cal Amount </th>
                      <th className='used-width salary-width payroll-check-amt'>Check Amount </th>
                    </tr>
                  </thead>
                  <tbody class="tbody-light">

                    {
                      firstLoading ? <tr ><td colSpan={6}><div className="spinner-border" role="status" style={{ width: "1rem", height: "1rem", marginLeft: "6px" }}></div></td></tr> : <>
                        {allpayroll.length > 0 ?
                          allpayroll.map((entry, index) => (

                            <tr>

                              <td class="value-table">
                                <p>{entry.JDTITL}</p>
                              </td>
                              <td class="value-table">
                                <p>{(entry.PAJOB)}</p>
                              </td>
                              <td class="value-table">
                                <p>{entry.PAADN}</p>
                              </td>
                              <td class="value-table">
                                <p>{entry.PATYP}</p>
                              </td>
                              <td class="value-table">
                                <p>{dollarUS.format(entry.PACAL)}</p>
                              </td>
                              <td class="value-table">
                                <p>{dollarUS.format(entry.PACUR)}</p>
                              </td>
                            </tr>
                          ))

                          : ''}



                        {allpayrolldeduct.length > 0 ?
                          allpayrolldeduct.map((entry, index) => (

                            <tr>

                              <td class="value-table">
                                <p>{entry.DEDESC}</p>
                              </td>
                              <td class="value-table">
                                <p>{(entry.DECODE)}</p>
                              </td>
                              <td class="value-table">
                                <p>{entry.DEJUR}</p>
                              </td>
                              <td class="value-table">
                                <p>{entry.DETYP}</p>
                              </td>
                              <td class="value-table">
                                <p>{dollarUS.format(entry.DECAL)}</p>
                              </td>
                              <td class="value-table">
                                <p>{dollarUS.format(entry.DEAMT)}</p>
                              </td>
                            </tr>
                          ))

                          : ''}

                      </>
                    }




                  </tbody>
                </table>
              </div>
              {/* table section end from here */}

              {/* pagination section start here */}


              {/* pagination section end here */}

            </div>
          </div>
        </div>
        {/* table section end */}





      </div>

    </>
  )
}

export default Salaries;
