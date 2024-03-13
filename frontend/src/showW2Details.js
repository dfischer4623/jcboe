import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ShowW2Details = (props) => {

    const { loggedIn, email, employeeNumber, w2d, setW2Details, empName, w2ido } = props

    const navigate = useNavigate();

    const showW2sButtonClick = () => {
        navigate("/showW2s")
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
            const ssn = w2ido.SSN
            const estb = w2ido.ESTB
            const year = w2ido.YEAR
            try {
                const response = await fetch(`http://10.0.1.142:8080/api/employees/pfrs860sdetails/data?W2CLYR=${year}&W2SSN=${ssn}&W2ESTB=${estb}`);
                const resData = await response.json()
                setW2Details(resData)
            }
            catch (error) {
                console.log("error", error);
                navigate("/showW2s")
            }
        }
        fetchData()
    }, [])

    if (w2d === null) {
        return <h1>Loading...</h1>
    }

    if (w2ido.YEAR < 10) {
        var W2CLYR = '200' + w2ido.YEAR
    } else {
        W2CLYR = '20' + w2ido.YEAR
    }

    let dollarUS = Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    });

    let w2dFormatted = w2d.map((w2dd) => {

        return (
            <tbody>
                <tr>
                    <td>a Employee's ssn</td>
                    <td>{w2dd.W2SSN}</td>
                    <td>b Employer EIN</td>
                    <td>{w2dd.W2FEIN}</td>
                </tr>
                <tr>
                    <td>1 Wages, tips</td>
                    <td>{dollarUS.format(w2dd.W2WAGE)}</td>
                    <td>2 Federal income tax witheld</td>
                    <td>{dollarUS.format(w2dd.W2FEDT)}</td>
                </tr>
                <tr>
                    <td>3 Social security wages</td>
                    <td>{dollarUS.format(w2dd.W2FICW)}</td>
                    <td>4 Social security tax witheld</td>
                    <td>{dollarUS.format(w2dd.W2FTWH)}</td>
                </tr>
                <tr>
                    <td>5 Medicare wages and tips</td>
                    <td>{dollarUS.format(w2dd.W2FICM)}</td>
                    <td>6 Medicare tax witheld</td>
                    <td>{dollarUS.format(w2dd.W2FMWH)}</td>
                </tr>
                <tr>
                    <td>7 Social security tips</td>
                    <td>{dollarUS.format(w2dd.W2FICT)}</td>
                    <td>8 Allocated tips</td>
                    <td>{dollarUS.format(w2dd.W2ALOT)}</td>
                </tr>
                <tr>
                    <td>10 Dependent care benefits</td>
                    <td>{dollarUS.format(w2dd.W2DCC)}</td>
                    <td>11 Nonqualified plans</td>
                    <td>{dollarUS.format(w2dd.W2N457)}</td>
                </tr>
                <tr>
                    <td>12a {w2dd.W2DCH1}</td>
                    <td>{dollarUS.format(w2dd.W2DAMT)}</td>
                    <td>12b {w2dd.W2DCH2}</td>
                    <td>{dollarUS.format(w2dd.W2DAM2)}</td>
                </tr>
                <tr>
                    <td>12c {w2dd.W2DCH3}</td>
                    <td>{dollarUS.format(w2dd.W2DAM3)}</td>
                    <td>12d {w2dd.W2DCH4}</td>
                    <td>{dollarUS.format(w2dd.W2DAM4)}</td>
                </tr>
                <tr>
                    <td>13 Retirement</td>
                    <td>{w2dd.W2RET}</td>
                    <td>14 Other {w2dd.W2MSG1}</td>
                    <td>{dollarUS.format(w2dd.W2B181)}</td>
                </tr>
                <tr>
                    <td>14 Other {w2dd.W2MSG2}</td>
                    <td>{dollarUS.format(w2dd.W2B182)}</td>
                    <td>14 Other {w2dd.W2MSG3}</td>
                    <td>{dollarUS.format(w2dd.W2B183)}</td>
                </tr>
            </tbody>
        )
    })

    return <div className={"mainContainer"}>
        <div className={"titleContainer"}>
            <div>Show W2 Details</div>
        </div>
        <br />
        <div className={"attTableContainer"}>
            <table>
                <thead className={"thatt"}>
                    <tr>
                        <th colSpan="4">Employee Number: {employeeNumber}</th>
                    </tr>
                    <tr>
                        <th colSpan="4">Employee Name: {empName}</th>
                    </tr>
                    <tr>
                        <th colSpan="4">Form W2 {W2CLYR}</th>
                    </tr>
                </thead>
                {w2dFormatted}
            </table>
        </div>
        <div className={"inputContainer"}>
            <input
                className={"inputButton"}
                type="button"
                onClick={showW2sButtonClick}
                value={"Show W2s"} />
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

export default ShowW2Details