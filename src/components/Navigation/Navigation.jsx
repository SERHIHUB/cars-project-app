import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";

export const Navigation = () => {
  return (
    <nav className={css.navList}>
      <NavLink to="/">Welcome</NavLink>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/register">SignUp</NavLink>
      <NavLink to="/login">SignIn</NavLink>
    </nav>
  );
};

// export default Navigation;
