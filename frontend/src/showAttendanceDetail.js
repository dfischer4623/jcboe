import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ShowAttendance = (props) => {

    const { loggedIn, email, employeeNumber, adl, setAttendanceDataDetail, empName } = props

    const navigate = useNavigate();

    useEffect(() => {
        if (!loggedIn) {
            localStorage.removeItem("user")
            props.setLoggedIn(false)
            navigate("/")
        }
        const fetchData = async () => {
            try {
                const response = await fetch(`https://as400.jcboe.org:8080/api/employees/attendancedetail/${employeeNumber}`);
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
            <div>Attendance Details</div>
        </div>
        <br />
        <div>
            <table>
                <thead className={"thatt"}>
                    <tr>
                        <th colSpan="6">Employee Number: {employeeNumber}</th>
                    </tr>
                    <tr>
                        <th colSpan="6">Employee Name: {empName}</th>
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
        <br />
        <div>Your email is {email}</div>
    </div>
}

export default ShowAttendance