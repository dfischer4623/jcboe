
import React, { useState, useEffect } from 'react';
import Header from './header';
import Sidebar from './sidebar';
import PrintIcon from '@mui/icons-material/Print';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import { Link } from 'react-router-dom';
import secureLocalStorage from "react-secure-storage";
import { pofromvendorSearch, showBank } from '../actions/admin.actions';
import {
    useNavigate
} from "react-router-dom";
// modal code start here
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));
const Vendordetails = () => {
    const [employeeData, setEmployeeData] = useState({});
    const [VendorData, setVendorData] = useState({});

    const [opendraft, setOpendraft] = React.useState(false);
    const handleOpendraft = () => setOpendraft(true);
    const handleClosedraft = () => setOpendraft(false);
    let navigate = useNavigate();
    useEffect(() => {
        var userid = secureLocalStorage.getItem('vendorNumberData');

        console.log(userid);
        if ((userid) == null || (userid) == undefined) {


            navigate(`/vendorsearch`);

        } else {


            setVendorData(userid[0]);

            secureLocalStorage.setItem("VendorDataprint", userid);

            // secureLocalStorage.removeItem('vendorNumberData');


        }

    }, []);

    let dollarUS = Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    });

    let percentageUS = Intl.NumberFormat("en-US", {
        style: "percent",
        minimumFractionDigits: 4,
    });
    const exportTopdf = (e) => {





        window.open('Pdfvendordeta/', '_blank', 'noopener,noreferrer');




    };
    const [errormsgform, setErrorMsgForm] = useState('');
    const checkSelected = (VNNO) => {
        pofromvendorSearch(VNNO).then((res) => {
            console.log('add-user res=====>>>>', res.data);
            if (res.data == '' || res.data == null || res.data.length == 0) {
                setErrorMsgForm(`No PO's found with vendor number ` + VendorData.VNNO);
                setOpendraft(true);
                return;
            } else {

                secureLocalStorage.setItem("showPOData", res.data);



                navigate("/showPO");
            }

        }).catch((error) => {

            console.log('error occurs while registring the user', error);
        });
    };
    const checkSelectedBank = (VNNO) => {
        showBank(VNNO).then((res) => {
            console.log('add-user res=====>>>>', res.data);
            if (res.data == '' || res.data == null || res.data.length == 0) {
                setErrorMsgForm(`No Check found with vendor number ` + VendorData.VNNO);
                setOpendraft(true);
                return;
            } else {

                secureLocalStorage.setItem("bankDetailsData", res.data);



                navigate("/checksearchlist");
            }

        }).catch((error) => {

            console.log('error occurs while registring the user', error);
        });
    };
    return (
        <>
            <Header />
            <Sidebar />

            <div className='main-inner-sec content-main'>


                <div class=" emp-main-heading-emp all-simple-table-margin">
                    <div class="main-heading-sec ">
                        <div class="col-md-12">
                            <div class="head-inner head-inner-main">
                                <h2>Vendor Data</h2>

                                <div class="head-right print-right vendor-print new-vend-all ven-all-pdf">
                                    {VendorData != null &&
                                        <>
                                            <span className='print-icon' onClick={(e) => exportTopdf()}><PrintIcon /></span>
                                            <button class="btn btn-submit btn-clear btn-show-po btn-all-po btn-all-sec" onClick={(e) => { e.preventDefault(); checkSelected(VendorData.VNNO); }}>Show PO</button>
                                            <button class="btn btn-submit btn-clear btn-show-po btn-all-sec btn-all-bank" onClick={(e) => { e.preventDefault(); checkSelectedBank(VendorData.VNNO); }}>Check Search</button>

                                        </>

                                    }
                                </div>
                            </div>
                            <div className='back-sec'>
                                <Link to="/vendorsearchlist" className="back-btn-sec"><KeyboardDoubleArrowLeftIcon />Back</Link>
                            </div>
                        </div>
                    </div>
                </div>
                {VendorData != null &&

                    <>
                        <div className='emp-table-sec margin-top-po-table'>
                            <div className="emp-table-sec vendor-details-sec backg-shaw-main backg-detaisl form-detail-main border-top-sec margin-btm-vendtal">
                                <div className='emp-data-value-sec form-detail-inner'>
                                    <div className='row'>
                                        <div className=' form-detail-left vendor-detail-left'>
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
                                                <div className='form-detail-left-inner vebdor-details-left'>
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

                                            <div className='row'>
                                                <div className='form-detail-left-inner vebdor-details-left'>
                                                    <div className='form-details-label'>
                                                        <h3>Payment Priority
                                                        </h3>
                                                        <p className='semicolon'>:</p>
                                                    </div>

                                                </div>
                                                <div className='form-detail-right-inner'>
                                                    <div className='form-details-value'>
                                                        <p>{VendorData.VNPRY} (9 = Highest)</p>
                                                    </div>

                                                </div>
                                            </div>

                                            <div className='row'>
                                                <div className='form-detail-left-inner last-right-data vebdor-details-left'>
                                                    <div className='form-details-label'>
                                                        <h3>Liability account keyword
                                                        </h3>
                                                        <p className='semicolon'>:</p>
                                                    </div>

                                                </div>
                                                <div className='form-detail-right-inner'>
                                                    <div className='form-details-value'>
                                                        <p>{VendorData.VNACCT}</p>
                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                        <div className='form-detail-midle vendor-detail-middle'>
                                            <div className='border-after'></div>
                                        </div>
                                        <div className=' form-detail-right vedor-detail-right '>

                                            {/* <div className='row'>
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
                                            </div> */}
                                            {/* <div className='row'>
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
                                            </div> */}

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
                                                            {/* N/A */}
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

                        </div>
                    </>
                }


            </div>
            <BootstrapDialog
                onClose={handleClosedraft}
                aria-labelledby="customized-dialog-title"
                open={opendraft} className='formdetails-sec form-status approve-modal error-selct-msg modal-check-box'
            >
                <IconButton
                    aria-label="close"
                    onClick={handleClosedraft}
                    sx={(theme) => ({
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: theme.palette.grey[500],
                    })}
                >
                    <CloseIcon />
                </IconButton>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        <div className='form-details-inner form-details-apprv'>
                            <p className='succ-val-sec select-frm-sec'>{errormsgform}</p>
                        </div>
                    </Typography>
                </DialogContent>
            </BootstrapDialog>

        </>
    )
}

export default Vendordetails;
