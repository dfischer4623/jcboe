import React, { useState, useEffect } from 'react';



import logoimg from "../assets/img/logob.png";


import secureLocalStorage from "react-secure-storage";
import {
    useNavigate
} from "react-router-dom";
import axios from 'axios';
import { AppContext } from '../context';


function Pdf() {
    const [VendorData, setVendorData] = useState([]);
    const [poData, setPoData] = useState({});

    let navigate = useNavigate();
    useEffect(() => {
        var userid = secureLocalStorage.getItem('VendorsystemDataprint');



        console.log('userid', userid);
        if ((userid) == null || (userid) == undefined) {


            navigate(`/posearch`);

        } else {
            console.log(userid);
            setVendorData(userid);




        }
        setTimeout(function () {
             triggerPrint();
        }, 1000);
    }, []);
    const triggerPrint = () => {



        document.title = 'Vendor Details';


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

    let percentageUS = Intl.NumberFormat("en-US", {
        style: "percent",
        minimumFractionDigits: 4,
    });
    const styles = {
        body: {
            WebkitPrintColorAdjust: "exact",
        },
        pageBreak: {
            pageBreakAfter: "always",
            marginTop: '10px',
        },
    };
    return (
        <>

            <div className='conatiner-pdfss' style={styles.body}>

                {VendorData != null &&
                    <>

                        <div className="conatiner-pdf " style={styles.pageBreak}>
                            <div className="pdf-section">
                                <table style={{ width: '100%', marginTop: '10px' }}>

                                    <tr>
                                        <td colSpan="2" class="pdf-header">
                                            <img src={logoimg} />
                                        </td>
                                    </tr>

                                </table>
                                <div class=" ">
                                    <div class="main-heading-sec ">
                                        <div class="col-md-12">
                                            <div class="head-inner head-inner-main reqid-sec reqid-sec-pdf padding-top-pdf pdf-po">

                                                {/* <h2>Purchase Order Search</h2> */}
                                                <h2 className='po-doc-pdf'>  Vendor Data</h2>
                                                <h3 className='po-num-pdf'>Vendor Number: {VendorData.vendorNumber}</h3>




                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <table className="general-sec-pdf po-pdf-margin">
                                    <tbody>
                                        <tr>
                                            <td className="main-gen-inner">
                                                <table style={{ width: '100%' }}>
                                                    <tbody><tr>
                                                        <td className="main-gen-width main-gen-width-new-sys"><b>Vendor Name:</b></td>
                                                        <td className="pdf-data"> {VendorData.indexName}
                                                        </td>
                                                    </tr>
                                                    </tbody></table>
                                            </td>
                                            <td className="main-gen-inner">
                                                <table style={{ width: '100%' }}>
                                                    <tbody>
                                                        <tr>
                                                            <td className="main-gen-width main-gen-width-new-sys ">
                                                                <b>
                                                                    Remit To Name
                                                                    :</b>
                                                            </td>
                                                            <td className="pdf-data">   {VendorData.remitToName}</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="main-gen-width main-gen-width-new-sys main-margin">
                                                <table style={{ width: '100%', marginBottom: '5px' }}>
                                                    <tr>
                                                        <td className="main-gen-width main-gen-width-new-sys">
                                                            <b>Address:</b></td>
                                                        <td className="pdf-data">
                                                            {VendorData.remitToAddressLine1} {VendorData.remitToAddressLine2}

                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                            <td className="main-gen-width main-gen-width-new-sys main-margin">
                                                <table style={{ width: '100%', marginBottom: '5px' }}>
                                                    <tr>
                                                        <td className="main-gen-width main-gen-width-new-sys">
                                                            <b>City State Zip:</b>
                                                        </td>
                                                        <td className="pdf-data">       {VendorData.remitToCity}, {VendorData.remitToState} {VendorData.remitToZip} </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>

                                              <tr>
                                            <td className="main-gen-width main-gen-width-new-sys main-margin">
                                                <table style={{ width: '100%', marginBottom: '5px' }}>
                                                    <tr>
                                                        <td className="main-gen-width main-gen-width-new-sys">
                                                            <b>Mailing Name:</b></td>
                                                        <td className="pdf-data">
                                                            {VendorData.poMailingName}

                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                            <td className="main-gen-width main-gen-width-new-sys main-margin">
                                                <table style={{ width: '100%', marginBottom: '5px' }}>
                                                    <tr>
                                                        <td className="main-gen-width main-gen-width-new-sys">
                                                            <b>Requested By:</b>
                                                        </td>
                                                        <td className="pdf-data">      {VendorData.user} </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>

                                             <tr>
                                            <td className="main-gen-width main-gen-width-new-sys main-margin">
                                                <table style={{ width: '100%', marginBottom: '5px' }}>
                                                    <tr>
                                                        <td className="main-gen-width main-gen-width-new-sys">
                                                            <b>Mailing Address:</b></td>
                                                        <td className="pdf-data">
                                                         {VendorData.poMailingAddressLine1} {VendorData.poMailingAddressLine2}

                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                            <td className="main-gen-width main-gen-width-new-sys main-margin">
                                                <table style={{ width: '100%', marginBottom: '5px' }}>
                                                    <tr>
                                                        <td className="main-gen-width main-gen-width-new-sys">
                                                            <b> Mailing City State Zip:</b>
                                                        </td>
                                                        <td className="pdf-data">    {VendorData.poMailingCity}, {VendorData.poMailingState} {VendorData.poMailingZip} </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>


                                             <tr>
                                            <td className="main-gen-width main-gen-width-new-sys main-margin">
                                                <table style={{ width: '100%', marginBottom: '5px' }}>
                                                    <tr>
                                                        <td className="main-gen-width main-gen-width-new-sys">
                                                            <b>Phone #:</b></td>
                                                        <td className="pdf-data  pdf-contact-data-email">
                                                      {VendorData.phoneNumber}

                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                            <td className="main-gen-width main-gen-width-new-sys main-margin">
                                                <table style={{ width: '100%', marginBottom: '5px' }}>
                                                    <tr>
                                                        <td className="main-gen-width main-gen-width-new-sys">
                                                            <b>Fax #:</b>
                                                        </td>
                                                        <td className="pdf-data">      {VendorData.faxNumber} </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>

                                        {/* <tr>
                                            <td className="main-gen-width main-gen-width-new-sys main-margin">
                                                <table style={{ width: '100%', marginBottom: '5px' }}>
                                                    <tr>
                                                        <td className="main-gen-width main-gen-width-new-sys">
                                                            <b>Contact Person:</b>
                                                        </td>
                                                        <td className="pdf-data">
                                                            {VendorData.vContact}

                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                            <td className="main-gen-width main-gen-width-new-sys main-margin">
                                                <table style={{ width: '100%', marginBottom: '5px' }}>
                                                    <tr>
                                                        <td className="main-gen-width main-gen-width-new-sys">
                                                            <b>Contact Email:</b>
                                                        </td>
                                                        <td className="pdf-data">     {VendorData.vEmail} </td>
                                                    </tr>
                                                </table>
                                            </td>
                                         
                                        </tr> */}

                                           <tr>
                                            <td className="main-gen-width main-gen-width-new-sys main-margin">
                                                <table style={{ width: '100%', marginBottom: '5px' }}>
                                                    <tr>
                                                        <td className="main-gen-width main-gen-width-new-sys">
                                                            <b>Contact:</b></td>
                                                        <td className="pdf-data">
                                                         {VendorData.vContact}

                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                            <td className="main-gen-width main-gen-width-new-sys main-margin">
                                                <table style={{ width: '100%', marginBottom: '5px' }}>
                                                    <tr>
                                                        <td className="main-gen-width main-gen-width-new-sys">
                                                            <b> Email:</b>
                                                        </td>
                                                        <td className="pdf-data pdf-contact-data-email">     {VendorData.vEmail} </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>

                                        










                                    </tbody>

                                </table>

                            </div>
                        </div>

                        {/* <div className='emp-table-sec margin-top-po-table'>
                            <div className="emp-table-sec vendor-details-sec backg-shaw-main backg-detaisl form-detail-main border-top-sec margin-btm-vendtal">
                                <div className='emp-data-value-sec form-detail-inner'>
                                    <div className='row'>
                                        <div className=' form-detail-left vendor-detail-left pdf-vendor-left'>
                                            <div className='row'>

                                                <div className='form-detail-left-inner vebdor-details-left'>
                                                    <div className='form-details-label'>
                                                        <h3>Vendor Number</h3>
                                                        <p className='semicolon'>:</p>
                                                    </div>

                                                </div>
                                                <div className='form-detail-right-inner'>
                                                    <div className='form-details-value'>
                                                        <p>{VendorData.VNNO}</p>
                                                    </div>

                                                </div>
                                            </div>

                                            <div className='row'>
                                                <div className='form-detail-left-inner vebdor-details-left'>
                                                    <div className='form-details-label'>
                                                        <h3>Vendor Name</h3>
                                                        <p className='semicolon'>:</p>
                                                    </div>

                                                </div>
                                                <div className='form-detail-right-inner'>
                                                    <div className='form-details-value'>
                                                        <p>{VendorData.VNNAME}  </p>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className='form-detail-left-inner vebdor-details-left'>
                                                    <div className='form-details-label'>
                                                        <h3></h3>
                                                        <p className='semicolon'>:</p>
                                                    </div>

                                                </div>
                                                <div className='form-detail-right-inner'>
                                                    <div className='form-details-value'>
                                                        <p> {VendorData.VNNAM2} </p>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className='form-detail-left-inner vebdor-details-left'>
                                                    <div className='form-details-label'>
                                                        <h3>Address
                                                        </h3>
                                                        <p className='semicolon'>:</p>
                                                    </div>

                                                </div>
                                                <div className='form-detail-right-inner'>
                                                    <div className='form-details-value'>
                                                        <p>{VendorData.VNADDR} {VendorData.VNADD2} </p>
                                                    </div>

                                                </div>
                                            </div>

                                            <div className='row'>
                                                <div className='form-detail-left-inner vebdor-details-left'>
                                                    <div className='form-details-label'>
                                                        <h3>City State Zip
                                                        </h3>
                                                        <p className='semicolon'>:</p>
                                                    </div>

                                                </div>
                                                <div className='form-detail-right-inner'>
                                                    <div className='form-details-value'>
                                                        <p>{VendorData.VNCITY}, {VendorData.VNST} {VendorData.VNZIP}</p>
                                                    </div>

                                                </div>
                                            </div>

                                            <div className='row'>
                                                <div className='form-detail-left-inner vebdor-details-left'>
                                                    <div className='form-details-label'>
                                                        <h3>Province
                                                        </h3>
                                                        <p className='semicolon'>:</p>
                                                    </div>

                                                </div>
                                                <div className='form-detail-right-inner'>
                                                    <div className='form-details-value'>
                                                        <p>{VendorData.VNPROV} <strong>P/C</strong> {VendorData.VNPC}</p>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className='form-detail-left-inner vebdor-details-left'>
                                                    <div className='form-details-label'>
                                                        <h3>Phone
                                                        </h3>
                                                        <p className='semicolon'>:</p>
                                                    </div>

                                                </div>
                                                <div className='form-detail-right-inner'>
                                                    <div className='form-details-value'>
                                                        <p>({VendorData.VNAREA}) {VendorData.VNPHON}</p>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className='form-detail-left-inner vebdor-details-left'>
                                                    <div className='form-details-label'>
                                                        <h3>Vendor's Usual Terms
                                                        </h3>
                                                        <p className='semicolon'>:</p>
                                                    </div>

                                                </div>
                                                <div className='form-detail-right-inner'>
                                                    <div className='form-details-value'>
                                                        <p></p>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className='form-detail-left-inner vebdor-details-left'>
                                                    <div className='form-details-label'>
                                                        <h3>Cash Discount
                                                        </h3>
                                                        <p className='semicolon'>:</p>
                                                    </div>

                                                </div>
                                                <div className='form-detail-right-inner'>
                                                    <div className='form-details-value'>
                                                        <p>{percentageUS.format(VendorData.VNCASH)}</p>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className='form-detail-left-inner vebdor-details-left'>
                                                    <div className='form-details-label'>
                                                        <h3>Trade Discount
                                                        </h3>
                                                        <p className='semicolon'>:</p>
                                                    </div>

                                                </div>
                                                <div className='form-detail-right-inner'>
                                                    <div className='form-details-value'>
                                                        <p>{percentageUS.format(VendorData.VNTRAD)}</p>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className='form-detail-left-inner vebdor-details-left'>
                                                    <div className='form-details-label'>
                                                        <h3>Minimum Order $
                                                        </h3>
                                                        <p className='semicolon'>:</p>
                                                    </div>

                                                </div>
                                                <div className='form-detail-right-inner'>
                                                    <div className='form-details-value'>
                                                        <p>{dollarUS.format(VendorData.VNMIN)}</p>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className='form-detail-left-inner vebdor-details-left'>
                                                    <div className='form-details-label'>
                                                        <h3>Hold new orders ?
                                                        </h3>
                                                        <p className='semicolon'>:</p>
                                                    </div>

                                                </div>
                                                <div className='form-detail-right-inner'>
                                                    <div className='form-details-value'>
                                                        <p>N__BIZ  DIS  BID</p>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className='form-detail-left-inner vebdor-details-left'>
                                                    <div className='form-details-label'>
                                                        <h3>Hold payments ?
                                                        </h3>
                                                        <p className='semicolon'>:</p>
                                                    </div>

                                                </div>
                                                <div className='form-detail-right-inner'>
                                                    <div className='form-details-value'>
                                                        <p>N___N___N___N</p>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className='form-detail-left-inner last-right-data vebdor-details-left'>
                                                    <div className='form-details-label'>
                                                        <h3>Maximum Payable without P/O
                                                        </h3>
                                                        <p className='semicolon'>:</p>
                                                    </div>

                                                </div>
                                                <div className='form-detail-right-inner'>
                                                    <div className='form-details-value'>
                                                        <p>{dollarUS.format(VendorData.VNNOPO)}</p>
                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                        <div className='form-detail-midle vendor-detail-middle pdf-vendor-midle'>
                                            <div className='border-after'></div>
                                        </div>
                                        <div className=' form-detail-right vedor-detail-right pdf-vendor-right'>

                                            <div className='row'>
                                                <div className='form-detail-left-innerss vebdor-details-left'>
                                                    <div className='form-details-label'>
                                                        <h3>Payment Priority</h3>
                                                        <p className='semicolon'>:</p>
                                                    </div>

                                                </div>
                                                <div className='form-detail-right-innerss'>
                                                    <div className='form-details-value'>
                                                        <p>{VendorData.VNPRY} (9 = Highest)</p>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className='form-detail-left-innerss vebdor-details-left'>
                                                    <div className='form-details-label'>
                                                        <h3>Liability account keyword</h3>
                                                        <p className='semicolon'>:</p>
                                                    </div>

                                                </div>
                                                <div className='form-detail-right-innerss'>
                                                    <div className='form-details-value'>
                                                        <p>{VendorData.VNACCT}</p>
                                                    </div>

                                                </div>
                                            </div>
                                          
                                            <div className='row'>
                                                <div className='form-detail-left-innerss vebdor-details-left'>
                                                    <div className='form-details-label'>
                                                        <h3>Related to Vendor group</h3>
                                                        <p className='semicolon'>:</p>
                                                    </div>

                                                </div>
                                                <div className='form-detail-right-innerss'>
                                                    <div className='form-details-value'>
                                                        <p>{VendorData.VNREL}</p>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className='form-detail-left-innerss vebdor-details-left'>
                                                    <div className='form-details-label'>
                                                        <h3>Remit To (If Different)</h3>
                                                        <p className='semicolon'>:</p>
                                                    </div>

                                                </div>
                                                <div className='form-detail-right-innerss'>
                                                    <div className='form-details-value'>
                                                        <p>
                                                     
                                                        
                                                        </p>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className='form-detail-left-innerss vebdor-details-left'>
                                                    <div className='form-details-label'>
                                                        <h3></h3>
                                                        <p className='semicolon'>:</p>
                                                    </div>

                                                </div>
                                                <div className='form-detail-right-innerss'>
                                                    <div className='form-details-value'>
                                                        <p>
                                                        {VendorData.VNRMAT}
                                                        </p>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className='form-detail-left-innerss vebdor-details-left'>
                                                    <div className='form-details-label'>
                                                        <h3></h3>
                                                        <p className='semicolon'>:</p>
                                                    </div>

                                                </div>
                                                <div className='form-detail-right-innerss'>
                                                    <div className='form-details-value'>
                                                        <p>
                                                        {VendorData.VNRMA1} {VendorData.VNRMA2}
                                                        </p>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className='form-detail-left-innerss vebdor-details-left'>
                                                    <div className='form-details-label'>
                                                        <h3></h3>
                                                        <p className='semicolon'>:</p>
                                                    </div>

                                                </div>
                                                <div className='form-detail-right-innerss'>
                                                    <div className='form-details-value'>
                                                        <p>
                                                        {VendorData.VNRMCT}, {VendorData.VNRMST} {VendorData.VNRMZ1}
                                                        </p>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className='form-detail-left-innerss vebdor-details-left'>
                                                    <div className='form-details-label'>
                                                        <h3></h3>
                                                        <p className='semicolon'>:</p>
                                                    </div>

                                                </div>
                                                <div className='form-detail-right-innerss'>
                                                    <div className='form-details-value'>
                                                        <p>
                                                        {VendorData.VNRMPR} <strong>P/C</strong> {VendorData.VNRMPC}
                                                        </p>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className='form-detail-left-innerss vebdor-details-left'>
                                                    <div className='form-details-label'>
                                                        <h3>Shipping terms</h3>
                                                        <p className='semicolon'>:</p>
                                                    </div>

                                                </div>
                                                <div className='form-detail-right-innerss'>
                                                    <div className='form-details-value'>
                                                        <p>
                                                        {VendorData.VNSHIP}
                                                        </p>
                                                    </div>

                                                </div>
                                            </div>

                                            <div className='row'>
                                                <div className='form-detail-left-innerss vebdor-details-left'>
                                                    <div className='form-details-label'>
                                                        <h3>Payment terms</h3>
                                                        <p className='semicolon'>:</p>
                                                    </div>

                                                </div>
                                                <div className='form-detail-right-innerss'>
                                                    <div className='form-details-value'>
                                                        <p>
                                                        {VendorData.VNPMT}
                                                        </p>
                                                    </div>

                                                </div>
                                            </div>

                                            <div className='row'>
                                                <div className='form-detail-left-innerss vebdor-details-left'>
                                                    <div className='form-details-label'>
                                                        <h3>Recipient Number</h3>
                                                        <p className='semicolon'>:</p>
                                                    </div>

                                                </div>
                                                <div className='form-detail-right-innerss'>
                                                    <div className='form-details-value'>
                                                        <p>
                                                        {VendorData.VN10RF}
                                                        </p>
                                                    </div>

                                                </div>
                                            </div>

                                            <div className='row'>
                                                <div className='form-detail-left-innerss vebdor-details-left'>
                                                    <div className='form-details-label'>
                                                        <h3>Open orders</h3>
                                                        <p className='semicolon'>:</p>
                                                    </div>

                                                </div>
                                                <div className='form-detail-right-innerss'>
                                                    <div className='form-details-value'>
                                                        <p>
                                                        {dollarUS.format(VendorData.VNENC)}
                                                        </p>
                                                    </div>

                                                </div>
                                            </div>

                                            <div className='row'>
                                                <div className='form-detail-left-innerss vebdor-details-left'>
                                                    <div className='form-details-label'>
                                                        <h3>Unpaid Invoice</h3>
                                                        <p className='semicolon'>:</p>
                                                    </div>

                                                </div>
                                                <div className='form-detail-right-innerss'>
                                                    <div className='form-details-value'>
                                                        <p>
                                                        {dollarUS.format(VendorData.VNACCR)}
                                                        </p>
                                                    </div>

                                                </div>
                                            </div>

                                            <div className='row'>
                                                <div className='form-detail-left-innerss vebdor-details-left'>
                                                    <div className='form-details-label'>
                                                        <h3>Volume this year</h3>
                                                        <p className='semicolon'>:</p>
                                                    </div>

                                                </div>
                                                <div className='form-detail-right-innerss'>
                                                    <div className='form-details-value'>
                                                        <p>
                                                        {dollarUS.format(VendorData.VNCUR)}
                                                        </p>
                                                    </div>

                                                </div>
                                            </div>

                                            <div className='row'>
                                                <div className='form-detail-left-innerss vebdor-details-left'>
                                                    <div className='form-details-label'>
                                                        <h3>Volume last year  </h3>
                                                        <p className='semicolon'>:</p>
                                                    </div>

                                                </div>
                                                <div className='form-detail-right-innerss'>
                                                    <div className='form-details-value'>
                                                        <p>
                                                        {dollarUS.format(VendorData.VNPRI)}
                                                        </p>
                                                    </div>

                                                </div>
                                            </div>

                                            <div className='row'>
                                                <div className='form-detail-left-innerss vebdor-details-left'>
                                                    <div className='form-details-label'>
                                                        <h3>Box Number if 1099 Vendor</h3>
                                                        <p className='semicolon'>:</p>
                                                    </div>

                                                </div>
                                                <div className='form-detail-right-innerss'>
                                                    <div className='form-details-value'>
                                                        <p>
                                                            
                                                        </p>
                                                    </div>

                                                </div>
                                            </div>

                                            <div className='row'>
                                                <div className='form-detail-left-innerss last-right-data vebdor-details-left'>
                                                    <div className='form-details-label'>
                                                        <h3>1099 Volume</h3>
                                                        <p className='semicolon'>:</p>
                                                    </div>

                                                </div>
                                                <div className='form-detail-right-innerss'>
                                                    <div className='form-details-value'>
                                                        <p>
                                                        {dollarUS.format(VendorData.VNCR10)}
                                                        </p>
                                                    </div>

                                                </div>
                                            </div>




                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div> */
                        }
                    </>

                }


            </div >
        </>
    )
}
export default Pdf
