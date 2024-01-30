import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './home';
import Login from './login';
import Main from './main';
import EmployeeSearch from './employeeSearch';
import EmployeeName from './employeeName';
import ShowEmployee from './showEmployee';
import ShowAttendance from './showAttendance';
import ShowAttendanceDetail from './showAttendanceDetail';
import MiscData from './miscData';
import Certificates from './certificates';
import Assignments from './assignments';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [email, setEmail] = useState("")
  const [employeeNumber, setEmployeeNumber] = useState("")
  const [employeeName, setEmployeeName] = useState("")
  const [ed, setEmployeeData] = useState(null)
  const [es, setEmployeeNames] = useState(null)
  const [ad, setAttendanceData] = useState(null)
  const [empName, setEmpName] = useState("")
  const [adl, setAttendanceDataDetail] = useState(null)
  const [adid, setAttendanceDataID] = useState(null)
  const [md, setMiscData] = useState(null)
  const [cd, setCertificates] = useState(null)
  const [ac, setAssignments] = useState(null)

  useEffect(() => {
    // Fetch the user email and token from local storage
    const user = JSON.parse(localStorage.getItem("user"))

    // If the token/email does not exist, mark the user as logged out
    if (!user || !user.token) {
      setLoggedIn(false)
      return
    }

    // If the token exists, verify it with the auth server to see if it is valid
    fetch("http://localhost:3080/verify", {
      method: "POST",
      headers: {
        'jwt-token': user.token
      }
    })
      .then(r => r.json())
      .then(r => {
        setLoggedIn('success' === r.message)
        setEmail(user.email || "")
      })
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home email={email} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
          <Route path="/login" element={<Login setLoggedIn={setLoggedIn} setEmail={setEmail} />} />
          <Route path="/main" element={<Main loggedIn={loggedIn} email={email} setLoggedIn={setLoggedIn} setEmail={setEmail} />} />
          <Route path="/employeeSearch" element={<EmployeeSearch loggedIn={loggedIn} email={email} employeeName={employeeName} employeeNumber={employeeNumber} setLoggedIn={setLoggedIn} setEmail={setEmail} ed={ed} setEmployeeNumber={setEmployeeNumber} setEmployeeName={setEmployeeName} setEmployeeData={setEmployeeData} setEmployeeNames={setEmployeeNames} />} />
          <Route path="/employeeName" element={<EmployeeName loggedIn={loggedIn} email={email} employeeNumber={employeeNumber} employeeName={employeeName} setLoggedIn={setLoggedIn} setEmail={setEmail} es={es} setEmployeeNames={setEmployeeNames} setEmployeeNumber={setEmployeeNumber} />} />
          <Route path="/showEmployee" element={<ShowEmployee loggedIn={loggedIn} email={email} employeeNumber={employeeNumber} setLoggedIn={setLoggedIn} setEmail={setEmail} setEmployeeNumber={setEmployeeNumber} ed={ed} setEmployeeData={setEmployeeData} setEmpName={setEmpName} />} />
          <Route path="/showAttendance" element={<ShowAttendance loggedIn={loggedIn} email={email} employeeNumber={employeeNumber} setLoggedIn={setLoggedIn} setEmail={setEmail} setEmployeeNumber={setEmployeeNumber} ad={ad} setAttendanceData={setAttendanceData} empName={empName} adid={adid} setAttendanceDataID={setAttendanceDataID} />} />
          <Route path="/miscData" element={<MiscData loggedIn={loggedIn} email={email} employeeNumber={employeeNumber} setLoggedIn={setLoggedIn} setEmail={setEmail} setEmployeeNumber={setEmployeeNumber} ad={ad} setAttendanceData={setAttendanceData} empName={empName} md={md} setMiscData={setMiscData} />} />
          <Route path="/certificates" element={<Certificates loggedIn={loggedIn} email={email} employeeNumber={employeeNumber} setLoggedIn={setLoggedIn} setEmail={setEmail} setEmployeeNumber={setEmployeeNumber} ad={ad} setAttendanceData={setAttendanceData} empName={empName} cd={cd} setCertificates={setCertificates} />} />
          <Route path="/showAttendanceDetail" element={<ShowAttendanceDetail loggedIn={loggedIn} email={email} employeeNumber={employeeNumber} setLoggedIn={setLoggedIn} setEmail={setEmail} setEmployeeNumber={setEmployeeNumber} ad={ad} setAttendanceData={setAttendanceData} empName={empName} adl={adl} setAttendanceDataDetail={setAttendanceDataDetail} adid={adid} />} />      
          <Route path="/assignments" element={<Assignments loggedIn={loggedIn} email={email} employeeNumber={employeeNumber} setLoggedIn={setLoggedIn} setEmail={setEmail} setEmployeeNumber={setEmployeeNumber} ad={ad} setAttendanceData={setAttendanceData} empName={empName} ac={ac} setAssignments={setAssignments} />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
