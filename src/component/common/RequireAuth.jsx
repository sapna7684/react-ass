import { Navigate, Outlet, useLocation } from "react-router-dom";
import UseAuth from "../protectedRoutes/UseAuth";

const RequireAuth = () => {
    const {auth} = UseAuth();
    const location = useLocation()
  return  auth?.user ? <Outlet/> : <Navigate to="/" state={{from: location}} replace />
}

export default RequireAuth;