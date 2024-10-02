import { Button } from "../shared/components/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import css from "./LogOutComponent.module.css";
import { logOut } from "../../redux/auth/operations";

export const LogOutComponent = () => {
  const dispatch = useDispatch();

  const id = "66fae2ba38f66f094801a5eb";

  const handleLogOut = () => {
    console.log("log out");
    dispatch(logOut(id));
    console.log("log out");
  };

  return (
    <Button onClick={handleLogOut} className={css.btn}>
      Log out
    </Button>
  );
};
