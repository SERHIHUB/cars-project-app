import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Navigation.module.css";

const linkActive = ({ isActive }) => clsx(css.nav, { [css.active]: isActive });

export const Navigation = () => {
  return (
    <nav className={css.navList}>
      <NavLink to="/" className={linkActive}>
        Welcome
      </NavLink>
      {/* <NavLink to="/home" className={linkActive}>
        Home
      </NavLink> */}
      <NavLink to="/register" className={linkActive}>
        SignUp
      </NavLink>
      <NavLink to="/login" className={linkActive}>
        SignIn
      </NavLink>
      <NavLink to="/reset-password" className={linkActive}>
        Reset password
      </NavLink>
    </nav>
  );
};

// export default Navigation;
