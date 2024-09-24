import { Container } from "../shared/components/Container/Container";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import clsx from "clsx";
import css from "./UpdateUserForm.module.css";
import { updateUserAvatarFormSchema } from "../../validationSchemas/updateUserFormSchema";

export const UpdateUserAvatarForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(updateUserAvatarFormSchema),
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
        </label>

        <input className={css.submit} type="submit" value="Update" />
      </form>
    </Container>
  );
};
