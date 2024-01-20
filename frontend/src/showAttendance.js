import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ShowAttendance = (props) => {

    const { loggedIn, email, employeeNumber, ad, setAttendanceData, empName } = props

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
                const response = await fetch(`http://localhost:8080/api/employees/attendance/${employeeNumber}`);
                const resData = await response.json()
                setAttendanceData(resData)
                console.log(resData)
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
        console.log(HANUM + ' ' + HAJOB + ' ' + HAABS)
        //setEmployeeNumber(key)
        //navigate("/showEmployee")
    }

    let attendanceFormatted = ad.map((add, i) => {
        return (
            <tr key={i}>
                <td>
                    <a href="#" onClick={() => attendanceSelected(add.HANUM, add.HAJOB, add.HAABS)}>View</a>
                </td>
                <td>{add.HAJOB}</td>
                <td>{add.HAABS}</td>
                <td>{add.HABAL}</td>
                <td>{add.HACBBL}</td>
                <td>{add.HACERN}</td>
            </tr>

        )
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
                        <th colSpan="6">Employee Number: {employeeNumber}</th>
                    </tr>
                    <tr>
                        <th colSpan="6">Employee Name: {empName}</th>
                    </tr>
                    <tr>
                        <th></th>
                        <th>Job</th>
                        <th>Absence</th>
                        <th>Balance</th>
                        <th>Begin</th>
                        <th>Calendar</th>
                    </tr>
                    <tr>
                        <th></th>
                        <th>Code </th>
                        <th>Code</th>
                        <th>Available</th>
                        <th>Balance</th>
                        <th>Earned</th>
                    </tr>
                </thead>
                <tbody>
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