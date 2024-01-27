import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ShowAttendance = (props) => {

    const { loggedIn, email, employeeNumber, adl, setAttendanceDataDetail, empName, adid } = props

    const navigate = useNavigate();

    const showAttendanceButtonClick = () => {
        navigate("/showAttendance")
    }

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
                const response = await fetch(`http://localhost:8080/api/employees/attendancedetail?` + new URLSearchParams({
                   TMLSSN: adid.TMLSSN,
                   TMLJOB: adid.TMLJOB,
                   TMLABS: adid.TMLABS, 
                }));
                const resData = await response.json()
                setAttendanceDataDetail(resData)
            }
            catch (error) {
                console.log("error", error);
                navigate("/showAttendance")
            }
        }
        fetchData()
    }, [])

    if (adl === null) {
        return <h1>Loading...</h1>
    }

    let attendanceDetail = adl.map((adll, i) => {
        
            if (adll.TMLPED !== '') {
                var dateString = adll.TMLPED;
                var year = dateString.substring(0, 4);
                var month = dateString.substring(4, 6);
                var day = dateString.substring(6, 8);
                adll.TMLPED = month + '/' + day + '/' + year
            } else {
                adll.TMLPED = ''
            }
            if (adll.TMLDAT !== '') {
                var dateString = adll.TMLDAT;
                var year = dateString.substring(0, 4);
                var month = dateString.substring(4, 6);
                var day = dateString.substring(6, 8);
                adll.TMLDAT = month + '/' + day + '/' + year
            } else {
                adll.TMLDAT = ''
            }
            return (
            <tr key={i}>
                <td>{adll.TMLLOC}</td>
                <td>{adll.TMLDAT}</td>
                <td>{adll.TMLABS}</td>
                <td>{adll.TMLQTY}</td>
            </tr>

        )
    })

    return <div className={"mainContainer"}>
        <div className={"titleContainer"}>
            <div>Show Absence Details</div>
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
                        <th colSpan="6">Job Code: {adid.TMLJOB} Absence Code: {adid.TMLABS}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Location Code</td>
                        <td>Absence Date</td>
                        <td>Absence Code</td>
                        <td>Units</td>
                    </tr>
                    {attendanceDetail}
                </tbody>
            </table>
        </div>
        <div className={"inputContainer"}>
            <input
                className={"inputButton"}
                type="button"
                onClick={showAttendanceButtonClick}
                value={"Show Attendance"} />
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