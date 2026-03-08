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
import secureLocalStorage from "react-secure-storage";
import { useDispatch } from "react-redux";
import { AppContext } from '../context';
import { holdUser } from '../features/userdataSlice';

const SidebarAdmin = () => {
  const location = useLocation();
  const [formDate, setformDate] = useState("");
   const dispatch = useDispatch();
  const isActiveMenu = (paths) => {
    return paths.some((path) => location.pathname.startsWith(path));
  };
  let navigate = useNavigate();
  const [activeMenus, setActiveMenus] = useState('home');
  const [activeSubMenus, setActiveSubMenus] = useState();
  React.useEffect(() => {

    if (window.location.pathname == '/') {
      setActiveMenus('home');

    }
    else if (isActiveMenu(['/usermanagement'])) {
      setActiveMenus('usermanagement');
    }
    else if (isActiveMenu(['/'])) {
      setActiveMenus('logout');
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
  }, []);




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
    dispatch(holdUser({}));

    navigate(`/adminlogin`);

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
          <p>Superadmin</p>
          <p>Last Login: {formDate}</p>
        </div>

        <div className="aside-body scrolling">

          <ul className="nav nav-aside" style={{ display: 'block' }}>


            <li><NavLink to="/usermanagement" className={({ isActive }) => `nav-link-menu ${isActive ? 'activeapprove' : ''}`}><PersonIcon /><span>User Management</span></NavLink></li>
            <li  onClick={(e) => { logout(e) }}><NavLink to="/adminlogin"   className={({ isActive }) => `nav-link-menu lastnav-link nav-disply${isActive ? 'activeapprove' : ''}`} ><LogoutIcon /><span>Logout</span></NavLink></li>
          </ul>
        </div>
      </aside>
    </>
  )
}

export default SidebarAdmin;