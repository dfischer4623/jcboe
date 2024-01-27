import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Certificates = (props) => {

    const { loggedIn, email, employeeNumber, empName, cd, setCertificates } = props

    const navigate = useNavigate();

    const showEmployeeButtonClick = () => {
        navigate("/showEmployee")
    }

    const employeeSearchButtonClick = () => {
        navigate("/employeeSearch")
    }

    const logoutButtonClick = () => {
        localStorage.removeItem("user")
        props.setLoggedIn(false)
        navigate("/")
    }

    useEffect(() => {
        if (!loggedIn) {
            localStorage.removeItem("user")
            props.setLoggedIn(false)
            navigate("/")
        }
        console.log(loggedIn)
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:8080/api/employees/certificates/${employeeNumber}`);
                const resData = await response.json()
                setCertificates(resData)
                console.log('resData: ' + resData)
            }
            catch (error) {
                console.log("error", error);
                navigate("/showEmployee")
            }
        }
        fetchData()
    }, [])

    if (cd === null) {
        return <h1>Loading...</h1>
    }

    let certificatesFormatted = cd.map((cdd) => {
        return (
            <tr key={cdd.CTSSN}>
                <td>{cdd.CTID}</td>
                <td>{cdd.CRTDES}</td>
                <td>{cdd.CTTYPE}</td>
                <td>{cdd.TYDESC}</td>
                <td>{cdd.CTLEVL}</td>
                <td>{cdd.LVDESC}</td>

            </tr>

        )
    })

    return <div className={"mainContainer"}>
        <div className={"titleContainer"}>
            <div>Show Certificates</div>
        </div>
        <br />
        <div>
            <table>
                <thead>
                    <tr>
                        <th colSpan="8">Employee Number: {employeeNumber}</th>
                    </tr>
                    <tr>
                        <th colSpan="8">Employee Name: {empName}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Certificate</td>
                        <td>Cert Description</td>
                        <td>Type</td>
                        <td>Type Description</td>
                        <td>Level</td>
                        <td>Level Description</td>
                        
                    </tr>
                    {certificatesFormatted}
                </tbody>
            </table>
        </div>
        <br />
        <div className={"inputContainer"}>
            <input
                className={"inputButton"}
                type="button"
                onClick={showEmployeeButtonClick}
                value={"Show Employee"} />
        </div>
        <div className={"inputContainer"}>
            <input
                className={"inputButton"}
                type="button"
                onClick={employeeSearchButtonClick}
                value={"Employee Search"} />
        </div>
        <div className={"inputContainer"}>
            <input
                className={"inputButton"}
                type="button"
                onClick={logoutButtonClick}
                value={"Log out"} />
        </div>
        <br />
        <div>Your email is {email}</div>
    </div >
}

export default Certificates