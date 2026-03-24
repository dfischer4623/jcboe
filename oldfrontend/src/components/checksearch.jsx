import React, { useContext, useState, useEffect } from 'react';
import Sidebar from './sidebar';
import Header from './header';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import {
    Link, useNavigate
} from "react-router-dom";
import { useSelector } from 'react-redux';
import { updateNullOfObjectValues } from '../helpers/helper';
import { checkbankSearch } from '../actions/admin.actions';
import secureLocalStorage from "react-secure-storage";
import { AppContext } from '../context';



const Checksearch = () => {
    const [value, setValue] = React.useState(0);
    const [allemployeesn, setAllemployee] = useState([]);
    const [empnanesear, setEmpnanesear] = React.useState({ event: null, value: null });
    const [empnumsear, setEmpnumsear] = React.useState({ aphbnk: '', aphbac: '', aphfrm: '', aphchk: '', aphven: '' });
    const [EmpnumsearErrors, setEmpnumsearerrrors] = useState(updateNullOfObjectValues({ aphbnk: '', aphbac: '', aphfrm: '', aphchk: '', aphven: '' }));
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


    const handleInputChange = (e) => {
        setFormerror("");
        setEmpnumsearerrrors(updateNullOfObjectValues({ aphbnk: '', aphbac: '', aphfrm: '', aphchk: '', aphven: '' }));
        var custInfo = { ...empnumsear };
        const { name, value } = e.target;

        setEmpnumsear((prev) => ({
            ...prev,
            [name]: value
        }));



    };
    useEffect(() => {
        secureLocalStorage.removeItem('bankDetailsData');
        secureLocalStorage.removeItem('bankbasicData');



    }, []);
    const handleSubmit = (e) => {
        setFormerror("");
        setLoader(false);
        if (validateForm()) {
            setLoader(true);
            checkbankSearch(empnumsear.aphbnk, empnumsear.aphbac, empnumsear.aphfrm, empnumsear.aphchk, empnumsear.aphven).then((res) => {
                console.log('add-user res=====>>>>', res.data);
                if (res.data == '' || res.data == null) {
                    setLoader(false);
                    setFormerror("No Check Number found");
                    return;
                } else {
                    setLoader(false);
                    secureLocalStorage.setItem("bankDetailsData", res.data);
                    secureLocalStorage.setItem("bankbasicData", empnumsear);
                    setEmpnumsear({ aphbnk: '', aphbac: '', aphfrm: '', aphchk: '', aphven: '' });

                    setFormerror("");
                    navigate("/checksearchlist");
                }

            }).catch((error) => {
                setLoader(false);
                console.log('error occurs while registring the user', error);
            });
        }

    };
    const validateForm = () => {
        let errors = {};
        let formIsValid = true;
        if (!empnumsear.aphbnk) {
            formIsValid = false;
            errors['aphbnk'] = 'Bank is required';
        }
        if (!empnumsear.aphbac) {
            formIsValid = false;
            errors['aphbac'] = 'Bank Account is required';
        }

        if (!empnumsear.aphfrm) {
            formIsValid = false;
            errors['aphfrm'] = 'From is required';
        }
        if (!empnumsear.aphchk) {
            formIsValid = false;
            errors['aphchk'] = 'Check Number is required';
        }
        if (!empnumsear.aphven) {
            formIsValid = false;
            errors['aphven'] = 'Vendor Number is required';
        }


        console.log(errors);
        setEmpnumsearerrrors(errors);
        return formIsValid;
    }
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
                <div className='main-inner-heading main-all-marg'>
                    <div className='col-md-12'>
                        <div className='emp-serach'>
                            <h2>Check Search</h2>
                        </div>
                    </div>
                </div>
                <div className='tab-sec-main tab-sec-emp margin-all-sec'>

                    <div className='tab-sec-main-inner-show backg-shaw-main backg-shaw-botm'>
                        <div className='row'>
                            <div className='col-md-3'>
                                <div className='form-sec emp-name-span-bank form-autocomple-sec vali-secs'>
                                    <Box
                                        component="form"
                                        sx={{ '& > :not(style)': { width: '100%' } }}
                                        noValidate
                                        autoComplete="off"
                                    >
                                        <TextField id="outlined-basic" label="Bank" variant="outlined"
                                            onChange={handleInputChange}
                                            name="aphbnk"
                                            value={empnumsear.aphbnk}
                                            error={EmpnumsearErrors.aphbnk ? true : false}
                                            helperText={EmpnumsearErrors.aphbnk}
                                            onKeyPress={handleKeypress} />
                                    </Box>
                                </div>
                            </div>

                            <div className='col-md-3'>
                                <div className='form-sec log-email vali-secs'>
                                    <Box
                                        component="form"
                                        sx={{ '& > :not(style)': { width: '100%' } }}
                                        noValidate
                                        autoComplete="off"
                                    >
                                        <TextField id="outlined-basic" label="Bank Account" variant="outlined"
                                            onChange={handleInputChange}
                                            name="aphbac"
                                            value={empnumsear.aphbac}
                                            error={EmpnumsearErrors.aphbac ? true : false}
                                            helperText={EmpnumsearErrors.aphbac}
                                            onKeyPress={handleKeypress}
                                        />
                                    </Box>
                                </div>
                            </div>
                            <div className='col-md-3'>
                                <div className='form-sec vali-secs'>
                                    <Box
                                        component="form"
                                        sx={{ '& > :not(style)': { width: '100%' } }}
                                        noValidate
                                        autoComplete="off"
                                    >
                                        <TextField id="outlined-basic" label="Form" variant="outlined"
                                            onChange={handleInputChange}
                                            name="aphfrm"
                                            value={empnumsear.aphfrm}
                                            error={EmpnumsearErrors.aphfrm ? true : false}
                                            helperText={EmpnumsearErrors.aphfrm}
                                            onKeyPress={handleKeypress}

                                        />
                                    </Box>
                                </div>
                            </div>
                            <div className='col-md-3'>
                                <div className='form-sec log-email vali-secs'>
                                    <Box
                                        component="form"
                                        sx={{ '& > :not(style)': { width: '100%' } }}
                                        noValidate
                                        autoComplete="off"
                                    >
                                        <TextField id="outlined-basic" label="Check Number" variant="outlined"

                                            onChange={handleInputChange}
                                            name="aphchk"
                                            value={empnumsear.aphchk}
                                            error={EmpnumsearErrors.aphchk ? true : false}
                                            helperText={EmpnumsearErrors.aphchk}
                                            onKeyPress={handleKeypress}
                                        />
                                    </Box>
                                </div>
                            </div>
                            {/* <div className='col-md-2'>
                                    <div className='search-btn-sec'>
                                        <Link to="/vendorsearchlist" className='btn btn-search'>Search
                                        
                                        </Link>

                                    </div>
                                </div> */}
                        </div>

                        <div className='row row-left'>
                            <div className='col-md-3'>
                                <div className='form-sec log-email vali-secs'>
                                    <Box
                                        component="form"
                                        sx={{ '& > :not(style)': { width: '100%' } }}
                                        noValidate
                                        autoComplete="off"
                                    >
                                        <TextField id="outlined-basic" label="Vendor Number" variant="outlined"
                                            onChange={handleInputChange}
                                            name="aphven"
                                            value={empnumsear.aphven}
                                            error={EmpnumsearErrors.aphven ? true : false}
                                            helperText={EmpnumsearErrors.aphven}
                                            onKeyPress={handleKeypress}

                                        />
                                    </Box>
                                </div>
                            </div>
                        </div>

                        <div className='row'>

                            <div className='col-md-12'>
                                <div className='search-btn-sec search-btn-left'>
                                    <Link to="#" onClick={handleSubmit} className='btn btn-search'>Search
                                        {
                                            loader != '' ?
                                                <CircularProgress style={{ width: "15px", height: "15px", marginLeft: "5px", color: "white" }} />
                                                : ''
                                        }
                                    </Link>
                                    <div className='form-sec-vali error-msg'>
                                        <p className='erro-vali-sec error-login emp-data-error check-error'>{formerror}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='row'>
                        <div className='col-md-12'>
                            <div className='mandt-sec-new '>
                                <p className=' mandtor-login-sec'>All fields are mandatory</p>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Checksearch;
