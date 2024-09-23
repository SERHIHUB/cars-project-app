import { Container } from "../shared/components/Container/Container";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import clsx from "clsx";
import css from "./UpdateCarForm.module.css";
import { updateCarModelFormSchema } from "../../validationSchemas/updateCarFormSchema";

export const UpdateCarModelForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(updateCarModelFormSchema),
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <Container>
      <form className={css.updateCarForm} onSubmit={handleSubmit(onSubmit)}>
        <label className={clsx(css.field, { [css.errorField]: errors.model })}>
          Model
          <input
            className={clsx(css.input, { [css.inputError]: errors.model })}
            placeholder="Enter model"
            {...register("model", { required: true })}
          />
          {errors.model && (
            <span className={css.errorsMessage}>{errors.model.message}</span>
          )}
        </label>

        <input className={css.submit} type="submit" value="Update" />
      </form>
    </Container>
  );
};
