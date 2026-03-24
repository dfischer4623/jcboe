import React, { useState, useEffect } from 'react';
import PropTypes, { array } from 'prop-types';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { Link } from 'react-router-dom';
import filticon from '../assets/img/filter-icon-blue.png';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useSelector } from 'react-redux';
import { updateNullOfObjectValues } from '../helpers/helper';
import { createuser, getusers, edituser, deleteuser, updateuser } from '../actions/admin.actions';
import secureLocalStorage from "react-secure-storage";
import { AppContext } from '../context';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import CircularProgress from '@mui/material/CircularProgress';
import {
  useNavigate
} from "react-router-dom";

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
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
// modal section code start
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));
// modal section code end

const Usermanagement = () => {
  const [value, setValue] = React.useState(0);
  const addServicepagenew_default = {
    id: 0,
    status: 'Active',

    image_error: '',
    username: '',
    username_name: '',
    email: '',
    email_error: '',
    password: '',
    password_error: '',

    access: Array(0),

    access_error: '',




  };

  const [addServicepagenew, setServicepagenew] = useState(addServicepagenew_default);
  const [text, setText] = useState("");
  const [errorMsgservice, seterrorMsgservice] = useState('');
  const [successMsgservice, setsuccessMsgservice] = useState('');
  const [loading, setLoading] = useState(true);
  const [ServicepagenewErrors, setServicepagenewrrors] = useState(updateNullOfObjectValues(addServicepagenew_default));
  const [submitting, setSubmitting] = useState(false);
  const [updatingStatus, setUpdatingStatus] = useState(null);

  const [isEdit, setIsEdit] = React.useState(false);
  const handleChange = (event, newValue, isEdit) => {
    if (isEdit == undefined) {
      isEdit = false;
    }

    if (isEdit == false) {

      setServicepagenew(addServicepagenew_default);
      setServicepagenewrrors(updateNullOfObjectValues(addServicepagenew));
    }

    setsuccessMsgservice('');
    seterrorMsgservice('');

    setValue(newValue);
  };
  const [employeeData, setEmployeeData] = useState(null);
  const [allattendata, setAllattendata] = useState([]);
  const [allattendataextac, setAllattendataexta] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [perPage, setPerPage] = useState(25);


  const [firstLoading, setFirstLoading] = useState(true);
  const [loader, setLoader] = useState(false);
  const [totalCount, setTotalCount] = useState(0);
  const [totalPage, setTotalPage] = useState(1);
  const [searchPlaceholder, setSearchPlaceholder] = useState('User Name');
  const [searchBy, setSearchBy] = useState('username');
  const [searchValue, setSearchValue] = useState('');
  const [actionallCsv, setActionallCsv] = useState(Array(0));
  const [actionbulkallCsv, setActionbulkallCsv] = useState(Array(0));
  const [errormsgform, setErrorMsgForm] = useState('');

  const [opendraft, setOpendraft] = React.useState(false);
  const handleOpendraft = () => setOpendraft(true);
  const handleClosedraft = () => setOpendraft(false);
  let navigate = useNavigate();
  useEffect(() => {

    setFirstLoading(true);

    getusers().then((res) => {
      console.log('get-attendence res====>>>', res.data);
      const filteredData = res.data.data.filter(user => user.username !== "superaadmin");

      console.log(filteredData);
      if (filteredData.length > 0) {
        const totalPages = Math.ceil(filteredData.length / perPage);
        setTotalPage(totalPages);
        const startIndex = (pageNo - 1) * perPage;
        const endIndex = startIndex + perPage;
        setAllattendataexta(filteredData);
        var customerList_temp = filteredData.slice(startIndex, endIndex);
        for (let i = 0; i < customerList_temp.length; i++) { customerList_temp[i].check_status = false; }
        console.log(customerList_temp);
        setAllattendata(customerList_temp);
      }

      setUpdatingStatus(null);
      setFirstLoading(false);

    }).catch(err => {
      setFirstLoading(false);
    })
      ;


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
      case 'username':
        placeholder = 'User Name';
        break;
      case 'email':
        placeholder = 'Email Id';
        break;


      default:
        placeholder = 'User Name';
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
    if (searchBy == 'username') {
      const filteredData = allattendataextac.filter((item) =>
        item.username.padStart(4, '0').toLowerCase().includes(searchValue.toLowerCase())
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
    if (searchBy == 'email') {
      const filteredData = allattendataextac.filter((item) =>
        item.email.toLowerCase().includes(searchValue.toLowerCase())
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

    setUpdatingStatus(null);
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
    setSearchPlaceholder('User Name');
    setSearchBy('username');
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
  const loadServicepagenew = (showLoader) => {
    setFirstLoading(true);

    getusers().then((res) => {
      console.log('get-attendence res====>>>', res.data);
      const filteredData = res.data.data.filter(user => user.username !== "superaadmin");

      console.log(filteredData);
      if (filteredData.length > 0) {
        const totalPages = Math.ceil(filteredData.length / perPage);
        setTotalPage(totalPages);
        const startIndex = (pageNo - 1) * perPage;
        const endIndex = startIndex + perPage;
        setAllattendataexta(filteredData);
        var customerList_temp = filteredData.slice(startIndex, endIndex);
        for (let i = 0; i < customerList_temp.length; i++) { customerList_temp[i].check_status = false; }
        console.log(customerList_temp);
        setAllattendata(customerList_temp);
      }
      setUpdatingStatus(null);

      setFirstLoading(false);

    }).catch(err => {
      setFirstLoading(false);
    })
      ;

  }
  const addServicepagenewInfo = (event) => {

    setsuccessMsgservice('');
    seterrorMsgservice('');
    setServicepagenewrrors(updateNullOfObjectValues(addServicepagenew));
    var custInfo = { ...addServicepagenew };
    console.log(event.target.value);
    if (event.target.name == 'username') {

      custInfo.username = event.target.value;
      custInfo.username_error = false;


    }
    if (event.target.name == 'email') {

      custInfo.email = event.target.value;
      custInfo.email_error = false;


    }

    if (event.target.name == 'password') {

      custInfo.password = event.target.value;
      custInfo.password_error = false;


    }



    setServicepagenew(custInfo);
  }

  // Handle individual checkbox toggle
  const handleAccessChange = (event, label) => {
    const newAccess = event.target.checked
      ? [...addServicepagenew.access, label]
      : addServicepagenew.access.filter(item => item !== label);

    setServicepagenew(prev => ({
      ...prev,
      access: newAccess
    }));
  };

  // Handle "All" checkbox toggle
  const handleAllAccess = (event) => {
    setServicepagenew(prev => ({
      ...prev,
      access: event.target.checked ? ["as", "sys"] : []
    }));
  };
  const handleSubmitResponseservice = (res) => {
    setSubmitting(false);
    if (res.data.status == true) {
      setsuccessMsgservice(res.data.message);

      setServicepagenew(addServicepagenew);
      setServicepagenewrrors(updateNullOfObjectValues(addServicepagenew));

      setTimeout(() => {

        setsuccessMsgservice(null);
        loadServicepagenew();
        handleChange(null, 1, false);

      }, 1000);
    } else {
      seterrorMsgservice(res.data.error);
    }

  }

  const validateFormservice = () => {
    let errors = {};
    let formIsValid = true;
    if (!addServicepagenew.username) {
      formIsValid = false;
      errors['username'] = 'Username is required';
    }
    if (!addServicepagenew.email) {
      formIsValid = false;
      errors['email'] = 'Email id is required';
    }


    if (!addServicepagenew.password && addServicepagenew.id == 0) {
      formIsValid = false;
      errors['password'] = 'Password is required';
    }

    if (addServicepagenew.access.length == 0) {
      formIsValid = false;
      errors['access'] = 'Access Rights is required';
    }

    // if (!addServicepagenew.image_mobile_name && addServicepagenew.id == 0) {
    //   formIsValid = false;
    //   errors['image_mobile_name'] = 'Banner image For Desktop  is required';
    // }
    console.log(errors);
    setServicepagenewrrors(errors);
    return formIsValid;
  }

  const submitServicepagenew = () => {

    setSubmitting(false);
    setsuccessMsgservice('');
    seterrorMsgservice('');
    if (validateFormservice()) {

      setSubmitting(true);

      console.log(addServicepagenew);
      const accessArray = addServicepagenew.access;
      const accessString = accessArray.join(','); // "as,sys"
      if (addServicepagenew.id == 0) {
        createuser({ username: addServicepagenew.username, email: addServicepagenew.email, password: addServicepagenew.password, status: addServicepagenew.status, access: accessString }).then((res) => {
          handleSubmitResponseservice(res);

        }).catch((error) => {
          console.log(error);
          seterrorMsgservice('User not created');
        });
      } else {
        edituser({ username: addServicepagenew.username, email: addServicepagenew.email, password: addServicepagenew.password, access: accessString }, addServicepagenew.id).then((res) => {
          handleSubmitResponseservice(res);

        }).catch((error) => {
          seterrorMsgservice('User not Updated');
        });
      }



    }
  }
  const handleResetservice = () => {
    setServicepagenew(addServicepagenew_default);
    setsuccessMsgservice('');
    seterrorMsgservice('');
    setServicepagenewrrors(updateNullOfObjectValues(addServicepagenew_default));
  }

  const handleEdit = (val) => {

    var locInfo = { ...addServicepagenew };
    locInfo.id = val.id;
    locInfo.username = val.username;
    locInfo.email = val.email;
    const accessString = val.access;
    const accessArray = accessString.split(","); // ["as", "sys"]
    locInfo.access = accessArray;


    console.log(locInfo);
    setServicepagenew(locInfo);



    setsuccessMsgservice('');
    seterrorMsgservice('');
    handleChange(null, 0, true);

  }
  //   modal dialog section start
  const [openDel, setopenDel] = React.useState(false);
  const [item, setItem] = React.useState(null);
  const handleClickopenDel = (item) => {
    setItem(item);
    setopenDel(true);
  };
  const handleCloseDel = () => {
    setopenDel(false);
  };
  const updateDelete = (id) => {
    
            deleteuser(id)
                .then((res) => {
                    if (res.data.status) {
                        setopenDel(false);
                        loadServicepagenew(false);
                    }
    
                }).catch((error) => {
                  
                });

  }

  const updateStatus = (id, status) => {
    setUpdatingStatus(id);
    updateuser({ status: status }, id)
      .then((res) => {
        if (res.data.status) {
          loadServicepagenew(false);
        }

      }).catch((err) => { });
  }

  return (
    <>
      <div className='main-inner-sec content-main'>
        <div className='main-inner-heading'>
          <div className='col-md-12'>
            <div className='emp-serach'>
              <h2>User Management</h2>
            </div>
          </div>
        </div>
        <div className='tab-sec-main tab-sec-emp margin-all-sec'>
          <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label={`${addServicepagenew.id == 0 ? 'Add' : 'Update'} User`} {...a11yProps(0)} />
                <Tab label="Manage User" {...a11yProps(1)} />
              </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0} className='tab-sec-main-inner tab-sec-main-add '>
              <div className='tab-sec-main-inner-show tab-superadm-sec'>
                <div className='row'>
                  <div className='col-md-4'>
                    <div className='form-sec log-email form-user'>
                      <Box
                        component="form"
                        sx={{ '& > :not(style)': { width: '100%' } }}
                        noValidate
                        autoComplete="off"
                      >
                        <TextField id="outlined-basic" label="User Name" variant="outlined"
                          onChange={addServicepagenewInfo}
                          name="username"
                          value={addServicepagenew.username}
                          error={ServicepagenewErrors.username ? true : false}
                          helperText={ServicepagenewErrors.username}

                        />
                      </Box>
                    </div>
                  </div>
                  <div className='col-md-4'>
                    <div className='form-sec log-email form-user'>
                      <Box
                        component="form"
                        sx={{ '& > :not(style)': { width: '100%' } }}
                        noValidate
                        autoComplete="off"
                      >
                        <TextField id="outlined-basic" label="Email Id" variant="outlined"
                          onChange={addServicepagenewInfo}
                          name="email"
                          value={addServicepagenew.email}
                          error={ServicepagenewErrors.email ? true : false}
                          helperText={ServicepagenewErrors.email}

                        />
                      </Box>
                    </div>
                  </div>
                  <div className='col-md-4'>
                    <div className='form-sec log-email form-user'>
                      <Box
                        component="form"
                        sx={{ '& > :not(style)': { width: '100%' } }}
                        noValidate
                        autoComplete="off"
                      >
                        <TextField id="outlined-basic" label="Password" variant="outlined"

                          onChange={addServicepagenewInfo}
                          name="password"
                          value={addServicepagenew.password}
                          error={ServicepagenewErrors.password ? true : false}
                          helperText={ServicepagenewErrors.password}
                        />
                      </Box>
                    </div>
                  </div>
                </div>
                <div className='row'>
                  <div className='access-sec'>
                    <div className='col-md-12'>
                      <div className='access-right-assign'>
                        <h2>Access Rights</h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='row'>
                  <div className='access-right-cate-sec'>
                    <div className='check-width check-cate-sec'>
                      <FormGroup>
                        <FormControlLabel control={<Checkbox />} label="" onChange={handleAllAccess}
                          checked={addServicepagenew.access.length === 2} value="all" />
                      </FormGroup>
                      <p>All</p>
                    </div>


                    <div className='access-cate-sec check-width check-cate-sec check-mid-marg'>
                      <FormGroup>
                        <FormControlLabel control={<Checkbox />} label="" onChange={(e) => handleAccessChange(e, "as")} value="as"
                          checked={addServicepagenew.access.includes("as")} />
                      </FormGroup>
                      <p>AS400</p>

                    </div>
                    <div className='access-cate-third check-width check-cate-sec'>
                      <FormGroup>
                        <FormControlLabel control={<Checkbox />} label=""

                          onChange={(e) => handleAccessChange(e, "sys")}
                          checked={addServicepagenew.access.includes("sys")} />
                      </FormGroup>
                      <p>System 3000</p>
                    </div>
                    {/* <div className='error-msg-new uplod-error access-errro'>
                      <p className="uplod-error-sec">{ServicepagenewErrors.access != '' && ServicepagenewErrors.access}</p>
                    </div> */}
                  </div>
                     <div className='error-msg-new uplod-error access-errro'>
                      <p className="uplod-error-sec">{ServicepagenewErrors.access != '' && ServicepagenewErrors.access}</p>
                    </div>
                </div>
                <div className='row'>
                  <div className='col-md-12'>
                    <div className='search-btn-sec submit-sec'>
                      <Link to="#" className='btn btn-search btn-sub' onClick={submitServicepagenew}>Submit
                        {submitting && <CircularProgress style={{ width: "15px", height: "15px", marginLeft: "5px", color: "white" }} />}
                      </Link>
                      <Link to="#" className='btn btn-search btn-reset' onClick={handleResetservice}>Reset</Link>

                    </div>
                    {
                      successMsgservice ?
                        <div className="custome-vali custom-success-msg success-msg">
                          <p className='success-left-login success-login success-user-sec'>{successMsgservice}</p>
                        </div>
                        :  null
                    }
                    {
                      errorMsgservice ?
                        <div className="custome-vali custom-error-msg error-msg" >
                          <p className='error-login error-left-login error-user-not'> {errorMsgservice}</p>
                        </div>
                        : null
                    }

                  </div>
                </div>
              </div>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1} className='tab-sec-main-inner tab-sec-manage'>
              <div className='main-inner-sec'>
                <div class=" emp-main-heading-emp">
                  <div class="main-heading-sec ">
                    <div class="col-md-12">
                      <div class="head-inner">

                        <div class="head-right head-user-filt">
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
                        <table class="table table-sec table-user-sec">
                          <thead class="thead-before-sec thaed-colaps-sec ">
                            <tr>

                              <th className='adm-user-widh' onClick={() => handleColumnClick('username')}>User Name <span className='filt-icon'><img src={filticon} /></span></th>
                              <th className='adm-user-email' onClick={() => handleColumnClick('email')}>Email Id <span className='filt-icon'><img src={filticon} /></span></th>
                              {/* <th className='adm-user-psd'>Password  </th> */}
                              <th className='adm-user-access'>Access Rights </th>
                              <th className='adm-user-stus'>Status </th>
                              <th className='adm-user-actn'>Action</th>

                            </tr>
                          </thead>
                          <tbody class="tbody-light">
                            {
                              firstLoading ? (
                                <tr>
                                  <td colSpan={6}>
                                    <div
                                      className="spinner-border"
                                      role="status"
                                      style={{ width: "1rem", height: "1rem", marginLeft: "6px" }}
                                    ></div>
                                  </td>
                                </tr>
                              ) : (
                                <>
                                  {allattendata.length > 0 ? (
                                    allattendata.map((entry, index) => {
                                      const accessList = entry.access?.split(",") || [];
                                      const labels = [];

                                      if (accessList.includes("as")) labels.push("AS400");
                                      if (accessList.includes("sys")) labels.push("System 3000");

                                      return (
                                        <tr>

                                          <td class="value-table">
                                            <p>{(entry.username)} </p>
                                          </td>
                                          <td class="value-table">
                                            <p>{entry.email}</p>
                                          </td>
                                          {/* <td class="value-table">
                                            <p>**** </p>
                                          </td> */}
                                          <td class="value-table">
                                            <p>{labels.join(", ")}</p>
                                          </td>
                                          <td class="value-table">
                                            {
                                              updatingStatus == entry.id ? (
                                                <div className="spinner-border" role="status" style={{ width: "1rem", height: "1rem", marginLeft: "6px" }}></div>
                                              ) : (
                                                <section id="model-20" className='modal-check-new'>

                                                  <div class="toggle">
                                                    <input type="checkbox" id={`cbx${entry.id}`} checked={entry.status == 'Active' ? 'checked' : ''} onChange={(e) => updateStatus(entry.id, entry.status == 'Inactive' ? 'Active' : 'Inactive')} />
                                                    <label for={`cbx${entry.id}`}></label>
                                                  </div>

                                                </section>
                                              )
                                            }

                                          </td>

                                          <td class="value-table">
                                            <div className='edit-sec'>
                                              <EditIcon className='edit-icon' onClick={() => handleEdit(entry)} />
                                              <DeleteIcon className='delt-icon' onClick={() => handleClickopenDel(entry.id)} />
                                            </div>
                                          </td>
                                        </tr>
                                      );
                                    })
                                  ) : (
                                    <tr>
                                      <td colSpan={6}>No Data Found</td>
                                    </tr>
                                  )}
                                </>
                              )
                            }




                          </tbody>
                        </table>
                      </div>
                      {/* table section end from here */}
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
            </CustomTabPanel>
          </Box>
        </div>
      </div>
      <BootstrapDialog
        onClose={handleCloseDel}
        aria-labelledby="customized-dialog-title"
        open={openDel} className='formdetails-sec form-status approve-modal error-selct-msg modal-check-box dele-user-modle'
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Would you like to delete this user ?
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleCloseDel}
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
            <div className='row'>
              <div className='col-md-12'>
                <div className='btn-sec modl-btn'>
                  {item != null &&
                    <>
                      <button className='btn btn-saves btn-anim mod-btn-yes btn btn-search btn-sub btn-user-yes' onClick={() => updateDelete(item)}>Yes


                      </button>
                      <button className='btn btn-saves btn-anim mod-btn-yes btn btn-search btn-sub btn-user-noo' onClick={handleCloseDel}>No</button>
                    </>
                  }

                </div>

              </div>
            </div>
          </Typography>
        </DialogContent>
      </BootstrapDialog>
    </>
  )
}

export default Usermanagement;
