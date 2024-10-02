import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import clsx from "clsx";
import css from "./Navigation.module.css";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const linkActive = ({ isActive }) => clsx(css.nav, { [css.active]: isActive });

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className={css.navList}>
      <NavLink to="/home" className={linkActive}>
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
    </nav>
  );
};
