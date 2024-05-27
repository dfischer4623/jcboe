import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const VendorSearch = (props) => {

    const { loggedIn, email, setAphbnk, setAphbac, setAphfrm, setAphchk, setAphven, aphbnk, aphbac, aphfrm, aphchk, aphven } = props

    const navigate = useNavigate();

    useEffect(() => {
        if (!loggedIn) {
            localStorage.removeItem("user")
            props.setLoggedIn(false)
            navigate("/")
        }
    })

    const onButtonClick = async () => {
        let resData = null
        try {
            const response = await fetch(`https://as400.jcboe.org:8080/api/employees/lacp441s/?aphbnk=${aphbnk}&aphbac=${aphbac}&aphfrm=${aphfrm}&aphchk=${aphchk}&aphven=${aphven}`);
            resData = await response.json()
            console.log(resData[0])
            console.log(aphchk)
            if (resData[0].APHCHK == aphchk) {
                navigate("/showCheck")
            } else {
                window.alert(`Wrong Check Number ` + aphchk)
            }
        }
        catch (error) {
            console.log(error);
            window.alert(`Wrong Check Number ` + aphchk)
        }
    }

    return <div className={"mainContainer"}>
        <div className={"titleContainer"}>
            <div>AS/400 Data</div>
        </div>
        <br />
        <div className={"titleContainer"}>
            <div>Check Search</div>
        </div>
        <br />
        <div className={"inputButtonContainer"}>
            <input
                value={aphbnk}
                placeholder="Bank"
                onChange={ev => setAphbnk(ev.target.value)}
                className={"inputBox"} />
            <input
                value={aphbac}
                placeholder="Bank Account"
                onChange={ev => setAphbac(ev.target.value)}
                className={"inputBox"} />
            <input
                value={aphfrm}
                placeholder="Form"
                onChange={ev => setAphfrm(ev.target.value)}
                className={"inputBox"} />
            <input
                value={aphchk}
                placeholder="Check Number"
                onChange={ev => setAphchk(ev.target.value)}
                className={"inputBox"} />
            <input
                value={aphven}
                placeholder="Vendor Number"
                onChange={ev => setAphven(ev.target.value)}
                className={"inputBox"} />
            <input
                className={"inputButton"}
                type="button"
                onClick={onButtonClick}
                value={"Search for Check"} />
        </div>
        <br></br>

        <br />
        <div>Your email is {email}</div>
    </div>
}

export default VendorSearch