import { Section } from "../../components/shared/components/Section/Section";
import { useSelector } from "react-redux";
import css from "./UpdatePasswordPage.module.css";
import { selectResetStatus } from "../../redux/auth/selectors";
import { ResetPasswordForm } from "../../components/ResetPasswordForm/ResetPasswordForm";
import { UpdateUserPasswordForm } from "../../components/UpdateUserPasswordForm/UpdateUserPasswordForm";

export const UpdatePasswordPage = () => {
  const isResetStatus = useSelector(selectResetStatus);
  return (
    <Section>
      {isResetStatus ? <UpdateUserPasswordForm /> : <ResetPasswordForm />}
    </Section>
  );
};
