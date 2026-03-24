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
const Systemsidebar = () => {
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
    else if (window.location.pathname == '/employeesystemdata') {
      // alert("Please use Employee Search to access employee data.");
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
    else if (window.location.pathname == '/salariessystem') {
      setActiveMenus('home');
      setActiveSubMenus('salariessystem');
    }
    else if (window.location.pathname == '/checkreister' || window.location.pathname == '/showCheckResterDetails') {
      setActiveMenus('home');
      setActiveSubMenus('checkre');
    }
    else if (window.location.pathname == '/voluntarydeductions') {
      setActiveMenus('home');
      setActiveSubMenus('voluntarydeductions');
    }
    else if (window.location.pathname == '/payroll' || window.location.pathname == '/showPayrollCheck') {
      setActiveMenus('home');
      setActiveSubMenus('payroll');
    }

    else if (window.location.pathname == '/w2ssystem' || window.location.pathname == '/showW2Detailssystem') {
      setActiveMenus('home');
      setActiveSubMenus('w2ssystem');
    }
    else if (window.location.pathname == '/posearch' || window.location.pathname == '/podetails') {
      setActiveMenus('posearch');
      setActiveSubMenus('podetails');
    }
else if (window.location.pathname == '/vendorsearchsystemlist' || window.location.pathname == '/vendorsearchsystemlist' || window.location.pathname == '/vendorsystemdetails') {
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
    }else if (window.location.pathname == '/systemshowPO') {
      setActiveMenus('serach');
      setActiveSubMenus('systemshowPO');
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
      navigate(`/employeesystemdata`);
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
    if (e == 'salariessystem') {
      //console.log(e);
      navigate(`/salariessystem`);
    }
    if (e == 'checkre') {
      //console.log(e);
      navigate(`/checkreister`);
    }
    if (e == 'voluntarydeductions') {
      //console.log(e);
      navigate(`/voluntarydeductions`);
    }
    if (e == 'payroll') {
      //console.log(e);
      navigate(`/payroll`);
    }
    if (e == 'w2ssystem') {
      //console.log(e);
      navigate(`/w2ssystem`);
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
    if (e == 'vendorsearchsystemlist') {
      //console.log(e);
      navigate(`/vendorsearchsystemlist`);
    }
    if (e == 'vendorsystemdetails') {
      //console.log(e);
      navigate(`/vendorsystemdetails`);
    }
    if (e == 'checksearch') {
      //console.log(e);
      navigate(`/checksearch`);
    }
    if (e == 'checksearchlist') {
      //console.log(e);
      navigate(`/checksearchlist`);
    }
    if (e == 'systemshowPO') {
      //console.log(e);
      navigate(`/systemshowPO`);
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
    secureLocalStorage.removeItem('employeeSystemData');
    secureLocalStorage.removeItem('vendorNameData');
    secureLocalStorage.removeItem('vendorNumberData');
    secureLocalStorage.removeItem('pobasicData');
    secureLocalStorage.removeItem('poData');
    secureLocalStorage.removeItem('bankDetailsData');
    secureLocalStorage.removeItem('bankbasicData');
    secureLocalStorage.removeItem('token');
    dispatch(holdUser({}));

    navigate(`/`);

  }
  const handleclickmenus = (e) => {

    if (e ==  'posearch' || e ==  'podetails') {
      setActiveMenus('posearch');
      setActiveSubMenus('posearch');
      navigate(`/posearch`);
    }
   if (e ==  'vendorsearch' || e ==  'vendorsearchsystemlist' || e ==  'vendorsystemdetails') {
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
              <NavLink to="/employee-search" className={`nav-link-menu ${(activeMenus == 'home' && (activeSubMenus == 'empdata' || activeSubMenus == 'attendance' || activeSubMenus == 'attendancedetails' || activeSubMenus == 'additionaltags' || activeSubMenus == 'Certificates' || activeSubMenus == 'salariessystem' || activeSubMenus == 'checkre' || activeSubMenus == 'voluntarydeductions' || activeSubMenus == 'payroll' || activeSubMenus == 'w2ssystem')) ? 'activeapprove ' : ''}`} ><PersonIcon /><span>Employee Search <span className='arrow-right'><NavigateNextIcon /></span></span></NavLink>
              <ul className={`sub-menu-sec sub-menu-employee ${(activeMenus == 'home' && (activeSubMenus == 'empdata' || activeSubMenus == 'attendance' || activeSubMenus == 'attendancedetails'  || activeSubMenus == 'checkre' || activeSubMenus == 'additionaltags' || activeSubMenus == 'Certificates' || activeSubMenus == 'salariessystem' || activeSubMenus == 'voluntarydeductions' || activeSubMenus == 'payroll' || activeSubMenus == 'w2ssystem')) ? 'submenudisblock ' : 'submenudisnone'}`} >
                <li className={`menu-sec ${activeSubMenus == 'empdata' ? 'submenu-active' : ''}`} onClick={(e) => handleclicksubmenus('empdata')}>Employee Data {activeSubMenus == 'empdata' && <span className='arrow-right'><NavigateNextIcon /></span>} </li>
                {/* <li className={`menu-sec ${activeSubMenus == 'attendance' ? 'submenu-active' : ''}`} onClick={(e) => handleclicksubmenus('attendance')}>Attendance {activeSubMenus == 'attendance' && <span className='arrow-right'><NavigateNextIcon /></span>}</li>
                <li className={`menu-sec ${activeSubMenus == 'attendancedetails' ? 'submenu-active' : ''}`} onClick={(e) => handleclicksubmenus('attendancedetails')}>Attendance Details  {activeSubMenus == 'attendancedetails' && <span className='arrow-right'><NavigateNextIcon /></span>}</li>
                <li className={`menu-sec ${activeSubMenus == 'additionaltags' ? 'submenu-active' : ''}`} onClick={(e) => handleclicksubmenus('additionaltags')}>Additional Tags {activeSubMenus == 'additionaltags' && <span className='arrow-right'><NavigateNextIcon /></span>}</li>
                <li className={`menu-sec ${activeSubMenus == 'Certificates' ? 'submenu-active' : ''}`} onClick={(e) => handleclicksubmenus('Certificates')}>Certificates  {activeSubMenus == 'Certificates' && <span className='arrow-right'><NavigateNextIcon /></span>}</li> */}
                <li className={`menu-sec ${activeSubMenus == 'salariessystem' ? 'submenu-active' : ''}`} onClick={(e) => handleclicksubmenus('salariessystem')}>Salaries {activeSubMenus == 'salariessystem' && <span className='arrow-right'><NavigateNextIcon /></span>}</li>
                {/* <li className={`menu-sec ${activeSubMenus == 'voluntarydeductions' ? 'submenu-active' : ''}`} onClick={(e) => handleclicksubmenus('voluntarydeductions')}>Voluntary Deductions {activeSubMenus == 'voluntarydeductions' && <span className='arrow-right'><NavigateNextIcon /></span>}</li>
                <li className={`menu-sec ${activeSubMenus == 'payroll' ? 'submenu-active' : ''}`} onClick={(e) => handleclicksubmenus('payroll')}>Payroll  {activeSubMenus == 'payroll' && <span className='arrow-right'><NavigateNextIcon /></span>}</li>
                */}
                  <li className={`menu-sec ${activeSubMenus == 'checkre' ? 'submenu-active' : ''}`} onClick={(e) => handleclicksubmenus('checkre')}>Check Register {activeSubMenus == 'checkre' && <span className='arrow-right'><NavigateNextIcon /></span>}</li>
                <li className={`menu-sec ${activeSubMenus == 'w2ssystem' ? 'submenu-active' : ''}`} onClick={(e) => handleclicksubmenus('w2ssystem')}>W2  {activeSubMenus == 'w2ssystem' && <span className='arrow-right'><NavigateNextIcon /></span>}</li>
              </ul>
            </li>
            <li><a href="#"  onClick={(e) => handleclickmenus('vendorsearch')} className={`nav-link-menu  ${ (activeSubMenus == 'vendorsearch'  || activeSubMenus == 'checksearchlist' || activeSubMenus == 'podetails' || activeSubMenus == 'systemshowPO' || activeSubMenus == 'vendorsearchsystemlist' || activeSubMenus == 'vendorsystemdetails') ? 'activeapprove' : ''}`}><img src={vendorsrchimg} className='vendor-img' /><span>Vendor Search</span></a></li>
           
            <li onClick={(e) => { logout(e) }}><NavLink to="/" className={({ isActive }) => `nav-link-menu lastnav-link nav-disply${isActive ? 'activeapprove' : ''}`} ><LogoutIcon /><span>Logout</span></NavLink></li>
          </ul>
        </div>
      </aside>
    </>
  )
}

export default Systemsidebar;