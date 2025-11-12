import { Outlet } from "react-router-dom";
import Headeradmin from '../components/headeradmin';
import Sidebaradmin from '../components/sidebaradmin';


const SuperadminLayout = () => {
  return (
    <>
    <Headeradmin />
      <Sidebaradmin />
    <Outlet />
    </>
  )
}

export default SuperadminLayout
