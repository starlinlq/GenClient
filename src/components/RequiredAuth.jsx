import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function RequiredAuth({ children, redirectTo }) {
  const { isAuth } = useSelector((state) => state.user);
  console.log("required Auth: " + isAuth);

  return isAuth ? children : <Navigate to={redirectTo} />;
}

export default RequiredAuth;
