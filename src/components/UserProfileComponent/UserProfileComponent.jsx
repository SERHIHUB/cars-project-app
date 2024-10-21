import { Container } from "../shared/components/Container/Container";
import { useSelector, useDispatch } from "react-redux";
import css from "./UserProfileComponent.module.css";
import { selectCurrentUser } from "../../redux/users/selectors";
// =======================================
import { Button } from "../shared/components/Button/Button";
import { ModalComponent } from "../shared/components/ModalComponent/ModalComponent";
import { UpdateUserForm } from "../UpdateUserForm/UpdateUserForm";
import { UpdateAvatarForm } from "../UpdateAvatarForm/UpdateAvatarForm";
import { useState, useEffect } from "react";
import { fetchUsers } from "../../redux/users/operations";
import { DeleteUser } from "../DeleteUser/DeleteUser";
import { IoImageOutline } from "react-icons/io5";
import { MdEdit } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";

export const UserProfileComponent = ({ currentUser }) => {
  const [modalNameIsOpen, setModalNameIsOpen] = useState(false);
  const [modalAvatarIsOpen, setModalAvatarIsOpen] = useState(false);
  const [modalDeleteIsOpen, setModalDeleteIsOpen] = useState(false);
  const dispatch = useDispatch();

  const handleOpenModalName = () => {
    setModalNameIsOpen(true);
  };

  function onCloseModalName() {
    setModalNameIsOpen(false);
  }

  const handleOpenModalAvatar = () => {
    setModalAvatarIsOpen(true);
  };
  const onCloseModalAvatar = () => {
    setModalAvatarIsOpen(false);
  };

  const handleOpenModalDelete = () => {
    setModalDeleteIsOpen(true);
  };

  const onCloseModalDelete = () => {
    setModalDeleteIsOpen(false);
  };
  // const currentUser = useSelector(selectCurrentUser);
  // console.log(currentUser);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className={css.wrapper}>
      <div className={css.avatarContainer}>
        {currentUser.avatarURL && <img src={currentUser.avatarURL} />}
      </div>
      <div className={css.information}>
        <p>{`name: ${currentUser.name}`}</p>
        <p>{`email: ${currentUser.email}`}</p>
        <p>{`status: ${currentUser.role}`}</p>
        <p>{`thema: ${currentUser.thema}`}</p>
      </div>

      <ul className={css.btnList}>
        <li className={css.btnItem}>
          <Button className={css.btn} onClick={handleOpenModalDelete}>
            <AiOutlineDelete />
          </Button>
        </li>
        <li className={css.btnItem}>
          <Button className={css.btn} onClick={handleOpenModalAvatar}>
            <IoImageOutline />
          </Button>
        </li>
        <li className={css.btnItem}>
          <Button className={css.btn} onClick={handleOpenModalName}>
            <MdEdit />
          </Button>
        </li>
      </ul>
      <ModalComponent
        closeModal={onCloseModalName}
        modalIsOpen={modalNameIsOpen}
      >
        <UpdateUserForm onCloseModal={onCloseModalName} user={currentUser} />
      </ModalComponent>
      <ModalComponent
        closeModal={onCloseModalAvatar}
        modalIsOpen={modalAvatarIsOpen}
      >
        <UpdateAvatarForm
          onCloseModal={onCloseModalAvatar}
          user={currentUser}
        />
      </ModalComponent>

      <ModalComponent
        closeModal={onCloseModalDelete}
        modalIsOpen={modalDeleteIsOpen}
      >
        <DeleteUser onCloseModal={onCloseModalDelete} user={currentUser} />
      </ModalComponent>
    </div>
  );
};
