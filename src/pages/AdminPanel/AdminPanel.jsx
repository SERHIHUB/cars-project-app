import { Container } from "../../components/shared/components/Container/Container";
import { Section } from "../../components/shared/components/Section/Section";
import { UserList } from "../../components/UserList/UserList";
import css from "./AdminPanel.module.css";

export const AdminPanel = () => {
  return (
    <Section>
      <UserList />
    </Section>
  );
};
