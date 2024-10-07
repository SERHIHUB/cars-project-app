import { Button } from "../shared/components/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import css from "./LogOutComponent.module.css";
import { logOut } from "../../redux/auth/operations";
import { getCurrentUser } from "../../redux/users/operations";
import { selectUserName } from "../../redux/auth/selectors";

export const LogOutComponent = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <div>
      <p>{`Welcome ${userName}`}</p>
      <Button onClick={handleLogOut} className={css.btn}>
        Log out
      </Button>
    </div>
  );
};
