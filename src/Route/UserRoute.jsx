
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import useUser from '../Hooks/useUser';
import Loading from '../Components/Loading/Loading';


const UserRoute = ({children}) => {
      const { loading } = useAuth();
      const [isUser, isUserLoading] = useUser();
    
      const location = useLocation()
    
      if (loading || isUserLoading) return (<Loading />)
      if (isUser) return children
      return <Navigate to='/login' state={location.pathname} replace></Navigate>
     
};

export default UserRoute;