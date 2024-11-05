import { UserProfileComponent } from "../../components/UserProfileComponent/UserProfileComponent";
import css from "./UserProfilePage.module.css";
import { Section } from "../../components/shared/components/Section/Section";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUsers } from "../../redux/users/operations";

export const UserProfilePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <Section>
      <UserProfileComponent />
    </Section>
  );
};
