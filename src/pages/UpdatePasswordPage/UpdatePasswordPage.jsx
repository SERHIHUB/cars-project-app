import { Section } from "../../components/shared/components/Section/Section";
// import { useSelector } from "react-redux";
import css from "./UpdatePasswordPage.module.css";
// import {
//   selectRequestResetStatus,
//   selectResetStatus,
// } from "../../redux/auth/selectors";
import { ResetPasswordForm } from "../../components/ResetPasswordForm/ResetPasswordForm";
// import { UpdateUserPasswordForm } from "../../components/UpdateUserPasswordForm/UpdateUserPasswordForm";
// import toast from "react-hot-toast";

export const UpdatePasswordPage = () => {
  // const statusResetRequest = useSelector(selectRequestResetStatus);
  // const isResetStatus = useSelector(selectResetStatus);

  return (
    <Section>
      <ResetPasswordForm />
    </Section>
  );
};
