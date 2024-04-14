import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ShowPurchaseOrder = (props) => {

    const { loggedIn, email, PODOC, PONUM, pod, ven, shp, setShowPurchaseOrder, setVendorPurchaseOrder, setShiptoPurchaseOrder } = props

    const navigate = useNavigate();

    useEffect(() => {
        if (!loggedIn) {
            localStorage.removeItem("user")
            props.setLoggedIn(false)
            navigate("/")
        }
        const fetchData = async () => {

            try {
                const response = await fetch(`http://10.0.1.142:8080/api/employees/ppur410hs/?poDoc=${PODOC}&poNum=${PONUM}`);
                const resData = await response.json()
                setShowPurchaseOrder(resData)
                console.log(pod)
            }
            catch (error) {
                console.log("error", error);
                navigate("/purchaseOrderSearch")
            }

            try {
                const response = await fetch(`http://10.0.1.142:8080/api/employees/ppur301s/${pod.POVEND}`);
                const resData = await response.json()
                setVendorPurchaseOrder(resData)
                console.log(ven)
            }
            catch (error) {
                console.log("error", error);
                navigate("/purchaseOrderSearch")
            }

            try {
                const response = await fetch(`http://10.0.1.142:8080/api/employees/ppur201s/${pod.POSHIP}`);
                const resData = await response.json()
                setShiptoPurchaseOrder(resData)
                console.log(shp)
            }
            catch (error) {
                console.log("error", error);
                navigate("/purchaseOrderSearch")
            }

        }
        fetchData()
    }, [])

    if (pod === null) {
        return <h1>Loading...</h1>
    }

    let purchaseOrderFormatted = pod.map((podd, i) => {

        return (
            <tr>
                <td>{podd.POVEND}</td>
                <td>{podd.POSHIP}</td>
            </tr>
        )
    })

    return <div className={"mainContainer"}>
        <div className={"titleContainer"}>
            <div>Purchase Order</div>
        </div>
        <br />
        <div>
            <table>
                <thead>
                    <tr>
                        <th colSpan="2">Document: {PODOC}</th>
                    </tr>
                    <tr>
                        <th colSpan="2">Number: {PONUM}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>PO DOC</td>
                        <td>PO NUMBER</td>
                    </tr>
                    {purchaseOrderFormatted}
                </tbody>
            </table>
        </div>
        <br />
        <div>Your email is {email}</div>
    </div >
}

export default ShowPurchaseOrder