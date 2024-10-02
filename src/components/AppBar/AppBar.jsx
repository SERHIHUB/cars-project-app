import { Navigation } from "../Navigation/Navigation";
import { Container } from "../shared/components/Container/Container";
import { useSelector, UseSelector } from "react-redux";
import css from "./AppBar.module.css";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Container>
      <Navigation />
      {/* {isLoggedIn ? } */}
    </Container>
  );
};
