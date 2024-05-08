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

    // const employeeSearchButtonClick = () => {
    //     navigate("/employeeSearch")
    // }

    return <div className={"mainContainer"}>
        <div className={"titleContainer"}>
            <div>AS/400 Data</div>
        </div>
        <br></br>
            <div><h2>Login Successful</h2></div>
        <div><h2>Please use navigation bars to continue.</h2></div>
        <br />
        <div>Your email is {email}</div>
    </div>
}

export default Main