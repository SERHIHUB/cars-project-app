import { Container } from "../shared/components/Container/Container";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import clsx from "clsx";
import css from "./CreateCarForm.module.css";
import { createCarFormSchema } from "../../validationSchemas/createCarFormSchema";
import { useDispatch } from "react-redux";
import { createCar } from "../../redux/cars/operations";

// const deleteProperty = (obj) => {
//   const objLength = obj.length;

//   for (let i = 0; i <= objLength; i++) {
//     if (obj[i] === "") {
//       delete obj[i];
//     }
//   }
// };

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
      if (data[key] === "") {
        delete data[key];
      }
    }
    // console.log(data);
    dispatch(createCar(data));

    reset();
    onCloseModal();
  };

  return (
    <Container>
      <form className={css.createCarForm} onSubmit={handleSubmit(onSubmit)}>
        <label
          className={clsx(css.field, { [css.errorField]: errors.carModel })}
        >
          Model
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
          className={clsx(css.field, { [css.errorField]: errors.paymentDate })}
        >
          Payment date
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
          className={clsx(css.field, { [css.errorField]: errors.carPhotoURL })}
        >
          Photo
          <input
            className={clsx(css.input, {
              [css.inputError]: errors.carPhotoURL,
            })}
            placeholder="Select photo"
            {...register("carPhotoURL", { required: true })}
          />
          {errors.carPhotoURL && (
            <span className={css.errorsMessage}>
              {errors.carPhotoURL.message}
            </span>
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
