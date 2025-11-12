import React, { useContext, useState, useEffect } from 'react';
// import Header from './header';
// import Sidebar from './sidebar';
import PrintIcon from '@mui/icons-material/Print';
import SearchIcon from '@mui/icons-material/Search';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import filticon from '../assets/img/filter-icon-blue.png';
import viewicon from '../assets/img/view-icon.png';

import CircularProgress from '@mui/material/CircularProgress';
import {
  Link, useNavigate
} from "react-router-dom";
import { useSelector } from 'react-redux';
import { updateNullOfObjectValues } from '../helpers/helper';

import secureLocalStorage from "react-secure-storage";
import { AppContext } from '../context';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
const Checksearchlist = () => {
  const [allattendata, setAllattendata] = useState([]);
  const [allattendataextac, setAllattendataexta] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [perPage, setPerPage] = useState(25);


  const [firstLoading, setFirstLoading] = useState(true);
  const [loader, setLoader] = useState(false);
  const [totalCount, setTotalCount] = useState(0);
  const [totalPage, setTotalPage] = useState(1);
  const [searchPlaceholder, setSearchPlaceholder] = useState('Bank');
  const [searchBy, setSearchBy] = useState('APHBNK');
  const [searchValue, setSearchValue] = useState('');
  const [actionallCsv, setActionallCsv] = useState(Array(0));
  const [actionbulkallCsv, setActionbulkallCsv] = useState(Array(0));
  const [errormsgform, setErrorMsgForm] = useState('');

  const [opendraft, setOpendraft] = React.useState(false);
  const handleOpendraft = () => setOpendraft(true);
  const handleClosedraft = () => setOpendraft(false);
  let navigate = useNavigate();
  useEffect(() => {
    var userid = secureLocalStorage.getItem('bankDetailsData');


    if ((userid) == null || (userid) == undefined) {


      navigate(`/vendorsearch`);

    } else {
      setFirstLoading(true);
      const totalPages = Math.ceil(userid.length / perPage);
      setTotalPage(totalPages);
      const startIndex = (pageNo - 1) * perPage;
      const endIndex = startIndex + perPage;
      setAllattendataexta(userid);
      var customerList_temp = userid.slice(startIndex, endIndex);
      for (let i = 0; i < customerList_temp.length; i++) { customerList_temp[i].check_status = false; }
      console.log(customerList_temp);
      setAllattendata(customerList_temp);
      setFirstLoading(false);


    }

  }, []);





  const changePage = (page) => {

    if (page < 1) page = 1;
    if (page > totalPage) page = totalPage;
    setFirstLoading(true);
    const startIndex = (page - 1) * perPage;
    const endIndex = parseInt(startIndex) + parseInt(perPage);
    var customerList_temp = allattendataextac.slice(startIndex, endIndex);
    for (let i = 0; i < customerList_temp.length; i++) { customerList_temp[i].check_status = false; }
    console.log(customerList_temp);
    setAllattendata(customerList_temp);
    setFirstLoading(false);
    setPageNo(page);



  }
  const handleColumnClick = (type) => {
    let placeholder = '';
    switch (type) {
      case 'APHBNK':
        placeholder = 'Bank';
        break;
      case 'APHBAC':
        placeholder = 'Bank Account';
        break;
      case 'APHFRM':
        placeholder = 'Form';
        break;
      case 'APHVEN':
        placeholder = 'Vendor No';
        break;
      case 'APHCHK':
        placeholder = 'Check Number';
        break;

      case 'APHCDT':
        placeholder = 'Check Date';
        break;

      default:
        placeholder = 'Bank';
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
    if (searchBy == 'APHBNK') {
      const filteredData = allattendataextac.filter(item => item.APHBNK.toString().includes(searchValue));
      const totalPages = Math.ceil(filteredData.length / perPage);
      setTotalPage(totalPages);
      const startIndex = (1 - 1) * perPage;
      var customerList_temp = filteredData.slice(startIndex, startIndex + perPage);
      for (let i = 0; i < customerList_temp.length; i++) { customerList_temp[i].check_status = false; }
      console.log(customerList_temp);
      setAllattendata(customerList_temp);
      setPageNo(1);


    }
    if (searchBy == 'APHBAC') {
      const filteredData = allattendataextac.filter((item) =>
        item.APHBAC.toLowerCase().includes(searchValue.toLowerCase())
      );
      const totalPages = Math.ceil(filteredData.length / perPage);
      setTotalPage(totalPages);
      const startIndex = (1 - 1) * perPage;
      var customerList_temp = filteredData.slice(startIndex, startIndex + perPage);
      for (let i = 0; i < customerList_temp.length; i++) { customerList_temp[i].check_status = false; }
      console.log(customerList_temp);
      setAllattendata(customerList_temp);
      setPageNo(1);


    }
    if (searchBy == 'APHFRM') {
      const filteredData = allattendataextac.filter((item) =>
        item.APHFRM.toLowerCase().includes(searchValue.toLowerCase())
      );
      const totalPages = Math.ceil(filteredData.length / perPage);
      setTotalPage(totalPages);
      const startIndex = (1 - 1) * perPage;

      var customerList_temp = filteredData.slice(startIndex, startIndex + perPage);
      for (let i = 0; i < customerList_temp.length; i++) { customerList_temp[i].check_status = false; }
      console.log(customerList_temp);
      setAllattendata(customerList_temp);
      setPageNo(1);


    }

    if (searchBy == 'APHVEN') {
      const filteredData = allattendataextac.filter((item) =>
        item.APHVEN.toString().toLowerCase().includes(searchValue.toLowerCase())
      );
      const totalPages = Math.ceil(filteredData.length / perPage);
      setTotalPage(totalPages);
      const startIndex = (1 - 1) * perPage;

      var customerList_temp = filteredData.slice(startIndex, startIndex + perPage);
      for (let i = 0; i < customerList_temp.length; i++) { customerList_temp[i].check_status = false; }
      console.log(customerList_temp);
      setAllattendata(customerList_temp);
      setPageNo(1);


    }


    if (searchBy == 'APHCHK') {
      const filteredData = allattendataextac.filter((item) =>
        item.APHCHK.toString().toLowerCase().includes(searchValue.toLowerCase())
      );
      const totalPages = Math.ceil(filteredData.length / perPage);
      setTotalPage(totalPages);
      const startIndex = (1 - 1) * perPage;

      var customerList_temp = filteredData.slice(startIndex, startIndex + perPage);
      for (let i = 0; i < customerList_temp.length; i++) { customerList_temp[i].check_status = false; }
      console.log(customerList_temp);
      setAllattendata(customerList_temp);
      setPageNo(1);


    }
    if (searchBy == 'APHCDT') {
      const filteredData = allattendataextac.filter((item) =>
        item.APHCDT.toLowerCase().includes(searchValue.toLowerCase())
      );
      const totalPages = Math.ceil(filteredData.length / perPage);
      setTotalPage(totalPages);
      const startIndex = (1 - 1) * perPage;

      var customerList_temp = filteredData.slice(startIndex, startIndex + perPage);
      for (let i = 0; i < customerList_temp.length; i++) { customerList_temp[i].check_status = false; }
      console.log(customerList_temp);
      setAllattendata(customerList_temp);
      setPageNo(1);


    }


    setFirstLoading(false);




  }
  const handleClearFilter = () => {
    setSearchPlaceholder('Bank');
    setSearchBy('APHBNK');
    setSearchValue('');
    setFirstLoading(true);
    const totalPages = Math.ceil(allattendataextac.length / perPage);
    setTotalPage(totalPages);
    const startIndex = (1 - 1) * perPage;
    const endIndex = startIndex + perPage;
    var customerList_temp = allattendataextac.slice(startIndex, endIndex);
    for (let i = 0; i < customerList_temp.length; i++) { customerList_temp[i].check_status = false; }
    console.log(customerList_temp);
    setAllattendata(customerList_temp);

    setPageNo(1);
    setFirstLoading(false);

  }
  let dollarUS = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const chcekdate = (APHCDT) => {
    if (APHCDT.length === 1) {
      var APHCDT = '00000' + APHCDT
    } else if (APHCDT.length === 2) {
      APHCDT = '0000' + APHCDT
    } else if (APHCDT.length === 3) {
      APHCDT = '000' + APHCDT
    } else if (APHCDT.length === 4) {
      APHCDT = '00' + APHCDT
    } else if (APHCDT.length === 5) {
      APHCDT = '0' + APHCDT
    } else {
      APHCDT = APHCDT
    }

    var m = Number(APHCDT.substring(0, 2))
    var d = Number(APHCDT.substring(2, 4))
    var y = Number(APHCDT.substring(4, 6))
    if (y <= 50) {
      y = 2000 + y
    } else {
      y = 1900 + y
    }

    APHCDT = String(m) + '/' + String(d) + '/' + String(y)

    return APHCDT;
  }
  const chcekam = (APHCAM, index) => {

    var checkAmt = Number(APHCAM);
    var totAmt = 0;
    if (index === 0) {
      totAmt = checkAmt
    } else {
      totAmt = checkAmt + totAmt
    }

    return totAmt;
  }
  const exportTopdf = (e) => {


    window.open('printshowBank/', '_blank', 'noopener,noreferrer');





};
  return (
    <>
      {/* <Header />
      <Sidebar /> */}

      <div className='main-inner-sec content-main'>
        {/* <div className='main-inner-heading'>
             <div className='col-md-12'>
               <div className='emp-main-serach'>
                 <div className='emp-serach emp-data-head emp-another-sec'>
                 
                       <h2>Vendor Name Search</h2>
                 </div>
               </div>
   
   
             </div>
           </div> */}

        <div class=" emp-main-heading-emp all-simple-table-margin">
          <div class="main-heading-sec ">
            <div class="col-md-12">
              <div class="head-inner">
                <h2>Check Search</h2>
                <div class="head-right">
                  <span className='print-icon print-check-icon' onClick={(e) => exportTopdf()} ><PrintIcon /></span>
                  <button class="btn btn-submit btn-clear" onClick={(e) => handleClearFilter()}>Clear Filter</button>
                </div>
              </div>
              <div className='back-sec'>
                <Link to="/vendordetails" className="back-btn-sec"><KeyboardDoubleArrowLeftIcon />Back</Link>
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
                <table class="table table-sec table-sech-list">
                  <thead class="thead-before-sec thaed-colaps-sec">
                    <tr>
                      {/* <th className='check-width'>
                         
                           #
                         </th> */}
                      <th className='job-width check-bank-widh cursorjob' onClick={() => handleColumnClick('APHBNK')}>Bank<span className='filt-icon'><img src={filticon} /></span></th>
                      <th className='abse-type-width bank-accont-widh bank-accont-widhss cursorjob' onClick={() => handleColumnClick('APHBAC')}>Bank Account <span className='filt-icon'><img src={filticon} /></span></th>

                      <th className='beg-bal-width addrss-widh chk-form-widh cursorjob' onClick={() => handleColumnClick('APHFRM')}>Form <span className='filt-icon'><img src={filticon} /></span></th>
                      <th className='earnd-width city-widh chk-ven-widh cursorjob' onClick={() => handleColumnClick('APHVEN')}>Vendor No <span className='filt-icon'><img src={filticon} /></span></th>
                      <th className='beg-bal-width addrss-widh chk-no-widh cursorjob' onClick={() => handleColumnClick('APHCHK')} >Check Number <span className='filt-icon'><img src={filticon} /></span></th>
                      <th className='earnd-width chk-date-widh cursorjob' onClick={() => handleColumnClick('APHCDT')}>Check Date <span className='filt-icon'><img src={filticon} /></span></th>
                      <th className='earnd-width chk-recon-widh'>Reconciled?</th>
                      <th className='earnd-width  chk-recon-date-widh'>Reconciled Date </th>
                      <th className='earnd-width  chek-amt-widh'>Check Amount </th>
                    </tr>
                  </thead>
                  <tbody class="tbody-light">

                    {
                      firstLoading ? <tr ><td colSpan={9}><div className="spinner-border" role="status" style={{ width: "1rem", height: "1rem", marginLeft: "6px" }}></div></td></tr> : <>
                        {allattendata.length > 0 ?

                          allattendata.map((entry, index) => (

                            <tr>

                              <td class="value-table">
                                <p>{entry.APHBNK} </p>
                              </td>
                              <td class="value-table">
                                <p>{entry.APHBAC}</p>
                              </td>
                              <td class="value-table">
                                <p>{entry.APHFRM} </p>
                              </td>
                              <td class="value-table">
                                <p>{entry.APHVEN} {entry.APHNAM}  </p>
                              </td>
                              <td class="value-table">
                                <p>{entry.APHCHK}  </p>
                              </td>
                              <td class="value-table">
                                <p>{chcekdate(entry.APHCDT)}  </p>
                              </td>
                              <td class="value-table">
                                <p>Y </p>
                              </td>
                              <td class="value-table">
                                <p>{chcekdate(entry.APHCDT)} </p>
                              </td>
                              <td class="value-table">
                                <p>{dollarUS.format(chcekam(entry.APHCAM, index))} </p>
                              </td>
                            </tr>

                          ))
                          : <tr><td colSpan={9}>No Data Found</td></tr>}
                      </>
                    }





                  </tbody>
                </table>
              </div>

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

            </div>
          </div>
        </div>
        {/* table section end */}





      </div>

    </>
  )
}

export default Checksearchlist;
