import { NavLink, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import clsx from "clsx";
import css from "./NavigationBurger.module.css";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { Container } from "../shared/components/Container/Container";
import { selectCurrentUser } from "../../redux/users/selectors";

const linkActive = ({ isActive }) => clsx(css.nav, { [css.active]: isActive });

export const NavigationBurger = ({ onCloseModal }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const currentUser = useSelector(selectCurrentUser);

  const handleClick = () => {
    onCloseModal();
  };

  return (
    <Container className={css.burgerContainer}>
      <nav className={css.navList}>
        <NavLink to="/" className={linkActive} onClick={handleClick}>
          Home
        </NavLink>
        {isLoggedIn && (
          <NavLink
            to="/abonements"
            className={linkActive}
            onClick={handleClick}
          >
            Abonements
          </NavLink>
        )}
        {isLoggedIn && (
          <NavLink to="/contacts" className={linkActive} onClick={handleClick}>
            Contacts
          </NavLink>
        )}
        {isLoggedIn && (
          <NavLink
            to="/my-profile"
            className={linkActive}
            onClick={handleClick}
          >
            Profile
          </NavLink>
        )}
        {isLoggedIn && currentUser.role === "admin" && (
          <NavLink to="/admin" className={linkActive} onClick={handleClick}>
            Users
          </NavLink>
        )}
      </nav>
    </Container>
  );
};
