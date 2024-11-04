import { Container } from "../shared/components/Container/Container";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";
import { Button } from "../shared/components/Button/Button";
import clsx from "clsx";
import css from "./UpdateUserPasswordForm.module.css";
import { updateUserPasswordFormSchema } from "../../validationSchemas/updateUserFormSchema";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { passwordReset } from "../../redux/auth/operations";
import { NavLink, useSearchParams } from "react-router-dom";
import { selectResetStatus } from "../../redux/auth/selectors";

export const UpdateUserPasswordForm = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [params, setParams] = useSearchParams();
  const token = params.get("token") ?? "";
  const resetStatus = useSelector(selectResetStatus);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(updateUserPasswordFormSchema),
    mode: "onBlur",
  });

  const onSubmit = ({ password }) => {
    const data = { password, token };

    dispatch(passwordReset(data));

    reset();
  };

  const handleShowPasswordBtn = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Container className={css.container}>
      <form className={css.updateUserForm} onSubmit={handleSubmit(onSubmit)}>
        <label
          className={clsx(css.field, { [css.errorField]: errors.password })}
        >
          Password
          <input
            className={clsx(css.input, { [css.inputError]: errors.password })}
            placeholder="Enter your password"
            type={showPassword ? "text" : "password"}
            {...register("password", { required: true })}
          />
          <Button onClick={handleShowPasswordBtn} className={css.eyeBtn}>
            {showPassword ? <FiEyeOff size="24" /> : <FiEye size="24" />}
          </Button>
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
            type={showPassword ? "text" : "password"}
            {...register("confirmPassword", { required: true })}
          />
          <Button onClick={handleShowPasswordBtn} className={css.eyeBtn}>
            {showPassword ? <FiEyeOff size="24" /> : <FiEye size="24" />}
          </Button>
          {errors.confirmPassword && (
            <span className={css.errorsMessage}>
              {errors.confirmPassword.message}
            </span>
          )}
        </label>

        <input className={css.submit} type="submit" value="Update" />
      </form>

      {resetStatus == 200 && (
        <NavLink to="/login">
          <Button className={css.btnOk}>Ok</Button>
        </NavLink>
      )}
    </Container>
  );
};
