import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ShowPayroll = (props) => {

    const { loggedIn, email, employeeNumber, w2d, setW2Details,  empName, w2ido } = props

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
            const ssn=w2ido.SSN
            const estb=w2ido.ESTB
            const year=w2ido.YEAR
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

    let dollarUS = Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    });

    let w2dFormatted = w2d.map((w2dd, i) => {
        if(w2dd.W2CLYR<10) {
            var W2CLYR = '200'+w2dd.W2CLYR     
        } else {
            W2CLYR = '20'+w2dd.W2CLYR
        }
        return (
            <tr key={i}>
             
                <td>{W2CLYR}</td>
                <td>{dollarUS.format(w2dd.W2WAGE)}</td>
                <td>{dollarUS.format(w2dd.W2FICW)}</td>
                <td>{dollarUS.format(w2dd.W2FICM)}</td>
                <td>{dollarUS.format(w2dd.W2FEDT)}</td>
                <td>{dollarUS.format(w2dd.W2FTWH )}</td>
                <td>{dollarUS.format(w2dd.W2FMWH )}</td>
            </tr>
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
                        <th colSpan="7">Employee Number: {employeeNumber}</th>
                    </tr>
                    <tr>
                        <th colSpan="7">Employee Name: {empName}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Tax</td>
                        <td>Federal</td>
                        <td>FICA</td>
                        <td>Medicare</td>
                        <td>Federal</td>
                        <td>FICA</td>
                        <td>Medicare</td>
                    </tr>
                    <tr>
                        <td>Year</td>
                        <td>Wages</td>
                        <td>Wages</td>
                        <td>Wages</td>
                        <td>Withheld</td>
                        <td>Withheld</td>
                        <td>Withheld</td>
                    </tr>
                    {w2dFormatted}
                </tbody>
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

export default ShowPayroll