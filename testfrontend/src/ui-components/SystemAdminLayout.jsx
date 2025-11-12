import { Outlet } from "react-router-dom";
import Header from '../components/headersystem';
import Sidebar from '../components/systemsidebar';


const SystemAdminLayout  = () => {
  return (
    <>
      <Header />
      <Sidebar />
 

      <Outlet />
    </>
  );
};

export default SystemAdminLayout ;
