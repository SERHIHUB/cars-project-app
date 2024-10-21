import { Button } from "../shared/components/Button/Button";
import { ModalComponent } from "../shared/components/ModalComponent/ModalComponent";
import { UpdateContactForm } from "../UpdateContactForm/UpdateContactForm";
import { useState } from "react";
import css from "./ContactItem.module.css";
import { DeleteContact } from "../DeleteContact/DeleteContact";
import { MdEdit } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";
import { PiPhoneLight } from "react-icons/pi";

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
      <div className={css.contactInfo}>
        <p>{`name: ${contact.name}`}</p>
        {/* <p>{`number: ${contact.number}`}</p> */}
        <p className={css.contact}>
          <PiPhoneLight size="40" /> {contact.number}
        </p>
      </div>
      {/* <p>
        <PiPhoneLight size="40" /> {contact.number}
      </p> */}

      <ModalComponent closeModal={onCloseEditModal} modalIsOpen={modalIsOpen}>
        <UpdateContactForm contact={contact} onCloseModal={onCloseEditModal} />
      </ModalComponent>

      <ModalComponent
        closeModal={onCloseDeleteModal}
        modalIsOpen={deleteModalIsOpen}
      >
        <DeleteContact contact={contact} closeModal={onCloseDeleteModal} />
      </ModalComponent>

      <ul className={css.btnList}>
        <li className={css.btnItem}>
          <Button className={css.btn} onClick={handleClickEditModal}>
            <MdEdit />
          </Button>
        </li>
        <li className={css.btnItem}>
          <Button className={css.btn} onClick={handleClickDeleteModal}>
            {" "}
            <AiOutlineDelete />
          </Button>
        </li>
      </ul>
    </div>
  );
};
