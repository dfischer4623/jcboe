import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const MiscData = (props) => {

    const { loggedIn, email, employeeNumber, empName, md, setMiscData } = props

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
        console.log(loggedIn)
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:8080/api/employees/miscdata/${employeeNumber}`);
                const resData = await response.json()
                setMiscData(resData)
                console.log('resData: ' + resData)
            }
            catch (error) {
                console.log("error", error);
                navigate("/showEmployee")
            }
        }
        fetchData()
    }, [])

    if (md === null) {
        return <h1>Loading...</h1>
    }

    let miscDataFormatted = md.map((mdd) => {
        return (
            <tr key={mdd.PC}>
                <td>{mdd.PCTID}</td>
                <td>{mdd.PCCOL1}</td>
                <td>{mdd.PCCOL2}</td>
                <td>{mdd.PCCOL3}</td>
                <td>{mdd.PCCOL4}</td>
                <td>{mdd.PCCOL5}</td>
                <td>{mdd.PCCOL6}</td>
                <td>{mdd.PCCOL7}</td>
            </tr>

        )
    })

    return <div className={"mainContainer"}>
        <div className={"titleContainer"}>
            <div>Employee Misc Data</div>
        </div>
        <br />
        <div>
            <table>
                <thead>
                    <tr>
                        <th colSpan="8">Employee Number: {employeeNumber}</th>
                    </tr>
                    <tr>
                        <th colSpan="8">Employee Name: {empName}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Line#</td>
                        <td>Column 1</td>
                        <td>Column 2</td>
                        <td>Column 3</td>
                        <td>Column 4</td>
                        <td>Column 5</td>
                        <td>Column 6</td>
                        <td>Column 7</td>
                    </tr>
                    {miscDataFormatted}
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

export default MiscData