import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Certificates = (props) => {

    const { loggedIn, email, employeeNumber, empName, ac, setAssignments } = props

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
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:8080/api/employees/assignments/${employeeNumber}`);
                const resData = await response.json()
                setAssignments(resData)
            }
            catch (error) {
                console.log("error", error);
                navigate("/showEmployee")
            }
        }
        fetchData()
    }, [])

    if (ac === null) {
        return <h1>Loading...</h1>
    }

    let assignmentsFormatted = ac.map((acc, i) => {
        return (
            <tr key={i}>
                <td>{acc.ASJD}</td>
                <td>{acc.ASCON}</td>
                <td>{acc.STRDTE}</td>
                <td>{acc.ENDDTE}</td>
                <td>{acc.ASGRAD}</td>
                <td>{acc.ASSTEP}</td>
            </tr>

        )
    })

    return <div className={"mainContainer"}>
        <div className={"titleContainer"}>
            <div>Show</div>
            <div>Assignments/Contracts</div>
        </div>
        <br />
        <div>
            <table>
                <thead>
                    <tr>
                        <th colSpan="6">Employee Number: {employeeNumber}</th>
                    </tr>
                    <tr>
                        <th colSpan="6">Employee Name: {empName}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Job Code</td>
                        <td>Contract</td>
                        <td>Start Date</td>
                        <td>End Date</td>
                        <td>Pay Grade</td>
                        <td>Pay Step</td>
                        
                    </tr>
                    {assignmentsFormatted}
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