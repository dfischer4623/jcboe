import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ShowPayroll = (props) => {

    const { loggedIn, email, employeeNumber, pcd, setPayrollCheckData, cid, empName } = props

    const navigate = useNavigate(); 

    const showPayrollButtonClick = () => {
        navigate("/showPayroll")
    }

    const showEmployeeButtonClick = () => {
        navigate("/showEmployee")
    }

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

    useEffect(() => {
        if (!loggedIn) {
            localStorage.removeItem("user")
            props.setLoggedIn(false)
            navigate("/")
        }
        const fetchData = async () => {
            try {
                const response = await fetch(`http://10.0.1.142:8080/api/employees/payrollCheck/?SSN=${cid.SSN}&RUN=${cid.RUN}`);
                const resData = await response.json()
                setPayrollCheckData(resData)
            }
            catch (error) {
                console.log("error", error);
                navigate("/showPayroll")
            }
        }
        fetchData()
    }, [])

    if (pcd === null) {
        return <h1>Loading...</h1>
    }

    let dollarUS = Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    });

    let payrollCheckFormatted = pcd.map((pcdd, i) => {

        return (  
            <tr key={i}>
                <td>{pcdd.JDTITL}</td>
                <td>{pcdd.PAJOB}</td>
                <td>{pcdd.PAADN}</td>
                <td>{pcdd.PATYP}</td>
                <td>{dollarUS.format(pcdd.PACAL)}</td>
                <td>{dollarUS.format(pcdd.PACUR)}</td>
            </tr>
        )
    })

    return <div className={"mainContainer"}>
        <div className={"titleContainer"}>
            <div>Show Payroll Check</div>
        </div>
        <br />
        <div className={"attTableContainer"}>
            <table>
                <thead className={"thatt"}>
                    <tr>
                        <th colSpan="6">Employee Number: {employeeNumber}</th>
                    </tr>
                    <tr>
                        <th colSpan="6">Employee Name: {empName}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Description</td>
                        <td>Ref 1</td>
                        <td>Ref 2</td>
                        <td>Type</td>
                        <td>Cal Amount</td>
                        <td>Check Amount</td>
                    </tr>
                    {payrollCheckFormatted}
                </tbody>
            </table>
        </div>
        <div className={"inputContainer"}>
            <input
                className={"inputButton"}
                type="button"
                onClick={showPayrollButtonClick}
                value={"Show Payroll"} />
        </div>
        <div className={"inputContainer"}>
            <input
                className={"inputButton"}
                type="button"
                onClick={showEmployeeButtonClick}
                value={"Show Employee"} />
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

export default ShowPayroll