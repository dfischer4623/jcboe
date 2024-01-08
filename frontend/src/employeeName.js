import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const EmployeeName = (props) => {

    const { loggedIn, email, setEmployeeNumber, employeeName, es, setEmployeeNames } = props

    const navigate = useNavigate();

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
                const response = await fetch(`http://localhost:8080/api/employees/?name=${employeeName}`);
                const resData = await response.json()
                setEmployeeNames(resData)
                console.log(resData)
            }
            catch (error) {
                console.log("error", error);
                navigate("/employeeSearch")
            }
        }
        fetchData()
    }, [])

    const employeeSelected = (key) => {
        setEmployeeNumber(key)
        navigate("/showEmployee")
    }

    let employeesFormatted = es.map((ess) => {
        return (
            <tr>
                <td><a href="#" onClick={() => employeeSelected(ess.EMSSAN)}>
                    {ess.EMSSAN}
                </a></td>
                <td>{ess.EMLNAM}</td>
                <td>{ess.EMFNAM}</td>
            </tr>

        )
    })

    return <div className={"mainContainer"}>
        <div className={"titleContainer"}>
            <div>Employee Name Search</div>
        </div>
        <br />
        <div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th colspan="3">The table header</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employeesFormatted}
                    </tbody>
                </table>
            </div >
        </div>
        <br />
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

export default EmployeeName