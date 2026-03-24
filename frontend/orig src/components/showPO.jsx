
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
  const [searchPlaceholder, setSearchPlaceholder] = useState('Vendor #');
  const [searchBy, setSearchBy] = useState('VNNO');
  const [searchValue, setSearchValue] = useState('');
  const [actionallCsv, setActionallCsv] = useState(Array(0));
  const [actionbulkallCsv, setActionbulkallCsv] = useState(Array(0));
  const [errormsgform, setErrorMsgForm] = useState('');

  const [opendraft, setOpendraft] = React.useState(false);
  const handleOpendraft = () => setOpendraft(true);
  const handleClosedraft = () => setOpendraft(false);
  let navigate = useNavigate();
  useEffect(() => {
    var userid = secureLocalStorage.getItem('showPOData');
    var podat = secureLocalStorage.getItem('vendorNumberData');

    if ((userid) == null || (userid) == undefined) {


      navigate(`/vendordetails`);

    } else {
       console.log(podat);
      setvendeoda(podat[0]);
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
      case 'VNNO':
        placeholder = 'Vendor #';
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
        placeholder = 'Vendor #';
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
    if (searchBy == 'VNNO') {
      const filteredData = allattendataextac.filter(item => item.VNNO.toString().includes(searchValue));
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
    setSearchPlaceholder('Vendor #');
    setSearchBy('VNNO');
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


        window.open('printshowPO/', '_blank', 'noopener,noreferrer');
 


   

  };

  const checkSelected = (PO, PODOC) => {
    purchaseOrders( PODOC,PO).then((res) => {
      console.log('add-user res=====>>>>', res.data);
      if (res.data == '' || res.data == null) {


        return;
      } else {

        secureLocalStorage.setItem("poData", res.data);
        secureLocalStorage.setItem("checkforsh", 'yes');
        secureLocalStorage.setItem("pobasicData", { podoc:PODOC, ponum: PO  });

        navigate("/podetails");
      }


    }).catch((error) => {

      console.log('error occurs while registring the user', error);
    });
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
                  {/* <button class="btn btn-submit btn-clear" onClick={(e) => handleClearFilter()}>Clear Filter</button> */}
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
                {/* <div className='search-sec'>
                  <input type='text' className='input-srch' placeholder={searchPlaceholder} onChange={handleSearchInput} value={searchValue} onKeyPress={handleKeypress} />
                  <button className='go-sec' onClick={(e) => gosubmit()}>Go</button>
                </div> */}
              </div>

            </div>
            <div className='row'>
              {/* table section start from here */}
              <div class="table-main-sec">
                <table class="table table-sec">
                  <thead class="thead-before-sec thaed-colaps-sec">
                    <tr>

                      <th className='job-width vendor-widh' >PO</th>
                      <th className='abse-type-width vendo-name-width' >PODOC <span className='filt-icon'></span></th>

                      <th className='beg-bal-width addrss-widh' >POATTN <span className='filt-icon'></span></th>
                      <th className='earnd-width city-widh' >POTOT <span className='filt-icon'></span></th>
                      <th className='earnd-width city-widh' >POIUSR <span className='filt-icon'></span></th>
                      <th className='earnd-width city-widh' >POAUSR <span className='filt-icon'></span></th>
                      <th className='used-width view-widh'>View </th>
                    </tr>
                  </thead>
                  <tbody class="tbody-light">

                    {
                      firstLoading ? <tr ><td colSpan={7}><div className="spinner-border" role="status" style={{ width: "1rem", height: "1rem", marginLeft: "6px" }}></div></td></tr> : <>
                        {allattendata.length > 0 ?

                          allattendata.map((entry, index) => (

                            <tr>

                              <td class="value-table">
                                <p>{entry.PO} </p>
                              </td>
                              <td class="value-table">
                                <p>{entry.PODOC}</p>
                              </td>
                              <td class="value-table">
                                <p>{entry.POATTN} </p>
                              </td>
                              <td class="value-table">
                                <p>{entry.POTOT}</p>

                              </td>
                              <td class="value-table">
                                <p>{entry.POIUSR}</p>

                              </td>
                              <td class="value-table">
                                <p>{entry.POAUSR}</p>

                              </td>

                              <td class="value-table view-sec">
                                <Link to="#"
                                  onClick={(e) => { e.preventDefault(); checkSelected(entry.PO, entry.PODOC); }}

                                >  <img src={viewicon} className='view-icon' alt="view" /></Link>
                              </td>
                            </tr>

                          ))
                          : <tr><td colSpan={7}>No Data Found</td></tr>}
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
