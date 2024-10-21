import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "nanoid";
import { fetchContacts } from "../../redux/contacts/operations";
import { selectContacts } from "../../redux/contacts/selectors";
import { ContactItem } from "../ContactItem/ContactItem";
import css from "./ContactList.module.css";
import { Container } from "../shared/components/Container/Container";
import { Button } from "../shared/components/Button/Button";
import { ModalComponent } from "../shared/components/ModalComponent/ModalComponent";
import { UpdateContactForm } from "../UpdateContactForm/UpdateContactForm";

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  // const [modalIsOpen, setModalIsOpen] = useState(false);

  // function openEditModal() {
  //   setModalIsOpen(true);
  // }

  // const handleClickEditModal = () => {
  //   openEditModal();
  // };

  // function onCloseEditModal() {
  //   setModalIsOpen(false);
  // }

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <ul className={css.contactList}>
        {contacts &&
          contacts.map((item) => {
            return (
              <li className={css.contactItem} key={nanoid()}>
                <ContactItem className={css.contactComponent} contact={item} />
              </li>
            );
          })}
      </ul>
    </Container>
  );
};
