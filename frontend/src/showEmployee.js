import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ShowEmployee = (props) => {

    const { email, employeeNumber } = props

    const navigate = useNavigate();

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

    const [ed, setEmployeeData] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`http://localhost:8080/api/peis301s/${employeeNumber}`)
            const resData = await response.json()
            setEmployeeData(resData)
        }
        fetchData()
    }, [employeeNumber])

    console.log(ed)

    if (ed === null) {
        return <h1>Loading</h1>
    }

    return <div className={"mainContainer"}>
        <div className={"titleContainer"}>
            <div>Show Employee</div>
        </div>
        <br />
        <div className={"empTableContainer"}>
            <tr>
                <td>Number {employeeNumber}</td>
                <td>Second Column</td>
                <td>Third Column</td>
            </tr>
            <tr>
                <td>Name {ed.EMLNAM}, {ed.EMFNAM} {ed.EMMNAM}</td>
                <td>Second Column</td>
                <td>Third Column</td>
            </tr>
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

export default ShowEmployee