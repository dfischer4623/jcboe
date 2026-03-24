
import React, { useState, useEffect } from 'react';
// import Header from './header';
// import Sidebar from './sidebar';
import PrintIcon from '@mui/icons-material/Print';
import SearchIcon from '@mui/icons-material/Search';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import filticon from '../assets/img/filter-icon-blue.png';
import viewicon from '../assets/img/view-icon.png';
import { Link } from 'react-router-dom';
import secureLocalStorage from "react-secure-storage";
import {
  useNavigate
} from "react-router-dom";
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import { systempurchasewornumber, systemvendorchecksrnumber } from '../actions/systemadmin.actions';
import { purchaseOrders } from '../actions/admin.actions';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
// modal code start here
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));
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
const Vendorsearchlist = () => {
  const [allattendata, setAllattendata] = useState([]);
  const [allattendataextac, setAllattendataexta] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [perPage, setPerPage] = useState(25);
  const [vendeoda, setvendeoda] = useState(null);

  const [firstLoading, setFirstLoading] = useState(true);
  const [loader, setLoader] = useState(false);
  const [totalCount, setTotalCount] = useState(0);
  const [totalPage, setTotalPage] = useState(1);
  const [searchPlaceholder, setSearchPlaceholder] = useState('PO Number');
  const [searchBy, setSearchBy] = useState('poNumber');
  const [searchValue, setSearchValue] = useState('');
  const [actionallCsv, setActionallCsv] = useState(Array(0));
  const [actionbulkallCsv, setActionbulkallCsv] = useState(Array(0));
  const [errormsgform, setErrorMsgForm] = useState('');

  const [opendraft, setOpendraft] = React.useState(false);
  const handleOpendraft = () => setOpendraft(true);
  const handleClosedraft = () => setOpendraft(false);
  let navigate = useNavigate();
  useEffect(() => {
    var userid = secureLocalStorage.getItem('showsystemPODataid');
    var podat = secureLocalStorage.getItem('vendorSystemNumberData');
    console.log(userid);
    console.log(podat);

    if ((userid) == null || (userid) == undefined) {


      navigate(`/vendordetails`);

    } else {

      console.log(podat);
      setvendeoda(podat[0]);
      setFirstLoading(true);
      systempurchasewornumber(userid).then((res) => {
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
  secureLocalStorage.removeItem("poSyetemnewData");
    // secureLocalStorage.setItem("checkforsh", 'yes');
    secureLocalStorage.removeItem("pobasicsystemData");
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
      case 'poNumber':
        placeholder = 'PO Number';
        break;
      case 'VNNAME':
        placeholder = 'Vendor Name';
        break;
      case 'VNADDR':
        placeholder = 'Address';
        break;
      case 'VNCITY':
        placeholder = 'City, State Zip';
        break;

      default:
        placeholder = 'PO Number';
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
    if (searchBy == 'poNumber') {
      const filteredData = allattendataextac.filter(item => item.poNumber.toString().includes(searchValue));
      const totalPages = Math.ceil(filteredData.length / perPage);
      setTotalPage(totalPages);
      const startIndex = (1 - 1) * perPage;
      var customerList_temp = filteredData.slice(startIndex, startIndex + perPage);
      for (let i = 0; i < customerList_temp.length; i++) { customerList_temp[i].check_status = false; }
      console.log(customerList_temp);
      setAllattendata(customerList_temp);
      setPageNo(1);


    }
    if (searchBy == 'VNNAME') {
      const filteredData = allattendataextac.filter((item) =>
        item.VNNAME.toLowerCase().includes(searchValue.toLowerCase())
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
    if (searchBy == 'VNCITY') {
      const filteredData = allattendataextac.filter((item) =>
        item.VNCITY.toLowerCase().includes(searchValue.toLowerCase()) ||
        item.VNST.toLowerCase().includes(searchValue.toLowerCase()) ||
        item.VNZIP.toString().toLowerCase().includes(searchValue.toLowerCase())
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
    setSearchPlaceholder('PO Number');
    setSearchBy('poNumber');
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
  const createCsv = (e, actionall, index) => {


    console.log('index =====>>>>>', index);
    var customerCsv_temp = [...actionallCsv];
    var customerList_temp = [...allattendata];
    var customerAllCsv_temp = [...actionbulkallCsv];
    console.log('checked ====>>>', e.target.checked);
    if (e.target.checked) {
      customerList_temp[index].check_status = true;
      if (customerCsv_temp.includes(actionall)) {

      } else {
        customerCsv_temp.push(
          actionall);
        customerAllCsv_temp.push(
          actionall);
      }

    } else {
      customerList_temp[index].check_status = false;
      let index1 = customerCsv_temp.indexOf(actionall);
      var removed = customerCsv_temp.splice(index1, 1);
      var removedbb = customerAllCsv_temp.splice(index1, 1);
    }

    console.log(customerCsv_temp);
    setActionallCsv(customerCsv_temp);
    setActionbulkallCsv(customerAllCsv_temp);
    setAllattendata(customerList_temp);

  };

  const exportTopdf = (e) => {


    window.open('printsystemshowPO/', '_blank', 'noopener,noreferrer');





  };

  const checkSelected = (PO, entry) => {


    secureLocalStorage.setItem("poSyetemnewData", entry);
    // secureLocalStorage.setItem("checkforsh", 'yes');
    secureLocalStorage.setItem("pobasicsystemData", { PO: PO });

    navigate("/posystemdetails");

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
                {vendeoda != null &&
                  <>

                    <h3>Vendor Number:-<span> {vendeoda.VNNO}</span></h3>
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
                <h2>Purchase Orders</h2>
                <div class="head-right po-print-right">
                  <span className='print-icon po-show-print ' onClick={(e) => exportTopdf()}><PrintIcon /></span>
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
                <table class="table table-sec">
                  <thead class="thead-before-sec thaed-colaps-sec">
                    <tr>

                      <th className='job-width vendor-widh sys-width-po' onClick={() => handleColumnClick('poNumber')}>PO <span className='filt-icon'><img src={filticon} /></span></th>
                      <th className='abse-type-width vendo-name-width sys-pay-width' >PAYMENTS <span className='filt-icon'></span></th>

                      <th className='beg-bal-width addrss-widh sys-width-date' >DATE <span className='filt-icon'></span></th>
                      <th className='earnd-width city-widh sys-width-year' >YEAR <span className='filt-icon'></span></th>

                      <th className='used-width view-widh sys-width-view'>View </th>
                    </tr>
                  </thead>
                  <tbody class="tbody-light">

                    {
                      firstLoading ? <tr ><td colSpan={5}><div className="spinner-border" role="status" style={{ width: "1rem", height: "1rem", marginLeft: "6px" }}></div></td></tr> : <>
                        {allattendata.length > 0 ?

                          allattendata.map((entry, index) => (

                            <tr>

                              <td class="value-table">
                                <p>{entry.poNumber} </p>
                              </td>
                              <td class="value-table">
                                <p>{formatCurrency(entry.payments)}</p>
                              </td>
                              <td class="value-table">
                                <p>{formatDate(entry.date)} </p>
                              </td>
                              <td class="value-table">
                                <p>{formatYearRange(entry.year)}</p>

                              </td>


                              <td class="value-table view-sec">
                                <Link to="#"
                                  onClick={(e) => { e.preventDefault(); checkSelected(entry.poNumber, entry); }}

                                >  <img src={viewicon} className='view-icon' alt="view" /></Link>
                              </td>
                            </tr>

                          ))
                          : <tr><td colSpan={5}>No Data Found</td></tr>}
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

      <BootstrapDialog
        onClose={handleClosedraft}
        aria-labelledby="customized-dialog-title"
        open={opendraft} className='formdetails-sec form-status approve-modal error-selct-msg modal-check-box'
      >
        <IconButton
          aria-label="close"
          onClick={handleClosedraft}
          sx={(theme) => ({
            position: 'absolute',
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Typography gutterBottom>
            <div className='form-details-inner form-details-apprv'>
              <p className='succ-val-sec select-frm-sec'>{errormsgform}</p>
            </div>
          </Typography>
        </DialogContent>
      </BootstrapDialog>
    </>
  )
}

export default Vendorsearchlist;
