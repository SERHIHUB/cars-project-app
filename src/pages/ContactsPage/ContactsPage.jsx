import { useState } from "react";
import { useSelector } from "react-redux";
import { ContactList } from "../../components/ContactList/ContactList";
import { CreateContactForm } from "../../components/CreateContactForm/CreateContactForm";
import { Button } from "../../components/shared/components/Button/Button";
import { Loader } from "../../components/shared/components/Loader/Loader";
import { ModalComponent } from "../../components/shared/components/ModalComponent/ModalComponent";
import { Section } from "../../components/shared/components/Section/Section";
import { selectLoading } from "../../redux/contacts/selectors";
import { selectCurrentUser } from "../../redux/users/selectors";
import css from "./ContactsPage.module.css";

export const ContactsPage = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const currentUser = useSelector(selectCurrentUser);
  const loading = useSelector(selectLoading);

  const handleClickModal = () => {
    setModalIsOpen(true);
  };

  function onCloseModal() {
    setModalIsOpen(false);
  }

  return (
    <Section className={css.contactWrapper}>
      {loading && <Loader />}
      <ContactList />
      <div className={css.btnWrapper}>
        {currentUser.role !== "observer" && (
          <Button className={css.addContactBtn} onClick={handleClickModal}>
            Add contact
          </Button>
        )}
      </div>
      <ModalComponent closeModal={onCloseModal} modalIsOpen={modalIsOpen}>
        <CreateContactForm onCloseModal={onCloseModal} />
      </ModalComponent>
    </Section>
  );
};
