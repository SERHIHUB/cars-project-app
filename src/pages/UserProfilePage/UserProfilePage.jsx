import { useEffect, useState } from "react";
import { Button } from "../../components/shared/components/Button/Button";
import { ModalComponent } from "../../components/shared/components/ModalComponent/ModalComponent";
import { UserProfileComponent } from "../../components/UserProfileComponent/UserProfileComponent";
import { UpdateUserForm } from "../../components/UpdateUserForm/UpdateUserForm";
import css from "./UserProfilePage.module.css";

export const UserProfilePage = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleOpenModal = () => {
    setModalIsOpen(true);
  };

  function onCloseModal() {
    setModalIsOpen(false);
  }

  return (
    <div>
      UserProfilePage
      <UserProfileComponent />
      <Button onClick={handleOpenModal}>Update</Button>
      <ModalComponent closeModal={onCloseModal} modalIsOpen={modalIsOpen}>
        <UpdateUserForm />
      </ModalComponent>
    </div>
  );
};
