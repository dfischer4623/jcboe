import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";

const VendorSearch = (props) => {

    const { loggedIn, email, vendorNumber, vendorName, setVendorNumber, setVendorName, setVendorNames } = props

    const navigate = useNavigate();

    useEffect(() => {
        if (!loggedIn) {
            localStorage.removeItem("user")
            props.setLoggedIn(false)
            navigate("/")
        }
    })

    const onENButtonClick = async () => {
        let resData = null
        try {
            const response = await fetch(`https://as400.jcboe.org:8080/api/employees/ppur301s/${vendorNumber}`);
            resData = await response.json()
            console.log(resData)
            console.log(vendorNumber)
            if (resData[0].VNNO == vendorNumber) {
                navigate("/showVendor")
            } else {
                window.alert(`Wrong Vendor Number ` + vendorNumber)
            }
        }
        catch (error) {
            console.log(error);
            window.alert(`Wrong Vendor Number ` + vendorNumber)
        }
    }

    const onENameButtonClick = async () => {
        let resData = null
        try {
            const response = await fetch(`https://as400.jcboe.org:8080/api/employees/ppur301s/?name=${vendorName}`);
            resData = await response.json()
            setVendorNames(resData)
            if (resData.length > 0 && vendorName !== '') {
                navigate("/vendorName")
            } else {
                window.alert(`No vendors found with name ` + vendorName)
            }
        }
        catch (error) {
            console.log("error", error);
            navigate("/vendorSearch")
        }
    }

    return <div className={"mainContainer"}>
        <div className={"titleContainer"}>
            <div>AS/400 Data</div>
        </div>
        <br />
        <div className={"titleContainer"}>
            <div>Vendor Search</div>
        </div>
        <br />
        <div className={"inputButtonContainer"}>
            <input
                value={vendorName}
                placeholder="Vendor Name"
                onChange={ev => setVendorName(ev.target.value)}
                className={"inputBox"} />
            <input
                className={"inputButton"}
                type="button"
                onClick={onENameButtonClick}
                value={"Vendor Name Search"} />
        </div>
        <br></br>
        <div className={"inputButtonContainer"}>
            <input
                value={vendorNumber}
                placeholder="Vendor Number"
                onChange={ev => setVendorNumber(ev.target.value)}
                className={"inputBox"} />
            <input
                className={"inputButton"}
                type="button"
                onClick={onENButtonClick}
                value={"Choose Vendor"} />
        </div>
        <br />
        <div>Your email is {email}</div>
    </div>
}

export default VendorSearch