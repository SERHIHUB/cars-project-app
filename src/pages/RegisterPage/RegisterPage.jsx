import { RegisterForm } from "../../components/RegisterForm/RegisterForm";
import { Section } from "../../components/shared/components/Section/Section";
// import { Container } from "../../components/shared/components/Container/Container";
import { selectLoading } from "../../redux/auth/selectors";
import { Loader } from "../../components/shared/components/Loader/Loader";
import css from "./RegisterPage.module.css";

export const RegisterPage = () => {
  const loading = useSelector(selectLoading);

  return (
    <Section className={css.container}>
      {loading && <Loader />}
      <RegisterForm />
    </Section>
  );
};
