import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";

export const AuthNav = () => {
  return (
    <div>
      <ul className={css.navList}>
        <li className={css.navItem}>
          <NavLink className={css.link} to="/register">
            Sign Up
          </NavLink>
        </li>
        <li className={css.navItem}>
          <NavLink className={css.link} to="/login">
            Sign In
          </NavLink>
        </li>
        <li className={css.navItem}>
          <NavLink className={css.link} to="/reset-password">
            Reset password
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
