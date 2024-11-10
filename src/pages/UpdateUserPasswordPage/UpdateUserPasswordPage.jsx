import { useSelector } from "react-redux";
import { Section } from "../../components/shared/components/Section/Section";
import { UpdateUserPasswordForm } from "../../components/UpdateUserPasswordForm/UpdateUserPasswordForm";
import css from "./UpdateUserPasswordPage.module.css";
import { selectLoading } from "../../redux/auth/selectors";
import { Loader } from "../../components/shared/components/Loader/Loader";

export const UpdateUserPasswordPage = () => {
  const loading = useSelector(selectLoading);

  return (
    <Section>
      {loading && <Loader />}
      <UpdateUserPasswordForm />
    </Section>
  );
};
