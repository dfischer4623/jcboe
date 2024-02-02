import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Salaries = (props) => {

    const { loggedIn, email, employeeNumber, empName, vd, setVolDeductions } = props

    const navigate = useNavigate();

    const showEmployeeButtonClick = () => {
        navigate("/showEmployee")
    }

    const employeeSearchButtonClick = () => {
        navigate("/employeeSearch")
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
                const response = await fetch(`http://localhost:8080/api/employees/voldeductions/${employeeNumber}`);
                const resData = await response.json()
                setVolDeductions(resData)
            }
            catch (error) {
                console.log("error", error);
                navigate("/showEmployee")
            }
        }
        fetchData()
    }, [])

    if (vd === null) {
        return <h1>Loading...</h1>
    }

    let dollarUS = Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    });

    let percentageUS = Intl.NumberFormat("en-US", {
        style: "percent",
        maximumFractionDigits: 2
    });

    let voldeductionsFormatted = vd.map((vdd, i) => {
        return (
            <tr key={i}>
                <td>{vdd.schyear}</td>
                <td>{vdd.DVDED}</td>
                <td>{vdd.DVJUR}</td>
                <td>{dollarUS.format(vdd.DVAMT)}</td>
                <td>{percentageUS.format(vdd.DVPCT)}</td>
            </tr>

        )
    })

    return <div className={"mainContainer"}>
        <div className={"titleContainer"}>
            <div>Show Voluntary</div>
            <div>Deductions</div>
        </div>
        <br />
        <div>
            <table>
                <thead>
                    <tr>
                        <th colSpan="5">Employee Number: {employeeNumber}</th>
                    </tr>
                    <tr>
                        <th colSpan="5">Employee Name: {empName}</th>
                    </tr>
                    <tr> </tr>
                    <tr> </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>School Year Ending</td>
                        <td>Deduction</td>
                        <td>Jurisdiction</td>
                        <td>Deduction Amount</td>
                        <td>Percent of Gross</td>
                    </tr>
                    {voldeductionsFormatted}
                </tbody>
            </table>
        </div>
        <br />
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
                onClick={logoutButtonClick}
                value={"Log out"} />
        </div>
        <br />
        <div>Your email is {email}</div>
    </div >
}

export default Salaries