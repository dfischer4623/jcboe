import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ShowEmployee = (props) => {

    const { loggedIn, email, employeeNumber, ed, setEmployeeData, setEmpName, setSsn } = props

    const navigate = useNavigate();

    useEffect(() => {
        if (!loggedIn) {
            localStorage.removeItem("user")
            props.setLoggedIn(false)
            navigate("/")
        }

        if (employeeNumber == "") {
            navigate("/employeeSearch")
        }

        const fetchData = async () => {
            try {
                const response = await fetch(`https://as400.jcboe.org:8080/api/employees/${employeeNumber}`);
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

    if (ed.EMMNAM == null) {
        ed.EMMNAM = " "
    }
    var empNameX = ed.EMLNAM + ', ' + ed.EMFNAM + ' ' + ed.EMMNAM
    setEmpName(empNameX)
    setSsn(ed.EMPSSN)

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

    if (ed.EMSEX == 'F') {
        var GENDER = 'FEMALE'
    } else if (ed.EMSEX == 'M') {
        GENDER = 'MALE'
    } else {
        GENDER = 'OTHER'
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
            year = '19' + year
        } else {
            year = '20' + year
        }
        var month = dateString.substring(2, 4);
        var day = dateString.substring(4, 6);
        var EMADAT = month + '/' + day + '/' + year
    } else {
        EMADAT = ''
    }

    if (ed.EMSRDT !== 0) {
        dateString = ed.EMSRDT.toString();
        year = dateString.substring(0, 2);
        if (year > '30') {
            year = '19' + year
        } else {
            year = '20' + year
        }
        month = dateString.substring(2, 4);
        day = dateString.substring(4, 6);
        var EMSRDT = month + '/' + day + '/' + year
    } else {
        EMSRDT = ''
    }

    if (ed.ETMDAT !== 0) {
        dateString = ed.ETMDAT.toString();
        if (dateString.length === 5) {
            year = dateString.substring(3, 5)
            month = '0' + dateString.substring(0, 1);
            day = dateString.substring(1, 3);
        } else {
            year = dateString.substring(4, 6)
            month = dateString.substring(0, 2);
            day = dateString.substring(2, 4);
        }
        if (year > '30') {
            year = '19' + year
        } else {
            year = '20' + year
        }
        var ETMDAT = month + '/' + day + '/' + year
    } else {
        ETMDAT = ''
    }

    if (ed.ETMDS1 === null) {
        ed.ETMDS1 = '-'
    }
    if (ed.ETMDS2 === null) {
        ed.ETMDS2 = '-'
    }
    if (ed.ETMDS3 === null) {
        ed.ETMDS3 = '-'
    }
    if (ed.ETMDS4 === null) {
        ed.ETMDS4 = '-'
    }
    if (ed.ETMDS5 === null) {
        ed.ETMDS5 = '-'
    }
    if (ed.ETMDS6 === null) {
        ed.ETMDS6 = '-'
    }

    return <div className={"mainContainer"}>

        <div className={"titleContainer"}>
            <div>AS/400 Data</div>
        </div>
        <div className={"titleContainer"}>
            <div>Employee Data</div>
        </div>
        <br />
        <div>
            <table>
                <thead>
                    <tr>
                        <th> </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Employee Number: </td>
                        <td>{ed.EMSSAN}</td>
                    </tr>
                    <tr>
                        <td>Employee SSN: </td>
                        <td>{ed.EMPSSN}</td>
                    </tr>
                    <tr>
                        <td>Active: </td>
                        <td>{ed.EMSTAT}</td>
                    </tr>
                    <tr>
                        <td>Name: </td>
                        <td>{ed.EMLNAM}, {ed.EMFNAM} {ed.EMMNAM}</td>
                    </tr>
                    <tr>
                        <td>Office Phone: </td>
                        <td>({ed.EMOTL0}) {ophone} ext. {ed.EMEXTN} {ed.EMOTLS}</td>
                    </tr>
                    <tr>
                        <td>Home Phone: </td>
                        <td>({ed.EMHTL0}) {hphone} {ed.EMHTLS}</td>
                    </tr>
                    <tr>
                        <td>Birth Date: </td>
                        <td>{ed.DOB}</td>
                    </tr>
                    <tr>
                        <td>Gender: </td>
                        <td>{ed.EMSEX} {GENDER}</td>
                    </tr>
                    <tr>
                        <td>Ethnic Code: </td>
                        <td>{ed.EMETH} {ed.ETDESC}</td>
                    </tr>
                    <tr>
                        <td>Address Security: </td>
                        <td>{ed.EMADSC}</td>
                    </tr>
                    <tr>
                        <td>Address: </td>
                        <td>{ed.EMADD1}</td>
                    </tr>
                    <tr>
                        <td>Address: </td>
                        <td>{ed.EMADD2}</td>
                    </tr>

                    <tr>
                        <td>City/State/Zip: </td>
                        <td>{ed.EMCITY}, {ed.EMST} {zipCode}</td>

                    </tr>
                    <tr>
                        <td>Country: </td>
                        <td>{ed.EMCTRY}</td>
                    </tr>
                    <tr>
                        <td>Permanent Address: </td>
                        <td>Y</td>
                    </tr>
                    <tr>
                        <td>Location: </td>
                        <td>{ed.EMLOC} {ed.LCNAME}</td>

                    </tr>
                    <tr>
                        <td>District: </td>
                        <td>{ed.EMHDT}</td>
                    </tr>
                    <tr>
                        <td>Sublocation: </td>
                        <td>{ed.EMLOC2} {ed.CLNAME}</td>

                    </tr>
                    <tr>
                        <td>School: </td>
                        <td>{ed.EMHSC}</td>
                    </tr>
                    <tr>
                        <td>Pay Location: </td>
                        <td>{ed.EMLOCP} {ed.LPNAME}</td>
                    </tr>
                    <tr>
                        <td>Department: </td>
                        <td>{ed.EMDEPT}</td>
                    </tr>
                    <tr>
                        <td>Assignment: </td>
                        <td>{ed.EMPASN} {ed.JDTITL}</td>

                    </tr>
                    <tr>
                        <td>Room: </td>
                        <td>{ed.EMROOM}</td>
                    </tr>
                    <tr>
                        <td>Address: </td>
                        <td>{ed.EMPAD1}</td>
                    </tr>
                    <tr>
                        <td>Address: </td>
                        <td>{ed.EMPAD2}</td>
                    </tr>
                    <tr>
                        <td>City/State/Zip: </td>
                        <td>{ed.EMPCTY}, {ed.EMPST} {zipCodeP}</td>
                    </tr>
                    <tr>
                        <td>Country: </td>
                        <td>{ed.EMPCTR}</td>
                    </tr>
                    <tr>
                        <td>Previous Service Credit: </td>
                        <td>{ed.EMPREV}</td>
                    </tr>
                    <tr>
                        <td>District: </td>
                        <td>{ed.EMSDST}</td>
                    </tr>
                    <tr>
                        <td>State: </td>
                        <td>{ed.EMSST}</td>
                    </tr>
                    <tr>
                        <td>Application Date: </td>
                        <td>{EMADAT}</td>
                    </tr>
                    <tr>
                        <td>Full Time Hire Date: </td>
                        <td>{ed.HID}</td>
                    </tr>
                    <tr>
                        <td>Seniority Date: </td>
                        <td>{EMSRDT}</td>
                    </tr>
                    <tr>
                        <td>Original Hire Date: </td>
                        <td>{ed.OHD}</td>

                    </tr>
                    <tr>
                        <td>Seniority Number: </td>
                        <td>{ed.EMSR}</td>
                    </tr>
                    <tr>
                        <td>Termination Date: </td>
                        <td>{ed.TRD}</td>
                    </tr>
                    <tr>
                        <td>Salary Change Date: </td>
                        <td>{ed.SCD}</td>
                    </tr>
                    <tr>
                        <td>Title Change Date: </td>
                        <td>{ed.HID}</td>
                    </tr>
                    <tr>
                        <td>Last Update for Longevity: </td>
                        <td>{ed.EMMSC1}</td>
                    </tr>
                    <tr>
                        <td>Next Update for Longevity: </td>
                        <td>{ed.EMMSC2}</td>
                    </tr>
                    <tr>
                        <td>Total Year of Longevity: </td>
                        <td>{ed.EMMSC3}</td>
                    </tr>
                    <tr>
                        <td>Pension Number: </td>
                        <td>{ed.EXPENS}</td>
                    </tr>
                    <tr>
                        <td>10/12 Column Value: </td>
                        <td>{ed.EX1012}</td>
                    </tr>
                    <tr>
                        <td>Pension Full Rate %: </td>
                        <td>{ed.EXFRPC}</td>
                    </tr>
                    <tr>
                        <td>TPAF,PERS, CNTY or NOPP: </td>
                        <td>{ed.EXTYPE}</td>
                    </tr>
                    <tr>
                        <td>Job Code for GTL Addenda: </td>
                        <td>{ed.EXJOB}</td>
                    </tr>
                    <tr>
                        <td>GTL Salary Override: </td>
                        <td>{ed.EXSALO}</td>
                    </tr>
                    <tr>
                        <td>Number of GTL Distributions: </td>
                        <td>{ed.EXPAYP}</td>
                    </tr>
                    <tr>
                        <td>Employee Contribute to Cost of Life Insurance?: </td>
                        <td>{ed.EXCNTB}</td>
                    </tr>
                    <tr>
                        <td>Years of Experience:</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>State: </td>
                        <td>{ed.EXSEXP}</td>
                    </tr>
                    <tr>
                        <td>District: </td>
                        <td>{ed.EXDEXP}</td>
                    </tr>
                    <tr>
                        <td>Out-of-State: </td>
                        <td>{ed.EXOEXP}</td>
                    </tr>
                    <tr>
                        <td>Termination Date: </td>
                        <td>{ETMDAT}</td>
                    </tr>
                    <tr>
                        <td>Termination Code: </td>
                        <td>{ed.ETMCDE} {ed.TRMTTL}</td>
                    </tr>
                    <tr>
                        <td>Employee Detail: </td>
                        <td>{ed.ETMDS1}</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>{ed.ETMDS2}</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>{ed.ETMDS3}</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>{ed.ETMDS4}</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>{ed.ETMDS5}</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>{ed.ETMDS6}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <br />
        <div>Your email is {email}</div>
    </div>
}

export default ShowEmployee