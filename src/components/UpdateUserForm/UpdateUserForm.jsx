import { Container } from "../shared/components/Container/Container";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import clsx from "clsx";
import css from "./UpdateUserForm.module.css";
import { updateUserFormSchema } from "../../validationSchemas/updateUserFormSchema";
export const UpdateUserForm = () => {
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
    console.log(data);
    reset();
  };

  return (
    <Container>
      <form className={css.updateUserForm} onSubmit={handleSubmit(onSubmit)}>
        <label
          className={clsx(css.field, { [css.errorField]: errors.userName })}
        >
          Name
          <input
            className={clsx(css.input, { [css.inputError]: errors.userName })}
            placeholder="Enter your name"
            {...register("userName", { required: true })}
          />
          {errors.userName && (
            <span className={css.errorsMessage}>{errors.userName.message}</span>
          )}
        </label>

        <label className={clsx(css.field, { [css.errorField]: errors.email })}>
          Email
          <input
            className={clsx(css.input, { [css.inputError]: errors.email })}
            placeholder="Enter your email"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className={css.errorsMessage}>{errors.email.message}</span>
          )}
        </label>

        <label className={clsx(css.field, { [css.errorField]: errors.avatar })}>
          Avatar
          <input
            className={clsx(css.input, { [css.inputError]: errors.avatar })}
            placeholder="Select avatar"
            {...register("avatar")}
          />
          {errors.ownerEmail && (
            <span className={css.errorsMessage}>{errors.avatar.message}</span>
          )}
        </label>

        <label
          className={clsx(css.field, { [css.errorField]: errors.password })}
        >
          Password
          <input
            className={clsx(css.input, { [css.inputError]: errors.password })}
            placeholder="Enter your password"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <span className={css.errorsMessage}>{errors.password.message}</span>
          )}
        </label>

        <label
          className={clsx(css.field, {
            [css.errorField]: errors.confirmPassword,
          })}
        >
          Repeat your password
          <input
            className={clsx(css.input, {
              [css.inputError]: errors.confirmPassword,
            })}
            placeholder="Repeat your password"
            {...register("confirmPassword", { required: true })}
          />
          {errors.confirmPassword && (
            <span className={css.errorsMessage}>
              {errors.confirmPassword.message}
            </span>
          )}
        </label>

        <input className={css.submit} type="submit" value="Update" />
      </form>
    </Container>
  );
};
