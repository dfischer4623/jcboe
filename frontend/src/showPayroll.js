import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ShowPayroll = (props) => {

    const { loggedIn, email, employeeNumber, pd, setPayrollData, setCheckID, empName } = props

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
                const response = await fetch(`https://as400.jcboe.org:8080/api/employees/payroll/${employeeNumber}`);
                const resData = await response.json()
                setPayrollData(resData)
            }
            catch (error) {
                console.log("error", error);
                navigate("/showEmployee")
            }
        }
        fetchData()
    }, [])

    if (pd === null) {
        return <h1>Loading...</h1>
    }

    let dollarUS = Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    });

    const checkSelected = (PCSSN, PCRUN, CHECK, CHKDT) => {
        const ckido = {
            SSN: PCSSN,
            RUN: PCRUN,
            CHECK: CHECK,
            CHKDT: CHKDT
        }
        setCheckID(ckido)
        navigate("/showPayrollCheck")
    }

    let payrollFormatted = pd.map((pdd, i) => {
        var HRCKDT = pdd.HRCKDT
        var dateString = HRCKDT.toString();
        if (dateString !== '') {
            if (dateString.length === 3) {
                var month = '0' + dateString.substring(0, 1);
                var day = dateString.substring(1, 3);
                var year = '2000'
            } else if (dateString.length === 4) {
                month = dateString.substring(0, 2);
                day = dateString.substring(2, 4);
                year = '2000'
            } else if (dateString.length === 5) {
                month = dateString.substring(1, 3);
                day = dateString.substring(3, 5);
                year = '200' + dateString.substring(0, 1);
            } else if (dateString.length === 6) {
                month = dateString.substring(2, 4);
                day = dateString.substring(4, 6);
                year = dateString.substring(0, 2);
                if (year > '30') {
                    year = '19' + year
                } else {
                    year = '20' + year
                }
            } else {
                month = '12'
                day = '31'
                year = '9999'
            }
            HRCKDT = month + '/' + day + '/' + year
        } else {
            HRCKDT = ''
        }
        return (
            <tr key={pdd.PCRUN}>
                <td>{HRCKDT}</td>
                <td><a href="#" onClick={() => checkSelected(pdd.PCSSN, pdd.PCRUN, pdd.PCCK, HRCKDT)}>
                    {pdd.PCCK}</a></td>
                <td>{pdd.HRFRM2}</td>
                <td>{dollarUS.format(pdd.PCAMT)}</td>
            </tr>
        )
    })

    return <div className={"mainContainer"}>
        <div className={"titleContainer"}>
            <div>Payroll</div>
        </div>
        <br />
        <div>
            <table>
                <thead>
                    <tr>
                        <th colSpan="4">Employee Number: {employeeNumber}</th>
                    </tr>
                    <tr>
                        <th colSpan="4">Employee Name: {empName}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Check Date</td>
                        <td>Check #</td>
                        <td>Form</td>
                        <td>Check Amt</td>
                    </tr>
                    {payrollFormatted}
                </tbody>
            </table>
        </div>
        <br />
        <div>Your email is {email}</div>
    </div>
}

export default ShowPayroll