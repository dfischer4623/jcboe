import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ShowVendor = (props) => {

    const { loggedIn, email, vendorNumber, vend, setVendorData } = props

    const navigate = useNavigate();

    useEffect(() => {
        if (!loggedIn) {
            localStorage.removeItem("user")
            props.setLoggedIn(false)
            navigate("/")
        }

        if (vendorNumber == "") {
            navigate("/vendorSearch")
        }

        const fetchData = async () => {
            try {
                const response = await fetch(`https://as400.jcboe.org:8080/api/employees/ppur301s/${vendorNumber}`);
                const resData = await response.json()
                setVendorData(resData[0])
                console.log(resData[0])
                console.log(vend)
            }
            catch (error) {
                console.log("error", error);
                navigate("/vendorSearch")
            }
        }
        fetchData()
    }, [])

    if (vend === null) {
        return <h1>Loading...</h1>
    }

    let dollarUS = Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    });

    let percentageUS = Intl.NumberFormat("en-US", {
        style: "percent",
        minimumFractionDigits: 4
    });

    return <div className={"mainContainer"}>
        <div className={"titleContainer"}>
            <div>Vendor Data</div>
        </div>
        <br />
        <div>
            <table>
                <thead>
                    <tr>
                        <th colSpan="4"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Vendor Number: </td>
                        <td>{vend.VNNO}</td>
                        <td>Related to vendor group:</td>
                        <td>{vend.VNREL}</td>
                    </tr>
                    <tr>
                        <td>Vendor Name: </td>
                        <td>{vend.VNNAME}</td>
                        <td>Remit To: (If different)</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>{vend.VNNAM2}</td>
                        <td>{vend.VNRMAT}</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Address: </td>
                        <td>{vend.VNADDR}</td>
                        <td>{vend.VNRMA1}</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td> </td>
                        <td>{vend.VNADD2}</td>
                        <td>{vend.VNRMA2}</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>City, State Zip</td>
                        <td>{vend.VNCITY}, {vend.VNST} {vend.VNZIP}</td>
                        <td>{vend.VNRMCT}, {vend.VNRMST} {vend.VNRMZ1}</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Province:</td>
                        <td>{vend.VNPROV} P/C {vend.VNPC}</td>
                        <td>{vend.VNRMPR} P/C {vend.VNRMPC}</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Phone:</td>
                        <td>({vend.VNAREA}) {vend.VNPHON}</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Vendor's Usual Terms:</td>
                        <td></td>
                        <td>Shipping terms:</td>
                        <td>{vend.VNSHIP}</td>
                    </tr>
                    <tr>
                        <td>Cash discount:</td>
                        <td>{percentageUS.format(vend.VNCASH)}</td>
                        <td>Payment terms:</td>
                        <td>{vend.VNPMT}</td>
                    </tr>
                    <tr>
                        <td>Trade discount:</td>
                        <td>{percentageUS.format(vend.VNTRAD)}</td>
                        <td>Recipient Number:</td>
                        <td>{vend.VN10RF}</td>
                    </tr>
                    <tr>
                        <td>Minimum order $:</td>
                        <td>{dollarUS.format(vend.VNMIN)}</td>
                        <td>Open orders:</td>
                        <td>{dollarUS.format(vend.VNENC)}</td>
                    </tr>
                    <tr>
                        <td>Hold new orders?</td>
                        <td>N__BIZ  DIS  BID</td>
                        <td>Unpaid invoices:</td>
                        <td>{dollarUS.format(vend.VNACCR)}</td>
                    </tr>
                    <tr>
                        <td>Hold payments?</td>
                        <td>N___N___N___N</td>
                        <td>Volume this year:</td>
                        <td>{dollarUS.format(vend.VNCUR)}</td>
                    </tr>
                    <tr>
                        <td>Maximum payable without P/O:</td>
                        <td>{dollarUS.format(vend.VNNOPO)}</td>
                        <td>Volume last year:</td>
                        <td>{dollarUS.format(vend.VNPRI)}</td>
                    </tr>
                    <tr>
                        <td>Payment priority:</td>
                        <td>{vend.VNPRY} (9 = Highest)</td>
                        <td>Box Number if 1099 Vendor</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Liability account keyword:</td>
                        <td>{vend.VNACCT}</td>
                        <td>1099 Volume:</td>
                        <td>{dollarUS.format(vend.VNCR10)}</td>
                    </tr>
                </tbody>
            </table>
        </div >
        <br />
        <div>Your email is {email}</div>
    </div >
}

export default ShowVendor