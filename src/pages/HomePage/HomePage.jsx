import { Section } from "../../components/shared/components/Section/Section";
import { UpdateCarContactForm } from "../../components/UpdateCarForm/UpdateCarContactForm";
import { UpdateCarForm } from "../../components/UpdateCarForm/UpdateCarForm";
import { UpdateCarModelForm } from "../../components/UpdateCarForm/UpdateCarModelForm";
import { UpdateCarNumberForm } from "../../components/UpdateCarForm/UpdateCarNumberForm";
import { UpdateCarPaymentDateForm } from "../../components/UpdateCarForm/UpdateCarPaymentDateForm";
import { UpdateCarPhotoForm } from "../../components/UpdateCarForm/UpdateCarPhotoForm";
import { UpdateCarPriceForm } from "../../components/UpdateCarForm/UpdateCarPriceForm";
import { UpdateContactForm } from "../../components/UpdateContactForm/UpdateContactForm";
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

      {/* <UpdateCarContactForm />
      <UpdateCarPriceForm />
      <UpdateCarModelForm />
      <UpdateCarNumberForm />
      <UpdateCarPaymentDateForm />
      <UpdateCarPhotoForm /> */}

      {/* <UpdateCarForm /> */}

      <UpdateContactForm />
    </Section>
  );
};
