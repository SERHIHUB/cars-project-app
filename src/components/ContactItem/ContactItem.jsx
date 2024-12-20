import { Button } from "../shared/components/Button/Button";
import { ModalComponent } from "../shared/components/ModalComponent/ModalComponent";
import { UpdateContactForm } from "../UpdateContactForm/UpdateContactForm";
import { useState } from "react";
import { useSelector } from "react-redux";
import css from "./ContactItem.module.css";
import { DeleteContact } from "../DeleteContact/DeleteContact";
import { MdEdit } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";
import { PiPhoneLight } from "react-icons/pi";
import { selectCurrentUser } from "../../redux/users/selectors";

export const ContactItem = ({ contact }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);
  const currentUser = useSelector(selectCurrentUser);

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

  return (
    <div className={css.contactWrapper}>
      <div className={css.contactInfo}>
        <p>
          {"name: "}
          <span className={css.contactName}>{contact.name}</span>
        </p>
        <p className={css.contact}>
          <PiPhoneLight size="40" />
          {contact.number !== null ? (
            <a className={css.contactLink} href={`tel:${contact.number}`}>
              {contact.number}
            </a>
          ) : (
            "_ _ _"
          )}
        </p>
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

      {currentUser.role === "observer" ? (
        <div className={css.notAccessBtn}>Тільки перегляд</div>
      ) : (
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
      )}
    </div>
  );
};
