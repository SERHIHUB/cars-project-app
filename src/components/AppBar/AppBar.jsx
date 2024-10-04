import { Navigation } from "../Navigation/Navigation";
import { Container } from "../shared/components/Container/Container";
import { useSelector } from "react-redux";
import css from "./AppBar.module.css";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { LogOutComponent } from "../LogOutComponent/LogOutComponent";
import { AuthNav } from "../AuthNav/AuthNav";

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  // console.log(`AppBar isLoggedin = ${isLoggedIn}`);

  return (
    <Container>
      <Navigation />
      {isLoggedIn ? <LogOutComponent /> : <AuthNav />}
    </Container>
  );
};
