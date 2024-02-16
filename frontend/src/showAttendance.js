import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ShowAttendance = (props) => {

    const { loggedIn, email, employeeNumber, ad, setAttendanceData, empName, adid, setAttendanceDataID } = props

    const navigate = useNavigate();

    const showEmployeeButtonClick = () => {
        navigate("/showEmployee")
    }

    const employeeSearchButtonClick = () => {
        navigate("/employeeSearch")
    }

    const mainButtonClick = () => {
        navigate("/main")
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
        const fetchData = async () => {
            try {
                const response = await fetch(`http://10.0.1.142:8080/api/employees/attendance/${employeeNumber}`);
                const resData = await response.json()
                setAttendanceData(resData)
            }
            catch (error) {
                console.log("error", error);
                navigate("/showEmployee")
            }
        }
        fetchData()
    }, [])

    if (ad === null) {
        return <h1>Loading...</h1>
    }

    const attendanceSelected = (HANUM, HAJOB, HAABS) => {
        const adido = {
            TMLSSN: HANUM,
            TMLJOB: HAJOB,
            TMLABS: HAABS
        }
        setAttendanceDataID(adido)
        navigate("/showAttendanceDetail")
    }

    let attendanceFormatted = ad.map((add, i) => {
        if (add.HAFBBL !== 0 || add.HAFERN !== 0 || add.HAFUSE !== 0 || add.HABAL !== 0) {
            return (
                <tr key={i}>
                    <td>{add.MEMBER}</td>
                    <td>{add.HAJOB}</td>
                    <td>{add.HAABS}</td>
                    <td>{add.HAFBBL}</td>
                    <td>{add.HAFERN}</td>
                    <td>{add.HAFUSE}</td>
                    <td>{add.HABAL}</td>
                </tr>
            )
        }
    })

    return <div className={"mainContainer"}>
        <div className={"titleContainer"}>
            <div>Show Attendance</div>
        </div>
        <br />
        <div className={"attTableContainer"}>
            <table>
                <thead className={"thatt"}>
                    <tr>
                        <th colSpan="7">Employee Number: {employeeNumber}</th>
                    </tr>
                    <tr>
                        <th colSpan="7">Employee Name: {empName}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>School Year</td>
                        <td>Job Code</td>
                        <td>Absence Code</td>
                        <td>Begin Balance</td>
                        <td>Fiscal Earned</td>
                        <td>Fiscal Used</td>
                        <td>Balance Available</td>
                    </tr>
                    {attendanceFormatted}
                </tbody>
            </table>
        </div>
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
                onClick={mainButtonClick}
                value={"Main"} />
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
    </div>
}

export default ShowAttendance