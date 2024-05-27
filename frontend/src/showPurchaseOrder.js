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
                const response = await fetch(`https://as400.jcboe.org:8080/api/employees/purchaseOrders/?poDoc=${PODOC}&poNum=${PONUM}`);
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

    let dollarUS = Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    });

    let purchaseOrderFormatted = pod.map((podd, i) => {
        if (i === 0) {

            var VNZIP = podd.VNZIP.toString()
            if (VNZIP.length === 4) {
                VNZIP = "0" + VNZIP
            }

            if (podd.SHZIP1.length === 4) {
                var SHZIP1 = '0' + podd.SHZIP1
            } else {
                SHZIP1 = podd.SHZIP1
            }

            let total = podd.POTOT + podd.POFRT + podd.POTTAX

            if (podd.PODREQ === '00000') { var PODREQ = '' }

            if (podd.PODAT.length === 1) {
                var PODAT = '0000' + podd.PODAT
            } else if (podd.PODAT.length === 2) {
                PODAT = '000' + podd.PODAT
            } else if (podd.PODAT.length === 3) {
                PODAT = '00' + podd.PODAT
            } else if (podd.PODAT.length === 4) {
                PODAT = '0' + podd.PODAT
            } else {
                PODAT = podd.PODAT
            }

            var ddd = PODAT.substring(2, 5)
            var m = Math.floor(Number(ddd) / 30) + 1
            var d = Number(ddd) - (30 * (m - 1))
            var y = Number(PODAT.substring(0, 2))
            if (y <= 50) {
                y = 2000 + y
            } else {
                y = 1900 + y
            }

            PODAT = String(m) + '/' + String(d) + '/' + String(y)

            return (
                <div>
                    <tr>
                        <td>Vendor: {podd.POVEND}</td>
                        <td>{podd.VNNAME}</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>{podd.VNADDR}</td>
                    </tr >
                    <tr>
                        <td></td>
                        <td>{podd.VNCITY}, {podd.VNST} {VNZIP}</td>
                    </tr >
                    <tr>
                        <td>Ship to: {podd.POSHIP}</td>
                        <td>{podd.SHNAME}</td>
                    </tr >
                    <tr>
                        <td></td>
                        <td>{podd.SHADR1}</td>
                    </tr >
                    <tr>
                        <td></td>
                        <td>{podd.SHCITY}, {podd.SHST} {SHZIP1}</td>
                    </tr >
                    <tr>
                        <td>P/O Date</td>
                        <td>{PODAT}</td>
                    </tr>
                    <tr>
                        <td>Date Required</td>
                        <td>{PODREQ}</td>
                    </tr >
                    <tr>
                        <td>Requisition</td>
                        <td>{podd.POREQ}</td>
                    </tr >
                    <tr>
                        <td>Reference</td>
                        <td>{podd.POREF}</td>
                    </tr >
                    <tr>
                        <td>Created by</td>
                        <td>{podd.POIUSR}</td>
                    </tr >
                    <tr>
                        <td>A/P Can Close</td>
                        <td>{podd.POAPCL}</td>
                    </tr >
                    <tr>
                        <td>Receiving Required</td>
                        <td>{podd.PORREC}</td>
                    </tr >
                    <tr>
                        <td>Draft Copy</td>
                        <td>{podd.PODRAF}</td>
                    </tr >
                    <tr>
                        <td>Hold Payments</td>
                        <td>{podd.POHOLD}</td>
                    </tr >
                    <tr>
                        <td>Purchase Order Line Total</td>
                        <td>{dollarUS.format(podd.POTOT)}</td>
                    </tr >
                    <tr>
                        <td>Freight Total</td>
                        <td>{dollarUS.format(podd.POFRT)}</td>
                    </tr >
                    <tr>
                        <td>Sales Tax</td>
                        <td>{dollarUS.format(podd.POTTAX)}</td>
                    </tr >
                    <tr>
                        <td>Purchase Order Total</td>
                        <td>{dollarUS.format(total)}</td>
                    </tr >
                    <tr>
                        <td>Total Accrued to Date</td>
                        <td>{dollarUS.format(podd.POTPAY)}</td>
                    </tr >
                    <tr>
                        <td>Total Paid to Date</td>
                        <td>{dollarUS.format(0)}</td>
                    </tr >
                </div>
            )
        }
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
                        <th colSpan="4">Document: {PODOC}</th>
                    </tr>
                    <tr>
                        <th colSpan="4">Number: {PONUM}</th>
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