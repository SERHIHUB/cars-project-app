import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";

export const AuthNav = () => {
  return (
    <div>
      <NavLink className={css.link} to="/register">
        Sign Up
      </NavLink>
      <NavLink className={css.link} to="/login">
        Sign In
      </NavLink>
      <NavLink className={css.link} to="/reset-password">
        Reset password
      </NavLink>
    </div>
  );
};
