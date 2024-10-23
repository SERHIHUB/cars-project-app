import { Container } from "../shared/components/Container/Container";
import { useForm } from "react-hook-form";
import { updateUserFormSchema } from "../../validationSchemas/updateUserFormSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import clsx from "clsx";
import css from "./UpdateUserRoleForm.module.css";
import { useDispatch } from "react-redux";
import { updateUser } from "../../redux/users/operations";

export const UpdateUserRoleForm = ({ onCloseModal, user }) => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(updateUserFormSchema),
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    const updateObj = {
      userId: user._id,
      body: data,
    };
    console.log(data);
    dispatch(updateUser(updateObj));

    reset();
    onCloseModal();
  };

  return (
    <Container className={css.container}>
      <form className={css.updateUserForm} onSubmit={handleSubmit(onSubmit)}>
        <h4>Select users role.</h4>

        <label className={css.radioLabel}>
          <input type="radio" {...register("role")} value="observer" checked />
          Observer
        </label>
        <label className={css.radioLabel}>
          <input type="radio" {...register("role")} value="user" />
          User
        </label>

        <input className={css.submit} type="submit" value="Update user role" />
      </form>
    </Container>
  );
};
