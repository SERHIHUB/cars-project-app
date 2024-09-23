import { Container } from "../shared/components/Container/Container";
import { useForm } from "react-hook-form";
import clsx from "clsx";
import css from "./UpdateUserForm.module.css";

export const UpdateUserRoleForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({});

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <Container>
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

        <input className={css.submit} type="submit" value="Update users role" />
      </form>
    </Container>
  );
};
