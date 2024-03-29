import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const TerminationCodes = (props) => {

    const { loggedIn, email } = props

    const navigate = useNavigate();

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

    useEffect(() => {
        if (!loggedIn) {
            localStorage.removeItem("user")
            props.setLoggedIn(false)
            navigate("/")
        }
    }, [])

    return <div className={"mainContainer"}>
        <div className={"titleContainer"}>
            <div>Termination Codes</div>
        </div>
        <br />
        <div>
            <table>
                <tbody>
                    <tr>
                        <td>Termination Codes</td>
                        <td>Description</td>
                    </tr>
                    <tr key={1}>
                        <td>1</td>
                        <td>DECEASED</td>
                    </tr>
                    <tr key={2}>
                        <td>2</td>
                        <td>SERVICES TERMINATED</td>
                    </tr>
                    <tr key={3}>
                        <td>3</td>
                        <td>RESIGNED</td>
                    </tr>
                    <tr key={4}>
                        <td>4</td>
                        <td>RETIRED</td>
                    </tr>
                    <tr key={5}>
                        <td>5</td>
                        <td>CONTRACT NOT RENEWED</td>
                    </tr>
                    <tr key={6}>
                        <td>6</td>
                        <td>LONG TERM LEAVE</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <br />
        <div className={"inputContainer"}>
            <input
                className={"inputButton"}
                type="button"
                onClick={payrollTablesButtonClick}
                value={"Payroll Codes"} />
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
    </div >
}

export default TerminationCodes