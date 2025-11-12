import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from '../assets/img/logo-white.png';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import DescriptionIcon from '@mui/icons-material/Description';
import vendorsrchimg from '../assets/img/vendor-serach-icon.png';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import payrollcodeimg from '../assets/img/payroll-code.png';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { holdUser } from '../features/userdataSlice';
import { login, foegetpasword } from '../actions/admin.actions';
import secureLocalStorage from "react-secure-storage";
import { useDispatch } from "react-redux";
import { AppContext } from '../context';
const Sidebar = () => {
  const location = useLocation();
  const isActiveMenu = (paths) => {
    return paths.some((path) => location.pathname.startsWith(path));
  };
  let navigate = useNavigate();
  const [formDate, setformDate] = useState("");
  const [activeMenus, setActiveMenus] = useState('home');
  const [activeSubMenus, setActiveSubMenus] = useState();
    const [user, setUser] = useState(null);
    const dispatch = useDispatch();
React.useEffect(() => {

    if (window.location.pathname == '/') {
      setActiveMenus('home');

    }
    else if (window.location.pathname == '/home') {
      setActiveMenus('home');
      // setActiveSubMenus('bannerhome');
    }
    else if (window.location.pathname == '/employeedata') {
      setActiveMenus('home');
      setActiveSubMenus('empdata');
    }
    else if (window.location.pathname == '/attendance') {
      setActiveMenus('home');
      setActiveSubMenus('attendance');
    }
    else if (window.location.pathname == '/attendancedetails') {
      setActiveMenus('home');
      setActiveSubMenus('attendancedetails');
    }
    else if (window.location.pathname == '/additionaltags') {
      setActiveMenus('home');
      setActiveSubMenus('additionaltags');
    }
    else if (window.location.pathname == '/Certificates') {
      setActiveMenus('home');
      setActiveSubMenus('Certificates');
    }
    else if (window.location.pathname == '/salaries') {
      setActiveMenus('home');
      setActiveSubMenus('salaries');
    }
    else if (window.location.pathname == '/voluntarydeductions') {
      setActiveMenus('home');
      setActiveSubMenus('voluntarydeductions');
    }
    else if (window.location.pathname == '/payroll' || window.location.pathname == '/showPayrollCheck') {
      setActiveMenus('home');
      setActiveSubMenus('payroll');
    }

    else if (window.location.pathname == '/W2s' || window.location.pathname == '/showW2Details') {
      setActiveMenus('home');
      setActiveSubMenus('W2s');
    }
    else if (window.location.pathname == '/posearch' || window.location.pathname == '/podetails') {
      setActiveMenus('posearch');
      setActiveSubMenus('podetails');
    }
else if (window.location.pathname == '/vendorsearch' || window.location.pathname == '/vendorsearchlist' || window.location.pathname == '/vendordetails') {
      setActiveMenus('vendor');
      setActiveSubMenus('vendorsearch');
    }
    else if (window.location.pathname == '/checksearch') {
      setActiveMenus('serach');
      setActiveSubMenus('checksearch');
    }
    else if (window.location.pathname == '/checksearchlist') {
      setActiveMenus('serach');
      setActiveSubMenus('checksearchlist');
    }else if (window.location.pathname == '/showPO') {
      setActiveMenus('serach');
      setActiveSubMenus('showPO');
    }
    else if (window.location.pathname == '/absence') {
      setActiveMenus('payroll');
      setActiveSubMenus('absence');
    }
    else if (window.location.pathname == '/deduct') {
      setActiveMenus('payroll');
      setActiveSubMenus('deduct');
    } 
    else if (window.location.pathname == '/paytable') {
      setActiveMenus('payroll');
      setActiveSubMenus('paytable');
    }
    else if (window.location.pathname == '/job') {
      setActiveMenus('payroll');
      setActiveSubMenus('job');
    }
    else if (window.location.pathname == '/addenda') {
      setActiveMenus('payroll');
      setActiveSubMenus('addenda');
    }
    else if (window.location.pathname == '/termination') {
      setActiveMenus('payroll');
      setActiveSubMenus('termination');
    }

   
    else {
      setActiveMenus('home');
    }
    let date = new Date().toLocaleString("en-US", { timeZone: "America/Indiana/Marengo" });

    let newJerseyDate = new Date(date); // Convert to Date object

    let dayj = newJerseyDate.getDate().toString().padStart(2, "0");
    let monthj = (newJerseyDate.getMonth() + 1).toString().padStart(2, "0");
    let year = newJerseyDate.getFullYear().toString();

    let fromDate = `${dayj}-${monthj}-${year}`; // Format: DD-MM-YYYY
    let fDate = `${monthj}-${dayj}-${year}`; // Format: MM-DD-YYYY

    setformDate(fDate);
   var userf= secureLocalStorage.getItem("user");
   setUser(userf);
  }, []);

  const handleclicksubmenus = (e) => {
    if (e == 'attendance') {
      //console.log(e);

      navigate(`/attendance`);
    }
    if (e == 'empdata') {
      //console.log(e);
      navigate(`/employeedata`);
    }
    if (e == 'attendancedetails') {
      //console.log(e);
      navigate(`/attendancedetails`);
    }
    if (e == 'additionaltags') {
      //console.log(e);
      navigate(`/additionaltags`);
    }
    if (e == 'Certificates') {
      //console.log(e);
      navigate(`/Certificates`);
    }
    if (e == 'salaries') {
      //console.log(e);
      navigate(`/salaries`);
    }
    if (e == 'voluntarydeductions') {
      //console.log(e);
      navigate(`/voluntarydeductions`);
    }
    if (e == 'payroll') {
      //console.log(e);
      navigate(`/payroll`);
    }
    if (e == 'W2s') {
      //console.log(e);
      navigate(`/W2s`);
    }
    if (e == 'posearch') {
      //console.log(e);
      navigate(`/posearch`);
    }
    if (e == 'podetails') {
      //console.log(e); 
      navigate(`/podetails`);
    }
    if (e == 'vendorsearch') {
      //console.log(e);
      navigate(`/`);
    }
    if (e == 'vendorsearchlist') {
      //console.log(e);
      navigate(`/vendorsearchlist`);
    }
    if (e == 'vendordetails') {
      //console.log(e);
      navigate(`/vendordetails`);
    }
    if (e == 'checksearch') {
      //console.log(e);
      navigate(`/checksearch`);
    }
    if (e == 'checksearchlist') {
      //console.log(e);
      navigate(`/checksearchlist`);
    }
    if (e == 'showPO') {
      //console.log(e);
      navigate(`/showPO`);
    }
    if (e == 'absence') {
          //console.log(e);
          // alert('absence');
          setActiveMenus('payroll');
          navigate(`/absence`);
        }
    if (e == 'deduct') {
      //console.log(e);
      navigate(`/deduct`);
    }
    if (e == 'paytable') {
      //console.log(e);
      navigate(`/paytable`);
    }
    if (e == 'job') {
      //console.log(e);
      navigate(`/job`);
    }
    if (e == 'addenda') {
      //console.log(e); 
      navigate(`/addenda`);
    }
    if (e == 'termination') {
      //console.log(e); 
      navigate(`/termination`);
    }

    setActiveSubMenus(e);


  }
  const logout = (e) => {
   
    // secureLocalStorage.removeItem('employeeData');
    secureLocalStorage.removeItem('employeeData');
    secureLocalStorage.removeItem('vendorNameData');
    secureLocalStorage.removeItem('vendorNumberData');
    secureLocalStorage.removeItem('pobasicData');
    secureLocalStorage.removeItem('poData');
    secureLocalStorage.removeItem('bankDetailsData');
    secureLocalStorage.removeItem('bankbasicData');
    secureLocalStorage.removeItem('token');
     secureLocalStorage.removeItem('navtoken');
    dispatch(holdUser({}));

    navigate(`/`);

  }
  const handleclickmenus = (e) => {

    if (e ==  'posearch' || e ==  'podetails') {
      setActiveMenus('posearch');
      setActiveSubMenus('posearch');
      navigate(`/posearch`);
    }
   if (e ==  'vendorsearch' || e ==  'vendorsearchlist' || e ==  'vendordetails') {
      setActiveMenus('vendor');
      setActiveSubMenus('vendorsearch');
      navigate(`/vendorsearch`);
    }
     if (e ==  'checksearch') {
      setActiveMenus('serach');
      setActiveSubMenus('checksearch');
      navigate(`/checksearch`);
    }
   
      
  
  
    }
  return (
    <>
      <aside className="aside aside-fixed admin-fixed">
        <div className="aside-header">

          <NavLink to="#" className="aside-logo" style={{ width: '200px' }}>
            <img src={logo} style={{ height: '64px', margin: '0 auto', display: 'block' }} />
            <p className='ver-sec'>Version 1.0</p>
          </NavLink>



        </div>
        <div className='user-details'>

          <AccountCircleIcon />
          <p>{user!=null && user.username}</p>
          <p>Last Login: {formDate}</p>
        </div>

        <div className="aside-body scrolling">

          <ul className="nav nav-aside" style={{ display: 'block' }}>
            <li className='menu-sec'>
              <NavLink to="/employee-search" className={`nav-link-menu ${(activeMenus == 'home' && (activeSubMenus == 'empdata' || activeSubMenus == 'attendance' || activeSubMenus == 'attendancedetails' || activeSubMenus == 'additionaltags' || activeSubMenus == 'Certificates' || activeSubMenus == 'salaries' || activeSubMenus == 'voluntarydeductions' || activeSubMenus == 'payroll' || activeSubMenus == 'W2s')) ? 'activeapprove ' : ''}`} ><PersonIcon /><span>Employee Search <span className='arrow-right'><NavigateNextIcon /></span></span></NavLink>
              <ul className={`sub-menu-sec sub-menu-employee ${(activeMenus == 'home' && (activeSubMenus == 'empdata' || activeSubMenus == 'attendance' || activeSubMenus == 'attendancedetails' || activeSubMenus == 'additionaltags' || activeSubMenus == 'Certificates' || activeSubMenus == 'salaries' || activeSubMenus == 'voluntarydeductions' || activeSubMenus == 'payroll' || activeSubMenus == 'W2s')) ? 'submenudisblock ' : 'submenudisnone'}`} >
                <li className={`menu-sec ${activeSubMenus == 'empdata' ? 'submenu-active' : ''}`} onClick={(e) => handleclicksubmenus('empdata')}>Employee Data {activeSubMenus == 'empdata' && <span className='arrow-right'><NavigateNextIcon /></span>} </li>
                <li className={`menu-sec ${activeSubMenus == 'attendance' ? 'submenu-active' : ''}`} onClick={(e) => handleclicksubmenus('attendance')}>Attendance {activeSubMenus == 'attendance' && <span className='arrow-right'><NavigateNextIcon /></span>}</li>
                <li className={`menu-sec ${activeSubMenus == 'attendancedetails' ? 'submenu-active' : ''}`} onClick={(e) => handleclicksubmenus('attendancedetails')}>Attendance Details  {activeSubMenus == 'attendancedetails' && <span className='arrow-right'><NavigateNextIcon /></span>}</li>
                <li className={`menu-sec ${activeSubMenus == 'additionaltags' ? 'submenu-active' : ''}`} onClick={(e) => handleclicksubmenus('additionaltags')}>Additional Tags {activeSubMenus == 'additionaltags' && <span className='arrow-right'><NavigateNextIcon /></span>}</li>
                <li className={`menu-sec ${activeSubMenus == 'Certificates' ? 'submenu-active' : ''}`} onClick={(e) => handleclicksubmenus('Certificates')}>Certificates  {activeSubMenus == 'Certificates' && <span className='arrow-right'><NavigateNextIcon /></span>}</li>
                <li className={`menu-sec ${activeSubMenus == 'salaries' ? 'submenu-active' : ''}`} onClick={(e) => handleclicksubmenus('salaries')}>Salaries {activeSubMenus == 'salaries' && <span className='arrow-right'><NavigateNextIcon /></span>}</li>
                <li className={`menu-sec ${activeSubMenus == 'voluntarydeductions' ? 'submenu-active' : ''}`} onClick={(e) => handleclicksubmenus('voluntarydeductions')}>Voluntary Deductions {activeSubMenus == 'voluntarydeductions' && <span className='arrow-right'><NavigateNextIcon /></span>}</li>
                <li className={`menu-sec ${activeSubMenus == 'payroll' ? 'submenu-active' : ''}`} onClick={(e) => handleclicksubmenus('payroll')}>Payroll  {activeSubMenus == 'payroll' && <span className='arrow-right'><NavigateNextIcon /></span>}</li>
                <li className={`menu-sec ${activeSubMenus == 'W2s' ? 'submenu-active' : ''}`} onClick={(e) => handleclicksubmenus('W2s')}>W2  {activeSubMenus == 'W2s' && <span className='arrow-right'><NavigateNextIcon /></span>}</li>
              </ul>
            </li>
            {/* <li><a href="#"  onClick={(e) => handleclickmenus('posearch')}  className={`nav-link-menu nav-disply ${ (activeSubMenus == 'posearch' || activeSubMenus == 'podetails') ? 'activeapprove' : ''}`}><DescriptionIcon /><span>PO Search</span></a></li> */}
            <li><a href="#"  onClick={(e) => handleclickmenus('vendorsearch')} className={`nav-link-menu  ${ (activeSubMenus == 'vendorsearch'  || activeSubMenus == 'checksearchlist' || activeSubMenus == 'podetails' || activeSubMenus == 'showPO' || activeSubMenus == 'vendorsearchlist' || activeSubMenus == 'vendordetails') ? 'activeapprove' : ''}`}><img src={vendorsrchimg} className='vendor-img' /><span>Vendor Search</span></a></li>
            {/* <li><a href="#"  onClick={(e) => handleclickmenus('checksearch')} className={`nav-link-menu ${(activeSubMenus == 'checksearch' || activeSubMenus == 'checksearchlist') ? 'activeapprove' : ''}`}><CheckCircleIcon /><span>Check Search</span></a></li> */}
            
            <li className='menu-sec'>
              {/* <NavLink to="/" className={({ isActive }) => `nav-link-menu ${isActive ? 'activeapprove' : ''}`}><img src={payrollcodeimg} /><span>Payroll Codes <span className='arrow-right'><NavigateNextIcon /></span></span></NavLink> */}
              <a href="#"  onClick={(e) => handleclicksubmenus('absence')} className={`nav-link-menu ${( (activeMenus == 'payroll' && ( activeSubMenus == 'absence' || activeSubMenus == 'deduct' || activeSubMenus == 'paytable' || activeSubMenus == 'job' || activeSubMenus == 'addenda' || activeSubMenus == 'termination' ))) ? 'activeapprove ' : ''}`} ><img src={payrollcodeimg} /><span>Payroll Codes <span className='arrow-right'><NavigateNextIcon /></span></span></a>
              <ul className={`sub-menu-sec sub-menu-employee ${( activeMenus == 'payroll' && (activeSubMenus == 'absence' || activeSubMenus == 'deduct' || activeSubMenus == 'paytable' || activeSubMenus == 'job' || activeSubMenus == 'addenda' || activeSubMenus == 'termination')) ? 'submenudisblock ' : 'submenudisnone'}`} >
                <li className={`menu-sec ${activeSubMenus == 'absence' ? 'submenu-active' : ''}`} onClick={(e) => handleclicksubmenus('absence')}>Absence/Leave {activeSubMenus == 'absence' && <span className='arrow-right'><NavigateNextIcon /></span>} </li>
                <li className={`menu-sec ${activeSubMenus == 'deduct' ? 'submenu-active' : ''}`} onClick={(e) => handleclicksubmenus('deduct')}>Deduct/Contrib {activeSubMenus == 'deduct' && <span className='arrow-right'><NavigateNextIcon /></span>}</li>
                <li className={`menu-sec ${activeSubMenus == 'paytable' ? 'submenu-active' : ''}`} onClick={(e) => handleclicksubmenus('paytable')}>Pay Table  {activeSubMenus == 'paytable' && <span className='arrow-right'><NavigateNextIcon /></span>}</li>
                <li className={`menu-sec ${activeSubMenus == 'job' ? 'submenu-active' : ''}`} onClick={(e) => handleclicksubmenus('job')}>Job {activeSubMenus == 'job' && <span className='arrow-right'><NavigateNextIcon /></span>}</li>
                <li className={`menu-sec ${activeSubMenus == 'addenda' ? 'submenu-active' : ''}`} onClick={(e) => handleclicksubmenus('addenda')}>Addenda {activeSubMenus == 'addenda' && <span className='arrow-right'><NavigateNextIcon /></span>}</li>
                <li className={`menu-sec ${activeSubMenus == 'termination' ? 'submenu-active' : ''}`} onClick={(e) => handleclicksubmenus('termination')}>Termination {activeSubMenus == 'termination' && <span className='arrow-right'><NavigateNextIcon /></span>}</li>
              </ul>
            </li>
           
            <li onClick={(e) => { logout(e) }}><NavLink to="/" className={({ isActive }) => `nav-link-menu lastnav-link nav-disply${isActive ? 'activeapprove' : ''}`} ><LogoutIcon /><span>Logout</span></NavLink></li>
          </ul>
        </div>
      </aside>
    </>
  )
}

export default Sidebar;