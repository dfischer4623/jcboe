import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AbsenceLeaveCodes = (props) => {

    const { loggedIn, email, alc, setAbsenceLeaveCodes } = props
    
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
                const response = await fetch(`https://as400.jcboe.org:8080/api/employees/ppay121s`);
                const resData = await response.json()
                setAbsenceLeaveCodes(resData)
            }
            catch (error) {
                console.log("error", error);
                navigate("/payrollTables")
            }
        }
        fetchData()
    }, [])

    if (alc === null) {
        return <h1>Loading...</h1>
    }

    let absenceLeaveCodesFormatted = alc.map((alcd, i) => {
        
        return (
            <tr key={i}>
                <td>{alcd.ABKEY}</td>
                <td>{alcd.ABDESC}</td>
            </tr>

        )
    })

    return <div className={"mainContainer"}>
        <div className={"titleContainer"}>
            <div>Absence/Leave</div>
        </div>
        <br />
        <div>
            <table>
                <tbody>
                    <tr>
                        <td>Code</td>
                        <td>Description</td>
                    </tr>
                    {absenceLeaveCodesFormatted}
                </tbody>
            </table>
        </div>
        <br />
        <br />
        <div>Your email is {email}</div>
    </div >
}

export default AbsenceLeaveCodes