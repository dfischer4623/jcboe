import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const VendorName = (props) => {

    const { loggedIn, email, setVendorNumber, vendorName, vens, setVendorNames } = props

    const navigate = useNavigate();

    useEffect(() => {
        if (!loggedIn) {
            localStorage.removeItem("user")
            props.setLoggedIn(false)
            navigate("/")
        }
        const fetchData = async () => {
            try {
                const response = await fetch(`https://as400.jcboe.org:8080/api/employees/ppur301s/?name=${vendorName}`);
                const resData = await response.json()
                setVendorNames(resData)
            }
            catch (error) {
                console.log("error", error);
                navigate("/vendorSearch")
            }
        }
        fetchData()
    }, [])

    const vendorSelected = (key) => {
        setVendorNumber(key)
        navigate("/showVendor")
    }

    let vendorsFormatted = vens.map((venss) => {
        return (
            <tr key={venss.VNNO}>
                <td><a href="#" onClick={() => vendorSelected(venss.VNNO)}>
                    {venss.VNNO}
                </a></td>
                <td>{venss.VNNAME}</td>
                <td>{venss.VNADDR}</td>
                <td>{venss.VNCITY}, {venss.VNST} {venss.VNZIP}</td>
            </tr>

        )
    })

    return <div className={"mainContainer"}>
        <div className={"titleContainer"}>
            <div>Vendor Name Search</div>
        </div>
        <br />
        <div>
            <table>
                <thead>
                    <tr>
                        <th colSpan="4">Search Name: {vendorName}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Vendor #</td>
                        <td>Vendor Name</td>
                        <td>Address</td>
                        <td>City, State Zip</td>
                    </tr>
                    {vendorsFormatted}
                </tbody>
            </table>
        </div>
        <br />
        <div>Your email is {email}</div>
    </div >
}

export default VendorName