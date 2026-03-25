import React, { useState, useEffect } from 'react';
import Sidebar from './sidebar';
import Header from './header';
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    Box,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import secureLocalStorage from "react-secure-storage";
import { useNavigate } from "react-router-dom";

const StudentData = () => {
    const [expandedPanels, setExpandedPanels] = useState({
        panel1: true,
        panel2: true,
        panel3: true,
        panel4: true,
        panel5: false,
        panel6: false,
    });
    const [studentData, setStudentData] = useState(null);
    let navigate = useNavigate();

    useEffect(() => {
        const data = secureLocalStorage.getItem('studentData');
        if (!data) {
            navigate(`/student-search`);
        } else {
            setStudentData(data);
        }
    }, []);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpandedPanels((prev) => ({
            ...prev,
            [panel]: isExpanded,
        }));
    };

    if (!studentData) return null;

    const { student, registration, family, school, attendance, grades } = studentData;

    return (
        <>
            <Header />
            <Sidebar />
            <div className='main-inner-sec content-main'>
                <div className='main-inner-heading'>
                    <div className='col-md-12'>
                        <div className='emp-main-serach'>
                            <div className='emp-serach emp-data-head'>
                                <h2>{student.STUFNM} {student.STUMNM} {student.STUSNM}</h2>
                                <h3>Student Id:- <span> {student.STUID}</span></h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="emp-data-inner margin-all-sec accordion-margin">
                    <div className='row'>
                        <div className='col-md-12'>
                            <div className='emp-data-sec form-accor-sec'>
                                {/* Personal Information */}
                                <Accordion expanded={expandedPanels.panel1} onChange={handleChange('panel1')}>
                                    <AccordionSummary expandIcon={expandedPanels.panel1 ? <RemoveIcon /> : <AddIcon />}>
                                        <Typography component="span">Personal Information</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Box sx={{ p: 2 }}>
                                            <div className='row'>
                                                <div className='col-md-6'>
                                                    <p><strong>First Name:</strong> {student.STUFNM}</p>
                                                    <p><strong>Middle Name:</strong> {student.STUMNM}</p>
                                                    <p><strong>Surname:</strong> {student.STUSNM}</p>
                                                    <p><strong>Gender:</strong> {student.STUSEX}</p>
                                                </div>
                                                <div className='col-md-6'>
                                                    <p><strong>Birth Date:</strong> {student.STUBDT}</p>
                                                    <p><strong>Social Security:</strong> {student.STUSOC}</p>
                                                    <p><strong>Phone:</strong> ({student.STUAR}) {student.STUPN}</p>
                                                </div>
                                            </div>
                                        </Box>
                                    </AccordionDetails>
                                </Accordion>

                                {/* Registration Info */}
                                <Accordion expanded={expandedPanels.panel2} onChange={handleChange('panel2')}>
                                    <AccordionSummary expandIcon={expandedPanels.panel2 ? <RemoveIcon /> : <AddIcon />}>
                                        <Typography component="span">Registration Details</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <TableContainer component={Paper}>
                                            <Table size="small">
                                                <TableHead>
                                                    <TableRow>
                                                        <TableCell>School</TableCell>
                                                        <TableCell>Year</TableCell>
                                                        <TableCell>Room</TableCell>
                                                        <TableCell>Teacher</TableCell>
                                                        <TableCell>Location</TableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    {registration && registration.map((reg, index) => (
                                                        <TableRow key={index}>
                                                            <TableCell>{reg.RGNSCH}</TableCell>
                                                            <TableCell>{reg.RGNYR}</TableCell>
                                                            <TableCell>{reg.RGNROM}</TableCell>
                                                            <TableCell>{reg.RGNTCH}</TableCell>
                                                            <TableCell>{reg.RGNLOC}</TableCell>
                                                        </TableRow>
                                                    ))}
                                                </TableBody>
                                            </Table>
                                        </TableContainer>
                                    </AccordionDetails>
                                </Accordion>

                                {/* Family Info */}
                                <Accordion expanded={expandedPanels.panel3} onChange={handleChange('panel3')}>
                                    <AccordionSummary expandIcon={expandedPanels.panel3 ? <RemoveIcon /> : <AddIcon />}>
                                        <Typography component="span">Family Information</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        {family ? (
                                            <Box sx={{ p: 2 }}>
                                                <div className='row'>
                                                    <div className='col-md-6'>
                                                        <p><strong>Guardian 1:</strong> {family.FAMGF1} {family.FAMGS1}</p>
                                                        <p><strong>Guardian 2:</strong> {family.FAMGF2} {family.FAMGS2}</p>
                                                        <p><strong>Address:</strong> {family.FAMCTC}, {family.FAMCTY}, {family.FAMST} {family.FAMZIP}</p>
                                                    </div>
                                                    <div className='col-md-6'>
                                                        <p><strong>Main Phone:</strong> ({family.FAMARA}) {family.FAMPHN}</p>
                                                        <p><strong>Email 1:</strong> {family.FAMEM1}</p>
                                                        <p><strong>Email 2:</strong> {family.FAMEM2}</p>
                                                    </div>
                                                </div>
                                            </Box>
                                        ) : <p>No family information found.</p>}
                                    </AccordionDetails>
                                </Accordion>

                                {/* Attendance Info */}
                                <Accordion expanded={expandedPanels.panel5} onChange={handleChange('panel5')}>
                                    <AccordionSummary expandIcon={expandedPanels.panel5 ? <RemoveIcon /> : <AddIcon />}>
                                        <Typography component="span">Attendance History</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <TableContainer component={Paper}>
                                            <Table size="small">
                                                <TableHead>
                                                    <TableRow>
                                                        <TableCell>Date</TableCell>
                                                        <TableCell>Reason</TableCell>
                                                        <TableCell>School</TableCell>
                                                        <TableCell>Period Data</TableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    {attendance && attendance.length > 0 ? attendance.map((att, index) => (
                                                        <TableRow key={index}>
                                                            <TableCell>{att.ABSCDT}</TableCell>
                                                            <TableCell>{att.ABSREA}</TableCell>
                                                            <TableCell>{att.ABSSCH}</TableCell>
                                                            <TableCell>{att.ABSPER}</TableCell>
                                                        </TableRow>
                                                    )) : (
                                                        <TableRow>
                                                            <TableCell colSpan={4} align="center">No attendance records found</TableCell>
                                                        </TableRow>
                                                    )}
                                                </TableBody>
                                            </Table>
                                        </TableContainer>
                                    </AccordionDetails>
                                </Accordion>

                                {/* Grades Info */}
                                <Accordion expanded={expandedPanels.panel6} onChange={handleChange('panel6')}>
                                    <AccordionSummary expandIcon={expandedPanels.panel6 ? <RemoveIcon /> : <AddIcon />}>
                                        <Typography component="span">Grades / Transcript</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <TableContainer component={Paper}>
                                            <Table size="small">
                                                <TableHead>
                                                    <TableRow>
                                                        <TableCell>Year</TableCell>
                                                        <TableCell>Term</TableCell>
                                                        <TableCell>Subject</TableCell>
                                                        <TableCell>Grade</TableCell>
                                                        <TableCell>School</TableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    {grades && grades.length > 0 ? grades.map((grd, index) => (
                                                        <TableRow key={index}>
                                                            <TableCell>{grd.TRNYR}</TableCell>
                                                            <TableCell>{grd.TRNTRM}</TableCell>
                                                            <TableCell>{grd.TRNSUB}</TableCell>
                                                            <TableCell>{grd.TRNGRD}</TableCell>
                                                            <TableCell>{grd.TRNSCH}</TableCell>
                                                        </TableRow>
                                                    )) : (
                                                        <TableRow>
                                                            <TableCell colSpan={5} align="center">No grade records found</TableCell>
                                                        </TableRow>
                                                    )}
                                                </TableBody>
                                            </Table>
                                        </TableContainer>
                                    </AccordionDetails>
                                </Accordion>

                                {/* School Info */}
                                <Accordion expanded={expandedPanels.panel4} onChange={handleChange('panel4')}>
                                    <AccordionSummary expandIcon={expandedPanels.panel4 ? <RemoveIcon /> : <AddIcon />}>
                                        <Typography component="span">School Contact Information</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        {school ? (
                                            <Box sx={{ p: 2 }}>
                                                <div className='row'>
                                                    <div className='col-md-6'>
                                                        <p><strong>School Name:</strong> {school.SCHNAM}</p>
                                                        <p><strong>Title:</strong> {school.SCHTTL}</p>
                                                        <p><strong>Address:</strong> {school.SCHAD1} {school.SCHAD2}</p>
                                                    </div>
                                                    <div className='col-md-6'>
                                                        <p><strong>City/State/Zip:</strong> {school.SCHCTY}, {school.SCHST} {school.SCHZIP}</p>
                                                        <p><strong>Principal:</strong> {school.SCHPRI}</p>
                                                        <p><strong>Phone:</strong> ({school.SCHARA}) {school.SCHPHN}</p>
                                                    </div>
                                                </div>
                                            </Box>
                                        ) : <p>No school information found.</p>}
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default StudentData;
