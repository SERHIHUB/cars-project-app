import { useSelector } from "react-redux";
import { Section } from "../../components/shared/components/Section/Section";
import css from "./UpdatePasswordPage.module.css";
import { ResetPasswordForm } from "../../components/ResetPasswordForm/ResetPasswordForm";
import { selectLoading } from "../../redux/auth/selectors";
import { Loader } from "../../components/shared/components/Loader/Loader";

export const UpdatePasswordPage = () => {
  const loading = useSelector(selectLoading);

  return (
    <Section>
      {loading && <Loader />}
      <ResetPasswordForm />
    </Section>
  );
};
