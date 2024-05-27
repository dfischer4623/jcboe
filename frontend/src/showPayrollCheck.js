import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

let grossPay = 0
let deductions = 0
let netPay = 0

const ShowPayroll = (props) => {

    const { loggedIn, email, employeeNumber, pcd, setPayrollCheckData, cid, empName, pcddd, setPayrollDeductionData } = props

    const navigate = useNavigate();

    // const showPayrollButtonClick = () => {
    //     navigate("/showPayroll")
    // }

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
                const response = await fetch(`https://as400.jcboe.org:8080/api/employees/payrollCheck/?SSN=${cid.SSN}&RUN=${cid.RUN}`);
                const resData = await response.json()
                setPayrollCheckData(resData)
            }
            catch (error) {
                console.log("error", error);
                navigate("/showPayroll")
            }

            try {
                const response = await fetch(`https://as400.jcboe.org:8080/api/employees/payrollCheckDeductions/?SSN=${cid.SSN}&RUN=${cid.RUN}`);
                const resData = await response.json()
                setPayrollDeductionData(resData)
            }
            catch (error) {
                console.log("error", error);
                navigate("/showPayroll")
            }

        }
        fetchData()
    }, [])

    if (pcd === null || pcddd === null) {
        return <h1>Loading...</h1>
    }

    let dollarUS = Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    });

    let payrollCheckHeaderFormatted = function () {

        grossPay = 0
        deductions = 0

        pcd.forEach(function (item) {
            grossPay += Number(item.PACUR);
        });

        pcddd.forEach(function (item) {
            deductions += Number(item.DEAMT);
        });

        netPay = grossPay + deductions

    }

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

    let payrollDeductionFormatted = pcddd.map((pcdddd, i) => {

        return (
            <tr key={i}>
                <td>{pcdddd.DEDESC}</td>
                <td>{pcdddd.DECODE}</td>
                <td>{pcdddd.DEJUR}</td>
                <td>{pcdddd.DETYP}</td>
                <td>{dollarUS.format(pcdddd.DECAL)}</td>
                <td>{dollarUS.format(pcdddd.DEAMT)}</td>
            </tr>
        )
    })

    return <div className={"mainContainer"}>
        <div className={"titleContainer"}>
            <div>Payroll Check</div>
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
                    {payrollCheckHeaderFormatted()}
                    <tr>
                        <th colSpan="6">Check #: {cid.CHECK} Check Date: {cid.CHKDT}</th>
                    </tr>
                    <tr>
                        <th colSpan="6">Gross Pay: {dollarUS.format(grossPay)} Deductions: {dollarUS.format(deductions)} Net Pay: {dollarUS.format(netPay)} </th>
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
                    {payrollDeductionFormatted}
                </tbody>
            </table>
        </div>
        <br />
        <div>Your email is {email}</div>
    </div>
}

export default ShowPayroll