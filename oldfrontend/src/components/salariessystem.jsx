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
import { salarysydtataemp } from '../actions/systemadmin.actions';
import secureLocalStorage from "react-secure-storage";
import { AppContext } from '../context';
import {
  useNavigate
} from "react-router-dom";

const Salaries = () => {
  const [employeeData, setEmployeeData] = useState(null);
  const [allattendata, setAllattendata] = useState([]);
  const [allattendataextac, setAllattendataexta] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [perPage, setPerPage] = useState(25);


  const [firstLoading, setFirstLoading] = useState(true);
  const [loader, setLoader] = useState(false);
  const [totalCount, setTotalCount] = useState(0);
  const [totalPage, setTotalPage] = useState(1);
  const [searchPlaceholder, setSearchPlaceholder] = useState('School Year');
  const [searchBy, setSearchBy] = useState('schoolYear');
  const [searchValue, setSearchValue] = useState('');
  let navigate = useNavigate();
  useEffect(() => {
    var userid = secureLocalStorage.getItem('employeeSystemData');



    if (Object.keys(userid).length === 0) {


      navigate(`/employeesystemdata`);

    } else {
      setFirstLoading(true);
      console.log(userid);
      setEmployeeData(userid.data);
      salarysydtataemp(userid.data.employee).then((res) => {
        console.log('get-attendence res====>>>', res.data);
        if (res.data.length > 0) {
          const totalPages = Math.ceil(res.data.length / perPage);
          setTotalPage(totalPages);
          const startIndex = (pageNo - 1) * perPage;
          const endIndex = startIndex + perPage;
          setAllattendataexta(res.data);
          setAllattendata(res.data.slice(startIndex, endIndex));
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
      case 'schoolYear':
        placeholder = 'School Year';
        break;

      case 'location':
        placeholder = 'Location';
        break;
      case 'scname':
        placeholder = 'Job title';
        break;
      default:
        placeholder = 'School Year'
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

    if (searchBy === 'schoolYear') {
      const input = searchValue.trim(); // e.g., "2019-2020"
      let targetYear = null;

      if (/^\d{4}-\d{4}$/.test(input)) {
        const parts = input.split("-");
        const start = parseInt(parts[0], 10);
        const end = parseInt(parts[1], 10);
        if (end - start === 1) {
          targetYear = end; // schoolYear is stored as the second part
        }
      } else if (/^\d{4}$/.test(input)) {
        targetYear = parseInt(input, 10);
      }

      const filteredData = targetYear
        ? allattendataextac.filter((item) => item.schoolYear === targetYear)
        : [];

      const totalPages = Math.ceil(filteredData.length / perPage);
      setTotalPage(totalPages);
      const startIndex = (1 - 1) * perPage;
      setAllattendata(filteredData.slice(startIndex, startIndex + perPage));
      setPageNo(1);
    }
    if (searchBy == 'location') {
      const filteredData = allattendataextac.filter((item) =>
        item.location.toString().padStart(3, '0').includes(searchValue.toLowerCase())
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
    setSearchPlaceholder('School Year');
    setSearchBy('schoolYear');
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

  const exportTopdf = (e) => {

    localStorage.setItem("allprintsalarysystemnew", JSON.stringify(allattendataextac));
    window.open('printslarystem/', '_blank', 'noopener,noreferrer');

  };
  const padValue = (value) => {
    if (value !== null && value !== undefined && value !== 0 && value !== '') {
      return value.toString().padStart(3, '0');
    }
  };
  const padschholValue = (value) => {
    if (value !== null && value !== undefined && value !== 0 && value !== '') {

      const formattedYear = `${parseInt(value) - 1}-${parseInt(value)}`;

      return formattedYear;
    }
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
              <div class="head-inner">
                <h2>Salaries</h2>
                <div class="head-right">
                  <span className='print-icon' onClick={(e) => exportTopdf()}><PrintIcon /></span>
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
              <div class="table-main-sec">
                <table class="table table-sec">
                  <thead class="thead-before-sec thaed-colaps-sec">
                    <tr>
                      {/* <th className='check-width'>
                        <FormGroup>
                          <FormControlLabel control={<Checkbox />} label="" />
                        </FormGroup>
                      </th> */}
                      <th className='job-width schol-yr-width cursorjob' onClick={() => handleColumnClick('schoolYear')}>School Year <span className='filt-icon'><img src={filticon} /></span></th>

                      <th className='abse-type-width loc-width cursorjob' onClick={() => handleColumnClick('location')}>Location <span className='filt-icon'><img src={filticon} /></span> </th>
                      <th className='used-width salary-width'>Job Title </th>
                      <th className='used-width salary-width'>Salary </th>
                      <th className='used-width salary-width'>Total Salary </th>
                    </tr>
                  </thead>
                  <tbody class="tbody-light">
                    {
                      firstLoading ? <tr ><td colSpan={5}><div className="spinner-border" role="status" style={{ width: "1rem", height: "1rem", marginLeft: "6px" }}></div></td></tr> : <>
                        {allattendata.length > 0 ?
                          allattendata.map((entry, index) => (

                            <tr>
                              {/* <td class="check-width">
                                <FormGroup>
                                  <FormControlLabel control={<Checkbox />} label="" />
                                </FormGroup>
                              </td> */}
                              <td class="value-table">
                                <p>{padschholValue(entry.schoolYear)}</p>
                              </td>
                              <td class="value-table">
                                <p>{padValue(entry.location)}</p>
                              </td>
                              <td class="value-table">
                                <p> {entry.scname} </p>
                              </td>
                              <td class="value-table">
                                <p> {formatCurrency(entry.salary)} </p>
                              </td>
                              <td class="value-table">
                                <p> {formatCurrency(parseFloat(entry.salary) + parseFloat(entry.long))} </p>
                              </td>


                            </tr>

                          ))

                          : <tr><td colSpan={5}>No Data Found</td></tr>}
                      </>
                    }





                  </tbody>
                </table>
              </div>
              {/* table section end from here */}

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

export default Salaries;
