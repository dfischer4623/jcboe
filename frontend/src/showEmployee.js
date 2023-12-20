import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ShowEmployee = (props) => {

    const { email, employeeNumber, ed, setEmployeeData } = props

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

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:8080/api/employees/${employeeNumber}`);
                const resData = await response.json()   
                setEmployeeData(resData)       
            }
            catch (error) {
                console.log("error", error);
                navigate("/employeeSearch")
            }
        }
        fetchData()
    },[employeeNumber])

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
            <table>
                <thead>
                    <tr>
                        <th> </th>
                        <th> </th>
                        <th> </th>
                    </tr>
                </thead>
                <tbody>
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
                        <td>Ethnic Code: {ed.EMETH} {ed.ETDESC}</td>
                    </tr>
                    <tr>
                        <td>Address: {ed.EMADD1}</td>
                        <td>{ed.EMADD2}</td>
                        <td>Address Security: {ed.EMADSC}</td>
                    </tr>
                    <tr>
                        <td>City/State/Zip: {ed.EMCITY}, {ed.EMST} {zipCode}</td>
                        <td>Country: {ed.EMCTRY}</td>
                        <td>Permanent Address: Y</td>
                    </tr>
                    <tr>
                        <td>Location: {ed.EMLOC} {ed.LCNAME}</td>
                        <td></td>
                        <td>District: {ed.EMHDT}</td>
                    </tr>
                    <tr>
                        <td>Sublocation: {ed.EMLOC2} {ed.CLNAME}</td>
                        <td></td>
                        <td>School: {ed.EMHSC}</td>
                    </tr>
                    <tr>
                        <td>Pay Location: {ed.EMLOCP} {ed.LPNAME}</td>
                        <td></td>
                        <td>Department: {ed.EMDEPT}</td>
                    </tr>
                    <tr>
                        <td>Assignment: {ed.EMPASN} {ed.JDTITL}</td>
                        <td></td>
                        <td>Room: {ed.EMROOM}</td>
                    </tr>
                </tbody>
            </table>
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