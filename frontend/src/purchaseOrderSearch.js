import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PurchaseOrderSearch = (props) => {

    const { loggedIn, email, PODOC, PONUM, setPODOC, setPONUM } = props

    const navigate = useNavigate();

    useEffect(() => {
        if (!loggedIn) {
            localStorage.removeItem("user")
            props.setLoggedIn(false)
            navigate("/")
        }
    })

    const onPOButtonClick = async () => {
        let resData = null
        try {
            const response = await fetch(`https://as400.jcboe.org:8080/api/employees/purchaseOrders/?poDoc=${PODOC}&poNum=${PONUM}`);
            resData = await response.json()
            console.log(resData)
            console.log(PONUM)
            if (resData[0].PO == PONUM) {
                navigate("/showPurchaseOrder")
            } else {
                window.alert(`Wrong Puchase Order Number ` + PODOC + ' ' + PONUM)
            }
        }
        catch (error) {
            console.log(error);
            window.alert(`Wrong Purchase Order Number ` + PODOC + ' ' + PONUM)
        }
    }

    return <div className={"mainContainer"}>
        <div className={"titleContainer"}>
            <div>AS/400 Data</div>
        </div>
        <br />
        <div className={"titleContainer"}>
            <div>Purchase Order Search</div>
        </div>
        <br />
        <div className={"inputButtonContainer"}>
            <input
                value={PODOC}
                placeholder="PO Document"
                onChange={ev => setPODOC(ev.target.value)}
                className={"inputBox"} />
            <input
                value={PONUM}
                placeholder="PO Number"
                onChange={ev => setPONUM(ev.target.value)}
                className={"inputBox"} />
            <input
                className={"inputButton"}
                type="button"
                onClick={onPOButtonClick}
                value={"Choose PO"} />
        </div>
        <br />
        <div>Your email is {email}</div>
    </div>
}

export default PurchaseOrderSearch