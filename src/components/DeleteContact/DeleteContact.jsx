import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import { Button } from "../shared/components/Button/Button";
import { Container } from "../shared/components/Container/Container";
import css from "./DeleteContact.module.css";

export const DeleteContact = ({ contact, closeModal }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact._id));
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
