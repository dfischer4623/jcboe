import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const EmployeeName = (props) => {

    const { loggedIn, email, setEmployeeNumber, employeeName, es, setEmployeeNames } = props

    const navigate = useNavigate();

    // const employeeSearchButtonClick = () => {
    //     navigate("/employeeSearch")
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
                const response = await fetch(`https://as400.jcboe.org:8080/api/employees/?name=${employeeName}`);
                const resData = await response.json()
                setEmployeeNames(resData)
                //console.log(resData)
            }
            catch (error) {
                console.log("error", error);
                navigate("/employeeSearch")
            }
        }
        fetchData()
    }, [])

    const employeeSelected = (key) => {
        setEmployeeNumber(key)
        navigate("/showEmployee")
    }

    let employeesFormatted = es.map((ess) => {
        return (
            <tr key={ess.EMSSAN}>
                <td><a href="#" onClick={() => employeeSelected(ess.EMSSAN)}>
                    {ess.EMSSAN}
                </a></td>
                <td>{ess.EMLNAM}</td>
                <td>{ess.EMFNAM}</td>
                <td>{ess.LCNAME}</td>
                <td>{ess.EMSTAT}</td>
            </tr>

        )
    })

    return <div className={"mainContainer"}>
        <div className={"titleContainer"}>
            <div>Employee Name Search</div>
        </div>
        <br />
        <div>
            <table>
                <thead>
                    <tr>
                        <th colSpan="5">Search Name: {employeeName}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Emp #</td>
                        <td>Last Name</td>
                        <td>First Name</td>
                        <td>Location</td>
                        <td>Active</td>
                    </tr>
                    {employeesFormatted}
                </tbody>
            </table>
        </div>
        <br />
        <div>Your email is {email}</div>
    </div >
}

export default EmployeeName