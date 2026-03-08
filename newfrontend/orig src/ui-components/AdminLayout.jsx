import { Outlet } from "react-router-dom";
import Header from '../components/header';
import Sidebar from '../components/sidebar';


const AdminLayout = () => {
  return (
    <>
      <Header />
      <Sidebar />
 

      <Outlet />
    </>
  );
};

export default AdminLayout;
