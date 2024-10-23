import { Container } from "../../components/shared/components/Container/Container";
import { UserList } from "../../components/UserList/UserList";
import css from "./AdminPanel.module.css";

export const AdminPanel = () => {
  return (
    <Container>
      <UserList />
    </Container>
  );
};
