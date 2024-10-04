import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
// import { selectIsLoggedIn, selectIsRefreshing } from "../redux/auth/selectors";
import { selectIsLoggedIn } from "./redux/auth/selectors";

export const PrivateRoute = ({ component: Component, redirectTo = "/" }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  // const isRefreshing = useSelector(selectIsRefreshing);

  // return isLoggedIn || isRefreshing ? (
  //   Component
  // ) : (
  //   <Navigate to={redirectTo} />
  // );
  return isLoggedIn ? Component : <Navigate to={redirectTo} />;
};
