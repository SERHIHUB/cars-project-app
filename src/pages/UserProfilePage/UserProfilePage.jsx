import { useEffect, useState } from "react";
import { Button } from "../../components/shared/components/Button/Button";
import { ModalComponent } from "../../components/shared/components/ModalComponent/ModalComponent";
import { UserProfileComponent } from "../../components/UserProfileComponent/UserProfileComponent";
import { UpdateUserForm } from "../../components/UpdateUserForm/UpdateUserForm";
import css from "./UserProfilePage.module.css";
import { Container } from "../../components/shared/components/Container/Container";
import { UpdateAvatarForm } from "../../components/UpdateAvatarForm/UpdateAvatarForm";
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentUser } from "../../redux/users/selectors";
import { fetchUsers } from "../../redux/users/operations";

export const UserProfilePage = () => {
  // const [modalNameIsOpen, setModalNameIsOpen] = useState(false);
  // const [modalAvatarIsOpen, setModalAvatarIsOpen] = useState(false);
  const currentUser = useSelector(selectCurrentUser);
  // const dispatch = useDispatch();

  // const handleOpenModalName = () => {
  //   setModalNameIsOpen(true);
  // };

  // function onCloseModalName() {
  //   setModalNameIsOpen(false);
  // }

  // const handleOpenModalAvatar = () => {
  //   setModalAvatarIsOpen(true);
  // };
  // const onCloseModalAvatar = () => {
  //   setModalAvatarIsOpen(false);
  // };

  // useEffect(() => {
  //   dispatch(fetchUsers());
  // }, [dispatch]);

  return (
    <Container>
      <UserProfileComponent currentUser={currentUser} />
      {/* <ul className={css.btnList}>
        <li className={css.btnItem}>
          <Button onClick={handleOpenModalName}>Update name</Button>
        </li>
        <li className={css.btnItem}>
          <Button onClick={handleOpenModalAvatar}>Update avatar</Button>
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
      </ModalComponent> */}
    </Container>
  );
};
