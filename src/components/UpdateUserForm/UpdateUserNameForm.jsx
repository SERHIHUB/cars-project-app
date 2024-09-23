import { Container } from "../shared/components/Container/Container";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import clsx from "clsx";
import css from "./UpdateUserForm.module.css";
import { updateUserNameFormSchema } from "../../validationSchemas/updateUserFormSchema";

export const UpdateUserNameForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(updateUserNameFormSchema),
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

        <input className={css.submit} type="submit" value="Update" />
      </form>
    </Container>
  );
};
