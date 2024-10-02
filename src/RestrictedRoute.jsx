import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "./redux/auth/selectors";
import { Navigate } from "react-router-dom";

export const RestrictedRoute = ({
  component: Component,
  redirectTo = "/home",
}) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  console.log(isLoggedIn);

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};