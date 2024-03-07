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
import Salaries from './salaries';
import ShowVolDeductions from './showVolDeductions';
import ShowPayroll from './showPayroll';
import ShowPayrollCheck from './showPayrollCheck';
import Tags from './tags';
import PayrollTables from './payrollTables';
import AbsenceLeaveCodes from './absenceLeaveCodes';
import DeductionsContritbutionsCodes from './deductionsContributionsCodes';
import PayTableCodes from './payTableCodes';
import JobCodes from './jobCodes';
import AddendaCodes from './addendaCodes';

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
  const [md, setMiscData] = useState(null)
  const [cd, setCertificates] = useState(null)
  const [sd, setSalaries] = useState(null)
  const [vd, setVolDeductions] = useState(null)
  const [td, setTags] = useState(null)
  const [pd, setPayrollData] = useState(null)
  const [pcd, setPayrollCheckData] = useState(null)
  const [pcddd, setPayrollDeductionData] = useState(null)
  const [cid, setCheckID] = useState(null)
  const [alc, setAbsenceLeaveCodes] = useState(null)
  const [dcc, setDeductionsContributionsCodes] = useState(null)
  const [ptc, setPayTableCodes] = useState(null)
  const [jcc, setJobCodes] = useState(null)
  const [acc, setAddendaCodes] = useState(null)

  useEffect(() => {
    // Fetch the user email and token from local storage
    const user = JSON.parse(localStorage.getItem("user"))

    // If the token/email does not exist, mark the user as logged out
    if (!user || !user.token) {
      setLoggedIn(false)
      return
    }

    // If the token exists, verify it with the auth server to see if it is valid
    fetch("http://10.0.1.142:3080/verify", {
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
          <Route path="/showAttendance" element={<ShowAttendance loggedIn={loggedIn} email={email} employeeNumber={employeeNumber} setLoggedIn={setLoggedIn} setEmail={setEmail} setEmployeeNumber={setEmployeeNumber} ad={ad} setAttendanceData={setAttendanceData} empName={empName} />} />
          <Route path="/miscData" element={<MiscData loggedIn={loggedIn} email={email} employeeNumber={employeeNumber} setLoggedIn={setLoggedIn} setEmail={setEmail} setEmployeeNumber={setEmployeeNumber} ad={ad} setAttendanceData={setAttendanceData} empName={empName} md={md} setMiscData={setMiscData} />} />
          <Route path="/certificates" element={<Certificates loggedIn={loggedIn} email={email} employeeNumber={employeeNumber} setLoggedIn={setLoggedIn} setEmail={setEmail} setEmployeeNumber={setEmployeeNumber} ad={ad} setAttendanceData={setAttendanceData} empName={empName} cd={cd} setCertificates={setCertificates} />} />
          <Route path="/showAttendanceDetail" element={<ShowAttendanceDetail loggedIn={loggedIn} email={email} employeeNumber={employeeNumber} setLoggedIn={setLoggedIn} setEmail={setEmail} setEmployeeNumber={setEmployeeNumber} ad={ad} setAttendanceData={setAttendanceData} empName={empName} adl={adl} setAttendanceDataDetail={setAttendanceDataDetail} />} />      
          <Route path="/salaries" element={<Salaries loggedIn={loggedIn} email={email} employeeNumber={employeeNumber} setLoggedIn={setLoggedIn} setEmail={setEmail} setEmployeeNumber={setEmployeeNumber} ad={ad} setAttendanceData={setAttendanceData} empName={empName} sd={sd} setSalaries={setSalaries} />} /> 
          <Route path="/showVolDeductions" element={<ShowVolDeductions loggedIn={loggedIn} email={email} employeeNumber={employeeNumber} setLoggedIn={setLoggedIn} setEmail={setEmail} setEmployeeNumber={setEmployeeNumber} ad={ad} setAttendanceData={setAttendanceData} empName={empName} vd={vd} setVolDeductions={setVolDeductions} />} /> 
          <Route path="/tags" element={<Tags loggedIn={loggedIn} email={email} employeeNumber={employeeNumber} setLoggedIn={setLoggedIn} setEmail={setEmail} setEmployeeNumber={setEmployeeNumber} ad={ad} setAttendanceData={setAttendanceData} empName={empName} td={td} setTags={setTags} />} />
          <Route path="/showpayroll" element={<ShowPayroll loggedIn={loggedIn} email={email} employeeNumber={employeeNumber} setLoggedIn={setLoggedIn} setEmail={setEmail} setEmployeeNumber={setEmployeeNumber} empName={empName} pd={pd} setPayrollData={setPayrollData} cid={cid} setCheckID={setCheckID} />} />
          <Route path="/showpayrollcheck" element={<ShowPayrollCheck loggedIn={loggedIn} email={email} employeeNumber={employeeNumber} setLoggedIn={setLoggedIn} setEmail={setEmail} setEmployeeNumber={setEmployeeNumber} empName={empName} pcd={pcd} setPayrollCheckData={setPayrollCheckData} cid={cid} pcddd={pcddd} setPayrollDeductionData={setPayrollDeductionData} />} />
          <Route path="/payrollTables" element={<PayrollTables loggedIn={loggedIn} setLoggedIn={setLoggedIn} email={email} />} />
          <Route path="/absenceLeaveCodes" element={<AbsenceLeaveCodes loggedIn={loggedIn} setLoggedIn={setLoggedIn} email={email} alc={alc} setAbsenceLeaveCodes={setAbsenceLeaveCodes} />} />
          <Route path="/deductionsContributionsCodes" element={<DeductionsContritbutionsCodes loggedIn={loggedIn} setLoggedIn={setLoggedIn} email={email} dcc={dcc} setDeductionsContributionsCodes={setDeductionsContributionsCodes} />} />
          <Route path="/payTableCodes" element={<PayTableCodes loggedIn={loggedIn} setLoggedIn={setLoggedIn} email={email} ptc={ptc} setPayTableCodes={setPayTableCodes} />} />
          <Route path="/jobCodes" element={<JobCodes loggedIn={loggedIn} setLoggedIn={setLoggedIn} email={email} jcc={jcc} setJobCodes={setJobCodes} />} />
          <Route path="/addendaCodes" element={<AddendaCodes loggedIn={loggedIn} setLoggedIn={setLoggedIn} email={email} acc={acc} setAddendaCodes={setAddendaCodes} />} />
      
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
