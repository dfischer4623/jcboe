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

    function normalize(phone) {
        //normalize string and remove all unnecessary characters
        phone = phone.replace(/[^\d]/g, "");

        //check if number length equals to 10
        if (phone.length === 7) {
            //reformat and return phone number
            return phone.replace(/(\d{3})(\d{4})/, "$1-$2");
        }

        return null;
    }

    var phone = ed.EMOTL2.toString();
    var ophone = normalize(phone);

    phone = ed.EMHTL2.toString();
    var hphone = normalize(phone);

    var zipCode = ed.EMZIP1.toString();
    if (zipCode.length !== 5) {
        zipCode = '0' + zipCode;
    }

    return <div className={"mainContainer"}>
        <div className={"titleContainer"}>
            <div>Show Employee</div>
        </div>
        <br />
        <div className={"empTableContainer"}>
            <tr>
                <th></th>
                <th></th>
                <th></th>
            </tr>
            <tr>
                <td>Number: {employeeNumber}</td>
                <td>Active: {ed.EMSTAT}</td>
                <td></td>
            </tr>
            <tr>
                <td>Name: {ed.EMLNAM}, {ed.EMFNAM} {ed.EMMNAM}</td>
                <td>Office Phone: ({ed.EMOTL0}) {ophone} ext. {ed.EMEXTN} {ed.EMOTLS}</td>
                <td>Home Phone: ({ed.EMHTL0}) {hphone} {ed.EMHTLS}</td>
            </tr>
            <tr>
                <td>Preferred: {ed.EMPNAM}</td>
                <td>Name Prefix: {ed.EMNPRE}</td>
                <td>Name Suffix: {ed.EMNSUF}</td>
            </tr>
            <tr>
                <td>Birth Date: {ed.DOB}</td>
                <td>Gender: {ed.EMSEX}</td>
                <td>Ethnic Code: {ed.EMETH}</td>
            </tr>
            <tr>
                <td>Address: {ed.EMADD1}</td>
                <td>{ed.EMADD2}</td>
                <td>Address Security: {ed.EMADSC}</td>
            </tr>
            <tr>
                <td>City/State/Zip: {ed.EMCITY}, {ed.EMST} {zipCode}</td>
                <td></td>
                <td>Permanent Address: {ed.EM}</td>
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