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
import { fetchUsers, getCurrentUser } from "../../redux/users/operations";

export const UserProfilePage = () => {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch, currentUser]);

  return (
    <Container>
      <UserProfileComponent currentUser={currentUser} />
    </Container>
  );
};
