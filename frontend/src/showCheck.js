import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ShowVendor = (props) => {

    const { loggedIn, email, aphbnk, aphbac, aphfrm, aphchk, aphven, scd, setCheckData } = props

    const navigate = useNavigate();

    useEffect(() => {
        if (!loggedIn) {
            localStorage.removeItem("user")
            props.setLoggedIn(false)
            navigate("/")
        }

        const fetchData = async () => {
            try {
                const response = await fetch(`http://10.0.1.142:8080/api/employees/lacp441s/?aphbnk=${aphbnk}&aphbac=${aphbac}&aphfrm=${aphfrm}&aphchk=${aphchk}&aphven=${aphven}`);
                const resData = await response.json()
                setCheckData(resData)
                console.log(resData)
                console.log(scd)
            }
            catch (error) {
                console.log("error", error);
                navigate("/checkSearch")
            }
        }
        fetchData()
    }, [])

    if (scd === null) {
        return <h1>Loading...</h1>
    }

    let dollarUS = Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    });

    if (scd.APHCDT.length === 1) {
        var APHCDT = '00000' + scd.APHCDT
    } else if (scd.APHCDT.length === 2) {
        APHCDT = '0000' + scd.APHCDT
    } else if (scd.APHCDT.length === 3) {
        APHCDT = '000' + scd.APHCDT
    } else if (scd.APHCDT.length === 4) {
        APHCDT = '00' + scd.APHCDT
    } else if (scd.APHCDT.length === 5) {
        APHCDT = '0' + scd.APHCDT
    } else {
        APHCDT = scd.APHCDT
    }

    var m = Number(APHCDT.substring(0, 2))
    var d = Number(APHCDT.substring(2, 4))
    var y = Number(APHCDT.substring(4, 6))
    if (y <= 50) {
        y = 2000 + y
    } else {
        y = 1900 + y
    }

    APHCDT = String(m) + '/' + String(d) + '/' + String(y)


    return <div className={"mainContainer"}>
        <div className={"titleContainer"}>
            <div>Check Data</div>
        </div>
        <br />
        <div>
            <table>
                <thead>
                    <tr>
                        <th colSpan="2"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Bank: </td>
                        <td>{scd.APHBNK}</td>
                    </tr>
                    <tr>
                        <td>Bank Account:</td>
                        <td>{scd.APHBAC}</td>
                    </tr>
                    <tr>
                        <td>Form</td>
                        <td>{scd.APHFRM}</td>
                    </tr>
                    <tr><br></br></tr>
                    <tr>
                        <td>Vendor Number:</td>
                        <td>{scd.APHVEN} {scd.APHNAM}</td>
                    </tr>
                    <tr><br></br></tr>
                    <tr>
                        <td>Check Number:</td>
                        <td>{scd.APHCHK}</td>
                    </tr>
                    <tr>
                        <td>Check Date:</td>
                        <td>{APHCDT}</td>
                    </tr>
                    <tr><br></br></tr>
                    <tr>
                        <td>Reconciled?</td>
                        <td>Y</td>
                    </tr>
                    <tr>
                        <td>Reconciled Date:</td>
                        <td>{APHCDT}</td>
                    </tr>
                    <tr><br></br></tr>
                    <tr>
                        <td>Check Amount:</td>
                        <td>{dollarUS.format(scd.APHCAM)}</td>
                    </tr>
                </tbody>
            </table>
        </div >
        <br />
        <div>Your email is {email}</div>
    </div >
}

export default ShowVendor