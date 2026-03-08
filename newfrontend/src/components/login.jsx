import React, { useContext, useState } from 'react';
import logo from '../assets/img/logo-white.png';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import EmailIcon from '@mui/icons-material/Email';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Link, useNavigate } from 'react-router-dom';


import { useDispatch } from "react-redux";
import { AppContext } from '../context';

import CircularProgress from '@mui/material/CircularProgress';
import axios from 'axios';
import secureLocalStorage from "react-secure-storage";
import { loginSuccess } from '../features/userdataSlice';
import { login, foegetpasword } from '../actions/admin.actions';
const Login = () => {

    const [isVisible, setIsVisible] = useState(true);

    const [user, setUser] = useState({ email: '', password: '' });
    const [successMsg, setSuccessMsg] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const [loader, setLoader] = useState(false);
    const [passwordVisible, setPasswordVisible] = useState(false);
    const { storage } = useContext(AppContext);
    const { dispatchStorageEvent } = useContext(AppContext);
    const [errorPassword, setErrorPassword] = useState(false);
    const [errorEmail, setErrorEmail] = useState(false);
    const [loginval, setloginval] = useState(0);

    const Axios = axios.create({
        baseURL: storage[0].nodeEndUrl
    });
    let navigate = useNavigate();
    const dispatch = useDispatch();

    const handleClick = () => {
        setPasswordVisible(true);
    }
    const handleHideClick = () => {
        setPasswordVisible(false);
    }
    const handleKeypress = (e) => {
        if (e.which === 13) {
            handleSubmit();
            e.preventDefault();
        }
    };

    const changeUserData = (e) => {
        setErrorPassword(false);
        setErrorEmail(false);
        setErrorMsg('');
        var user_temp = { ...user };
        if (e.target.name == 'password') user_temp.password = e.target.value;
        if (e.target.name == 'email') user_temp.email = e.target.value;
        setUser(user_temp);
    }

    const handleSubmit = (event) => {
        setErrorMsg('');
        setSuccessMsg('');
        setErrorPassword(false);
        setErrorEmail(false);

        if (user.email == '' || user.password == '') {
            if (user.password == '') { setErrorPassword(true); }
            if (user.email == '') { setErrorEmail(true); }
            return false;
        }

        setLoader(true);
        login({ email: user.email, password: user.password })
            .then(res => {
                console.log(res.data);
                if (res.data.status == true) {
                    dispatch(loginSuccess({ user: { email: user.email, password: user.password, token: res.data.token }, token: res.data.token }));
                    //storage[0].userdata = res.data.data.user;
                    //secureLocalStorage.setItem("admindata", JSON.stringify(res.data.data.user));
                    secureLocalStorage.setItem("token", res.data.token);
                      secureLocalStorage.setItem("user", res.data.data);
                    setLoader(false);
                    //dispatchStorageEvent(storage);
                    setSuccessMsg('Admin Login Successfully!');
                    const access = res.data.data.access; // "as,sys"
                    const accessArray = access.split(','); // ['as', 'sys']

                    if (accessArray.includes('as') || accessArray.includes('sys') ) {
                        if(accessArray.includes('as') ){
                            console.log("User has access to AS400");
                           secureLocalStorage.setItem("navtoken", "as400");
                        }else  if(accessArray.includes('sys')  ){
                              console.log("User has access to System3000");
                           secureLocalStorage.setItem("navtoken", "system30");
                        }

                       setTimeout(function () {
                        if (res.data.data.access)
                            navigate('/employee-search');
                    }, 1000);
                    }else{
                        setErrorMsg("User does not have access to the legacy system");
                    }
                    
                }
                else {
                    setloginval(0);
                    setErrorMsg("Invalid email or password");
                    setLoader(false);
                }
            }).catch((error) => {
                setLoader(false);
                setErrorMsg('Invalid credentials');
            });
        ;
    }
    const [isSignIn, setIsSignIn] = useState(0);
    //const [isSignUp, setisSignUp] = useState(true);

    const handleSignUpClick = () => {
        setIsSignIn(2);

    };

    const handleSignInClick = () => {
        setIsSignIn(1);
    };



    return (
        <>
            <div className="main-sec main-sec-logo">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="login-sec">
                                <div className="login-logo-sec">
                                    <img src={logo} alt="logo" />
                                    <h1>Legacy Data</h1>
                                </div>
                                {/* 
                        <div className='login-btn-sec'>
                            <button className='btn btn-nologin'>Continue Without Login</button>
                        </div> */}

                                <div className='login-details login-main-details'>
                                    <div className="col-md-12">
                                        <div className='form-sec form-logn margin-login log-email log-new-emp'>
                                            <Box
                                                component="form"
                                                sx={{ '& > :not(style)': { width: '100%' } }}
                                                noValidate
                                                autoComplete="off"
                                            >
                                                <TextField id="outlined-basic" label="Email" variant="outlined"
                                                    name="email"
                                                    value={user.email} onChange={changeUserData}
                                                    error={errorEmail}
                                                    helperText={errorEmail ? 'Please enter your email!' : ''}
                                                    onKeyPress={handleKeypress}

                                                />
                                                <span className='login-icon'><EmailIcon /></span>
                                            </Box>
                                        </div>
                                        <div className='form-sec form-logn margin-login log-emp'>
                                            <Box
                                                component="form"
                                                sx={{ '& > :not(style)': { width: '100%' } }}
                                                noValidate
                                                autoComplete="off"
                                            >
                                                <TextField id="outlined-basic" label="Password" variant="outlined"
                                                    type={passwordVisible ? 'text' : 'password'}
                                                    name="password"
                                                    value={user.password} onChange={changeUserData}
                                                    error={errorPassword}
                                                    helperText={errorPassword ? 'Please enter your password!' : ''}
                                                    onKeyPress={handleKeypress}

                                                />
                                                <span className='login-icon'><LockIcon /></span>
                                                {/*                                     
                                <div className='visi-sec'>
                                    <span className='login-eye' onClick={() => setPassword(!password)}><VisibilityIcon /></span>
                                    <span className=' login-eye-off' onClick={() => setPassword(!password)}><VisibilityOffIcon /></span>
                                </div> */}

                                                <span className='visi-sec' onClick={() => setPasswordVisible(!passwordVisible)}>
                                                    {passwordVisible ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                                </span>
                                            </Box>
                                        </div>


                                        {/* <div className='login-btn-sec logn-new'>
                                            <button className='btn btn-nologin btn-login' onClick={handleSubmit}>Login

                                                {
                                                    loader != '' ?
                                                        <CircularProgress style={{ width: "15px", height: "15px", marginLeft: "5px", color: "#ffffff", position: 'absolute', marginTop: '3px' }} />
                                                        : ''
                                                }</button>
                                            {
                                                loader != '' ? <div className="success-msg success-login success-new-msg">
                                                    <p className="success-msg success-login extrawidh-sec">Please wait while we get you access to the system</p>
                                                </div> : <div className="success-msg success-login success-new-msg">
                                                    <p className="success-msg success-login" style={{ visibility: 'hidden' }} >Please wait while we fetch your data</p>
                                                </div>
                                            }

                                            {
                                                errorMsg != '' ? <div className="error-msg error-login" >
                                                    <p className="error-msg error-login">{errorMsg}</p>
                                                </div> : <div className="error-msg error-login" style={{ visibility: 'hidden' }} >
                                                    <p className="error-msg error-login">Wrong credentials!</p>
                                                </div>
                                            }
                                            {
                                                successMsg != '' ? <div className="success-msg success-login">
                                                    <p className="success-msg success-login">{successMsg}</p>
                                                </div> : ''
                                            }
                                        </div> */}

                                        <div className='login-btn-sec logn-new'>
                                            <button className='btn btn-nologin btn-login' onClick={handleSubmit}>Login

                                                {
                                                    loader != '' ?
                                                        <CircularProgress style={{ width: "15px", height: "15px", marginLeft: "5px", color: "#ffffff", position: 'absolute', marginTop: '3px' }} />
                                                        : ''
                                                }</button>
                                            {/* {
                                                loader !=  <div className="success-msg success-login success-new-msg">
                                                <p className="success-msg success-login" style={{ visibility: 'hidden' }} >Please wait while we fetch your data</p>
                                            </div> ? <div className="success-msg success-login success-new-msg">
                                                    <p className="success-msg success-login extrawidh-sec">Please wait while we get you access to the system</p>
                                                </div> : <div className="success-msg success-login success-new-msg">
                                                    <p className="success-msg success-login" style={{ visibility: 'hidden' }} >Please wait while we fetch your data</p>
                                                </div>
                                            }

                                            {
                                                errorMsg != '' ? <div className="error-msg error-login" >
                                                    <p className="error-msg error-login">{errorMsg}</p>
                                                </div> : <div className="error-msg error-login" style={{ visibility: 'hidden' }} >
                                                    <p className="error-msg error-login">Wrong credentials!</p>
                                                </div>
                                            }
                                            {
                                                successMsg != '' ? <div className="success-msg success-login">
                                                    <p className="success-msg success-login">{successMsg}</p>
                                                </div> : ''
                                            } */}
                                        </div>

                                    </div>
                                </div>

                                {
                                    loader != '' ? <div className="success-msg success-login success-new-msg">
                                        <p className="success-msg success-login extrawidh-sec">Please wait while we get you access to the system</p>
                                    </div> : <div className="success-msg success-login success-new-msg">
                                        <p className="success-msg success-login" style={{ visibility: 'hidden' }} >Please wait while we fetch your data</p>
                                    </div>
                                }

                                {
                                    errorMsg != '' ? <div className="error-msg error-login" >
                                        <p className="error-msg error-login">{errorMsg}</p>
                                    </div> : <div className="error-msg error-login" style={{ visibility: 'hidden' }} >
                                        <p className="error-msg error-login">Wrong credentials!</p>
                                    </div>
                                }
                                {
                                    successMsg != '' ? <div className="success-msg success-login">
                                        <p className="success-msg success-login">{successMsg}</p>
                                    </div> : ''
                                }


                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;
