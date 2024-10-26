import { RegisterForm } from "../../components/RegisterForm/RegisterForm";
import { Section } from "../../components/shared/components/Section/Section";
import { Container } from "../../components/shared/components/Container/Container";
import css from "./RegisterPage.module.css";

export const RegisterPage = () => {
  return (
    <Section className={css.container}>
      <RegisterForm />
    </Section>
  );
};
