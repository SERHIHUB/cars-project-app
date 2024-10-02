import { Container } from "../../components/shared/components/Container/Container";
import { useSelector } from "react-redux";
import css from "./UpdatePasswordPage.module.css";
import { selectResetStatus } from "../../redux/auth/selectors";
import { ResetPasswordForm } from "../../components/ResetPasswordForm/ResetPasswordForm";
import { UpdateUserPasswordForm } from "../../components/UpdateUserPasswordForm/UpdateUserPasswordForm";

export const UpdatePasswordPage = () => {
  const isResetStatus = useSelector(selectResetStatus);
  return (
    <Container>
      {isResetStatus ? <UpdateUserPasswordForm /> : <ResetPasswordForm />}
    </Container>
  );
};
