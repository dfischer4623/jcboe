import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ShowEmployee = (props) => {

    const { loggedIn, email, employeeNumber, ed, setEmployeeData } = props

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
        if (!loggedIn) {
            localStorage.removeItem("user")
            props.setLoggedIn(false)
            navigate("/")
        }
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
    }, [])

    if (ed === null) {
        return <h1>Loading...</h1>
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

    var zipCodeP = ed.EMPZP1.toString();
    if (zipCodeP.length !== 5) {
        zipCodeP = '0' + zipCodeP;
    }

    var EMVETC = null
    if (ed.EMVETC == 'DSTSTM') {
        EMVETC = 'DESERT STORM'
    }

    if (ed.TRD == '00/00/1900' || ed.TRD == '00/00/2000') {
        ed.TRD = ''
    }

    if (ed.SCD == '00/00/0000' || ed.SCD == '00/00/1900' || ed.SCD == '00/00/2000') {
        ed.SCD = ''
    }

    if (ed.EMADAT !== 0) {
        var dateString = ed.EMADAT.toString();
        var year = dateString.substring(0, 2);
        if (year > '30') {
            year = '19'+year
        } else {
            year = '20'+year
        }
        var month = dateString.substring(2, 4);
        var day = dateString.substring(4, 6);
        var EMADAT = month+'/'+day+'/'+year
    } else {
        EMADAT = ''
    }

    if (ed.EMSRDT !== 0) {
        var dateString = ed.EMSRDT.toString();
        var year = dateString.substring(0, 2);
        if (year > '30') {
            year = '19'+year
        } else {
            year = '20'+year
        }
        var month = dateString.substring(2, 4);
        var day = dateString.substring(4, 6);
        var EMSRDT = month+'/'+day+'/'+year
    } else {
        EMSRDT = ''
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
                        <td>Number: {ed.EMSSAN}</td>
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
                    <tr>
                        <td>Address: {ed.EMPAD1}</td>
                        <td>{ed.EMPAD2}</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>City/State/Zip: {ed.EMPCTY}, {ed.EMPST} {zipCodeP}</td>
                        <td>Country: {ed.EMPCTR}</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Class: {ed.EMCLS} </td>
                        <td>Veteran: {ed.EMVETC}</td>
                        <td>Veteran Code: {EMVETC} </td>
                    </tr>
                    <tr>
                        <td>Drug Test?: {ed.EMDRUG} </td>
                        <td>Date Administered: {ed.EMDTDT}</td>
                        <td>Date Failed: {ed.EMDFDT}</td>
                    </tr>
                    <tr>
                        <td>Spouse: {ed.EMSPSE} {ed.EMMNSP} {ed.EMLNSP}</td>
                        <td>Social Security #: {ed.EMSPS}</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Previous Service Credit: {ed.EMPREV}</td>
                        <td>District: {ed.EMSDST}</td>
                        <td>State: {ed.EMSST}</td>
                    </tr>
                    <tr>
                        <td>Application Date: {EMADAT}</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Full Time Hire Date: {ed.HID}</td>
                        <td></td>
                        <td>Seniority Date: {EMSRDT}</td>
                    </tr>
                    <tr>
                        <td>Original Hire Date: {ed.OHD}</td>
                        <td></td>
                        <td>Seniority Number: {ed.EMSR}</td>
                    </tr>
                    <tr>
                        <td>Termination Date: {ed.TRD}</td>
                        <td></td>
                        <td>Salary Change Date: {ed.SCD}</td>
                    </tr>
                    <tr>
                        <td>Title Change Date: {ed.HID}</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Permanent Civil Service Date:</td>
                        <td></td>
                        <td>Leave without Pay: N</td>
                    </tr>
                    <tr>
                        <td>Last Update for Longevity: {ed.EMMSC1}</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Next Update for Longevity: {ed.EMMSC2}</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Total Year of Longevity: {ed.EMMSC3}</td>
                        <td></td>
                        <td></td>
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