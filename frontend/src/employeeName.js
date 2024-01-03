import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const EmployeeName = (props) => {

    const { loggedIn, email, employeeName } = props

    const navigate = useNavigate();

    useEffect(() => {
        if (!loggedIn) {
            localStorage.removeItem("user")
            props.setLoggedIn(false)
            navigate("/")
        }
        const fetchData = async () => {
            let resData = null
            try {
                const response = await fetch(`http://localhost:8080/api/employees/?name=${employeeName}`);
                resData = await response.json()
                const ed = resData
                console.log(ed)
            }
            catch (error) {
                console.log("error", error);
                navigate("/employeeSearch")
            }
        }
        fetchData()
    }, [])

    const employeeSearchButtonClick = () => {
        navigate("/employeeSearch")
    }

    const logoutButtonClick = () => {
        localStorage.removeItem("user")
        props.setLoggedIn(false)
        navigate("/")
    }

    return <div className={"mainContainer"}>
        <div className={"titleContainer"}>
            <div>Employee Name Search</div>
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
    </div>
}

export default EmployeeName