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
import TerminationCodes from './terminationCodes';
import ShowW2s from './showW2s';
import ShowW2Details from './showW2Details';
import PurchaseOrderSearch from './purchaseOrderSearch';
import ShowPurchaseOrder from './showPurchaseOrder';
import VendorSearch from './vendorSearch';
import VendorName from './vendorName';
import ShowVendor from './showVendor';
import CheckSearch from './checkSearch';
import ShowCheck from './showCheck';

import Sidebar from './navcomponents/Sidebar';


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
  const [w2s, setW2s] = useState(null)
  const [ssn, setSsn] = useState(null)
  const [w2ido, setW2ID] = useState(null)
  const [w2d, setW2Details] = useState(null)
  const [PODOC, setPODOC] = useState('')
  const [PONUM, setPONUM] = useState('')
  const [pod, setShowPurchaseOrder] = useState(null)
  const [vend, setVendorData] = useState(null)
  const [vendorNumber, setVendorNumber] = useState("")
  const [vendorName, setVendorName] = useState("")
  const [vens, setVendorNames] = useState(null)
  const [aphbnk, setAphbnk] = useState("")
  const [aphbac, setAphbac] = useState("")
  const [aphfrm, setAphfrm] = useState("")
  const [aphchk, setAphchk] = useState("")
  const [aphven, setAphven] = useState("")
  const [scd, setCheckData] = useState(null)

  useEffect(() => {
    // Fetch the user email and token from local storage
    const user = JSON.parse(localStorage.getItem("user"))

    // If the token/email does not exist, mark the user as logged out
    if (!user || !user.token) {
      setLoggedIn(false)
      return
    }

    // If the token exists, verify it with the auth server to see if it is valid
    fetch("https://as400.jcboe.org:3080/verify", {
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
      <Sidebar />
        <Routes>
          <Route path="/" element={<Home email={email} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
          <Route path="/login" element={<Login setLoggedIn={setLoggedIn} setEmail={setEmail} />} />
          <Route path="/main" element={<Main loggedIn={loggedIn} email={email} setLoggedIn={setLoggedIn} setEmail={setEmail} />} />
          <Route path="/employeeSearch" element={<EmployeeSearch loggedIn={loggedIn} email={email} employeeName={employeeName} employeeNumber={employeeNumber} setLoggedIn={setLoggedIn} setEmail={setEmail} ed={ed} setEmployeeNumber={setEmployeeNumber} setEmployeeName={setEmployeeName} setEmployeeData={setEmployeeData} setEmployeeNames={setEmployeeNames} />} />
          <Route path="/employeeName" element={<EmployeeName loggedIn={loggedIn} email={email} employeeNumber={employeeNumber} employeeName={employeeName} setLoggedIn={setLoggedIn} setEmail={setEmail} es={es} setEmployeeNames={setEmployeeNames} setEmployeeNumber={setEmployeeNumber} />} />
          <Route path="/showEmployee" element={<ShowEmployee loggedIn={loggedIn} email={email} employeeNumber={employeeNumber} setLoggedIn={setLoggedIn} setEmail={setEmail} setEmployeeNumber={setEmployeeNumber} ed={ed} setEmployeeData={setEmployeeData} setEmpName={setEmpName} setSsn={setSsn} />} />
          <Route path="/showAttendance" element={<ShowAttendance loggedIn={loggedIn} email={email} employeeNumber={employeeNumber} setLoggedIn={setLoggedIn} setEmail={setEmail} setEmployeeNumber={setEmployeeNumber} ad={ad} setAttendanceData={setAttendanceData} empName={empName} />} />
          <Route path="/miscData" element={<MiscData loggedIn={loggedIn} email={email} employeeNumber={employeeNumber} setLoggedIn={setLoggedIn} setEmail={setEmail} setEmployeeNumber={setEmployeeNumber} ad={ad} setAttendanceData={setAttendanceData} empName={empName} md={md} setMiscData={setMiscData} />} />
          <Route path="/certificates" element={<Certificates loggedIn={loggedIn} email={email} employeeNumber={employeeNumber} setLoggedIn={setLoggedIn} setEmail={setEmail} setEmployeeNumber={setEmployeeNumber} ad={ad} setAttendanceData={setAttendanceData} empName={empName} cd={cd} setCertificates={setCertificates} />} />
          <Route path="/showAttendanceDetail" element={<ShowAttendanceDetail loggedIn={loggedIn} email={email} employeeNumber={employeeNumber} setLoggedIn={setLoggedIn} setEmail={setEmail} setEmployeeNumber={setEmployeeNumber} ad={ad} setAttendanceData={setAttendanceData} empName={empName} adl={adl} setAttendanceDataDetail={setAttendanceDataDetail} />} />      
          <Route path="/salaries" element={<Salaries loggedIn={loggedIn} email={email} employeeNumber={employeeNumber} setLoggedIn={setLoggedIn} setEmail={setEmail} setEmployeeNumber={setEmployeeNumber} ad={ad} setAttendanceData={setAttendanceData} empName={empName} sd={sd} setSalaries={setSalaries} />} /> 
          <Route path="/showVolDeductions" element={<ShowVolDeductions loggedIn={loggedIn} email={email} employeeNumber={employeeNumber} setLoggedIn={setLoggedIn} setEmail={setEmail} setEmployeeNumber={setEmployeeNumber} ad={ad} setAttendanceData={setAttendanceData} empName={empName} vd={vd} setVolDeductions={setVolDeductions} />} /> 
          <Route path="/tags" element={<Tags loggedIn={loggedIn} email={email} employeeNumber={employeeNumber} setLoggedIn={setLoggedIn} setEmail={setEmail} setEmployeeNumber={setEmployeeNumber} ad={ad} setAttendanceData={setAttendanceData} empName={empName} td={td} setTags={setTags} />} />
          <Route path="/showpayroll" element={<ShowPayroll loggedIn={loggedIn} email={email} employeeNumber={employeeNumber} setLoggedIn={setLoggedIn} setEmail={setEmail} setEmployeeNumber={setEmployeeNumber} empName={empName} pd={pd} setPayrollData={setPayrollData} cid={cid} setCheckID={setCheckID} />} />
          <Route path="/showpayrollcheck" element={<ShowPayrollCheck loggedIn={loggedIn} email={email} employeeNumber={employeeNumber} setLoggedIn={setLoggedIn} setEmail={setEmail} setEmployeeNumber={setEmployeeNumber} empName={empName} pcd={pcd} setPayrollCheckData={setPayrollCheckData} cid={cid} pcddd={pcddd} setPayrollDeductionData={setPayrollDeductionData} setW2ID={setW2ID} />} />
          <Route path="/payrollTables" element={<PayrollTables loggedIn={loggedIn} setLoggedIn={setLoggedIn} email={email} />} />
          <Route path="/absenceLeaveCodes" element={<AbsenceLeaveCodes loggedIn={loggedIn} setLoggedIn={setLoggedIn} email={email} alc={alc} setAbsenceLeaveCodes={setAbsenceLeaveCodes} />} />
          <Route path="/deductionsContributionsCodes" element={<DeductionsContritbutionsCodes loggedIn={loggedIn} setLoggedIn={setLoggedIn} email={email} dcc={dcc} setDeductionsContributionsCodes={setDeductionsContributionsCodes} />} />
          <Route path="/payTableCodes" element={<PayTableCodes loggedIn={loggedIn} setLoggedIn={setLoggedIn} email={email} ptc={ptc} setPayTableCodes={setPayTableCodes} />} />
          <Route path="/jobCodes" element={<JobCodes loggedIn={loggedIn} setLoggedIn={setLoggedIn} email={email} jcc={jcc} setJobCodes={setJobCodes} />} />
          <Route path="/addendaCodes" element={<AddendaCodes loggedIn={loggedIn} setLoggedIn={setLoggedIn} email={email} acc={acc} setAddendaCodes={setAddendaCodes} />} />
          <Route path="/terminationCodes" element={<TerminationCodes loggedIn={loggedIn} setLoggedIn={setLoggedIn} email={email} />} />
          <Route path="/showW2s" element={<ShowW2s loggedIn={loggedIn} email={email} employeeNumber={employeeNumber} setLoggedIn={setLoggedIn} setEmail={setEmail} setEmployeeNumber={setEmployeeNumber} empName={empName} ssn={ssn} w2s={w2s} setW2s={setW2s} w2ido={w2ido} setW2ID={setW2ID}/>} />
          <Route path="/showW2Details" element={<ShowW2Details loggedIn={loggedIn} email={email} employeeNumber={employeeNumber} setLoggedIn={setLoggedIn} setEmail={setEmail} setEmployeeNumber={setEmployeeNumber} empName={empName} w2d={w2d} setW2Details={setW2Details} w2ido={w2ido} />} />   
          <Route path="/purchaseOrderSearch" element={<PurchaseOrderSearch loggedIn={loggedIn} email={email} PODOC={PODOC} PONUM={PONUM} pod={pod} setPODOC={setPODOC} setPONUM={setPONUM} setShowPurchaseOrder={setShowPurchaseOrder} />} />   
          <Route path="/showPurchaseOrder" element={<ShowPurchaseOrder loggedIn={loggedIn} email={email} PODOC={PODOC} PONUM={PONUM} pod={pod} setShowPurchaseOrder={setShowPurchaseOrder} />} />   
          <Route path="/vendorSearch" element={<VendorSearch loggedIn={loggedIn} email={email} vendorName={vendorName} vendorNumber={vendorNumber} setLoggedIn={setLoggedIn} setEmail={setEmail} vend={vend} setVendorNumber={setVendorNumber} setVendorName={setVendorName} setVendorNames={setVendorNames} />} />
          <Route path="/vendorName" element={<VendorName loggedIn={loggedIn} email={email} vendorNumber={vendorNumber} vendorName={vendorName} setLoggedIn={setLoggedIn} setEmail={setEmail} vens={vens} setVendorNames={setVendorNames} setVendorNumber={setVendorNumber} />} />
          <Route path="/showVendor" element={<ShowVendor loggedIn={loggedIn} email={email} vendorNumber={vendorNumber} setLoggedIn={setLoggedIn} setEmail={setEmail} setVendorNumber={setVendorNumber} vend={vend} setVendorData={setVendorData} />} />
          <Route path="/checkSearch" element={<CheckSearch loggedIn={loggedIn} email={email} setLoggedIn={setLoggedIn} setEmail={setEmail} setAphbnk={setAphbnk} setAphbac={setAphbac} setAphfrm={setAphfrm} setAphchk={setAphchk} setAphven={setAphven} aphbnk={aphbnk} aphbac={aphbac} aphfrm={aphfrm} aphchk={aphchk} aphven={aphven} />} />
          <Route path="/showCheck" element={<ShowCheck loggedIn={loggedIn} email={email} setLoggedIn={setLoggedIn} setEmail={setEmail} scd={scd} setCheckData={setCheckData} aphbnk={aphbnk} aphbac={aphbac} aphfrm={aphfrm} aphchk={aphchk} aphven={aphven} />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
