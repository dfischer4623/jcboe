import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const JobCodes = (props) => {

    const { loggedIn, email, jcc, setJobCodes } = props
    
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
        const fetchData = async () => {
            try {
                const response = await fetch(`http://10.0.1.142:8080/api/employees/ppay124s`);
                const resData = await response.json()
                setJobCodes(resData)
            }
            catch (error) {
                console.log("error", error);
                navigate("/payrollTables")
            }
        }
        fetchData()
    }, [])

    if (jcc === null) {
        return <h1>Loading...</h1>
    }

    let jobCodesFormatted = jcc.map((jccd, i) => {
        
        return (
            <tr key={i}>
                <td>{jccd.JDKEY}</td>
                <td>{jccd.JDTITL}</td>
            </tr>

        )
    })

    return <div className={"mainContainer"}>
        <div className={"titleContainer"}>
            <div>Job Codes</div>
        </div>
        <br />
        <div>
            <table>
                <tbody>
                    <tr>
                        <td>Code</td>
                        <td>Description</td>
                    </tr>
                    {jobCodesFormatted}
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

export default JobCodes