import { useState } from "react";
import { ContactList } from "../../components/ContactList/ContactList";
import { CreateContactForm } from "../../components/CreateContactForm/CreateContactForm";
import { Button } from "../../components/shared/components/Button/Button";
import { Container } from "../../components/shared/components/Container/Container";
import { ModalComponent } from "../../components/shared/components/ModalComponent/ModalComponent";
import { Section } from "../../components/shared/components/Section/Section";
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
    <Section className={css.contactWrapper}>
      {/* <h2>Contacts page</h2> */}
      <ContactList />
      <div className={css.btnWrapper}>
        <Button className={css.addContactBtn} onClick={handleClickModal}>
          Add contact
        </Button>
      </div>
      <ModalComponent closeModal={onCloseModal} modalIsOpen={modalIsOpen}>
        <CreateContactForm onCloseModal={onCloseModal} />
      </ModalComponent>
    </Section>
  );
};
