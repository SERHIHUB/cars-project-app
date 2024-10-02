import { Container } from "../shared/components/Container/Container";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";
import clsx from "clsx";
import css from "./LoginForm.module.css";
import { Button } from "../shared/components/Button/Button";
import { signInFormSchema } from "../../validationSchemas/authFormSchemas";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";

export const LoginForm = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signInFormSchema),
    mode: "onBlur",
  });

  const onSubmit = ({ email, password }) => {
    const data = {
      email: email.toLowerCase(),
      password,
    };
    console.log(data);
    dispatch(logIn(data));
    reset();
  };

  const handleShowPasswordBtn = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Container>
      <form className={css.loginForm} onSubmit={handleSubmit(onSubmit)}>
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
            {showPassword ? <FiEyeOff /> : <FiEye />}
          </Button>
          {errors.password && (
            <span className={css.errorsMessage}>{errors.password.message}</span>
          )}
        </label>

        <input className={css.submit} type="submit" value="Sign Up" />
      </form>
    </Container>
  );
};
