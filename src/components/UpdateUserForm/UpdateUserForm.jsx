import { Container } from "../shared/components/Container/Container";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import clsx from "clsx";
import css from "./UpdateUserForm.module.css";
import { updateUserFormSchema } from "../../validationSchemas/updateUserFormSchema";
import { useDispatch } from "react-redux";
import { useState } from "react";
import {  updateUser } from "../../redux/users/operations";

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

    const updateObj = {
      userId: user._id,
      body: data,
    };

    dispatch(updateUser(updateObj));
    reset();
    onCloseModal();
  };

  return (
    <Container className={css.container}>
      <form className={css.updateUserForm} onSubmit={handleSubmit(onSubmit)}>

        <label className={clsx(css.field, { [css.errorField]: errors.name })}>
          Name
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
          {errors.name && (
            <span className={css.errorsMessage}>{errors.name.message}</span>
          )}
        </label>

        <input className={css.submit} type="submit" value="Update" />
      </form>
    </Container>
  );
};
