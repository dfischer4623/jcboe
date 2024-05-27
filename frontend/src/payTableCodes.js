import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PayTableCodes = (props) => {

    const { loggedIn, email, ptc, setPayTableCodes } = props
    
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
                const response = await fetch(`https://as400.jcboe.org:8080/api/employees/ppay125s`);
                const resData = await response.json()
                setPayTableCodes(resData)
            }
            catch (error) {
                console.log("error", error);
                navigate("/payrollTables")
            }
        }
        fetchData()
    }, [])

    if (ptc === null) {
        return <h1>Loading...</h1>
    }

    let payTableCodesFormatted = ptc.map((ptcd, i) => {
        
        return (
            <tr key={i}>
                <td>{ptcd.PHKEY}</td>
                <td>{ptcd.PHDESC}</td>
            </tr>

        )
    })

    return <div className={"mainContainer"}>
        <div className={"titleContainer"}>
            <div>Pay Table</div>
        </div>
        <br />
        <div>
            <table>
                <tbody>
                    <tr>
                        <td>Code</td>
                        <td>Description</td>
                    </tr>
                    {payTableCodesFormatted}
                </tbody>
            </table>
        </div>
        <br />
        <div>Your email is {email}</div>
    </div >
}

export default PayTableCodes