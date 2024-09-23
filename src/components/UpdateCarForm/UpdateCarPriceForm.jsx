import { Container } from "../shared/components/Container/Container";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import clsx from "clsx";
import css from "./UpdateCarForm.module.css";
import { updateCarPriceFormSchema } from "../../validationSchemas/updateCarFormSchema";

export const UpdateCarPriceForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(updateCarPriceFormSchema),
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <Container>
      <form className={css.updateCarForm} onSubmit={handleSubmit(onSubmit)}>
        <label className={clsx(css.field, { [css.errorField]: errors.price })}>
          Price
          <input
            className={clsx(css.input, { [css.inputError]: errors.price })}
            placeholder="Enter price"
            {...register("price", { required: true })}
          />
          {errors.price && (
            <span className={css.errorsMessage}>{errors.price.message}</span>
          )}
        </label>

        <input className={css.submit} type="submit" value="Update" />
      </form>
    </Container>
  );
};
