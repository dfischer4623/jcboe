import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const EmployeeName = (props) => {

    let ed=[]

    const { loggedIn, email, employeeName } = props

    const navigate = useNavigate();

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
                ed=resData
                console.log(resData)
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

        <br />
        <div className={"empTableContainer"}>
            <table>
                <thead>
                    <tr>
                        <th> </th>
                        <th> </th>
                        <th> </th>
                    </tr>
                </thead>
                <tbody>

                </tbody>
            </table>
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