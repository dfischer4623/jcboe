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
                const response = await fetch(`http://10.0.1.142:8080/api/employees/ppur301s/${vendorNumber}`);
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

    return <div className={"mainContainer"}>
        <div className={"titleContainer"}>
            <div>Vendor Data</div>
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
                        <td>Vendor Number: </td>
                        <td>{vend.VNNO}</td>
                    </tr>
                    
                    <tr>
                        <td>Vendor Name: </td>
                        <td>{vend.VNNAME}</td>
                    </tr>
                    <tr>
                        <td>Vendor Name 2: </td>
                        <td>{vend.VNNAM2}</td>
                    </tr>
                    
                </tbody>
            </table>
        </div>
        <br />
        <div>Your email is {email}</div>
    </div>
}

export default ShowVendor