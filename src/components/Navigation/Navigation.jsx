import { NavLink, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import clsx from "clsx";
import css from "./Navigation.module.css";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { selectCurrentUser } from "../../redux/users/selectors";
// import { useState } from "react";

const linkActive = ({ isActive }) => clsx(css.nav, { [css.active]: isActive });

export const Navigation = ({ className }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const currentUser = useSelector(selectCurrentUser);

  return (
    <nav className={clsx(css.navList, { [className]: className })}>
      <NavLink to="/" className={linkActive}>
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/abonements" className={linkActive}>
          Abonements
        </NavLink>
      )}
      {isLoggedIn && (
        <NavLink to="/contacts" className={linkActive}>
          Contacts
        </NavLink>
      )}
      {isLoggedIn && (
        <NavLink to="/my-profile" className={linkActive}>
          Profile
        </NavLink>
      )}
      {isLoggedIn && currentUser.role === "admin" && (
        <NavLink to="/admin" className={linkActive}>
          Users
        </NavLink>
      )}
    </nav>
  );
};
