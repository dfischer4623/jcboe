import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Salaries = (props) => {

    const { loggedIn, email, employeeNumber, empName, vd, setVolDeductions } = props
    let holdYear = null
    let first = true
    let j = 99999

    const navigate = useNavigate();

    // const showEmployeeButtonClick = () => {
    //     navigate("/showEmployee")
    // }

    // const employeeSearchButtonClick = () => {
    //     navigate("/employeeSearch")
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
                const response = await fetch(`https://as400.jcboe.org:8080/api/employees/voldeductions/${employeeNumber}`);
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

    function blankLineFunction(j) {
        return (
            <tr key={j}>
                <td>-----</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        ) 
    }

    let voldeductionsFormatted = vd.map((vdd, i) => {
        if (vdd.schyear != holdYear) {
            holdYear=vdd.schyear
            if (first === true) {
                first = false
            } else {
                j++
                return(blankLineFunction(j))
            }

        } 
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
            <div>Voluntary Deductions</div>
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
        <div>Your email is {email}</div>
    </div >
}

export default Salaries