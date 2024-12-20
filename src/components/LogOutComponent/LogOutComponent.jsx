import { Button } from "../shared/components/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import css from "./LogOutComponent.module.css";
import { logOut } from "../../redux/auth/operations";
import { getCurrentUser } from "../../redux/users/operations";
import { selectUserName } from "../../redux/auth/selectors";

export const LogOutComponent = ({ windowWidth }) => {
  const dispatch = useDispatch();
  const currentUserName = useSelector(selectUserName);
  const userName = currentUserName ? currentUserName : "";

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch, userName]);

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <div className={css.wrapper}>
      {windowWidth >= 768 && <p>{userName && `Welcome ${userName}`}</p>}
      <Button onClick={handleLogOut} className={css.btn}>
        Log out
      </Button>
      {windowWidth < 768 && <p>{userName && `Welcome ${userName}`}</p>}
    </div>
  );
};
