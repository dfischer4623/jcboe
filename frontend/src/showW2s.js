import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ShowW2s = (props) => {

    const { loggedIn, email, employeeNumber, ssn, w2s, setW2s,  empName, setW2ID } = props

    const navigate = useNavigate();

    // const showEmployeeButtonClick = () => {
    //     navigate("/showEmployee")
    // }

    // const employeeSearchButtonClick = () => {
    //     navigate("/employeeSearch")
    // }

    // const mainButtonClick = () => {
    //     navigate("/main")
    // }

    // const logoutButtonClick = () => {
    //     localStorage.removeItem("user")
    //     props.setLoggedIn(false)
    //     navigate("/")
    // }

    useEffect(() => {
        if (!loggedIn) {
            localStorage.removeItem("user")
            props.setLoggedIn(false)
            navigate("/")
        }
        const fetchData = async () => {
            try {
                const response = await fetch(`https://as400.jcboe.org:8080/api/employees/pfrs860s/${ssn}`);
                const resData = await response.json()
                setW2s(resData)
            }
            catch (error) {
                console.log("error", error);
                navigate("/showEmployee")
            }
        }
        fetchData()
    }, [])

    if (w2s === null) {
        return <h1>Loading...</h1>
    }

    let dollarUS = Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    });

    const w2Selected = (W2CLYR, W2ESTB) => {
        const w2ido = {
            SSN:ssn,
            YEAR: W2CLYR,
            ESTB: W2ESTB,
        }
        setW2ID(w2ido)
        navigate("/showW2Details")
    }

    let w2sFormatted = w2s.map((w2sd, i) => {
        if(w2sd.W2CLYR<10) {
            var W2CLYR = '200'+w2sd.W2CLYR     
        } else {
            W2CLYR = '20'+w2sd.W2CLYR
        }
        return (
            <tr key={i}>
             
                <td><a href="#" onClick={() => w2Selected(w2sd.W2CLYR, w2sd.W2ESTB)}>
                    {W2CLYR}</a></td>
                <td>{dollarUS.format(w2sd.W2WAGE)}</td>
                <td>{dollarUS.format(w2sd.W2FICW)}</td>
                <td>{dollarUS.format(w2sd.W2FICM)}</td>
                <td>{dollarUS.format(w2sd.W2FEDT)}</td>
                <td>{dollarUS.format(w2sd.W2FTWH )}</td>
                <td>{dollarUS.format(w2sd.W2FMWH )}</td>
            </tr>
        )
    })

    return <div className={"mainContainer"}>
        <div className={"titleContainer"}>
            <div>W2s</div>
        </div>
        <br />
        <div>
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
                    {w2sFormatted}
                </tbody>
            </table>
        </div>
        <br />
        <div>Your email is {email}</div>
    </div>
}

export default ShowW2s