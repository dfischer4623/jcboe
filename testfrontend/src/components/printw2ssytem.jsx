import React, { useContext, useState, useEffect } from 'react';



import logoimg from "../assets/img/logob.png";


import secureLocalStorage from "react-secure-storage";
import {
  useNavigate
} from "react-router-dom";
import axios from 'axios';
import { AppContext } from '../context';


function Pdf() {
  let navigate = useNavigate();


  const [viewData, setViewData] = useState([]);
  const [viewDataForm, setViewDataForm] = useState([]);
  const [viewDocumentForm, setViewDocumentForm] = useState([]);
  const [viewDataFormChild, setViewDataFormChild] = useState([]);
  const [formname, setformname] = useState("");
    const [employeeDatassn, setEmployeeDatassn] = useState(null);
  const { storage } = useContext(AppContext);
  const Axios = axios.create({
    baseURL: storage[0].backEndUrl
    // baseURL: process.env.REACT_APP_ENV_URL
  });
  const [employeeData, setEmployeeData] = useState(null);
  useEffect(() => {

    var userid = secureLocalStorage.getItem('employeeSystemData');



    if (Object.keys(userid).length === 0) {


         navigate(`/employeesystemdata`);

    } else {

      var allprintnew = JSON.parse(window.localStorage.getItem('allprintw2ssystem'));;

      console.log(allprintnew);
      setEmployeeData(userid.data);
      setEmployeeDatassn(userid.datawe.ssn);
      setViewDataForm(allprintnew);
    }

    setTimeout(function () {
      triggerPrint();
    }, 1000);
  }, []);
  const triggerPrint = () => {



    document.title = 'W2S Details';


    setTimeout(function () {
      window.print();
      document.title = 'Legacy System';
      window.close();
    }, 500);
    ;
  }
  let dollarUS = Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

function formatCurrency(value) {
  if (!value) return "$0.00";

  // Remove commas and convert to number
  let num = Number(String(value).replace(/,/g, ""));
  
  // If invalid, return as is
  if (isNaN(num)) return value;

  return dollarUS.format(num);
}

  const W2CLYRdat = (W2CLYR) => {
    let W2CLYRb = W2CLYR < 10 ? `200${W2CLYR}` : `20${W2CLYR}`;;

    return W2CLYRb;
  };
  const styles = {
    body: {
      WebkitPrintColorAdjust: "exact",
    },
    pageBreak: {
      pageBreakAfter: "always",
    },
  };
  return (
    <>
      <div style={styles.body}>
        {employeeData != null &&
          <>


            <div className="conatiner-pdf pagebrpr" style={styles.pageBreak}>
              <div className="pdf-section">
                <table style={{ width: '100%', marginTop: '10px' }}>

                  <tr>
                    <td colSpan="2" class="pdf-header">
                      <img src={logoimg} />
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="2" className="reqid-sec reqid-sec-pdf padding-top-pdf" >

                      W2 List
                    </td>

                  </tr>
                  <tr>
                    <td colSpan="2" className="reqid-sec reqid-sec-pdf">
                      Employee Name: {employeeData.lastName}, {employeeData.firstName} {employeeData.middleInitial}
                    </td>

                  </tr>
                  <tr>
                    <td colSpan="2" className="reqid-sec reqid-sec-pdf padding-bottom-pdf">
                      Emp Id:  {employeeData.employee}
                    </td>

                  </tr>
                </table>
                {/* general section start pdf code */}

                <div className="pdf-section padf-sec-top">
                  <table className="table-status table-sts-ws" style={{ width: '100%' }}>
                    {viewDataForm.length > 0 ?
                      <>
                        <thead>
                          <tr>
                            <th className="thead-main thead-main-pdf" rowspan='2' colspan="1">TAX YEAR</th>
                            <th className="thead-main thead-main-pdf" rowspan='1' colspan="2">FEDERAL</th>
                            <th className="thead-main thead-main-pdf" rowspan='1' colspan="2">FICA</th>
                            <th className="thead-main thead-main-pdf" rowspan='1' colspan="2">MEDICARE</th>

                          </tr>
                          <tr className="thead-subhead">
                            <th rowspan='1' colspan="1" className='wages-color'>Wages</th>
                            <th rowspan='1' colspan="1" className='wiheld-color'>Withheld</th>
                            <th rowspan='1' colspan="1" className='wages-color'>Wages</th>
                            <th rowspan='1' colspan="1" className='wiheld-color'>Withheld</th>
                            <th rowspan='1' colspan="1" className='wages-color'>Wages</th>
                            <th rowspan='1' colspan="1" className='wiheld-color'>Withheld</th>
                          </tr>
                        </thead>

                      </>
                      :
                      null}


                    {viewDataForm.length > 0 ?

                      viewDataForm.map((item, index) =>
                        <tr>
                          <td class="border-right">  {(item.year)} </td>

                          <td class="border-right">

                            {formatCurrency(item.box1)}

                          </td>
                          <td class="border-right">


                            {formatCurrency(item.box2)}


                          </td>
                          <td class="border-right">

                            {formatCurrency(item.box3)}



                          </td>

                          <td class="border-right">


                            {formatCurrency(item.box4)}


                          </td>
                          <td class="border-right">

                            {formatCurrency(item.box5)}

                          </td>
                          <td class="border-right">

                            {formatCurrency(item.box6)}

                          </td>

                        </tr>
                      ) : ""}

                  </table>

                </div>

                {/* footer section add end*/}


              </div>

            </div>



          </>}
      </div>
    </>
  )
}
export default Pdf
