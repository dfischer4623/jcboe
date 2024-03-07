import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const MiscData = (props) => {

    const { loggedIn, email, acc, setAddendaCodes } = props
    
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
                const response = await fetch(`http://10.0.1.142:8080/api/employees/ppay127s`);
                const resData = await response.json()
                setAddendaCodes(resData)
            }
            catch (error) {
                console.log("error", error);
                navigate("/payrollTables")
            }
        }
        fetchData()
    }, [])

    if (acc === null) {
        return <h1>Loading...</h1>
    }

    let jobCodesFormatted = acc.map((accd, i) => {
        
        return (
            <tr key={i}>
                <td>{accd.ADDKEY}</td>
                <td>{accd.ADDDES}</td>
            </tr>

        )
    })

    return <div className={"mainContainer"}>
        <div className={"titleContainer"}>
            <div>Addenda Codes</div>
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

export default MiscData