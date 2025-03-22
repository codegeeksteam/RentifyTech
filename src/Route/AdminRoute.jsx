import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import useAdmin from '../Hooks/useAdmin';
import AdminLoading from '../Components/Admin-Loading/AdminLoading';

const AdminRoute = ({children}) => {
    const { loading } = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();

    const location = useLocation()
  
    if (loading || isAdminLoading) return <AdminLoading />
    if (isAdmin) return children
    return <Navigate to='/login' state={location.pathname} replace></Navigate>
};

export default AdminRoute;