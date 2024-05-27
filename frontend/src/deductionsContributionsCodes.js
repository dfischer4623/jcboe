import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const DeductionsContributionsCodes = (props) => {

    const { loggedIn, email, dcc, setDeductionsContributionsCodes } = props
    
    const navigate = useNavigate();
    
    // const payrollTablesButtonClick = () => {
    //     navigate("/payrollTables")
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
                const response = await fetch(`https://as400.jcboe.org:8080/api/employees/ppay122s`);
                const resData = await response.json()
                setDeductionsContributionsCodes(resData)
            }
            catch (error) {
                console.log("error", error);
                navigate("/payrollTables")
            }
        }
        fetchData()
    }, [])

    if (dcc === null) {
        return <h1>Loading...</h1>
    }

    let deductionsContributionsCodesFormatted = dcc.map((dccd, i) => {
        
        return (
            <tr key={i}>
                <td>{dccd.DDTABL}</td>
                <td>{dccd.DDHDES}</td>
            </tr>

        )
    })

    return <div className={"mainContainer"}>
        <div className={"titleContainer"}>
            <div>Deductions/Contributions</div>
        </div>
        <br />
        <div>
            <table>
                <tbody>
                    <tr>
                        <td>Code</td>
                        <td>Description</td>
                    </tr>
                    {deductionsContributionsCodesFormatted}
                </tbody>
            </table>
        </div>
        <br />
        <div>Your email is {email}</div>
    </div >
}

export default DeductionsContributionsCodes