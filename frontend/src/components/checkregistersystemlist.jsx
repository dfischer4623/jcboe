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
import { systempurchasewornumber, systemvendorchecksrnumber } from '../actions/systemadmin.actions';
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
const Checksearchlist = () => {
  const [allattendata, setAllattendata] = useState([]);
  const [allattendataextac, setAllattendataexta] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [perPage, setPerPage] = useState(25);


  const [firstLoading, setFirstLoading] = useState(true);
  const [loader, setLoader] = useState(false);
  const [totalCount, setTotalCount] = useState(0);
  const [totalPage, setTotalPage] = useState(1);
  const [searchPlaceholder, setSearchPlaceholder] = useState('Receipt#');
  const [searchBy, setSearchBy] = useState('receipt');
  const [searchValue, setSearchValue] = useState('');
  const [actionallCsv, setActionallCsv] = useState(Array(0));
  const [actionbulkallCsv, setActionbulkallCsv] = useState(Array(0));
  const [errormsgform, setErrorMsgForm] = useState('');

  const [opendraft, setOpendraft] = React.useState(false);
  const handleOpendraft = () => setOpendraft(true);
  const handleClosedraft = () => setOpendraft(false);
  let navigate = useNavigate();
  useEffect(() => {
    var userid = secureLocalStorage.getItem('bankDetailssystemDataid');


    if ((userid) == null || (userid) == undefined) {


      navigate(`/systemshowPO`);

    } else {
      console.log(userid);
      setFirstLoading(true);

      systemvendorchecksrnumber(userid).then((res) => {
        console.log('add-user res=====>>>>', res.data);
        const totalPages = Math.ceil(res.data.length / perPage);
        setTotalPage(totalPages);
        const startIndex = (pageNo - 1) * perPage;
        const endIndex = startIndex + perPage;
        setAllattendataexta(res.data);
        var customerList_temp = res.data.slice(startIndex, endIndex);
        for (let i = 0; i < customerList_temp.length; i++) { customerList_temp[i].check_status = false; }
        console.log(customerList_temp);
        setAllattendata(customerList_temp);
        setFirstLoading(false);


      }).catch((error) => {

        console.log('error occurs while registring the user', error);
      });


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
      case 'receipt':
        placeholder = 'Receipt#';
        break;
      case 'checkNumber':
        placeholder = 'Check#';
        break;
      case 'invoice':
        placeholder = 'Invoice#';
        break;
      case 'vendorNumber':
        placeholder = 'Vendor No';
        break;


      case 'chkDate':
        placeholder = 'Check Date';
        break;

      default:
        placeholder = 'Receipt#';
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
    if (searchBy == 'receipt') {
      const filteredData = allattendataextac.filter(item => item.receipt.toString().includes(searchValue));
      const totalPages = Math.ceil(filteredData.length / perPage);
      setTotalPage(totalPages);
      const startIndex = (1 - 1) * perPage;
      var customerList_temp = filteredData.slice(startIndex, startIndex + perPage);
      for (let i = 0; i < customerList_temp.length; i++) { customerList_temp[i].check_status = false; }
      console.log(customerList_temp);
      setAllattendata(customerList_temp);
      setPageNo(1);


    }
    if (searchBy == 'checkNumber') {
      const filteredData = allattendataextac.filter((item) =>
        item.checkNumber.toLowerCase().includes(searchValue.toLowerCase())
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
    if (searchBy == 'invoice') {
      const filteredData = allattendataextac.filter((item) =>
        item.invoice.toLowerCase().includes(searchValue.toLowerCase())
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

    if (searchBy == 'vendorNumber') {
      const filteredData = allattendataextac.filter((item) =>
        item.vendorNumber.toString().toLowerCase().includes(searchValue.toLowerCase())
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
    if (searchBy == 'chkDate') {
      const filteredData = allattendataextac.filter((item) => {
        if (!item.chkDate) return false;

        // Normalize both to MM/DD/YYYY
        const dateStr = new Date(item.chkDate).toLocaleDateString('en-US', {
          month: '2-digit',
          day: '2-digit',
          year: 'numeric'
        });

        return dateStr.includes(searchValue);
      });

      const totalPages = Math.ceil(filteredData.length / perPage);
      setTotalPage(totalPages);

      const startIndex = (1 - 1) * perPage;
      let customerList_temp = filteredData.slice(startIndex, startIndex + perPage);

      for (let i = 0; i < customerList_temp.length; i++) {
        customerList_temp[i].check_status = false;
      }

      console.log(customerList_temp);
      setAllattendata(customerList_temp);
      setPageNo(1);


    }


    setFirstLoading(false);




  }
  const handleClearFilter = () => {
    setSearchPlaceholder('Receipt#');
    setSearchBy('receipt');
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


    window.open('printsystemvendorregister/', '_blank', 'noopener,noreferrer');





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
                <h2>Check Register</h2>
                <div class="head-right">
                  <span className='print-icon print-check-icon' onClick={(e) => exportTopdf()} ><PrintIcon /></span>
                  <button class="btn btn-submit btn-clear" onClick={(e) => handleClearFilter()}>Clear Filter</button>
                </div>
              </div>
              <div className='back-sec'>
                <Link to="/vendorsystemdetails" className="back-btn-sec"><KeyboardDoubleArrowLeftIcon />Back</Link>
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
                      <th className=' sys-check-widhss' onClick={() => handleColumnClick('receipt')}>Receipt#<span className='filt-icon'><img src={filticon} /></span></th>
                      <th className='sys-ven-widhss' onClick={() => handleColumnClick('vendorNumber')}>Vendor Name <span className='filt-icon'><img src={filticon} /></span></th>

                      <th className=' sys-check-widhss' onClick={() => handleColumnClick('checkNumber')}>Check# <span className='filt-icon'><img src={filticon} /></span></th>

                      <th className='sys-check-date-widhss' onClick={() => handleColumnClick('chkDate')}>Check Date <span className='filt-icon'><img src={filticon} /></span></th>
                      <th className='sys-trans-amt-widh'>Transaction Amount </th>
                      <th className='sys-invoice-widhss' onClick={() => handleColumnClick('invoice')}>Invoice# <span className='filt-icon'><img src={filticon} /></span></th>


                    </tr>
                  </thead>
                  <tbody class="tbody-light">

                    {
                      firstLoading ? <tr ><td colSpan={6}><div className="spinner-border" role="status" style={{ width: "1rem", height: "1rem", marginLeft: "6px" }}></div></td></tr> : <>
                        {allattendata.length > 0 ?

                          allattendata.map((entry, index) => (

                            <tr>

                              <td class="value-table">
                                <p>{entry.receipt} </p>
                              </td>
                              <td class="value-table">
                                <p>{entry.vendor} ({entry.vendorNumber}) </p>
                              </td>
                              <td class="value-table">
                                <p>{entry.checkNumber} </p>
                              </td>

                              <td class="value-table">
                                <p>{formatDate(entry.chkDate)}  </p>
                              </td>
                              <td class="value-table">
                                <p>{formatCurrency((entry.transAmt))}  </p>
                              </td>
                              <td class="value-table">
                                <p>{(entry.invoice)}  </p>
                              </td>

                            </tr>

                          ))
                          : <tr><td colSpan={6}>No Data Found</td></tr>}
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
