import React, { useState, useEffect } from 'react';
import Sidebar from './sidebar';
import Header from './header';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
import { Link, useNavigate } from "react-router-dom";
import secureLocalStorage from "react-secure-storage";
import { studentSearch, allStudents, studentDetails } from '../actions/admin.actions';

const StudentSearch = () => {
    const [allStudentsData, setAllStudentsData] = useState([]);
    const [studentNameSear, setStudentNameSear] = useState({ event: null, value: null });
    const [studentIdSear, setStudentIdSear] = useState('');
    const [formError, setFormError] = useState("");
    const [loader, setLoader] = useState(false);
    let navigate = useNavigate();

    useEffect(() => {
        allStudents().then((res) => {
            setAllStudentsData(res.data);
        }).catch(err => {
            console.error("Error fetching students:", err);
        });
    }, []);

    const handleChangeStudent = (e, newValue) => {
        setFormError("");
        if (newValue == "" || newValue == null) {
            setStudentNameSear({ event: null, value: null });
            return;
        }
        setStudentNameSear({ event: newValue, value: newValue.STUID });
    };

    const handleInputChange = (e) => {
        setFormError("");
        setStudentIdSear(e.target.value);
    };

    const handleSubmit = (e) => {
        setFormError("");
        if (studentNameSear.value == null && studentIdSear == "") {
            setFormError("Please enter student name or id");
            return;
        }

        const id = studentNameSear.value || studentIdSear;
        setLoader(true);

        studentDetails(id).then((res) => {
            setLoader(false);
            if (!res.data || !res.data.student) {
                setFormError("No student found");
                return;
            }
            secureLocalStorage.setItem("studentData", res.data);
            navigate("/studentdata");
        }).catch((error) => {
            setLoader(false);
            setFormError("Error occurred during search");
            console.error(error);
        });
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
                            <h2>Student Search</h2>
                        </div>
                    </div>
                </div>
                <div className='tab-sec-main tab-sec-emp margin-all-sec'>
                    <Box sx={{ width: '100%', p: 3, bgcolor: 'background.paper' }}>
                        <div className='tab-sec-main-inner-show'>
                            <div className='row'>
                                <div className='col-md-4'>
                                    <div className='form-sec form-logn emp-name-span form-autocomple-sec'>
                                        <Autocomplete
                                            options={allStudentsData || []}
                                            sx={{ width: 300 }}
                                            getOptionLabel={(option) => `${option.STUFNM || ''} ${option.STUSNM || ''} ( ${option.STUID || ''} )`.trim()}
                                            value={studentNameSear.event}
                                            renderInput={(params) => <TextField {...params} label="Student Full Name" />}
                                            onChange={(e, newValue) => { handleChangeStudent(e, newValue) }}
                                        />
                                    </div>
                                </div>
                                <div className='oir-sec'><p className='or-sec'>OR</p></div>
                                <div className='col-md-4'>
                                    <div className='form-sec log-email'>
                                        <Box component="form" sx={{ '& > :not(style)': { width: '100%' } }} noValidate autoComplete="off">
                                            <TextField 
                                                id="outlined-basic" 
                                                label="Student Id" 
                                                variant="outlined"
                                                value={studentIdSear}
                                                onChange={handleInputChange}
                                                onKeyPress={handleKeypress}
                                            />
                                        </Box>
                                    </div>
                                </div>
                                <div className='col-md-2'>
                                    <div className='search-btn-sec'>
                                        <Link to="#" onClick={handleSubmit} className='btn btn-search'>Search
                                            {loader && <CircularProgress style={{ width: "15px", height: "15px", marginLeft: "5px", color: "white" }} />}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-md-12'>
                                    <div className='form-sec-vali error-msg '>
                                        <p className='erro-vali-sec error-login emp-data-error'>{formError}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Box>
                </div>
            </div>
        </>
    );
};

export default StudentSearch;
