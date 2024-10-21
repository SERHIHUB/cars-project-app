import { RegisterForm } from "../../components/RegisterForm/RegisterForm";
import { Section } from "../../components/shared/components/Section/Section";
import css from "./RegisterPage.module.css";

export const RegisterPage = () => {
  return (
    <Section>
      <RegisterForm />
    </Section>
  );
};
