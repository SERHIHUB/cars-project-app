import { useDispatch } from "react-redux";
import { deleteUser } from "../../redux/users/operations";
import { Button } from "../shared/components/Button/Button";
import { Container } from "../shared/components/Container/Container";
import css from "./DeleteUser.module.css";

export const DeleteUser = ({ user, closeModal }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteUser(user._id));
    closeModal();
  };

  return (
    <Container className={css.deleteContainer}>
      <Button onClick={handleDelete} className={css.deleteBtn}>
        DELETE
      </Button>
    </Container>
  );
};
