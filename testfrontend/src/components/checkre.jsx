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
import { checkresgterdtataemp } from '../actions/systemadmin.actions';
import secureLocalStorage from "react-secure-storage";
import { AppContext } from '../context';
import {
  useNavigate
} from "react-router-dom";
import { all } from 'axios';
 function checkallchno(data){
const sortedData = data.sort((a, b) => {
  const yearA = parseInt(a.year) || 0;
  const yearB = parseInt(b.year) || 0;
  return yearA - yearB;
});
 return sortedData;
 }
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
const W2s = () => {
  const [employeeData, setEmployeeData] = useState(null);
  const [allattendata, setAllattendata] = useState([]);
  const [allattendataextac, setAllattendataexta] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [perPage, setPerPage] = useState(25);


  const [firstLoading, setFirstLoading] = useState(true);
  const [loader, setLoader] = useState(false);
  const [totalCount, setTotalCount] = useState(0);
  const [totalPage, setTotalPage] = useState(1);
  const [searchPlaceholder, setSearchPlaceholder] = useState('Check Number');
  const [searchBy, setSearchBy] = useState('chkno');
  const [searchValue, setSearchValue] = useState('');
  let navigate = useNavigate();
  const [employeeDatassn, setEmployeeDatassn] = useState(null);
  useEffect(() => {
    var userid = secureLocalStorage.getItem('employeeSystemData');
    secureLocalStorage.removeItem('allCheckResterdeatislsystem');

    if (Object.keys(userid).length === 0) {


      navigate(`/employeesystemdata`);

    } else {
      setFirstLoading(true);
      console.log(userid);
      setEmployeeData(userid.data);
      setEmployeeDatassn(userid.datawe.ssn);
      // setEmployeeData(userid);
      checkresgterdtataemp(userid.data.employee).then((res) => {
        console.log('get-attendence res====>>>', res.data);
        if (res.data.length > 0) {
          var resdata = checkallchno(res.data);
           console.log('resdata', resdata);
          const totalPages = Math.ceil(resdata.length / perPage);
          setTotalPage(totalPages);
          const startIndex = (pageNo - 1) * perPage;
          const endIndex = startIndex + perPage;
          setAllattendataexta(resdata);
          setAllattendata(resdata.slice(startIndex, endIndex));
        }


        setFirstLoading(false);

      }).catch(err => {
        setFirstLoading(false);
      })
        ;
    }

  }, []);
  const changePage = (page) => {

    if (page < 1) page = 1;
    if (page > totalPage) page = totalPage;
    setFirstLoading(true);
    const startIndex = (page - 1) * perPage;
    const endIndex = parseInt(startIndex) + parseInt(perPage);

    setAllattendata(allattendataextac.slice(startIndex, endIndex));
    setFirstLoading(false);
    setPageNo(page);



  }
  const handleColumnClick = (type) => {
    let placeholder = '';
    switch (type) {
      case 'chkno':
        placeholder = 'Check Number';
        break;
      case 'type':
        placeholder = 'Absence Type';
        break;
      case 'year':
        placeholder = 'Year';
        break;

      default:
        placeholder = 'Check Number';
        break;
    }
    setSearchPlaceholder(placeholder);
    setSearchBy(type);

  }
  const handleKeypress = e => {

    //it triggers by pressing the enter key
    if (e.which === 13) {
      e.preventDefault();
      gosubmit();
    }

  };
  const handleSearchInput = (e) => {
    setSearchValue(e.target.value);

  }
  const perPageChange = (e) => {
    setPerPage(e.target.value);


    setFirstLoading(true);
    const totalPages = Math.ceil(allattendataextac.length / e.target.value);
    setTotalPage(totalPages);
    const startIndex = (1 - 1) * e.target.value;
    const endIndex = startIndex + e.target.value;
    var customerList_temp = allattendataextac.slice(startIndex, endIndex);
    for (let i = 0; i < customerList_temp.length; i++) { customerList_temp[i].check_status = false; }
    console.log(customerList_temp);
    setAllattendata(customerList_temp);

    setPageNo(1);
    setFirstLoading(false);

  }
  const gosubmit = (e) => {

    setFirstLoading(true);
    if (searchBy == 'chkno') {
      const filteredData = allattendataextac.filter((item) =>
        item.chkno.toLowerCase().includes(searchValue.toLowerCase())
      );
      const totalPages = Math.ceil(filteredData.length / perPage);
      setTotalPage(totalPages);
      const startIndex = (1 - 1) * perPage;

      setAllattendata(filteredData.slice(startIndex, startIndex + perPage));
      setPageNo(1);


    }
    if (searchBy == 'type') {
      const filteredData = allattendataextac.filter((item) =>
        item.HAABS.toLowerCase().includes(searchValue.toLowerCase())
      );
      const totalPages = Math.ceil(filteredData.length / perPage);
      setTotalPage(totalPages);
      const startIndex = (1 - 1) * perPage;

      setAllattendata(filteredData.slice(startIndex, startIndex + perPage));
      setPageNo(1);


    }
    if (searchBy == 'year') {
      const filteredData = allattendataextac.filter((item) =>
        item.MEMBER.toLowerCase().includes(searchValue.toLowerCase())
      );
      const totalPages = Math.ceil(filteredData.length / perPage);
      setTotalPage(totalPages);
      const startIndex = (1 - 1) * perPage;

      setAllattendata(filteredData.slice(startIndex, startIndex + perPage));
      setPageNo(1);


    }

    setFirstLoading(false);




  }
  const handleClearFilter = () => {
    setSearchPlaceholder('Check Number');
    setSearchBy('chkno');
    setSearchValue('');
    setFirstLoading(true);
    const totalPages = Math.ceil(allattendataextac.length / perPage);
    setTotalPage(totalPages);
    const startIndex = (1 - 1) * perPage;
    const endIndex = startIndex + perPage;

    setAllattendata(allattendataextac.slice(startIndex, endIndex));
    setPageNo(1);
    setFirstLoading(false);

  }
  const W2CLYRdat = (W2CLYR) => {
    let W2CLYRb = W2CLYR < 10 ? `200${W2CLYR}` : `20${W2CLYR}`;;

    return W2CLYRb;
  };
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

    localStorage.setItem("allprintchekcregisdata", JSON.stringify(allattendataextac));

    window.open('printcheckreg/', '_blank', 'noopener,noreferrer');

  };
  const checkSelected = (entry, chkno) => {
    // ✅ Fix: Use let instead of const
    let ckido = {
      alldata: entry,
 
      chkno: chkno


    };
    localStorage.setItem("allCheckResterdeatislsystem", JSON.stringify(ckido));


    navigate("/showCheckResterDetails");
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
                    <h2>{employeeData.lastName}, {employeeData.firstName} {employeeData.middleInitial} </h2>
                    <h3>Emp Id:- <span> {employeeData.employee}</span></h3>
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
              <div class="head-inner ws-head-inner">
                <h2>Check Register List</h2>
                <div class="head-right ws-head-right">
                  {allattendata.length > 0 &&
                    <span className='print-icon' onClick={(e) => exportTopdf()}><PrintIcon /></span>
                  }
                  <button class="btn btn-submit btn-clear" onClick={(e) => handleClearFilter()}>Clear Filter</button>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* table section start */}
        <div className="emp-table-sec">
          <div className='form-table-sec emp-table-inner'>
            <div className='row'>

              <div className='col-md-12 emp-serch-main' >
                <div className='show-entreies-sec'>
                  <div className='show-entries'>
                    <p className='show-content'>Show</p>
                    <select className='select-sec' onChange={perPageChange} value={perPage} >
                      <option value={10}>10</option>
                      <option value={25}>25</option>
                      <option value={50}>50</option>
                      <option value={100}>100</option>
                    </select>
                    <p className='show-entris'>Entries</p>
                  </div>

                </div>
                <div className='search-sec'>
                 <input type='text' className='input-srch' placeholder={searchPlaceholder} onChange={handleSearchInput} value={searchValue} onKeyPress={handleKeypress} />
                  <button className='go-sec' onClick={(e) => gosubmit()}>Go</button>
                </div>
              </div>

            </div>
            <div className='row'>
              {/* table section start from here */}
              {/* <div class="table-main-sec">
                <table class="table table-sec">
                  <thead class="thead-before-sec thaed-colaps-sec">
                    <tr>
                   
                      <th className='job-width check-date-width'>Tax </th>
                      <th className='abse-type-width federal-width'>Federal</th>
                      <th className='used-width fica-width'>FICA </th>
                      <th className='used-width medicare-width'>Medicare </th>
                      <th className='abse-type-width federal-width'>Federal</th>
                      <th className='used-width fica-width'>FICA </th>
                      <th className='used-width medicare-width'>Medicare </th>
                      <th className='action-ws-widh'>Action </th>
                    </tr>
                  </thead>
                  <tbody class="tbody-light">
                    <tr>
                   
                      <td class="value-table">
                        <p>Year</p>
                      </td>
                      <td class="value-table">
                        <p>Wages  </p>
                      </td>
                      <td class="value-table">
                        <p>Wages </p>
                      </td>
                      <td class="value-table">
                        <p>Wages</p>
                      </td>
                      <td class="value-table">
                        <p>Withheld</p>
                      </td>
                      <td class="value-table">
                        <p>Withheld</p>
                      </td>
                      <td class="value-table">
                        <p>Withheld</p>
                      </td>
                      <td class="value-table">
                        
                      </td>

                    </tr>
                    {
                      firstLoading ? <tr ><td colSpan={8}><div className="spinner-border" role="status" style={{ width: "1rem", height: "1rem", marginLeft: "6px" }}></div></td></tr> : <>
                        {allattendata.length > 0 ?

                          allattendata.map((entry, index) => (

                            <tr>
                         
                              <td class="value-table">
                                <p>
                                {W2CLYRdat(entry.W2CLYR)}
                                </p>
                              </td>

                              <td class="value-table">
                                <p>
                                {dollarUS.format(entry.W2WAGE)}
                                </p>
                              </td>
                              <td class="value-table">
                                <p>
                                {dollarUS.format(entry.W2FICW)}
                                </p>
                              </td>
                              <td class="value-table">
                                <p>
                                {dollarUS.format(entry.W2FICM)}
                                </p>
                              </td>
                              <td class="value-table">
                                <p>
                                {dollarUS.format(entry.W2FEDT)}
                                </p>
                              </td>
                              <td class="value-table">
                                <p>
                                {dollarUS.format(entry.W2FTWH)}
                                </p>
                              </td>
                              <td class="value-table">
                                <p>
                                {dollarUS.format(entry.W2FMWH)}
                                </p>
                              </td>
                             

                              <td class="value-table pay-visi-sec">
                               <VisibilityIcon 
                               
                                onClick={(e) => { e.preventDefault(); checkSelected(entry.W2CLYR, entry.W2ESTB); }}
                                />
                              </td>
                            </tr>



                          ))
                          : <tr><td colSpan={8}>No Data Found</td></tr>}
                      </>
                    }




                  </tbody>
                </table>
              </div> */}


              {/* table section end from here */}

              {/* another way of table design start from here */}
              <div class="table-main-sec">
                <table class="table table-sec table-ws-new">
                  <thead class="thead-before-sec thaed-colaps-sec new-ws-theade">


                    <tr>

                      <th className='job-width schol-yr-width cursorjob check-regis-number' onClick={() => handleColumnClick('chkno')} >Check Number <span className='filt-icon'><img src={filticon} /></span> </th>

                      <th className='abse-type-width loc-width cursorjob check-regis-date' >Check Date  </th>
                      <th className='used-width salary-width check-regis-gros-pay'>Current Gross Pay </th>
                       <th className='used-width salary-width check-regis-net-pay'>Current Net Pay </th>
                          <th className='used-width salary-width check-regis-yera'>Year </th>
                           <th className='used-width salary-width check-regis-view'>Action </th>
                    </tr>
                  </thead>
                  <tbody class="tbody-light tbody-light-ws">
                    {
                      firstLoading ? <tr ><td colSpan={8}><div className="spinner-border" role="status" style={{ width: "1rem", height: "1rem", marginLeft: "6px" }}></div></td></tr> : <>
                        {allattendata.length > 0 ?

                          allattendata.map((entry, index) => (

                            <tr className='tbody-left'>

                              <td >

                                {(entry.chkno)}

                              </td>

                              <td >
                                {formatDate(entry.checkDate)}

                               

                              </td>
                              <td >

                                {formatCurrency(entry.cgwages)}


                              </td>
                              <td >

                                {formatCurrency(entry.cnetwages)}

                              </td>
                              <td >

                                {(entry.year)}

                              </td>


                              <td class="value-table pay-visi-sec tbody-right eye-new-ws">
                                <VisibilityIcon

                                  onClick={(e) => { e.preventDefault(); checkSelected(entry, entry.chkno); }}
                                />
                              </td>
                            </tr>



                          ))
                          : <tr className='tbody-left'><td colSpan={8}>No Data Found</td></tr>}
                      </>
                    }




                  </tbody>
                </table>
              </div>
              {/* another way of table design end from here */}

              {/* pagination section start here */}
              {totalPage > 1 ? <>
                <div className='pagination-sec'>
                  <div className='page-left'>
                    <p><span><NavigateBeforeIcon onClick={(e) => changePage(pageNo - 1)} /></span><p><span className='page-name'>Page</span> <input type="text" value={pageNo} onChange={(e) => {
                      !isNaN(parseInt(e.target.value)) && parseInt(e.target.value) > 0 ? changePage(parseInt(e.target.value)) : changePage(1)
                    }} /> of {totalPage}</p><span><NavigateNextIcon onClick={(e) => changePage(pageNo + 1)} /></span></p>
                  </div>
                </div>
              </> : ''
              }

              {/* pagination section end here */}

            </div>
          </div>
        </div>
        {/* table section end */}





      </div>

    </>
  )
}

export default W2s;
