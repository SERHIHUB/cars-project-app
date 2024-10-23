import { useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "../shared/components/Button/Button";
import { MdEdit } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";
import css from "./UserItem.module.css";
import { ModalComponent } from "../shared/components/ModalComponent/ModalComponent";
import { DeleteUser } from "../DeleteUser/DeleteUser";
import { UpdateUserRoleForm } from "../UpdateUserRoleForm/UpdateUserRoleForm";

export const UserItem = ({ user }) => {
  const [modalRoleIsOpen, setModalRoleIsOpen] = useState(false);
  const [modalDeleteIsOpen, setModalDeleteIsOpen] = useState(false);
  const dispatch = useDispatch();

  const handleOpenModalRole = () => {
    setModalRoleIsOpen(true);
  };
  const onCloseModalRole = () => {
    setModalRoleIsOpen(false);
  };

  const handleOpenModalDelete = () => {
    setModalDeleteIsOpen(true);
  };

  const onCloseModalDelete = () => {
    setModalDeleteIsOpen(false);
  };

  return (
    <div className={css.wrapper}>
      <div>
        <div className={css.avatarContainer}>
          {user.avatarURL && <img src={user.avatarURL} />}
        </div>
        <p className={css.userInfo}>{`Name: ${user.name}`}</p>
        <p className={css.userInfo}>{`Role: ${user.role}`}</p>
      </div>

      <ul className={css.btnList}>
        <li className={css.btnItem}>
          <Button className={css.btn} onClick={handleOpenModalDelete}>
            <AiOutlineDelete />
          </Button>
        </li>

        <li className={css.btnItem}>
          <Button className={css.btn} onClick={handleOpenModalRole}>
            <MdEdit />
          </Button>
        </li>
      </ul>

      <ModalComponent
        closeModal={onCloseModalDelete}
        modalIsOpen={modalDeleteIsOpen}
      >
        <DeleteUser onCloseModal={onCloseModalDelete} user={user} />
      </ModalComponent>
      <ModalComponent
        closeModal={onCloseModalRole}
        modalIsOpen={modalRoleIsOpen}
      >
        <UpdateUserRoleForm onCloseModal={onCloseModalRole} user={user} />
      </ModalComponent>
    </div>
  );
};
