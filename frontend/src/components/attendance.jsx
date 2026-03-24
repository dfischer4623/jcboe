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
import { attaendansear } from '../actions/admin.actions';
import secureLocalStorage from "react-secure-storage";
import { AppContext } from '../context';

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
import {
  useNavigate
} from "react-router-dom";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));


const Attendance = () => {
  const [employeeData, setEmployeeData] = useState(null);
  const [allattendata, setAllattendata] = useState([]);
  const [allattendataextac, setAllattendataexta] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [perPage, setPerPage] = useState(25);


  const [firstLoading, setFirstLoading] = useState(true);
  const [loader, setLoader] = useState(false);
  const [totalCount, setTotalCount] = useState(0);
  const [totalPage, setTotalPage] = useState(1);
  const [searchPlaceholder, setSearchPlaceholder] = useState('Job Code');
  const [searchBy, setSearchBy] = useState('job_code');
  const [searchValue, setSearchValue] = useState('');
  const [actionallCsv, setActionallCsv] = useState(Array(0));
  const [actionbulkallCsv, setActionbulkallCsv] = useState(Array(0));
  const [errormsgform, setErrorMsgForm] = useState('');

  const [opendraft, setOpendraft] = React.useState(false);
  const handleOpendraft = () => setOpendraft(true);
  const handleClosedraft = () => setOpendraft(false);
  let navigate = useNavigate();
  useEffect(() => {
    var userid = secureLocalStorage.getItem('employeeData');



    if (Object.keys(userid).length === 0) {


      navigate(`/employeedata`);

    } else {
      setFirstLoading(true);
      console.log(userid);
      setEmployeeData(userid);
      attaendansear(userid.EMSSAN).then((res) => {
        console.log('get-attendence res====>>>', res.data);
        if (res.data.length > 0) {
          const totalPages = Math.ceil(res.data.length / perPage);
          setTotalPage(totalPages);
          const startIndex = (pageNo - 1) * perPage;
          const endIndex = startIndex + perPage;
          setAllattendataexta(res.data);
          var customerList_temp = res.data.slice(startIndex, endIndex);
          for (let i = 0; i < customerList_temp.length; i++) { customerList_temp[i].check_status = false; }
          console.log(customerList_temp);
          setAllattendata(customerList_temp);
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
      case 'job_code':
        placeholder = 'Job Code';
        break;
      case 'type':
        placeholder = 'Absence Type';
        break;
      case 'year':
        placeholder = 'Year';
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
  const gosubmit = (e) => {

    setFirstLoading(true);
    if (searchBy == 'job_code') {
      const filteredData = allattendataextac.filter((item) =>
        item.HAJOB.padStart(4, '0').toLowerCase().includes(searchValue.toLowerCase())
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
    if (searchBy == 'type') {
      const filteredData = allattendataextac.filter((item) =>
        item.HAABS.toLowerCase().includes(searchValue.toLowerCase())
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
    if (searchBy == 'year') {
      const filteredData = allattendataextac.filter((item) =>
        item.MEMBER.toLowerCase().includes(searchValue.toLowerCase())
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
    setSearchPlaceholder('Job Code');
    setSearchBy('job_code');
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


    setErrorMsgForm('');
    // Headers for each column

    // Convert users data to a csv
    console.log(actionbulkallCsv);
    console.log('actionbulkallCsv', actionbulkallCsv);
    var temp_csv = Array(0);
    console.log(actionbulkallCsv.length);

    if (actionbulkallCsv.length > 0) {
      if (actionbulkallCsv.length < 26) {
        let text = actionbulkallCsv.toString();
        console.log(text);
        localStorage.setItem("allprintnew", JSON.stringify(actionbulkallCsv));
        window.open('printattende/', '_blank', 'noopener,noreferrer');
      } else {
        setErrorMsgForm('Maximum Limit of 25 forms reached!');
        setOpendraft(true);
      }


    }
    else {
      setErrorMsgForm('Please Select a Row');
      setOpendraft(true);

    }

  };
  const padValue = (value) => {
      if(value!== null && value !== undefined && value !== 0 && value !== '') {
    return value.toString().padStart(4, '0');
      }
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
                <h2>Attendance</h2>
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
                      <th className='check-width'>
                        {/* <FormGroup>
                          <FormControlLabel control={<Checkbox />} label="" />
                        </FormGroup> */}
                        #
                      </th>
                      <th className='job-width cursorjob' onClick={() => handleColumnClick('job_code')}>Job Code <span className='filt-icon'><img src={filticon} /></span></th>
                      <th className='abse-type-width cursorjob' onClick={() => handleColumnClick('type')}>Absence Type <span className='filt-icon'><img src={filticon} /></span></th>

                      <th className='beg-bal-width' >Beginning Balance </th>
                      <th className='earnd-width'>Earned </th>

                      <th className='used-width'>Used </th>
                      <th className='earn-balan-width'>Ending Balance </th>

                      <th className='year-width' onClick={() => handleColumnClick('year')}>Year <span className='filt-icon'><img src={filticon} /></span></th>
                    </tr>
                  </thead>
                  <tbody class="tbody-light">
                    {
                      firstLoading ? <tr ><td colSpan={8}><div className="spinner-border" role="status" style={{ width: "1rem", height: "1rem", marginLeft: "6px" }}></div></td></tr> : <>
                        {allattendata.length > 0 ?

                          allattendata.map((entry, index) => (

                            <tr>
                              <td class="check-width">
                                <FormGroup>
                                  <FormControlLabel control={<Checkbox />} label=""

                                    name="prev_all"
                                    checked={entry.check_status}
                                    onClick={(e) => entry.HAJOB && createCsv(e, entry, index)}
                                  />
                                </FormGroup>
                              </td>
                              <td class="value-table">
                                <p>{padValue(entry.HAJOB)} </p>
                              </td>
                              <td class="value-table">
                                <p>{entry.HAABS}</p>
                              </td>
                              <td class="value-table">
                                <p>{entry.HAFBBL} </p>
                              </td>
                              <td class="value-table">
                                <p>{entry.HAFERN}</p>
                              </td>
                              <td class="value-table">
                                <p>{entry.HAFUSE}</p>
                              </td>
                              <td class="value-table">
                                <p>{entry.HABAL}</p>
                              </td>

                              <td class="value-table">
                                <p>{entry.MEMBER}</p>
                              </td>
                            </tr>

                          ))
                          : <tr><td colSpan={8}>No Data Found</td></tr>}
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

export default Attendance;
