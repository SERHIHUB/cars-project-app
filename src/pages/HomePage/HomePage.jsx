import { CreateContactForm } from "../../components/CreateContactForm/CreateContactForm";
import { CreateCarForm } from "../../components/CreateCarForm/CreateCarForm";
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
import { CarsList } from "../../components/CarsList/CarsList";
import { LogOutComponent } from "../../components/LogOutComponent/LogOutComponent";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

export const HomePage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  console.log(isLoggedIn);

  return (
    <Section>
      <h1>HomePage</h1>
      {isLoggedIn && <LogOutComponent />}
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
      {
        "*****************************************************************************"
      }
      {/* <CreateCarForm /> */}
      {/* <CreateContactForm /> */}
      {/* <UpdateContactForm /> */}
      {
        "&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&"
      }
      <CarsList />
    </Section>
  );
};
