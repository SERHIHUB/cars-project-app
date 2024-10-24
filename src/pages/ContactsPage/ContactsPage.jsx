import { useState } from "react";
import { ContactList } from "../../components/ContactList/ContactList";
import { CreateContactForm } from "../../components/CreateContactForm/CreateContactForm";
import { Button } from "../../components/shared/components/Button/Button";
import { ModalComponent } from "../../components/shared/components/ModalComponent/ModalComponent";
import css from "./ContactsPage.module.css";

export const ContactsPage = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleClickModal = () => {
    setModalIsOpen(true);
  };

  function onCloseModal() {
    setModalIsOpen(false);
  }

  return (
    <div className={css.contactWrapper}>
      <h2>Contacts page</h2>
      <ContactList />
      <Button className={css.addContactBtn} onClick={handleClickModal}>
        Add contact
      </Button>
      <ModalComponent closeModal={onCloseModal} modalIsOpen={modalIsOpen}>
        <CreateContactForm onCloseModal={onCloseModal} />
      </ModalComponent>
    </div>
  );
};
