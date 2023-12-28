import React from "react";
import { useNavigate } from "react-router-dom";

const EmployeeSearch = (props) => {

    const { email, employeeNumber, setEmployeeNumber } = props

    const navigate = useNavigate();

    const onENButtonClick = async () => {
        let resData = null
        try {
            const response = await fetch(`http://localhost:8080/api/employees/${employeeNumber}`);
            resData = await response.json()
            //console.log(resData.EMSSAN)
            //console.log(employeeNumber)
            if (resData.EMSSAN == employeeNumber) {
                navigate("/showEmployee")
            } else {
                window.alert(`Wrong Employee Number ` + employeeNumber)
            }
        }
        catch (error) {
            //console.log(error);
            window.alert(`Wrong Employee Number ` + employeeNumber)
        }
    }

    const mainButtonClick = () => {
        navigate("/main")
    }

    const logoutButtonClick = () => {
        localStorage.removeItem("user")
        props.setLoggedIn(false)
        navigate("/")
    }

    return <div className={"mainContainer"}>
        <div className={"titleContainer"}>
            <div>Employee Search</div>
        </div>
        <br />
        <div className={"inputButtonContainer"}>
            <input
                value={employeeNumber}
                placeholder="Enter Employee Number"
                onChange={ev => setEmployeeNumber(ev.target.value)}
                className={"inputBox"} />
            <input
                className={"inputButton"}
                type="button"
                onClick={onENButtonClick}
                value={"Show Employee"} />
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

export default EmployeeSearch