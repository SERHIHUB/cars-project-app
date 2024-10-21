import { LoginForm } from "../../components/LoginForm/LoginForm";
import { Section } from "../../components/shared/components/Section/Section";
import css from "./LoginPage.module.css";

export const LoginPage = () => {
  return (
    <Section>
      <LoginForm />
    </Section>
  );
};
