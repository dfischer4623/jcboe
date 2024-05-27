import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ShowAttendance = (props) => {

    const { loggedIn, email, employeeNumber, ad, setAttendanceData, empName } = props
    let holdYear = null
    let first = true
    let j = 99999

    const navigate = useNavigate();

    const showAttendanceDetailButtonClick = () => {
        navigate("/showAttendanceDetail")
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
                const response = await fetch(`https://as400.jcboe.org:8080/api/employees/attendance/${employeeNumber}`);
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

    // const attendanceSelected = (HANUM, HAJOB, HAABS) => {
    //     const adido = {
    //         TMLSSN: HANUM,
    //         TMLJOB: HAJOB,
    //         TMLABS: HAABS
    //     }
    //     setAttendanceDataID(adido)
    //     navigate("/showAttendanceDetail")
    // }

    function blankLineFunction(j) {
        return (
            <tr key={j}>
                <td>-----</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        ) 
    }

    let attendanceFormatted = ad.map((add, i) => {
        if (add.HAFBBL !== 0 || add.HAFERN !== 0 || add.HAFUSE !== 0 || add.HABAL !== 0) {
            if (add.MEMBER != holdYear) {
                holdYear=add.MEMBER
                if (first === true) {
                    first = false
                } else {
                    j++
                    return(blankLineFunction(j))
                }
    
            } 
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
            <div>Attendance</div>
        </div>
        <br />
        <div>
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
        <br />
        <div>Your email is {email}</div>
    </div>
}

export default ShowAttendance