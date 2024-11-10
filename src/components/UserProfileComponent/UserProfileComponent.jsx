import { Container } from "../shared/components/Container/Container";
import { useSelector, useDispatch } from "react-redux";
import css from "./UserProfileComponent.module.css";
import { selectCurrentUser } from "../../redux/users/selectors";
import { Button } from "../shared/components/Button/Button";
import { ModalComponent } from "../shared/components/ModalComponent/ModalComponent";
import { UpdateUserForm } from "../UpdateUserForm/UpdateUserForm";
import { UpdateAvatarForm } from "../UpdateAvatarForm/UpdateAvatarForm";
import { useState, useEffect } from "react";
import { getCurrentUser } from "../../redux/users/operations";
import { DeleteUser } from "../DeleteUser/DeleteUser";
import { IoImageOutline } from "react-icons/io5";
import { MdEdit } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";

export const UserProfileComponent = () => {
  const [modalNameIsOpen, setModalNameIsOpen] = useState(false);
  const [modalAvatarIsOpen, setModalAvatarIsOpen] = useState(false);
  const [modalDeleteIsOpen, setModalDeleteIsOpen] = useState(false);
  const [updateUser, setUpdateUser] = useState(false);
  const dispatch = useDispatch();

  const currentUser = useSelector(selectCurrentUser);

  const notAvatar = currentUser.name.slice(0, 2);

  const handleOpenModalName = () => {
    setModalNameIsOpen(true);
  };

  function onCloseModalName() {
    setModalNameIsOpen(false);
    setUpdateUser(!updateUser);
  }

  const handleOpenModalAvatar = () => {
    setModalAvatarIsOpen(true);
  };
  const onCloseModalAvatar = () => {
    setModalAvatarIsOpen(false);
    setUpdateUser(!updateUser);
  };

  const handleOpenModalDelete = () => {
    setModalDeleteIsOpen(true);
  };

  const onCloseModalDelete = () => {
    setModalDeleteIsOpen(false);
  };

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch, updateUser]);

  return (
    <Container className={css.wrapper}>
      <div className={css.avatarContainer}>
        {currentUser.avatarURL ? (
          <img src={currentUser.avatarURL} />
        ) : (
          <div className={css.notAvatar}>{notAvatar}</div>
        )}
      </div>
      <div className={css.information}>
        <p>{`name: ${currentUser.name}`}</p>
        <p>{`email: ${currentUser.email}`}</p>
        <p>{`status: ${currentUser.role}`}</p>
        <p>{`thema: ${currentUser.thema}`}</p>
      </div>

      {currentUser.role === "observer" ? (
        <div className={css.notAccessBtn}>Тільки перегляд</div>
      ) : (
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
      )}

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
    </Container>
  );
};
