import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";

const EmployeeSearch = (props) => {

    const { loggedIn, email, employeeNumber, employeeName, setEmployeeNumber, setEmployeeName, setEmployeeNames } = props

    const navigate = useNavigate();

    useEffect(() => {
        if (!loggedIn) {
            localStorage.removeItem("user")
            props.setLoggedIn(false)
            navigate("/")
        }
    })

    const onENButtonClick = async () => {
        let resData = null
        try {
            const response = await fetch(`https://as400.jcboe.org:8080/api/employees/${employeeNumber}`);
            resData = await response.json()
            if (resData.EMSSAN == employeeNumber) {
                navigate("/showEmployee")
            } else {
                window.alert(`Wrong Employee Number ` + employeeNumber)
            }
        }
        catch (error) {
            console.log(error);
            window.alert(`Wrong Employee Number ` + employeeNumber)
        }
    }

    const onENameButtonClick = async () => {
        let resData = null
        try {
            const response = await fetch(`https://as400.jcboe.org:8080/api/employees/?name=${employeeName}`);
            resData = await response.json()
            setEmployeeNames(resData)
            //console.log(resData)
            if (resData.length > 0 && employeeName !== '') {
                navigate("/employeeName")
            } else {
                window.alert(`No employees found with name ` + employeeName)
            }
        }
        catch (error) {
            console.log("error", error);
            navigate("/employeeSearch")
        }
    }

    // const mainButtonClick = () => {
    //     navigate("/main")
    // }

    // const logoutButtonClick = () => {
    //     localStorage.removeItem("user")
    //     props.setLoggedIn(false)
    //     navigate("/")
    // }

    return <div className={"mainContainer"}>
        <div className={"titleContainer"}>
            <div>AS/400 Data</div>
        </div>
        <br />
        <div className={"titleContainer"}>
            <div>Employee Search</div>
        </div>
        <br />
        <div className={"inputButtonContainer"}>
            <input
                value={employeeName}
                placeholder="Employee Last Name"
                onChange={ev => setEmployeeName(ev.target.value)}
                className={"inputBox"} />
            <input
                className={"inputButton"}
                type="button"
                onClick={onENameButtonClick}
                value={"Employee Name Search"} />
        </div>
        <br></br>
        <div className={"inputButtonContainer"}>
            <input
                value={employeeNumber}
                placeholder="Employee Number"
                onChange={ev => setEmployeeNumber(ev.target.value)}
                className={"inputBox"} />
            <input
                className={"inputButton"}
                type="button"
                onClick={onENButtonClick}
                value={"Choose Employee"} />
        </div>
        <br />
        <div>Your email is {email}</div>
    </div>
}

export default EmployeeSearch