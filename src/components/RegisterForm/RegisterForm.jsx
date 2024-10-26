import { Container } from "../shared/components/Container/Container";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";
import clsx from "clsx";
import css from "./RegisterForm.module.css";
import { Button } from "../shared/components/Button/Button";
import { signUpFormSchema } from "../../validationSchemas/authFormSchemas";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../redux/auth/operations";
import { selectStatus } from "../../redux/auth/selectors";

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const registerStatus = useSelector(selectStatus);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signUpFormSchema),
    mode: "onBlur",
  });

  const onSubmit = ({ userName, ownerEmail, email, password }) => {
    const data = ownerEmail
      ? {
          name: userName.toLowerCase(),
          email: email.toLowerCase(),
          owner: ownerEmail.toLowerCase(),
          password,
        }
      : {
          name: userName.toLowerCase(),
          email: email.toLowerCase(),
          password,
        };
    dispatch(registerUser(data));

    // console.log(data);
    reset();
  };

  // confirmPassword: "1234";
  // email: "egor@email.com";
  // ownerEmail: "serhii@email.com";
  // password: "1234";
  // userName: "fdfdfd";

  const handleShowPasswordBtn = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Container className={css.registerContainer}>
      {/* Зробити модалку для повідомлення */}
      {registerStatus == 200 ? (
        <div className={css.confirmEmail}>
          <h2>Підтвердіть вашу пошту.</h2>
        </div>
      ) : (
        <>
          <h2>Зараєструватися</h2>
          <form className={css.registerForm} onSubmit={handleSubmit(onSubmit)}>
            <label
              className={clsx(css.field, { [css.errorField]: errors.userName })}
            >
              Name
              <input
                className={clsx(css.input, {
                  [css.inputError]: errors.userName,
                })}
                placeholder="Enter your name"
                {...register("userName", { required: true })}
              />
              {errors.userName && (
                <span className={css.errorsMessage}>
                  {errors.userName.message}
                </span>
              )}
            </label>

            <label
              className={clsx(css.field, { [css.errorField]: errors.email })}
            >
              Email
              <input
                className={clsx(css.input, { [css.inputError]: errors.email })}
                placeholder="Enter your email"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className={css.errorsMessage}>
                  {errors.email.message}
                </span>
              )}
            </label>

            <label
              className={clsx(css.field, {
                [css.errorField]: errors.ownerEmail,
              })}
            >
              Admin email
              <input
                className={clsx(css.input, {
                  [css.inputError]: errors.ownerEmail,
                })}
                placeholder="Enter admins email"
                {...register("ownerEmail")}
              />
              {errors.ownerEmail && (
                <span className={css.errorsMessage}>
                  {errors.ownerEmail.message}
                </span>
              )}
            </label>

            <label
              className={clsx(css.field, { [css.errorField]: errors.password })}
            >
              Password
              <input
                className={clsx(css.input, {
                  [css.inputError]: errors.password,
                })}
                placeholder="Enter your password"
                type={showPassword ? "text" : "password"}
                {...register("password", { required: true })}
              />
              <Button onClick={handleShowPasswordBtn} className={css.eyeBtn}>
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </Button>
              {errors.password && (
                <span className={css.errorsMessage}>
                  {errors.password.message}
                </span>
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
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </Button>
              {errors.confirmPassword && (
                <span className={css.errorsMessage}>
                  {errors.confirmPassword.message}
                </span>
              )}
            </label>

            <input className={css.submit} type="submit" value="Sign Up" />
          </form>
        </>
      )}
    </Container>
  );
};
