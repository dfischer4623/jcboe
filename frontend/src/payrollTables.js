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

    const absenceLeaveCodesButtonClick = () => {
        navigate("/absenceLeaveCodes")
    }
    
    const deductionsContributionsCodesButtonClick = () => {
        navigate("/deductionsContributionsCodes")
    } 
    
    const payTableCodesButtonClick = () => {
        navigate("/payTableCodes")
    } 

    const jobCodesButtonClick = () => {
        navigate("/jobCodes")
    } 
    
    const addendaCodesButtonClick = () => { 
        navigate("/addendaCodes")
    }
    
    const terminationCodesButtonClick = () => {
        navigate("/terminationCodes")
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
            <div>Payroll Codes</div>
        </div>
        <div className={"inputContainer"}>
            <input
                className={"inputButton"}
                type="button"
                onClick={absenceLeaveCodesButtonClick}
                value={"Absence/Leave Codes"} />
        </div>
        <div className={"inputContainer"}>
            <input
                className={"inputButton"}
                type="button"
                onClick={deductionsContributionsCodesButtonClick}
                value={"Deductions/Contributions Codes"} />
        </div>
        <div className={"inputContainer"}>
            <input
                className={"inputButton"}
                type="button"
                onClick={payTableCodesButtonClick}
                value={"Pay Table Codes"} />
        </div>
        <div className={"inputContainer"}>
            <input
                className={"inputButton"}
                type="button"
                onClick={jobCodesButtonClick}
                value={"Job Codes"} />
        </div>
        <div className={"inputContainer"}>
            <input
                className={"inputButton"}
                type="button"
                onClick={addendaCodesButtonClick}
                value={"Addenda Codes"} />
        </div>
        <div className={"inputContainer"}>
            <input
                className={"inputButton"}
                type="button"
                onClick={terminationCodesButtonClick}
                value={"Termination Codes"} />
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