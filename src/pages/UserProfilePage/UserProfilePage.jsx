import { UserProfileComponent } from "../../components/UserProfileComponent/UserProfileComponent";
import css from "./UserProfilePage.module.css";
import { Section } from "../../components/shared/components/Section/Section";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../redux/users/operations";
import { selectLoading } from "../../redux/users/selectors";
import { Loader } from "../../components/shared/components/Loader/Loader";

export const UserProfilePage = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);

  // useEffect(() => {
  //   dispatch(fetchUsers());
  // }, [dispatch]);

  return (
    <Section>
      {loading && <Loader />}
      <UserProfileComponent />
    </Section>
  );
};
