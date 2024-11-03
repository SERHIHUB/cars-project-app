import { Container } from "../shared/components/Container/Container";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import clsx from "clsx";
import css from "./CreateCarForm.module.css";
import { createCarFormSchema } from "../../validationSchemas/createCarFormSchema";
import { useDispatch } from "react-redux";
import { createCar } from "../../redux/cars/operations";

export const CreateCarForm = ({ onCloseModal }) => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(createCarFormSchema),
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    for (const key in data) {
      if (data[key] === "" || data[key] === undefined) {
        delete data[key];
      }
    }

    let newData = Object.fromEntries(
      Object.entries(data).map((entry) => [
        entry[0],
        entry[1].toLowerCase().trim(),
      ])
    );

    dispatch(createCar(newData));

    reset();
    onCloseModal();
  };

  return (
    <Container className={css.container}>
      <form className={css.createCarForm} onSubmit={handleSubmit(onSubmit)}>
        <label
          className={clsx(css.field, { [css.errorField]: errors.carModel })}
        >
          <p>
            Model<sup className={css.starField}>*</sup>
          </p>
          <input
            className={clsx(css.input, { [css.inputError]: errors.carModel })}
            placeholder="Enter model"
            {...register("carModel", { required: true })}
          />
          {errors.carModel && (
            <span className={css.errorsMessage}>{errors.carModel.message}</span>
          )}
        </label>

        <label
          className={clsx(css.field, { [css.errorField]: errors.carNumber })}
        >
          <p>
            Number<sup className={css.starField}>*</sup>
          </p>
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
          <p>
            Price<sup className={css.starField}>*</sup>
          </p>
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
          className={clsx(css.field, { [css.errorField]: errors.paymentDate })}
        >
          <p>
            Payment date<sup className={css.starField}>*</sup>
          </p>
          <input
            className={clsx(css.input, {
              [css.inputError]: errors.paymentDate,
            })}
            placeholder="Enter payment date"
            {...register("paymentDate", { required: true })}
          />
          {errors.paymentDate && (
            <span className={css.errorsMessage}>
              {errors.paymentDate.message}
            </span>
          )}
        </label>

        <label
          className={clsx(css.field, { [css.errorField]: errors.contact })}
        >
          Contact
          <input
            className={clsx(css.input, { [css.inputError]: errors.contact })}
            type="tel"
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
