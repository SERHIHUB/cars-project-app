import { Button } from "../shared/components/Button/Button";
import { ModalComponent } from "../shared/components/ModalComponent/ModalComponent";
import { UpdateContactForm } from "../UpdateContactForm/UpdateContactForm";
import { useState } from "react";
import css from "./ContactItem.module.css";
import { DeleteContact } from "../DeleteContact/DeleteContact";

export const ContactItem = ({ contact }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);

  // function openEditModal() {
  //   setModalIsOpen(true);
  // }

  const handleClickEditModal = () => {
    setModalIsOpen(true);
  };

  function onCloseEditModal() {
    setModalIsOpen(false);
  }

  const handleClickDeleteModal = () => {
    setDeleteModalIsOpen(true);
  };

  function onCloseDeleteModal() {
    setDeleteModalIsOpen(false);
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

      <div>
        <Button onClick={handleClickEditModal}>Update</Button>
        <Button onClick={handleClickDeleteModal}>Delete</Button>
      </div>

      <ModalComponent closeModal={onCloseEditModal} modalIsOpen={modalIsOpen}>
        <UpdateContactForm contact={contact} onCloseModal={onCloseEditModal} />
      </ModalComponent>

      <ModalComponent
        closeModal={onCloseDeleteModal}
        modalIsOpen={deleteModalIsOpen}
      >
        <DeleteContact contact={contact} closeModal={onCloseDeleteModal} />
      </ModalComponent>
    </div>
  );
};
