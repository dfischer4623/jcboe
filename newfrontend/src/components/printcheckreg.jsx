import React, { useContext, useState, useEffect } from 'react';



import logoimg from "../assets/img/logob.png";


import secureLocalStorage from "react-secure-storage";
import {
  useNavigate
} from "react-router-dom";
import axios from 'axios';
import { AppContext } from '../context';
function formatDate(dateStr) {
  if (!dateStr) return "";

  // Try parsing with Date
  let date = new Date(dateStr);

  // If invalid, maybe it's in DD/MM/YYYY format
  if (isNaN(date)) {
    const parts = dateStr.split("/");
    if (parts.length === 3) {
      const [day, month, year] = parts;
      date = new Date(`${month}/${day}/${year}`); // flip to MM/DD/YYYY
    }
  }

  if (isNaN(date)) return dateStr; // still invalid, return as is

  return date.toLocaleDateString("en-US", {
    month: "2-digit",
    day: "2-digit",
    year: "numeric"
  });
}
const formatDateTime = (dateString) => {
  if (!dateString) return ""; // Handle undefined or null values

  const date = new Date(dateString);
  if (isNaN(date)) return ""; // Handle invalid date

  const formattedDate = date.toLocaleDateString("en-US", {
    timeZone: 'America/Indiana/Marengo',
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
  });

  const formattedTime = date.toLocaleTimeString("en-US", {
    timeZone: 'America/Indiana/Marengo',
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  return `${formattedDate} ${formattedTime}`;
};

function Pdf() {
  let navigate = useNavigate();


  const [viewData, setViewData] = useState([]);
  const [viewDataForm, setViewDataForm] = useState([]);
  const [viewDocumentForm, setViewDocumentForm] = useState([]);
  const [viewDataFormChild, setViewDataFormChild] = useState([]);
  const [formname, setformname] = useState("");
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
      var allprintnew = JSON.parse(window.localStorage.getItem('allprintchekcregisdata'));;
      console.log(allprintnew);
      setEmployeeData(userid.data);
      setViewDataForm(allprintnew);
    }

    setTimeout(function () {
      triggerPrint();
    }, 1000);
  }, []);
  const triggerPrint = () => {



    document.title = 'Check Register List  Details';


    setTimeout(function () {
      window.print();
      document.title = 'Legacy System';
      window.close();
    }, 500);
    ;
  }
  let percentageUS = Intl.NumberFormat("en-US", {
    style: "percent",
    maximumFractionDigits: 2
  });

  const styles = {
    body: {
      WebkitPrintColorAdjust: "exact",
    },
    pageBreak: {
      pageBreakAfter: "always",
    },
  };
  //  const formatDate = (dateString) => {
  //   if (!dateString) return "N/A";
  //   const year = dateString.substring(0, 4);
  //   const month = dateString.substring(4, 6);
  //   const day = dateString.substring(6, 8);
  //   return `${month}/${day}/${year}`;
  // };
  const padValue = (value) => {
    if (value !== null && value !== undefined && value !== 0 && value !== '') {
      return value.toString().padStart(3, '0');
    }
  };
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

                      Check Register List
                    </td>

                  </tr>
                  <tr>
                    <td colSpan="2" className="reqid-sec reqid-sec-pdf">
                      Employee Name:{employeeData.lastName}, {employeeData.firstName} {employeeData.middleInitial}
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
                  <table className="table-status" style={{ width: '100%' }}>
                    {viewDataForm.length > 0 ?
                      <><thead>
                        <tr>
                          <th className='pf-sl pdf-job-cde new-prnt-chek-num'>Check Number 	</th>
                          <th className='pf-wl pdf-absne new-prnt-chek-date'>Check Date   </th>
                          <th className='pf-date pdf-begn-bal new-prnt-gross-pay'>Current Gross Pay </th>
                          <th className='pf-date pdf-begn-bal new-prnt-net-curr-pay'>Current Net Pay  </th>
                          <th className='pf-date pdf-begn-bal new-prnt-curr-yera'>Year </th>


                        </tr>
                      </thead>
                      </>

                      :
                      null}
                    {viewDataForm.length > 0 ?

                      viewDataForm.map((item, index) =>
                        <tr>
                          <td class="border-right">  {(item.chkno)} </td>
                          <td class="border-right">  {formatDate(item.checkDate)} </td>
                          <td class="border-right">   {formatCurrency(item.cgwages)}
                          </td>
                          <td class="border-right">   {formatCurrency(item.cnetwages)}
                          </td>
                          <td class="border-right">  {(item.year)} </td>

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
