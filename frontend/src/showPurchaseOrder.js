import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ShowPurchaseOrder = (props) => {

    const { loggedIn, email, PODOC, PONUM, pod, setShowPurchaseOrder } = props

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
                let podd = resData[0]
                setShowPurchaseOrder(podd)
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
                    <tr>
                        <td>{pod.PODOC}</td>
                        <td>{pod.PO}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <br />
        <div>Your email is {email}</div>
    </div >
}

export default ShowPurchaseOrder