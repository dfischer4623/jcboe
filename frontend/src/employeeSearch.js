import React from "react";
import { useNavigate } from "react-router-dom";

const EmployeeSearch = (props) => {
    
    const { loggedIn } = props
    const employeeNumber =""
    
    const navigate = useNavigate();
        
    const onButtonClick = () => {
        navigate("/main")
    }

    const mainButtonClick = () => {
        navigate("/main")
    }

    const logoutButtonClick = () => {
        if (!loggedIn) {
            localStorage.removeItem("user")
            props.setLoggedIn(false)
            navigate("/")
        }
    }
    
    return <div className={"mainContainer"}>
        <div className={"titleContainer"}>
            <div>Employee Search</div>
        </div>
        <br />
        <div className={"inputContainer"}>
            <input
                value={employeeNumber}
                placeholder="Enter Employee Number"
                className={"inputBox"} />
        </div>
        <br />
        <div className={"inputContainer"}>
            <input
                className={"inputButton"}
                type="button"
                onClick={onButtonClick}
                value={"Get Employee Information"} />
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
    </div>
}

export default EmployeeSearch