import { Navigate } from "react-router-dom";
import useToken from "../../hooks/useToken";

interface PrivateRouteProps {
  element: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
  const { token } = useToken();

  return token ? <>{element}</> : <Navigate to="/login" />;
};

export default PrivateRoute;
