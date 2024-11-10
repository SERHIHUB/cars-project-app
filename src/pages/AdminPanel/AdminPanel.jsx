import { useSelector } from "react-redux";
import { Loader } from "../../components/shared/components/Loader/Loader";
import { Section } from "../../components/shared/components/Section/Section";
import { UserList } from "../../components/UserList/UserList";
import { selectLoading } from "../../redux/users/selectors";
import css from "./AdminPanel.module.css";

export const AdminPanel = () => {
  const loading = useSelector(selectLoading);

  return (
    <Section>
      {loading && <Loader />}
      <UserList />
    </Section>
  );
};
