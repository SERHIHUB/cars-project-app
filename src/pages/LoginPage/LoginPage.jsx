import { useSelector } from "react-redux";
import { LoginForm } from "../../components/LoginForm/LoginForm";
import { Loader } from "../../components/shared/components/Loader/Loader";
import { Section } from "../../components/shared/components/Section/Section";
import { selectLoading } from "../../redux/auth/selectors";
import css from "./LoginPage.module.css";

export const LoginPage = () => {
  const loading = useSelector(selectLoading);

  return (
    <Section>
      <LoginForm />
      {loading && <Loader />}
    </Section>
  );
};
