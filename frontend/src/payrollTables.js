import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Main = (props) => {

    const { loggedIn, email } = props

    const navigate = useNavigate();

    useEffect(() => {
        if (!loggedIn) {
            localStorage.removeItem("user")
            props.setLoggedIn(false)
            navigate("/")
        }
    })

    const payrollTablesButtonClick = () => {
        navigate("/payrollTables")
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
            <div>Payroll Tables</div>
        </div>
        <div className={"inputContainer"}>
            <input
                className={"inputButton"}
                type="button"
                onClick={payrollTablesButtonClick}
                value={"Payroll Tables"} />
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

export default Main