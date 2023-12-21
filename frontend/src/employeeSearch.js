import { useState } from "react";
import { useNavigate } from "react-router-dom";

const EmployeeSearch = (props) => {

    const { email, employeeNumber, setEmployeeNumber } = props

    const navigate = useNavigate();

    const [ed, setEmployeeData] = useState(null)

    const onENButtonClick = () => {

        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:8080/api/employees/${employeeNumber}`);
                const resData = await response.json()
                setEmployeeData(resData)
            }
            catch (error) {
                console.log("error", error);
                window.alert(`Wrong Employee Number ` + employeeNumber)
                setEmployeeData("error")
            }
            console.log(employeeNumber)
            console.log(ed)

            if (ed === "error") {
                navigate("/employeeSearch")
            } else {
                navigate("/showEmployee")
            }
        }
        fetchData()
    }

    const mainButtonClick = () => {
        navigate("/main")
    }

    const logoutButtonClick = () => {
        localStorage.removeItem("user")
        props.setLoggedIn(false)
        navigate("/")
    }

    if (ed === null) {
        //return <h1>Loading...</h1>
    }

    return <div className={"mainContainer"}>
        <div className={"titleContainer"}>
            <div>Employee Search</div>
        </div>
        <br />
        <div className={"inputButtonContainer"}>
            <input
                value={employeeNumber}
                placeholder="Enter Employee Number"
                onChange={ev => setEmployeeNumber(ev.target.value)}
                className={"inputBox"} />
            <input
                className={"inputButton"}
                type="button"
                onClick={onENButtonClick}
                value={"Show Employee Information"} />
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

export default EmployeeSearch