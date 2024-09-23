import { Container } from "../shared/components/Container/Container";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import clsx from "clsx";
import css from "./UpdateCarForm.module.css";
import { updateCarNumberFormSchema } from "../../validationSchemas/updateCarFormSchema";

export const UpdateCarNumberForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(updateCarNumberFormSchema),
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <Container>
      <form className={css.updateCarForm} onSubmit={handleSubmit(onSubmit)}>
        <label
          className={clsx(css.field, { [css.errorField]: errors.carNumber })}
        >
          Number
          <input
            className={clsx(css.input, { [css.inputError]: errors.carNumber })}
            placeholder="Enter number"
            {...register("carNumber", { required: true })}
          />
          {errors.carNumber && (
            <span className={css.errorsMessage}>
              {errors.carNumber.message}
            </span>
          )}
        </label>

        <input className={css.submit} type="submit" value="Update" />
      </form>
    </Container>
  );
};
