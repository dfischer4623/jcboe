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
                const response = await fetch(`https://as400.jcboe.org:8080/api/employees/lacp441s/?aphbnk=${aphbnk}&aphbac=${aphbac}&aphfrm=${aphfrm}&aphchk=${aphchk}&aphven=${aphven}`);
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

    let checkFormatted = scd.map((scdd, i) => {
        
        var checkAmt = Number(scdd.APHCAM)
        if (i === 0) {
            var totAmt = checkAmt
        } else {
            totAmt = checkAmt + totAmt
        }

        console.log(totAmt)
        console.log(checkAmt)

        if (scdd.APHCDT.length === 1) {
            var APHCDT = '00000' + scdd.APHCDT
        } else if (scdd.APHCDT.length === 2) {
            APHCDT = '0000' + scdd.APHCDT
        } else if (scdd.APHCDT.length === 3) {
            APHCDT = '000' + scdd.APHCDT
        } else if (scdd.APHCDT.length === 4) {
            APHCDT = '00' + scdd.APHCDT
        } else if (scdd.APHCDT.length === 5) {
            APHCDT = '0' + scdd.APHCDT
        } else {
            APHCDT = scdd.APHCDT
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

        return (
            <div>
                <tr><br></br></tr>
                <tr>
                    <td>Bank: </td>
                    <td>{scdd.APHBNK}</td>
                </tr>
                <tr>
                    <td>Bank Account:</td>
                    <td>{scdd.APHBAC}</td>
                </tr>
                <tr>
                    <td>Form</td>
                    <td>{scdd.APHFRM}</td>
                </tr>
                <tr>
                    <td>Vendor Number:</td>
                    <td>{scdd.APHVEN} {scdd.APHNAM}</td>
                </tr>
                <tr>
                    <td>Check Number:</td>
                    <td>{scdd.APHCHK}</td>
                </tr>
                <tr>
                    <td>Check Date:</td>
                    <td>{APHCDT}</td>
                </tr>
                <tr>
                    <td>Reconciled?</td>
                    <td>Y</td>
                </tr>
                <tr>
                    <td>Reconciled Date:</td>
                    <td>{APHCDT}</td>
                </tr>
                <tr>
                    <td>Check Amount:</td>
                    <td>{dollarUS.format(checkAmt)}</td>
                </tr>
            </div>
        )
    })

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
                    {checkFormatted}

                </tbody>
            </table>
        </div >
        <br />
        <div>Your email is {email}</div>
    </div >
}

export default ShowVendor