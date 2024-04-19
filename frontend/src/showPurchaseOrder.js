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
                console.log(PODOC + '|' + PONUM)
                const response = await fetch(`http://10.0.1.142:8080/api/employees/purchaseOrders/?poDoc=${PODOC}&poNum=${PONUM}`);
                const resData = await response.json()
                setShowPurchaseOrder(resData)
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
            <tr key={i}>
                <td>Vendor: {podd.POVEND}</td>
                <td>{podd.VNNAME}</td>
                <td>Ship to: {podd.POSHIP}</td>
                <td>{podd.SHNAME}</td>
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
                        <th colSpan="4">Document: {PODOC}  Number: {PONUM}</th>
                    </tr>
                </thead>
                <tbody>
                    {purchaseOrderFormatted}
                </tbody>
            </table>
        </div>
        <br />
        <div>Your email is {email}</div>
    </div >
}

export default ShowPurchaseOrder