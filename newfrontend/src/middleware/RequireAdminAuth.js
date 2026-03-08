import { Navigate, Outlet } from 'react-router-dom';

const RequireAdminAuth = ({userdata}) => {
    if(Object.keys(userdata.value).length === 0 || !userdata.token){
        return <Navigate to="/adminlogin" />
    }

    return <Outlet />;
}

export default RequireAdminAuth;