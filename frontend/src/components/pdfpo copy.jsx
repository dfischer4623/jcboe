import React, { useState, useEffect } from 'react';



import logoimg from "../assets/img/logob.png";


import secureLocalStorage from "react-secure-storage";
import {
  useNavigate
} from "react-router-dom";
import axios from 'axios';
import { AppContext } from '../context';


function Pdf() {
  const [employeeData, setEmployeeData] = useState([]);
  const [poData, setPoData] = useState({});

  let navigate = useNavigate();
  useEffect(() => {
    var userid = secureLocalStorage.getItem('poDataprint');

    var poid = secureLocalStorage.getItem('pobasicDataprint');

    console.log('userid', userid);
    if ((userid) == null || (userid) == undefined) {


      navigate(`/posearch`);

    } else {
      console.log(userid);
      setEmployeeData(userid);
      setPoData(poid);



    }
    setTimeout(function () {
     triggerPrint();
    }, 1000);
  }, []);
  let dollarUS = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const checkWinzip = (pVNZIP) => {


    var VNZIP = pVNZIP.toString();
    if (VNZIP.length === 4) {
      VNZIP = "0" + VNZIP;
    }
    return VNZIP;
  };

  const checkshizip = (pVNZIP) => {



    if (pVNZIP.length === 4) {
      var SHZIP1 = "0" + pVNZIP;
    } else {
      SHZIP1 = pVNZIP;
    }
    return SHZIP1;
  };




  const checktotal = (pPOTOT, pPOFRT, pPOTTAX) => {


    let total = pPOTOT + pPOFRT + pPOTTAX;
    return total;

  };


  const checkpdat = (pPODAT) => {


    if (pPODAT.length === 1) {
      var PODAT = "0000" + pPODAT;
    } else if (pPODAT.length === 2) {
      PODAT = "000" + pPODAT;
    } else if (pPODAT.length === 3) {
      PODAT = "00" + pPODAT;
    } else if (pPODAT.length === 4) {
      PODAT = "0" + pPODAT;
    } else {
      PODAT = pPODAT;
    }

    var ddd = PODAT.substring(2, 5);
    var m = Math.floor(Number(ddd) / 30) + 1;
    var d = Number(ddd) - 30 * (m - 1);
    var y = Number(PODAT.substring(0, 2));
    if (y <= 50) {
      y = 2000 + y;
    } else {
      y = 1900 + y;
    }

    PODAT = String(m) + "/" + String(d) + "/" + String(y);
    return PODAT;
  };




  const triggerPrint = () => {



    document.title = 'Po Details';


    setTimeout(function () {
      window.print();
      document.title = 'Legacy System';
      window.close();
    }, 500);
    ;
  }


  const styles = {
    body: {
      WebkitPrintColorAdjust: "exact",
    },
    pageBreak: {
      pageBreakAfter: "always",
      marginTop: '10px',
    },
  };

  useEffect(() => {
    document.body.className = 'bodycloor';
    return () => {
      document.body.className = ''; // clean up
    };
  }, []);

  return (
    <>

      <div className='conatiner-pdfss' style={styles.body}>
      <div className='main-inner-heading'>
                    <div className='col-md-12'>
                        <div className='emp-main-serach'>
                            <div className='emp-serach emp-data-head emp-another-sec pdf-header po-img'>
                           
                            <img src={logoimg} />
                              

                            </div>
                        </div>


                    </div>
                </div>
      <div class=" emp-main-heading-emp">
        <div class="main-heading-sec ">
          <div class="col-md-12">
            <div class="head-inner head-inner-main reqid-sec reqid-sec-pdf padding-top-pdf pdf-po">
              {poData != null &&
                <>
                  <h2 className='po-doc-pdf'>Purchase Order Search</h2>
                  <h2 className='po-doc-pdf'>PO Document: {poData.podoc}</h2>
                  <h3 className='po-num-pdf'>PO Number: {poData.ponum}</h3>
                 
                </>
              }


            </div>

          </div>
        </div>
      </div>
      {employeeData.length > 0 &&
        <>
          <div className="emp-table-pdf">
            <div className='po-details-sec pdf-po-details'>
              <div className="row">
                <div className='col-md-12'>
                  <div className='po-details-head pdf-details-headss'>
                    <h2>Vendor Name: <span>{employeeData[0].VNNAME} ({employeeData[0].POVEND})</span></h2>
                  </div>
                </div>
              </div>
              <div className='row margin-top-po-table margin-top-po-pdf'>
                {/* table section start from here */}
                <div className='col-md-12'>
                  <div class="table-main-sec diff-po-table">
                    <table className='table table-sec'>
                      <tbody class="tbody-light tbody-po-light">
                        <tr>
                          <th>Vendor Address</th>
                          <td class="value-table">
                            <p>{employeeData[0].VNADDR}  ,{employeeData[0].VNCITY}, {employeeData[0].VNST} {checkWinzip(employeeData[0].VNZIP)}</p>
                          </td>
                        </tr>
                        <tr>
                          <th>Ship To <span className='po-data-td'>({employeeData[0].POSHIP})</span></th>
                          <td class="value-table">
                            <p>{employeeData[0].SHNAME} </p>
                          </td>
                        </tr>

                        <tr>
                          <th>Ship Address</th>
                          <td class="value-table">
                            <p>{employeeData[0].SHADR1}    {employeeData[0].SHCITY}, {employeeData[0].SHST} {checkshizip(employeeData[0].SHZIP1)}</p>
                          </td>
                        </tr>
                        <tr>
                          <th>P/O date</th>
                          <td class="value-table">
                            <p>{((employeeData[0].PODAT != null &&
                              employeeData[0].PODAT != undefined) ? employeeData[0].PODAT : '')}

                            </p>


                          </td>
                        </tr>

                        <tr>
                          <th>Date Request</th>
                          <td class="value-table">
                            <p>{employeeData[0].PODREQ === "00000" ?
                              "" : checkpdat(employeeData[0].PODREQ)}</p>




                          </td>
                        </tr>
                        <tr>
                          <th>Requision</th>
                          <td class="value-table">
                            <p>{employeeData[0].POREQ}</p>
                          </td>
                        </tr>

                        <tr>
                          <th>Reference</th>
                          <td class="value-table">
                            <p> {employeeData[0].POREF}</p>
                          </td>
                        </tr>
                        <tr>
                          <th>Created by</th>
                          <td class="value-table">
                            <p>{employeeData[0].POIUSR}</p>
                          </td>
                        </tr>

                        <tr>
                          <th>A/P Can close</th>
                          <td class="value-table">
                            <p>{employeeData[0].POAPCL}</p>
                          </td>
                        </tr>

                      </tbody>
                    </table>
                  </div>
                </div>

                <div className='col-md-12  pagebreakdd'>
                  <div class="table-main-sec diff-po-table">
                    <table className='table table-sec'>
                      <tbody class="tbody-light tbody-po-light">
                        <tr>
                          <th>Receiving Required</th>
                          <td class="value-table">
                            <p>{employeeData[0].PORREC}</p>
                          </td>
                        </tr>
                        <tr>
                          <th>Draft Copy</th>
                          <td class="value-table">
                            <p>{employeeData[0].PODRAF}</p>
                          </td>
                        </tr>

                        <tr>
                          <th>Hold Payments</th>
                          <td class="value-table">
                            <p>{employeeData[0].POHOLD}</p>
                          </td>
                        </tr>
                        <tr>
                          <th>Purchase Order Line Total</th>
                          <td class="value-table">
                            <p>{dollarUS.format(employeeData[0].POTOT)}</p>
                          </td>
                        </tr>

                        <tr>
                          <th>Freight Total</th>
                          <td class="value-table">
                            <p>{dollarUS.format(employeeData[0].POFRT)}</p>
                          </td>
                        </tr>
                        <tr>
                          <th>Sales Tax</th>
                          <td class="value-table">
                            <p>{dollarUS.format(employeeData[0].POTTAX)}</p>
                          </td>
                        </tr>

                        <tr>
                          <th>Purchase Order Total</th>
                          <td class="value-table">
                            <p> {dollarUS.format(checktotal(employeeData[0].POTOT, employeeData[0].POFRT, employeeData[0].POTTAX))}</p>
                          </td>
                        </tr>
                        <tr>
                          <th>Total Accrued to Date</th>
                          <td class="value-table">
                            <p> {dollarUS.format(employeeData[0].POTPAY)}</p>
                          </td>
                        </tr>

                        <tr>
                          <th>Total Paid to Date</th>
                          <td class="value-table">
                            <p> {dollarUS.format(0)}</p>
                          </td>
                        </tr>

                      </tbody>
                    </table>
                  </div>
                </div>
                {/* table section end from here */}

                {/* pagination section start here */}


                {/* pagination section end here */}

              </div>
            </div>
          </div>
        </>

      }


    </div >
    </>
  )
}
export default Pdf
