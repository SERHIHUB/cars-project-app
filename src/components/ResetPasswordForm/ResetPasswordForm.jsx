import { updateUserEmailFormSchema } from "../../validationSchemas/updateUserFormSchema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import clsx from "clsx";
import { Container } from "../shared/components/Container/Container";
import css from "./ResetPasswordForm.module.css";
import { passwordResetRequest } from "../../redux/auth/operations";
import toast from "react-hot-toast";

export const ResetPasswordForm = () => {
  const dispatch = useDispatch();

  const notify = () => toast("Лист з посиланням відправлено на вказану пошту!");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(updateUserEmailFormSchema),
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    const newData = {
      email: data.email.toLowerCase(),
    };
    dispatch(passwordResetRequest(newData));
    reset();
    notify();
  };

  return (
    <Container className={css.resetContainer}>
      <h2 className={css.resetTitle}>Забули пароль?</h2>
      <form className={css.updateUserForm} onSubmit={handleSubmit(onSubmit)}>
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

        <input className={css.submit} type="submit" value="Send" />
      </form>
    </Container>
  );
};
