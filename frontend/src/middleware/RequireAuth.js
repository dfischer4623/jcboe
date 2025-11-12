import { Navigate, Outlet } from 'react-router-dom';

const RequireAuth = ({userdata}) => {
    if(Object.keys(userdata.value).length === 0 || !userdata.token){
        return <Navigate to="/" />
    }

    return <Outlet />;
}

export default RequireAuth;