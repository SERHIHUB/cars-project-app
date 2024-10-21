import { Container } from "../shared/components/Container/Container";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import clsx from "clsx";
import css from "./UpdateUserForm.module.css";
import { updateUserFormSchema } from "../../validationSchemas/updateUserFormSchema";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { updateUser } from "../../redux/users/operations";

export const UpdateUserForm = ({ onCloseModal, user }) => {
  const [selectedName, setSelectedName] = useState(user.name);
  const dispatch = useDispatch();

  const onChangeName = (event) => {
    event.preventDefault();

    setSelectedName(event.target.value);
  };

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(updateUserFormSchema),
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    // for (const key in data) {
    //   if (data[key] === "") {
    //     delete data[key];
    //   }
    // }

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
        <label className={clsx(css.field, { [css.errorField]: errors.name })}>
          Name
          {/* <input
            className={clsx(css.input, { [css.inputError]: errors.name })}
            placeholder="Enter your name"
            {...register("name")}
          /> */}
          {/* =========================================================== */}
          <Controller
            control={control}
            name={"name"}
            rules={{ required: "Recipe picture is required" }}
            render={({ field: { value, ...field } }) => {
              return (
                <input
                  className={css.input}
                  {...field}
                  {...register("name", { required: true })}
                  value={selectedName}
                  onChange={onChangeName}
                />
              );
            }}
          />
          {/* =========================================================== */}
          {errors.name && (
            <span className={css.errorsMessage}>{errors.name.message}</span>
          )}
        </label>

        {/* <label className={clsx(css.field, { [css.errorField]: errors.email })}>
          Email
          <input
            className={clsx(css.input, { [css.inputError]: errors.email })}
            placeholder="Enter your email"
            {...register("email")}
          />
          {errors.email && (
            <span className={css.errorsMessage}>{errors.email.message}</span>
          )}
        </label> */}

        {/* <label
          className={clsx(css.field, { [css.errorField]: errors.avatarURL })}
        >
          Avatar
          <input
            className={clsx(css.input, { [css.inputError]: errors.avatarURL })}
            placeholder="Select avatar"
            {...register("avatarURL")}
          />
          {errors.avatarURL && (
            <span className={css.errorsMessage}>
              {errors.avatarURL.message}
            </span>
          )}
        </label> */}

        {/* <label
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
        </label> */}

        {/* <label
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
        </label> */}

        <input className={css.submit} type="submit" value="Update" />
      </form>
    </Container>
  );
};
