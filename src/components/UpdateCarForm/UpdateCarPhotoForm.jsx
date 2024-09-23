import { Container } from "../shared/components/Container/Container";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import clsx from "clsx";
import css from "./UpdateCarForm.module.css";
import { updateCarPhotoFormSchema } from "../../validationSchemas/updateCarFormSchema";

export const UpdateCarPhotoForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(updateCarPhotoFormSchema),
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <Container>
      <form className={css.updateCarForm} onSubmit={handleSubmit(onSubmit)}>
        <label className={clsx(css.field, { [css.errorField]: errors.photo })}>
          Photo
          <input
            className={clsx(css.input, { [css.inputError]: errors.photo })}
            placeholder="Select photo"
            {...register("photo", { required: true })}
          />
          {errors.photo && (
            <span className={css.errorsMessage}>{errors.photo.message}</span>
          )}
        </label>

        <input className={css.submit} type="submit" value="Select" />
      </form>
    </Container>
  );
};
