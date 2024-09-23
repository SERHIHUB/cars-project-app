import { Container } from "../shared/components/Container/Container";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import clsx from "clsx";
import css from "./UpdateCarForm.module.css";
import { updateCarFormSchema } from "../../validationSchemas/updateCarFormSchema";

export const UpdateCarForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(updateCarFormSchema),
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

        <label
          className={clsx(css.field, { [css.errorField]: errors.payment })}
        >
          Payment date
          <input
            className={clsx(css.input, { [css.inputError]: errors.payment })}
            placeholder="Enter payment date"
            {...register("payment", { required: true })}
          />
          {errors.payment && (
            <span className={css.errorsMessage}>{errors.payment.message}</span>
          )}
        </label>

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

        <label
          className={clsx(css.field, { [css.errorField]: errors.contact })}
        >
          Contact
          <input
            className={clsx(css.input, { [css.inputError]: errors.contact })}
            placeholder="Enter contact"
            {...register("contact", { required: true })}
          />
          {errors.contact && (
            <span className={css.errorsMessage}>{errors.contact.message}</span>
          )}
        </label>

        <input className={css.submit} type="submit" value="Select" />
      </form>
    </Container>
  );
};
