import React, { useContext, useState, useEffect } from 'react';
import Sidebar from './sidebar';
import Header from './header';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TextField from '@mui/material/TextField';

import Autocomplete from '@mui/material/Autocomplete';


import CircularProgress from '@mui/material/CircularProgress';
import {
    Link, useNavigate
} from "react-router-dom";
import { useSelector } from 'react-redux';
import { updateNullOfObjectValues } from '../helpers/helper';
import { employeessear, allemployee } from '../actions/admin.actions';
import secureLocalStorage from "react-secure-storage";
import { AppContext } from '../context';
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

const EmployeeSearch = () => {
    const [value, setValue] = React.useState(0);
    const [allemployeesn, setAllemployee] = useState([]);
    const [empnanesear, setEmpnanesear] = React.useState({ event: null, value: null });
    const [empnumsear, setEmpnumsear] = React.useState('');
    const [formerror, setFormerror] = useState("");
    const [empiderror, setEmpiderror] = useState("");
    const [loader, setLoader] = useState(false);
    let navigate = useNavigate();
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const employeename = [
        { label: 'John test' },
        { label: 'John Smith' },
    ];
    useEffect(() => {




        allemployee().then((res) => {
            console.log('get-employee res====>>>', res.data);

            setAllemployee(res.data);

        });

    }, []);

    const handleChangeLocation = (e, newValue) => {
        setFormerror("");
        console.log('newValue====>>>>>', newValue);
        if (newValue == "" || newValue == null) {

            setEmpnanesear({ event: null, value: null });
            return;
        }
        const homeLocaton = newValue.id;
        // setSingleUser({ ...singleUser, home_location: homeLocaton });
        setEmpnanesear({ event: newValue, value: newValue.EMSSAN });


    };
    const handleInputChange = (e) => {
        setFormerror("");

        if(!isNaN(parseInt(e.target.value)) && parseInt(e.target.value) > 0){
            setEmpnumsear(parseInt(e.target.value))
        } else{
            setEmpnumsear('');
        }   
       


    };
    const handleSubmit = (e) => {
        setFormerror("");
        setLoader(false);
        if (empnanesear.value == null && empnumsear == "") {
            setFormerror("Please enter employee name or id");
            return;
        } else {
            var empid = empnanesear.value == null ? empnumsear : empnanesear.value;

            setLoader(true);
            employeessear(empid).then((res) => {
                console.log('add-user res=====>>>>', res.data);
                if (res.data == '' || res.data == null) {
                    setLoader(false);
                    setFormerror("No employee found");
                    return;
                } else {
                    setLoader(false);
                    secureLocalStorage.setItem("employeeData", res.data);
                    setEmpnanesear({ event: null, value: null });
                    setEmpnumsear('');
                    setFormerror("");
                    navigate("/employeedata");
                }

            }).catch((error) => {
                setLoader(false);
                console.log('error occurs while registring the user', error);
            });
        }



    };
    const handleKeypress = (e) => {
        if (e.which === 13) {
            handleSubmit();
            e.preventDefault();
        }
    };
    return (
        <>
            <Header />
            <Sidebar />

            <div className='main-inner-sec content-main'>
                <div className='main-inner-heading'>
                    <div className='col-md-12'>
                        <div className='emp-serach'>
                            <h2>Employee Search</h2>
                        </div>
                    </div>
                </div>
                <div className='tab-sec-main tab-sec-emp margin-all-sec'>
                    <Box sx={{ width: '100%' }}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                <Tab label="AS400" {...a11yProps(0)} />
                                <Tab label="System 3000" {...a11yProps(1)} />
                            </Tabs>
                        </Box>
                        <CustomTabPanel value={value} index={0} className='tab-sec-main-inner'>

                            <div className='tab-sec-main-inner-show'>
                                <div className='row'>
                                    <div className='col-md-4'>
                                        <div className='form-sec form-logn  emp-name-span form-autocomple-sec'>
                                            <Autocomplete

                                                options={allemployeesn || []}
                                                sx={{ width: 300 }}

                                                // options={allemployeesn}
                                                getOptionLabel={(option) => `${option.EMFNAM || ''} ${option.EMMNAM || ''} ${option.EMLNAM || ''} ( ${option.EMSSAN || ''} )`.trim()}
                                                value={empnanesear.event}
                                                renderInput={(params) => <TextField {...params} label="Employee Full Name" />}

                                                // value={location.find((loc) => loc.id === singleUser?.get_location?.id) || null}
                                                onChange={(e, newValue) => { handleChangeLocation(e, newValue) }}


                                            />
                                        </div>
                                    </div>
                                    <div className='oir-sec'><p className='or-sec'>OR</p></div>
                                    <div className='col-md-4'>
                                        <div className='form-sec log-email'>
                                            <Box
                                                component="form"
                                                sx={{ '& > :not(style)': { width: '100%' } }}
                                                noValidate
                                                autoComplete="off"
                                            >
                                                <TextField id="outlined-basic" label="Employee Id" variant="outlined"

                                                    value={empnumsear}

                                                    onChange={(e) => { handleInputChange(e) }} 
                                                    onKeyPress={handleKeypress}
                                                    />
                                            </Box>
                                        </div>
                                    </div>
                                    <div className='col-md-2'>
                                        <div className='search-btn-sec'>
                                            <Link to="#" onClick={handleSubmit} className='btn btn-search'>Search
                                                {
                                                    loader != '' ?
                                                        <CircularProgress style={{ width: "15px", height: "15px", marginLeft: "5px", color: "white" }} />
                                                        : ''
                                                }
                                            </Link>
                                            {/* <div className='form-sec-vali'>
                                                <p className='erro-vali-sec'>{formerror}</p>
                                            </div> */}

                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-md-12'>
                                    <div className='form-sec-vali error-msg '>
                                                <p className='erro-vali-sec error-login emp-data-error'>{formerror}</p>
                                            </div>
                                    </div>
                                </div>
                            </div>

                        </CustomTabPanel>
                             <CustomTabPanel value={value} index={1} className='tab-sec-main-inner'>
                                  <div className='tab-sec-main-inner-show'>
                                          <div className='row'>
                                              <div className='col-md-4'>
                                                  <div className='form-sec form-logn  emp-name-span form-autocomple-sec'>
                                                           <Autocomplete
                                                                                     
                                                              options={employeename}
                                                              sx={{ width: 300 }}
                                                              renderInput={(params) => <TextField {...params} label="Employee Full Name" />}
                                                          />
                                                      </div>
                                              </div>
                                              <div className='oir-sec'><p className='or-sec'>OR</p></div>
                                              <div className='col-md-4'>
                                              <div className='form-sec form-logn log-email'>
                                                      <Box
                                                          component="form"
                                                          sx={{ '& > :not(style)': { width: '100%' } }}
                                                          noValidate
                                                          autoComplete="off"
                                                          >
                                                          <TextField id="outlined-basic" label="Employee Id" variant="outlined" />
                                                      </Box>
                                                  </div>
                                              </div>
                                              <div className='col-md-2'>
                                                  <div className='search-btn-sec'>
                                                      <Link to="/employeedata" className='btn btn-search'>Search</Link> 
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </CustomTabPanel>
                    </Box>
                </div>
            </div>
        </>
    )
}

export default EmployeeSearch;
