import { Route, Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

function PrivateRoute({ path, element: Component, ...rest }) {
  const [isLogin] = useAuth();

  return (
    <Route 
      {...rest} 
      path={path}
      element={isLogin ? Component : <Navigate to="/start-otp" />}
    />
  );
}

export default PrivateRoute;