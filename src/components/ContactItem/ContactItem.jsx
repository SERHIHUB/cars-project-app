import { Button } from "../shared/components/Button/Button";
import { ModalComponent } from "../shared/components/ModalComponent/ModalComponent";
import { UpdateContactForm } from "../UpdateContactForm/UpdateContactForm";
import { useState } from "react";
import css from "./ContactItem.module.css";

export const ContactItem = ({ contact }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [optionsModalIsOpen, setOptionsModalIsOpen] = useState(false);

  function openEditModal() {
    setModalIsOpen(true);
  }

  const handleClickEditModal = () => {
    openEditModal();
  };

  function onCloseEditModal() {
    setModalIsOpen(false);
  }

  // const openOptionsModal = () => {
  //   setOptionsModalIsOpen(true);
  // };

  // const handleClickOptionModal = () => {
  //   openOptionsModal();
  // };

  // const closeOptionsModal = () => {
  //   setOptionsModalIsOpen(false);
  // };

  // const handleClickDeleteContact () => {
  //   console.log("DELETE")
  // }

  return (
    <div className={css.contactWrapper}>
      <p>{`name: ${contact.name}`}</p>
      <p>{`number: ${contact.number}`}</p>
      {/* <Button onClick={handleClickOptionModal}>Options</Button> */}
      <Button onClick={handleClickEditModal}>Update</Button>

      {/* <ModalComponent
        closeModal={closeOptionsModal}
        modalIsOpen={optionsModalIsOpen}
      >
        <Button onClick={handleClickEditModal}>Update</Button>
        <Button onClick={handleClickDeleteContact}>Delete</Button>
      </ModalComponent> */}

      <ModalComponent closeModal={onCloseEditModal} modalIsOpen={modalIsOpen}>
        <UpdateContactForm contact={contact} onCloseModal={onCloseEditModal} />
      </ModalComponent>
    </div>
  );
};
