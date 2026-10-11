import { Navigate } from 'react-router-dom';
import { getAccessToken } from '../utils/token';

const GuestRoute = (props) => {
  const { children } = props;

  const token = getAccessToken();

  if (token) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default GuestRoute;
