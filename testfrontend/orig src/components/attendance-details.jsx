import React, { useState, useEffect } from 'react'
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
import { attaendandaet } from '../actions/admin.actions';
import secureLocalStorage from "react-secure-storage";
import { AppContext } from '../context';
import {
  useNavigate
} from "react-router-dom";

const Attendancedetails = () => {
  const [employeeData, setEmployeeData] = useState(null);
  const [allattendata, setAllattendata] = useState([]);
  const [allattendataextac, setAllattendataexta] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [perPage, setPerPage] = useState(25);


  const [firstLoading, setFirstLoading] = useState(true);
  const [loader, setLoader] = useState(false);
  const [totalCount, setTotalCount] = useState(0);
  const [totalPage, setTotalPage] = useState(1);
  const [searchPlaceholder, setSearchPlaceholder] = useState('Location Code');
  const [searchBy, setSearchBy] = useState('loc_code');
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
      attaendandaet(userid.EMSSAN).then((res) => {
        console.log('get-attendence-deat res====>>>', res.data);
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
      case 'loc_code':
        placeholder = 'Location Code';
        break;
      case 'absence_date':
        placeholder = 'Absence Date';
        break;
      case 'absence_code':
        placeholder = 'Absence Code';
        break;

      default:
        placeholder = 'Job Code';
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
  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    const year = dateString.substring(0, 4);
    const month = dateString.substring(4, 6);
    const day = dateString.substring(6, 8);
    return `${month}/${day}/${year}`;
  };
  const gosubmit = (e) => {

    setFirstLoading(true);
    if (searchBy == 'loc_code') {
      const filteredData = allattendataextac.filter((item) =>
        item.TMLLOC.padStart(3, '0').toLowerCase().includes(searchValue.toLowerCase())
      );
      const totalPages = Math.ceil(filteredData.length / perPage);
      setTotalPage(totalPages);
      const startIndex = (1 - 1) * perPage;

      setAllattendata(filteredData.slice(startIndex, startIndex + perPage));
      setPageNo(1);


    }
    if (searchBy == 'absence_date') {
      const filteredData = allattendataextac.filter((item) =>
        item.TMLDAT.toLowerCase().includes(searchValue.toLowerCase())
      );
      const totalPages = Math.ceil(filteredData.length / perPage);
      setTotalPage(totalPages);
      const startIndex = (1 - 1) * perPage;

      setAllattendata(filteredData.slice(startIndex, startIndex + perPage));
      setPageNo(1);


    }
    if (searchBy == 'absence_code') {
      const filteredData = allattendataextac.filter((item) =>
        item.TMLABS.toLowerCase().includes(searchValue.toLowerCase())
      );
      const totalPages = Math.ceil(filteredData.length / perPage);
      setTotalPage(totalPages);
      const startIndex = (1 - 1) * perPage;

      setAllattendata(filteredData.slice(startIndex, startIndex + perPage));
      setPageNo(1);


    }

    setFirstLoading(false);




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
  const handleClearFilter = () => {
    setSearchPlaceholder('Location Code');
    setSearchBy('loc_code');
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

    localStorage.setItem("allattendeatnew", JSON.stringify(allattendataextac));
    window.open('printattendancedetails/', '_blank', 'noopener,noreferrer');
  
  };

   const padValue = (value) => {
    return value.toString().padStart(3, '0');
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
                        <h2>Attendance Details</h2>
                        <div class="head-right">
                        <span className='print-icon' onClick={(e) => exportTopdf()}><PrintIcon /></span>
                            <button class="btn btn-submit btn-clear"  onClick={(e) => handleClearFilter()}>Clear Filter</button>
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
                                      <FormControlLabel  control={<Checkbox />} label="" />
                                    </FormGroup>
                                  </th> */}
                                  <th className='job-width loc-code-width cursorjob' onClick={() => handleColumnClick('loc_code')}>Location Code <span className='filt-icon'><img src={filticon} /></span></th>
                                  <th className='abse-type-width absen-date cursorjob'  onClick={() => handleColumnClick('absence_date')}>Absence Date <span className='filt-icon'><img src={filticon} /></span></th>
                                  <th className='abse-type-width absen-code cursorjob'  onClick={() => handleColumnClick('absence_code')}>Absence Code <span className='filt-icon'><img src={filticon} /></span> </th>
                                  <th className='used-width unit-width'>Unit </th>
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
                                      <FormControlLabel  control={<Checkbox />} label="" />
                                    </FormGroup> 
                                    </td> */}
                                    <td class="value-table">
                                      <p>{padValue(entry.TMLLOC)}</p>
                                    </td>
                                    <td class="value-table">
                                      <p>{formatDate(entry.TMLDAT)}</p>
                                    </td>
                                    <td class="value-table">
                                      <p>{entry.TMLABS}</p>
                                    </td>
                                    <td class="value-table">
                                      <p>{entry.TMLQTY}</p>
                                    </td>
                           

                                   </tr>
                                     ))
                      
                                     : <tr><td colSpan={4}>No Data Found</td></tr>}
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

export default Attendancedetails;
