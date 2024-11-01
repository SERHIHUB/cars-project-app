import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../redux/users/operations";
import { selectUsers } from "../../redux/users/selectors";
import { UserItem } from "../UserItem/UserItem";
import { nanoid } from "nanoid";
import css from "./UserList.module.css";
import { Container } from "../shared/components/Container/Container";

export const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <Container className={css.container}>
      <ul className={css.usersList}>
        {users.map((item) => {
          return (
            <li className={css.usersItem} key={nanoid()}>
              <UserItem user={item} />
            </li>
          );
        })}
      </ul>
    </Container>
  );
};
