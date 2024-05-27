import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Salaries = (props) => {

    const { loggedIn, email, employeeNumber, empName, sd, setSalaries } = props

    const navigate = useNavigate();

    // const showEmployeeButtonClick = () => {
    //     navigate("/showEmployee")
    // }

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
                const response = await fetch(`https://as400.jcboe.org:8080/api/employees/salaries/${employeeNumber}`);
                const resData = await response.json()
                setSalaries(resData)
            }
            catch (error) {
                console.log("error", error);
                navigate("/showEmployee")
            }
        }
        fetchData()
    }, [])

    if (sd === null) {
        return <h1>Loading...</h1>
    }

    let dollarUS = Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    });
    

    let salariesFormatted = sd.map((sdd, i) => {
        return (
            <tr key={i}>
                <td>{sdd.SCHYEAR}</td>
                <td>{sdd.EMLOC}</td>
                <td>{sdd.ASJD}</td>
                <td>{sdd.ASSTAB}</td>
                <td>{sdd.ASGRAD}</td>
                <td>{sdd.ASSTEP}</td>
                <td>{dollarUS.format(sdd.SALARY)}</td>
                <td>{sdd.JDTITL}</td>
            </tr>

        )
    })

    return <div className={"mainContainer"}>
        <div className={"titleContainer"}>
            <div>Salaries</div>
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
                    <tr> </tr>
                    <tr> </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>School Year Ending</td>
                        <td>Location</td>
                        <td>Job Code</td>
                        <td>Pay Table</td>
                        <td>Pay Grade</td>
                        <td>Pay Step</td>
                        <td>Salary</td>
                        <td>Job Title</td>
                    </tr>
                    {salariesFormatted}
                </tbody>
            </table>
        </div>
        <br />
        <div>Your email is {email}</div>
    </div >
}

export default Salaries