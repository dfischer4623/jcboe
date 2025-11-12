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


  const [viewData, setViewData] = useState(null);
  const [viewDataForm, setViewDataForm] = useState(null);
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
      console.log(userid);
      setEmployeeData(userid.data);
      var allprintnew = JSON.parse(window.localStorage.getItem('allw2deatislsystem'));;
      setViewData(allprintnew);

      setViewDataForm(allprintnew.year);
      var allprintnewr = JSON.parse(window.localStorage.getItem('allw2sdetalnewsystem'));;
      setViewDocumentForm(allprintnewr);
    }

    setTimeout(function () {
      triggerPrint();
    }, 1000);
  }, []);
  const triggerPrint = () => {



    document.title = 'Wage and Tax Statement';


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
      <div>
        {/* Embedded CSS styles */}
        <style>
          {`
          @media print {
            @page {
              size: A4;
              margin: 5mm 3mm 5mm 5mm;
            }
          
          
          }
        `}
        </style>
        {viewDocumentForm.length > 0 &&
          <>
            {viewDocumentForm.map((entry, index) => (
              <>

                <div  >
                  <svg viewBox="0 0 541.069 348.371" >
                    <defs>
                      <style>{`
            .cls-1, .cls-2 {
              stroke-width: .5px;
            }
            .cls-1, .cls-2, .cls-3 {
              fill: none;
              stroke: #000;
              stroke-miterlimit: 10;
            }
            .cls-2 {
              stroke-dasharray: 2 1;
            }
            .cls-3 {
              stroke-width: .75px;
            }
            .cls-4, .cls-5, .cls-6, .cls-7,
            .cls-8, .cls-9, .cls-10, .cls-11,
            .cls-12, .cls-13, .cls-14, .cls-15 {
              // font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
              font-weight: 500;
            }
            .cls-4, .cls-8, .cls-9 { font-size: 8px; }
            .cls-5, .cls-10 { font-size: 7px; }
            .cls-6 { font-size: 11px; }
            .cls-11 { font-size: 10px; }
            .cls-12, .cls-7 { font-size: 6.44px; }
            .cls-13 { font-size: 4px; }
            .cls-14 { font-size: 5.5px; }
            .cls-15 { font-size: 5px; }
            .cls-16 { fill: silver; }
          margin: 0;
          
          `}</style>
                    </defs>

                    <text class="cls-9" transform="translate(.375 6.916)"><tspan x="0" y="0" xmlSpace="preserve">     </tspan></text>
                    <line class="cls-3" y1="11.204" x2="115.825" y2="11.204"></line>
                    <line class="cls-1" y1="35.205" x2="115.825" y2="35.205"></line>
                    <line class="cls-3" x1=".375" y1="10.829" x2=".375" y2="35.455"></line>

                    <text class="cls-5" transform="translate(36.99 28.202)"><tspan x="0" y="0" xmlSpace="preserve" style={{ fontWeight: 600, fontSize: "12px" }}>222222  </tspan></text>
                    <line class="cls-3" x1="115.325" y1="11.204" x2="245.425" y2="11.204"></line>
                    <line class="cls-1" x1="115.575" y1="10.829" x2="115.575" y2="23.453"></line>
                    <text class="cls-5" transform="translate(119.575 19.202)"><tspan x="0" y="0" xmlSpace="preserve">a  </tspan></text>
                    <text class="cls-10" transform="translate(126.485 19.202)"><tspan x="0" y="0">Employee’s social security number</tspan>

                    </text>
                    <line class="cls-1" x1="115.325" y1="35.202" x2="245.425" y2="35.202"></line>
                    <line class="cls-1" x1="115.575" y1="22.953" x2="115.575" y2="35.452"></line>
                    <line class="cls-3" x1="244.925" y1="11.204" x2="540.75" y2="11.204"></line>
                    <line class="cls-1" x1="244.925" y1="35.205" x2="540.75" y2="35.205"></line>
                    <line class="cls-3" x1="540.375" y1="10.829" x2="540.375" y2="35.455"></line>
                    <line class="cls-1" x1="245.175" y1="10.829" x2="245.175" y2="35.455"></line>
                    <text class="cls-5" transform="translate(251.175 30.203)"><tspan x="0" y="0"> </tspan></text>
                    <text class="cls-10" transform="translate(253.121 30.203)"><tspan x="0" y="0">OMB No. 1545-0008 </tspan></text>
                    <line class="cls-3" x1=".375" y1="34.955" x2=".375" y2="47.454"></line>
                    <text class="cls-5" transform="translate(6.375 43.203)"><tspan x="0" y="0" xmlSpace="preserve">b  </tspan></text>
                    <text class="cls-10" transform="translate(14.544 43.203)"><tspan x="0" y="0">Employer identification number (EIN)</tspan></text>
                    <line class="cls-1" y1="59.203" x2="295.825" y2="59.203"></line>
                    <line class="cls-3" x1=".375" y1="46.954" x2=".375" y2="59.453"></line>
                    <line class="cls-3" x1=".375" y1="58.953" x2=".375" y2="71.452"></line>
                    <text class="cls-5" transform="translate(6.375 67.201)"><tspan x="0" y="0" xmlSpace="preserve">c  </tspan></text>
                    <text class="cls-10" transform="translate(14.285 67.201)"><tspan x="0" y="0">Employer’s name, address, and ZIP code</tspan></text>
                    <line class="cls-1" y1="131.206" x2="295.825" y2="131.206"></line>
                    <line class="cls-3" x1=".375" y1="70.955" x2=".375" y2="131.456"></line>
                    <line class="cls-3" x1=".375" y1="130.953" x2=".375" y2="143.452"></line>
                    <text class="cls-5" transform="translate(6.375 139.201)"><tspan x="0" y="0" xmlSpace="preserve">d  </tspan></text>
                    <text class="cls-10" transform="translate(14.544 139.201)"><tspan x="0" y="0">Control number</tspan></text>
                    <line class="cls-1" y1="155.204" x2="295.825" y2="155.204"></line>
                    <line class="cls-3" x1=".375" y1="142.955" x2=".375" y2="155.454"></line>
                    <line class="cls-3" x1=".375" y1="154.954" x2=".375" y2="167.453"></line>
                    <text class="cls-5" transform="translate(6.375 163.202)"><tspan x="0" y="0" xmlSpace="preserve">e  </tspan></text>
                    <text class="cls-10" transform="translate(14.285 163.202)"><tspan x="0" y="0">Employee’s first name and initial</tspan></text>
                    <line class="cls-3" x1=".375" y1="166.953" x2=".375" y2="179.452"></line>
                    <text class="cls-10" transform="translate(141.175 163.202)"><tspan x="0" y="0">Last name</tspan></text>
                    <text class="cls-10" transform="translate(267.514 163.202)"><tspan x="0" y="0">Suff.</tspan></text>
                    <line class="cls-1" x1="295.575" y1="178.955" x2="295.575" y2="251.455"></line>
                    <line class="cls-3" x1=".375" y1="178.955" x2=".375" y2="251.455"></line>
                    <line class="cls-1" y1="277.204" x2="295.825" y2="277.204"></line>
                    <line class="cls-1" x1="295.575" y1="250.955" x2="295.575" y2="277.454"></line>
                    <line class="cls-3" x1=".375" y1="250.955" x2=".375" y2="263.454"></line>
                    <text class="cls-5" transform="translate(6.375 220.203)"><tspan x="0" y="0" xmlSpace="preserve">f  </tspan></text>
                    <text class="cls-10" transform="translate(12.598 220.203)"><tspan x="0" y="0">Employee’s address and ZIP code</tspan></text>
                    <line class="cls-1" x1="295.575" y1="34.955" x2="295.575" y2="47.454"></line>
                    <text class="cls-7" transform="translate(303.075 43.203) scale(1 1.087)"><tspan x="0" y="0" xmlSpace="preserve">1   </tspan></text>
                    <text class="cls-12" transform="translate(312.026 43.203) scale(1 1.087)"><tspan x="0" y="0">Wages, tips, other compensation</tspan></text>
                    <line class="cls-1" x1="295.325" y1="59.203" x2="418.225" y2="59.203"></line>
                    <line class="cls-1" x1="295.575" y1="46.954" x2="295.575" y2="59.453"></line>
                    <line class="cls-3" x1="540.375" y1="34.955" x2="540.375" y2="47.454"></line>
                    <line class="cls-1" x1="417.975" y1="34.955" x2="417.975" y2="47.454"></line>
                    <text class="cls-5" transform="translate(425.475 43.203)"><tspan x="0" y="0" xmlSpace="preserve">2   </tspan></text>
                    <text class="cls-10" transform="translate(435.205 43.203)"><tspan x="0" y="0">Federal income tax withheld</tspan></text>
                    <line class="cls-1" x1="417.725" y1="59.203" x2="540.75" y2="59.203"></line>
                    <line class="cls-3" x1="540.375" y1="46.954" x2="540.375" y2="59.453"></line>
                    <line class="cls-1" x1="417.975" y1="46.954" x2="417.975" y2="59.453"></line>
                    <line class="cls-1" x1="295.575" y1="58.953" x2="295.575" y2="71.452"></line>
                    <text class="cls-5" transform="translate(303.075 67.201)"><tspan x="0" y="0" xmlSpace="preserve">3   </tspan></text>
                    <text class="cls-10" transform="translate(312.805 67.201)"><tspan x="0" y="0">Social security wages</tspan></text>
                    <line class="cls-1" x1="295.325" y1="83.204" x2="418.225" y2="83.204"></line>
                    <line class="cls-1" x1="295.575" y1="70.955" x2="295.575" y2="83.454"></line>
                    <line class="cls-3" x1="540.375" y1="58.953" x2="540.375" y2="71.452"></line>
                    <line class="cls-1" x1="417.975" y1="58.953" x2="417.975" y2="71.452"></line>
                    <text class="cls-5" transform="translate(425.475 67.201)"><tspan x="0" y="0" xmlSpace="preserve">4   </tspan></text>
                    <text class="cls-10" transform="translate(435.205 67.201)"><tspan x="0" y="0">Social security tax withheld</tspan></text>
                    <line class="cls-1" x1="417.725" y1="83.204" x2="540.75" y2="83.204"></line>
                    <line class="cls-3" x1="540.375" y1="70.955" x2="540.375" y2="83.454"></line>
                    <line class="cls-1" x1="417.975" y1="70.955" x2="417.975" y2="83.454"></line>
                    <line class="cls-1" x1="295.575" y1="82.954" x2="295.575" y2="95.453"></line>
                    <text class="cls-5" transform="translate(303.075 91.202)"><tspan x="0" y="0" xmlSpace="preserve">5   </tspan></text>
                    <text class="cls-10" transform="translate(312.805 91.202)"><tspan x="0" y="0">Medicare wages and tips</tspan></text>
                    <line class="cls-1" x1="295.325" y1="107.202" x2="418.225" y2="107.202"></line>
                    <line class="cls-1" x1="295.575" y1="94.953" x2="295.575" y2="107.452"></line>
                    <line class="cls-3" x1="540.375" y1="82.954" x2="540.375" y2="95.453"></line>
                    <line class="cls-1" x1="417.975" y1="82.954" x2="417.975" y2="95.453"></line>
                    <text class="cls-5" transform="translate(425.475 91.202)"><tspan x="0" y="0" xmlSpace="preserve">6   </tspan></text>
                    <text class="cls-10" transform="translate(435.205 91.202)"><tspan x="0" y="0">Medicare tax withheld</tspan></text>
                    <line class="cls-1" x1="417.725" y1="107.202" x2="540.75" y2="107.202"></line>
                    <line class="cls-3" x1="540.375" y1="94.953" x2="540.375" y2="107.452"></line>
                    <line class="cls-1" x1="417.975" y1="94.953" x2="417.975" y2="107.452"></line>
                    <line class="cls-1" x1="295.575" y1="106.955" x2="295.575" y2="119.454"></line>
                    <text class="cls-5" transform="translate(303.075 115.203)"><tspan x="0" y="0" xmlSpace="preserve">7   </tspan></text>
                    <text class="cls-10" transform="translate(312.805 115.203)"><tspan x="0" y="0">Social security tips</tspan></text>
                    <line class="cls-1" x1="295.575" y1="118.954" x2="295.575" y2="131.453"></line>
                    <line class="cls-3" x1="540.375" y1="106.955" x2="540.375" y2="119.454"></line>
                    <line class="cls-1" x1="417.975" y1="106.955" x2="417.975" y2="119.454"></line>
                    <text class="cls-5" transform="translate(425.475 115.203)"><tspan x="0" y="0" xmlSpace="preserve">8   </tspan></text>
                    <text class="cls-10" transform="translate(435.205 115.203)"><tspan x="0" y="0">Allocated tips</tspan></text>
                    <line class="cls-1" x1="417.725" y1="131.203" x2="540.75" y2="131.203"></line>
                    <line class="cls-3" x1="540.375" y1="118.954" x2="540.375" y2="131.453"></line>
                    <line class="cls-1" x1="417.975" y1="118.954" x2="417.975" y2="131.453"></line>
                    <line class="cls-1" x1="295.325" y1="131.203" x2="418.225" y2="131.203"></line>
                    <line class="cls-1" x1="295.575" y1="130.953" x2="295.575" y2="143.452"></line>
                    <text class="cls-5" transform="translate(303.075 139.201)"><tspan x="0" y="0" xmlSpace="preserve">9   </tspan></text>
                    <text class="cls-10" transform="translate(312.205 140.203)"><tspan x="0" y="0">Advance EIC Payement</tspan></text>

                    <line class="cls-1" x1="309.725" y1="131.203" x2="418.225" y2="131.203"></line>
                    <line class="cls-1" x1="417.975" y1="130.953" x2="417.975" y2="143.452"></line>

                    <line class="cls-1" x1="295.325" y1="155.204" x2="418.225" y2="155.204"></line>
                    <line class="cls-1" x1="417.975" y1="142.955" x2="417.975" y2="155.454"></line>
                    <line class="cls-1" x1="295.575" y1="142.955" x2="295.575" y2="155.454"></line>
                    <line class="cls-3" x1="540.375" y1="130.953" x2="540.375" y2="143.452"></line>
                    <line class="cls-1" x1="417.975" y1="130.953" x2="417.975" y2="143.452"></line>
                    <text class="cls-5" transform="translate(421.975 139.201)"><tspan x="0" y="0" xmlSpace="preserve">10   </tspan></text>
                    <text class="cls-10" transform="translate(435.597 139.201)"><tspan x="0" y="0">Dependent care benefits</tspan></text>
                    <line class="cls-1" x1="417.725" y1="155.204" x2="540.75" y2="155.204"></line>
                    <line class="cls-3" x1="540.375" y1="142.955" x2="540.375" y2="155.454"></line>
                    <line class="cls-1" x1="417.975" y1="142.955" x2="417.975" y2="155.454"></line>
                    <line class="cls-1" x1="295.575" y1="154.954" x2="295.575" y2="167.453"></line>
                    <text class="cls-5" transform="translate(299.575 163.202)"><tspan x="0" y="0" xmlSpace="preserve">11   </tspan></text>
                    <text class="cls-10" transform="translate(313.197 163.202)"><tspan x="0" y="0">Nonqualified plans</tspan></text>
                    <line class="cls-1" x1="295.325" y1="179.202" x2="418.225" y2="179.202"></line>
                    <line class="cls-1" x1="295.575" y1="166.953" x2="295.575" y2="179.452"></line>
                    <line class="cls-3" x1="540.375" y1="154.954" x2="540.375" y2="167.453"></line>
                    <text class="cls-5" transform="translate(421.975 163.202)"><tspan x="0" y="0" xmlSpace="preserve">12a  </tspan></text>
                    <line class="cls-1" x1="417.725" y1="179.205" x2="425.425" y2="179.205"></line>
                    <line class="cls-1" x1="417.975" y1="154.954" x2="417.975" y2="179.455"></line>
                    <text class="cls-13" transform="translate(422.475 167.061)"><tspan x="0" y="0">C</tspan></text>
                    <text class="cls-13" transform="translate(422.675 170.561)"><tspan x="0" y="0">o </tspan></text>
                    <text class="cls-13" transform="translate(422.635 174.061)"><tspan x="0" y="0">d </tspan></text>
                    <text class="cls-13" transform="translate(422.747 177.561)"><tspan x="0" y="0">e</tspan></text>
                    <line class="cls-1" x1="424.925" y1="179.202" x2="454.225" y2="179.202"></line>
                    <line class="cls-1" x1="453.725" y1="179.202" x2="540.75" y2="179.202"></line>
                    <line class="cls-3" x1="540.375" y1="166.953" x2="540.375" y2="179.452"></line>
                    <line class="cls-1" x1="453.975" y1="166.953" x2="453.975" y2="179.452"></line>
                    <line class="cls-3" x1="540.375" y1="178.955" x2="540.375" y2="191.454"></line>
                    <text class="cls-5" transform="translate(421.975 187.203)"><tspan x="0" y="0">12b</tspan></text>
                    <line class="cls-1" x1="417.725" y1="203.206" x2="425.425" y2="203.206"></line>
                    <line class="cls-1" x1="417.975" y1="178.955" x2="417.975" y2="203.456"></line>
                    <text class="cls-13" transform="translate(422.475 191.062)"><tspan x="0" y="0">C</tspan></text>
                    <text class="cls-13" transform="translate(422.675 194.562)"><tspan x="0" y="0">o </tspan></text>
                    <text class="cls-13" transform="translate(422.635 198.062)"><tspan x="0" y="0">d </tspan></text>
                    <text class="cls-13" transform="translate(422.747 201.562)"><tspan x="0" y="0">e</tspan></text>
                    <line class="cls-1" x1="424.925" y1="203.203" x2="454.225" y2="203.203"></line>
                    <line class="cls-1" x1="453.725" y1="203.203" x2="540.75" y2="203.203"></line>
                    <line class="cls-3" x1="540.375" y1="190.954" x2="540.375" y2="203.453"></line>
                    <line class="cls-1" x1="453.975" y1="190.954" x2="453.975" y2="203.453"></line>
                    <line class="cls-3" x1="540.375" y1="202.953" x2="540.375" y2="215.452"></line>
                    <text class="cls-5" transform="translate(421.975 211.201)"><tspan x="0" y="0">12c</tspan></text>
                    <line class="cls-1" x1="417.725" y1="227.204" x2="425.425" y2="227.204"></line>
                    <line class="cls-1" x1="417.975" y1="202.953" x2="417.975" y2="227.454"></line>
                    <text class="cls-13" transform="translate(422.475 215.06)"><tspan x="0" y="0">C</tspan></text>
                    <text class="cls-13" transform="translate(422.675 218.56)"><tspan x="0" y="0">o </tspan></text>
                    <text class="cls-13" transform="translate(422.635 222.06)"><tspan x="0" y="0">d </tspan></text>
                    <text class="cls-13" transform="translate(422.747 225.56)"><tspan x="0" y="0">e</tspan></text>
                    <line class="cls-1" x1="424.925" y1="227.204" x2="454.225" y2="227.204"></line>
                    <line class="cls-1" x1="453.725" y1="227.204" x2="540.75" y2="227.204"></line>
                    <line class="cls-3" x1="540.375" y1="214.955" x2="540.375" y2="227.454"></line>
                    <line class="cls-1" x1="453.975" y1="214.955" x2="453.975" y2="227.454"></line>
                    <line class="cls-3" x1="540.375" y1="226.954" x2="540.375" y2="239.453"></line>
                    <text class="cls-5" transform="translate(421.975 235.202)"><tspan x="0" y="0">12d</tspan></text>
                    <line class="cls-1" x1="417.975" y1="226.954" x2="417.975" y2="251.455"></line>
                    <text class="cls-13" transform="translate(422.475 239.061)"><tspan x="0" y="0">C</tspan></text>
                    <text class="cls-13" transform="translate(422.675 242.561)"><tspan x="0" y="0">o </tspan></text>
                    <text class="cls-13" transform="translate(422.635 246.061)"><tspan x="0" y="0">d </tspan></text>
                    <text class="cls-13" transform="translate(422.747 249.561)"><tspan x="0" y="0">e</tspan></text>
                    <line class="cls-3" x1="540.375" y1="238.953" x2="540.375" y2="251.452"></line>
                    <line class="cls-1" x1="453.975" y1="238.953" x2="453.975" y2="251.452"></line>
                    <rect class="cls-16" x="417.975" y="251.205" width="122.4" height="25.999"></rect>
                    <line class="cls-1" x1="417.725" y1="251.205" x2="540.75" y2="251.205"></line>
                    <line class="cls-1" x1="417.725" y1="277.204" x2="540.75" y2="277.204"></line>
                    <line class="cls-3" x1="540.375" y1="250.955" x2="540.375" y2="263.454"></line>
                    <line class="cls-1" x1="417.975" y1="250.955" x2="417.975" y2="277.454"></line>
                    <text class="cls-5" transform="translate(299.575 187.203)"><tspan x="0" y="0">13</tspan></text>
                    <text class="cls-15" transform="translate(312.975 184.774)"><tspan x="0" y="0">Statutory </tspan></text>
                    <text class="cls-15" transform="translate(312.975 189.774)"><tspan x="0" y="0">employee</tspan></text>
                    <rect class="cls-1" x="313.975" y="192.505" width="8" height="8"></rect>
                    <text class="cls-15" transform="translate(348.975 184.774)"><tspan x="0" y="0">Retirement </tspan></text>
                    <text class="cls-15" transform="translate(348.975 189.774)"><tspan x="0" y="0">plan</tspan></text>
                    <rect class="cls-1" x="348.975" y="192.505" width="8" height="8"></rect>
                    <text class="cls-15" transform="translate(384.975 184.774)"><tspan x="0" y="0">Third-party </tspan></text>
                    <text class="cls-15" transform="translate(384.975 189.774)"><tspan x="0" y="0">sick pay</tspan></text>
                    <rect class="cls-1" x="385.975" y="192.505" width="8" height="8"></rect>
                    <line class="cls-1" x1="295.325" y1="203.203" x2="418.225" y2="203.203"></line>
                    <text class="cls-5" transform="translate(299.575 211.201)"><tspan x="0" y="0" xmlSpace="preserve">14  </tspan></text>
                    <text class="cls-10" transform="translate(311.251 211.201)"><tspan x="0" y="0">Other</tspan></text>
                    <line class="cls-1" x1="295.325" y1="277.204" x2="418.225" y2="277.204"></line>
                    <line class="cls-3" x1=".375" y1="262.954" x2=".375" y2="275.453"></line>
                    <text class="cls-5" transform="translate(2.375 285.202)"><tspan x="0" y="0" xmlSpace="preserve">15  </tspan></text>
                    <text class="cls-10" transform="translate(12.049 285.202)"><tspan x="0" y="0">State</tspan></text>
                    <line class="cls-2" y1="305.202" x2="29.425" y2="305.202"></line>
                    <line class="cls-3" x1=".375" y1="274.953" x2=".375" y2="287.452"></line>
                    <text class="cls-10" transform="translate(58.175 285.202)"><tspan x="0" y="0">Employer’s state ID number</tspan></text>
                    <line class="cls-2" x1="28.925" y1="305.202" x2="159.025" y2="305.202"></line>
                    <line class="cls-1" x1="55.175" y1="294.953" x2="55.175" y2="287.452"></line>
                    <line class="cls-3" y1="325.206" x2="29.425" y2="325.206"></line>
                    <line class="cls-3" x1=".375" y1="286.955" x2=".375" y2="325.581"></line>
                    <line class="cls-3" x1="28.925" y1="325.203" x2="159.025" y2="325.203"></line>
                    <line class="cls-1" x1="55.175" y1="285.954" x2="55.175" y2="325.578"></line>
                    {/* <line class="cls-1" x1="150.775" y1="292.954" x2="150.775" y2="275.453"></line> */}
                    <text class="cls-5" transform="translate(153.775 285.202)"><tspan x="0" y="0" xmlSpace="preserve">16  </tspan></text>
                    <text class="cls-10" transform="translate(163.451 285.202)"><tspan x="0" y="0">State wages, tips, etc.</tspan></text>
                    <line class="cls-2" x1="158.525" y1="305.202" x2="245.425" y2="305.202"></line>
                    <line class="cls-1" x1="150.775" y1="276.953" x2="150.775" y2="287.452"></line>
                    <line class="cls-3" x1="158.525" y1="325.206" x2="245.425" y2="325.206"></line>
                    <line class="cls-1" x1="150.775" y1="286.955" x2="150.775" y2="324.581"></line>
                    {/* <line class="cls-1" x1="239.175" y1="262.954" x2="239.175" y2="275.453"></line> */}
                    <text class="cls-5" transform="translate(243.175 285.202)"><tspan x="0" y="0" xmlSpace="preserve">17  </tspan></text>
                    <text class="cls-10" transform="translate(251.851 285.202)"><tspan x="0" y="0">State income tax</tspan></text>
                    <line class="cls-2" x1="244.925" y1="305.202" x2="324.625" y2="305.202"></line>
                    <line class="cls-1" x1="239.175" y1="276.953" x2="239.175" y2="287.452"></line>
                    <line class="cls-3" x1="244.925" y1="325.206" x2="324.625" y2="325.206"></line>
                    <line class="cls-1" x1="239.175" y1="286.955" x2="239.175" y2="325.581"></line>
                    {/* <line class="cls-1" x1="312.375" y1="262.954" x2="312.375" y2="275.453"></line> */}
                    <text class="cls-5" transform="translate(316.375 285.202)"><tspan x="0" y="0" xmlSpace="preserve">18  </tspan></text>
                    <text class="cls-10" transform="translate(325.051 285.202)"><tspan x="0" y="0">Local wages, tips, etc.</tspan></text>
                    <line class="cls-2" x1="324.125" y1="305.202" x2="411.025" y2="305.202"></line>
                    <line class="cls-1" x1="312.375" y1="276.953" x2="312.375" y2="287.452"></line>
                    <line class="cls-3" x1="324.125" y1="325.206" x2="411.025" y2="325.206"></line>
                    <line class="cls-1" x1="312.375" y1="286.955" x2="312.375" y2="325.581"></line>
                    {/* <line class="cls-1" x1="403.775" y1="262.954" x2="403.775" y2="275.453"></line> */}
                    <text class="cls-5" transform="translate(406.775 285.202)"><tspan x="0" y="0" xmlSpace="preserve">19  </tspan></text>
                    <text class="cls-10" transform="translate(415.451 285.202)"><tspan x="0" y="0">Local income tax</tspan></text>
                    <line class="cls-2" x1="410.525" y1="305.202" x2="490.225" y2="305.202"></line>
                    <line class="cls-1" x1="403.775" y1="276.953" x2="403.775" y2="287.452"></line>
                    <line class="cls-3" x1="410.525" y1="325.206" x2="490.225" y2="325.206"></line>
                    <line class="cls-1" x1="403.775" y1="286.955" x2="403.775" y2="325.581"></line>
                    <line class="cls-3" x1="540.375" y1="262.954" x2="540.375" y2="275.453"></line>
                    {/* <line class="cls-1" x1="473.975" y1="262.954" x2="473.975" y2="275.453"></line> */}
                    <text class="cls-5" transform="translate(476.975 285.202)"><tspan x="0" y="0" xmlSpace="preserve">20  </tspan></text>
                    <text class="cls-10" transform="translate(487.651 285.202) scale(1 1.064)"><tspan x="0" y="0">Locality name</tspan></text>
                    <line class="cls-2" x1="489.725" y1="305.202" x2="540.75" y2="305.202"></line>
                    <line class="cls-3" x1="540.375" y1="274.953" x2="540.375" y2="287.452"></line>
                    <line class="cls-1" x1="473.975" y1="276.953" x2="473.975" y2="287.452"></line>
                    <line class="cls-3" x1="489.725" y1="325.206" x2="540.75" y2="325.206"></line>
                    <line class="cls-3" x1="540.375" y1="286.955" x2="540.375" y2="325.581"></line>
                    <line class="cls-1" x1="473.975" y1="286.955" x2="473.975" y2="325.581"></line>


                    <text class="cls-5" transform="translate(4.375 345.202)"><tspan x="0" y="0">Form</tspan></text>

                    <text class="cls-4" transform="translate(30.876 345.75)"><tspan x="0" y="0">W-2</tspan></text>
                    <text class="cls-6" transform="translate(70.876 345.75)"><tspan x="0" y="0">Wage and Tax Statement</tspan></text>

                    <text class="cls-6" transform="translate(290.876 345.75)" style={{ fontSize: '14px' }}><tspan x="0" y="0">{viewDataForm}</tspan></text>
                    <text class="cls-10" transform="translate(359.893 335.201)" style={{ fontSize: '6px' }}><tspan x="0" y="0">Department of the Treasury—Internal Revenue Service</tspan></text>




                    <text class="cls-8" transform="translate(126.08 30.054)"><tspan x="0" y="0">
                      {/* {entry.W2SSN}  */}
                      {entry.ssn}
                    </tspan></text>
                    <text class="cls-8" transform="translate(14.623 54.824)"><tspan x="0" y="0">
                      {/* {entry.W2FEIN} */}
                      {entry.ein}
                    </tspan></text>
                    <text class="cls-8" transform="translate(13.282 83.825)"><tspan x="0" y="0">
                      {entry.employer}
                    </tspan>
                    </text>
                    <text class="cls-8" transform="translate(13.282 96.979)"><tspan x="0" y="0">{entry.employerAddress} </tspan></text>
                    <text class="cls-8" transform="translate(13.282 110.255)"><tspan x="0" y="0">  {entry.employerCityStateZip}</tspan></text>

                    <text class="cls-8" transform="translate(14.282 150.399)"><tspan x="0" y="0"></tspan></text>

                    <text class="cls-8" transform="translate(13.282 176.401)"><tspan x="0" y="0">
                      {/* {employeeData.EMFNAM} {employeeData.EMMNAM} */}
                      {employeeData.firstName} {employeeData.middleInitial}
                    </tspan></text>
                    <text class="cls-8" transform="translate(141.383 176.401)"><tspan x="0" y="0">
                      {/* {employeeData.EMLNAM} */}
                      {employeeData.lastName}
                    </tspan></text>
                    <text class="cls-8" transform="translate(12.282 238.276)"><tspan x="0" y="0">
                      {/* {employeeData.EMADD1} */}
                      {entry.address}
                    </tspan></text>
                    <text class="cls-8" transform="translate(12.282 251.276)"><tspan x="0" y="0">
                      {/* {employeeData.EMADD1} */}
                      {entry.address1}
                    </tspan></text>
                    <text class="cls-8" transform="translate(11.282 263.276)"><tspan x="0" y="0">
                      {/* {employeeData.EMCITY}, {employeeData.EMST} {normalizezip(employeeData.EMZIP1)} */}
                      {entry.ciyStateZip}
                    </tspan></text>

                    <text class="cls-8" transform="translate(2.51 298.655)"><tspan x="0" y="0">
                      {/* {entry.W2SNAM} */}
                      {entry.box15State}
                    </tspan></text>
                    <text class="cls-8" transform="translate(58.534 298.655)"><tspan x="0" y="0">
                      {/* {entry.W2SEIN} */}
                      {entry.stateId}
                    </tspan></text>
                    <text class="cls-8" transform="translate(163.635 298.655)"><tspan x="0" y="0">
                      {/* {formatCurrency(entry.W2SWAG)} */}
                      {formatCurrency(entry.box16)}
                    </tspan></text>
                    <text class="cls-8" transform="translate(251.704 298.655)"><tspan x="0" y="0">
                      {/* {formatCurrency(entry.W2SITW)} */}
                      {formatCurrency(entry.box17)}
                    </tspan></text>
                    <text class="cls-8" transform="translate(324.767 298.655)"><tspan x="0" y="0">
                      {/* {formatCurrency(entry.W2SWAG)} */}


                    </tspan></text>
                    <text class="cls-8" transform="translate(414.837 298.655)"><tspan x="0" y="0">
                      {/* {formatCurrency(entry.W2LITW)} */}

                    </tspan></text>
                    <text class="cls-8" transform="translate(488.899 298.655)"><tspan x="0" y="0">{entry.W2LNA2}</tspan></text>
                    <text class="cls-8" transform="translate(312.133 54.824)"><tspan x="0" y="0">
                      {/* {formatCurrency(entry.W2WAGE)} */}
                      {formatCurrency(entry.box1)}
                    </tspan></text>
                    <text class="cls-8" transform="translate(312.132 78.91)"><tspan x="0" y="0">
                      {/* {formatCurrency(entry.W2FICW)} */}
                      {formatCurrency(entry.box3)}
                    </tspan></text>
                    <text class="cls-8" transform="translate(312.133 102.612)"><tspan x="0" y="0">
                      {/* {formatCurrency(entry.W2FICM)} */}
                      {formatCurrency(entry.box5)}
                    </tspan></text>
                    <text class="cls-8" transform="translate(312.132 126.697)"><tspan x="0" y="0">
                      {(entry.box7 != '' && entry.box7 != null && entry.box7 != 0) ? formatCurrency(entry.box7) : ''}

                    </tspan></text>

                    <text class="cls-8" transform="translate(312.132 150.697)"><tspan x="0" y="0">
                      {/* {formatCurrency(entry.W2FICT)} */}
                      {(entry.box9 != '' && entry.box9 != null && entry.box9 != 0) ? formatCurrency(entry.box9) : ''}

                    </tspan></text>
                    <text class="cls-8" transform="translate(315.132 151.697)"><tspan x="0" y="0"></tspan></text>
                    <text class="cls-8" transform="translate(435.231 54.824)"><tspan x="0" y="0">
                      {/* {formatCurrency(entry.W2FEDT)} */}
                      {formatCurrency(entry.box2)}
                    </tspan></text>
                    <text class="cls-8" transform="translate(435.231 78.91)"><tspan x="0" y="0">
                      {/* {formatCurrency(entry.W2FTWH)} */}
                      {formatCurrency(entry.box4)}
                    </tspan></text>
                    <text class="cls-8" transform="translate(435.231 102.612)"><tspan x="0" y="0">
                      {/* {formatCurrency(entry.W2FMWH)} */}
                      {formatCurrency(entry.box6)}
                    </tspan></text>
                    <text class="cls-8" transform="translate(435.231 126.697)"><tspan x="0" y="0">

                      {(entry.box8 != '' && entry.box8 != null && entry.box8 != 0) ? formatCurrency(entry.box8) : ''}

                    </tspan></text>
                    <text class="cls-8" transform="translate(312.133 175.42)"><tspan x="0" y="0">
                      {(entry.box11 != '' && entry.box11 != null && entry.box11 != 0) ? formatCurrency(entry.box11) : ''}

                    </tspan></text>
                    <text class="cls-8" transform="translate(435.231 151.401)"><tspan x="0" y="0">
                      {(entry.box10 != '' && entry.box10 != null && entry.box10 != 0) ? formatCurrency(entry.box10) : ''}

                    </tspan></text>
                    <text class="cls-11" transform="translate(313.900 200.4)"><tspan x="0" y="0"></tspan></text>
                    <text class="cls-11" transform="translate(350.50 199.4)" style={{ fontSize: '7px' }}><tspan x="0" y="0">{(entry.column33)}</tspan></text>
                    <text class="cls-11" transform="translate(386 200.4)"><tspan x="0" y="0"></tspan></text>
                    <text class="cls-8" transform="translate(429.278 175.42)"><tspan x="0" y="0">
                      {(entry.box12aAmount != '' && entry.box12aAmount != null && entry.box12aAmount != 0) ? (entry.box12aCode) : ''}
                    </tspan></text>

                    {(entry.box14Code1 == "" || entry.box14Code1 == null) ? <text class="cls-8" transform="translate(311.278 222.42)"><tspan x="0" y="0"><tspan x="0" y="0" style={{ visibility: 'hidden' }}>SUI :</tspan>  {(entry.box14Amount1 != '' && entry.box14Amount1 != null && entry.box14Amount1 != 0) ? <> : {formatCurrency(entry.box14Amount1)}  </> : ''}  </tspan></text> :

                      <text class="cls-8" transform="translate(300.278 222.42)"><tspan x="0" y="0">{(entry.box14Amount1 != '' && entry.box14Amount1 != null && entry.box14Amount1 != 0) ? <>{(entry.box14Code1)}  </> : ''}
                        {(entry.box14Amount1 != '' && entry.box14Amount1 != null && entry.box14Amount1 != 0) ? <> : {formatCurrency(entry.box14Amount1)}  </> : ''}</tspan></text>}


                    {(entry.box14Code2 == "" || entry.box14Code2 == null) ? <text class="cls-8" transform="translate(311.278 235.42)"><tspan x="0" y="0"><tspan x="0" y="0" style={{ visibility: 'hidden' }}>414G  :</tspan> {(entry.box14Amount2 != '' && entry.box14Amount2 != null && entry.box14Amount2 != 0) ? formatCurrency(entry.box14Amount2) : ''} </tspan></text> :

                      <text class="cls-8" transform="translate(300.278 235.42)"><tspan x="0" y="0">{(entry.box14Amount2 != '' && entry.box14Amount2 != null && entry.box14Amount2 != 0) ? (entry.box14Code2) : ''} {(entry.box14Amount2 != '' && entry.box14Amount2 != null && entry.box14Amount2 != 0) ? <> : {formatCurrency(entry.box14Amount2)}</> : ''} </tspan></text>}

                    {(entry.box14Code3 == "" || entry.box14Code3 == null) ? <text class="cls-8" transform="translate(300.278 246.42)"><tspan x="0" y="0"><tspan x="0" y="0" style={{ visibility: 'hidden' }}>414(h) :</tspan>  {(entry.box14Amount3 != '' && entry.box14Amount3 != null && entry.box14Amount3 != 0) ? formatCurrency(entry.box14Amount3) : ''} </tspan></text> :

                      <text class="cls-8" transform="translate(300.278 246.42)"><tspan x="0" y="0"> {(entry.box14Amount3 != '' && entry.box14Amount3 != null && entry.box14Amount3 != 0) ? entry.box14Code3 : ''} {(entry.box14Amount3 != '' && entry.box14Amount3 != null && entry.box14Amount3 != 0) ? <>: {formatCurrency(entry.box14Amount3)}</> : ''} </tspan></text>}

                    {(entry.box14Code4 == "" || entry.box14Code4 == null) ? <text class="cls-8" transform="translate(300.278 257.42)"><tspan x="0" y="0"><tspan x="0" y="0" style={{ visibility: 'hidden' }}>414(h) :</tspan>  {(entry.box14Amount4 != '' && entry.box14Amount4 != null && entry.box14Amount4 != 0) ? formatCurrency(entry.box14Amount4) : ''} </tspan></text> :

                      <text class="cls-8" transform="translate(300.278 257.42)"><tspan x="0" y="0"> {(entry.box14Amount4 != '' && entry.box14Amount4 != null && entry.box14Amount4 != 0) ? entry.box14Code4 : ''} {(entry.box14Amount4 != '' && entry.box14Amount4 != null && entry.box14Amount4 != 0) ? <>: {formatCurrency(entry.box14Amount4)}</> : ''} </tspan></text>}

                    {(entry.box14Code5 == "" || entry.box14Code5 == null) ? <text class="cls-8" transform="translate(300.278 270.42)"><tspan x="0" y="0"><tspan x="0" y="0" style={{ visibility: 'hidden' }}>414(h) :</tspan>  {(entry.box14Amount5 != '' && entry.box14Amount5 != null && entry.box14Amount5 != 0) ? formatCurrency(entry.box14Amount5) : ''} </tspan></text> :

                      <text class="cls-8" transform="translate(300.278 270.42)"><tspan x="0" y="0"> {(entry.box14Amount5 != '' && entry.box14Amount5 != null && entry.box14Amount5 != 0) ? entry.box14Code5 : ''} {(entry.box14Amount5 != '' && entry.box14Amount5 != null && entry.box14Amount5 != 0) ?<>: {formatCurrency(entry.box14Amount5)}</>  : ''} </tspan></text>}


                    <text class="cls-8" transform="translate(459.302 175.42)"><tspan x="0" y="0">
                      {/* {formatCurrency(entry.W2DAMT)} */}
                      {(entry.box12aAmount != '' && entry.box12aAmount != null && entry.box12aAmount != 0) ? formatCurrency(entry.box12aAmount) : ''}
                    </tspan></text>
                    <text class="cls-8" transform="translate(429.278 199.335)"><tspan x="0" y="0">
                      {(entry.box12bAmount != '' && entry.box12bAmount != null && entry.box12bAmount != 0) ? entry.box12bCode : ''}
                    </tspan></text>
                    <text class="cls-8" transform="translate(459.302 199.335)"><tspan x="0" y="0">
                      {/* {formatCurrency(entry.W2DAM2)} */}
                      {(entry.box12bAmount != '' && entry.box12bAmount != null && entry.box12bAmount != 0) ? formatCurrency(entry.box12bAmount) : ''}
                    </tspan></text>
                    <text class="cls-8" transform="translate(429.278 223.825)"><tspan x="0" y="0">
                      {/* {entry.W2DMS3} */}
                      {(entry.box12cAmount != '' && entry.box12cAmount != null && entry.box12cAmount != 0) ? (entry.box12cCode) : ''}
                    </tspan></text>
                    <text class="cls-8" transform="translate(459.302 223.825)"><tspan x="0" y="0">
                      {/* {formatCurrency(entry.W2DAM3)} */}
                      {(entry.box12cAmount != '' && entry.box12cAmount != null && entry.box12cAmount != 0) ? formatCurrency(entry.box12cAmount) : ''}
                    </tspan></text>
                    <text class="cls-8" transform="translate(429.278 247.335)"><tspan x="0" y="0">
                      {/* {entry.W2DMS4} */}
                      {(entry.box12dAmount != '' && entry.box12dAmount != null && entry.box12dAmount != 0) ? entry.box12dCode : ''}
                    </tspan></text>
                    <text class="cls-8" transform="translate(459.302 247.335)"><tspan x="0" y="0">
                      {/* {formatCurrency(entry.W2DAM4)} */}
                      {(entry.box12dAmount != '' && entry.box12dAmount != null && entry.box12dAmount != 0) ? formatCurrency(entry.box12dAmount) : ''}
                    </tspan></text>

                  </svg>
                </div>
              </>





            ))}
          </>


        }
      </div>
    </>
  )
}
export default Pdf
