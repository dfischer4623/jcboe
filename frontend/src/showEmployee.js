import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ShowEmployee = (props) => {

    const { email, employeeNumber } = props

    const navigate = useNavigate();

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

    const [employee, setEmployee] = useState("")

    const fetchData = async () => {
        const response = await fetch(`http://localhost:8080/api/peis301s/${employeeNumber}`)
        const resData = await response.json()
        setEmployee(resData)
    }
    fetchData()

    console.log(employee)

    return <div className={"mainContainer"}>
        <div className={"titleContainer"}>
            <div>Show Employee</div>
        </div>
        {/*------------------------------------------------*/}
        <div>{employeeNumber}</div>
        {/*  show data here*/}

        {/*------------------------------------------------*/}
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

export default ShowEmployee