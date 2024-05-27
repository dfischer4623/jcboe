import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const MiscData = (props) => {

    const { loggedIn, email, employeeNumber, empName, td, setTags } = props

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
        const fetchData = async () => {
            try {
                const response = await fetch(`https://as400.jcboe.org:8080/api/employees/tags/${employeeNumber}`);
                const resData = await response.json()
                setTags(resData)
            }
            catch (error) {
                console.log("error", error);
                navigate("/showEmployee")
            }
        }
        fetchData()
    }, [])

    if (td === null) {
        return <h1>Loading...</h1>
    }

    let tagsFormatted = td.map((tdd, i) => {

        if (tdd.PADATE !== 0) {
            var dateString = tdd.PADATE.toString()
            var century = tdd.PACENT.toString()
            if (dateString.length === 5) {
                var year = century + '0' + dateString.substring(0, 1)
                var month = dateString.substring(1, 3)
                var day = dateString.substring(3, 5);
            } else {
                year = century + dateString.substring(0, 2)
                month = dateString.substring(2, 4);
                day = dateString.substring(4, 6);
            }
            var PADATE = month + '/' + day + '/' + year
        } else {
            PADATE = ''
        }

        return (
            <tr key={i}>
                <td>{tdd.PATID}</td>
                <td>{PADATE}</td>
                <td>{tdd.PADATA}</td>
            </tr>

        )
    })

    return <div className={"mainContainer"}>
        <div className={"titleContainer"}>
            <div>Employee Tag Data</div>
        </div>
        <br />
        <div>
            <table>
                <thead>
                    <tr>
                        <th colSpan="3">Employee Number: {employeeNumber}</th>
                    </tr>
                    <tr>
                        <th colSpan="3">Employee Name: {empName}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Tag ID</td>
                        <td>Date</td>
                        <td>Data</td>
                    </tr>
                    {tagsFormatted}
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