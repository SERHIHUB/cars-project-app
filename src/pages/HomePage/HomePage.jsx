import { Section } from "../../components/shared/components/Section/Section";
import { UpdateUserAvatarForm } from "../../components/UpdateUserForm/UpdateUserAvatarForm";
import { UpdateUserEmailForm } from "../../components/UpdateUserForm/UpdateUserEmailForm";
import { UpdateUserNameForm } from "../../components/UpdateUserForm/UpdateUserNameForm";
import { UpdateUserPasswordForm } from "../../components/UpdateUserForm/UpdateUserPasswordForm";
import { UpdateUserRoleForm } from "../../components/UpdateUserForm/UpdateUserRoleForm";
import css from "./HomePage.module.css";

export const HomePage = () => {
  return (
    <Section>
      <h1>HomePage</h1>
      {/* <UpdateUserNameForm />
      <UpdateUserEmailForm />
      <UpdateUserAvatarForm />
      <UpdateUserPasswordForm />
      <UpdateUserRoleForm /> */}
    </Section>
  );
};
