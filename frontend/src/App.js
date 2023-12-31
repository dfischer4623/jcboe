import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './home';
import Login from './login';
import Main from './main';
import EmployeeSearch from './employeeSearch';
import EmployeeName from './employeeName';
import ShowEmployee from './showEmployee';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [email, setEmail] = useState("")
  const [employeeNumber, setEmployeeNumber] = useState("")
  const [employeeName, setEmployeeName] = useState("")
  const [ed, setEmployeeData] = useState(null)
  const [es, setEmployeeNames] = useState(null)

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
          <Route path="/" element={<Home email={email} loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>} />
          <Route path="/login" element={<Login setLoggedIn={setLoggedIn} setEmail={setEmail} />} />
          <Route path="/main" element={<Main loggedIn={loggedIn} email={email} setLoggedIn={setLoggedIn} setEmail={setEmail} />} />
          <Route path="/employeeSearch" element={<EmployeeSearch loggedIn={loggedIn} email={email} employeeName={employeeName} employeeNumber={employeeNumber} setLoggedIn={setLoggedIn} setEmail={setEmail} ed={ed} setEmployeeNumber={setEmployeeNumber} setEmployeeName={setEmployeeName} setEmployeeData={setEmployeeData} setEmployeeNames={setEmployeeNames}/>} />
          <Route path="/employeeName" element={<EmployeeName loggedIn={loggedIn} email={email} employeeNumber={employeeNumber} employeeName={employeeName} setLoggedIn={setLoggedIn} setEmail={setEmail} es={es} setEmployeeNames={setEmployeeNames} setEmployeeNumber={setEmployeeNumber} />} />
          <Route path="/showEmployee" element={<ShowEmployee loggedIn={loggedIn} email={email} employeeNumber={employeeNumber} setLoggedIn={setLoggedIn} setEmail={setEmail} setEmployeeNumber={setEmployeeNumber} ed={ed} setEmployeeData={setEmployeeData} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
