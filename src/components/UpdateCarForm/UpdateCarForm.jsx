import { Container } from "../shared/components/Container/Container";
import { useForm, Controller } from "react-hook-form";
import { useDispatch } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import clsx from "clsx";
import css from "./UpdateCarForm.module.css";
import { updateCarFormSchema } from "../../validationSchemas/updateCarFormSchema";
import { updateCar } from "../../redux/cars/operations";
import { useState } from "react";

export const UpdateCarForm = ({ onCloseModal, car }) => {
  const dispatch = useDispatch();
  const [selectedModel, setSelectedModel] = useState(car.carModel);
  const [selectedCarNumber, setSelectedCarNumber] = useState(car.carNumber);
  const [selectedPrice, setSelectedPrice] = useState(car.price);
  const [selectedPayment, setSelectedPayment] = useState(car.paymentDate);
  const [selectedContact, setSelectedContact] = useState(
    car.contact ? car.contact : ""
  );

  const onChangeModel = (event) => {
    event.preventDefault();

    setSelectedModel(event.target.value);
  };

  const onChangeCarNumber = (event) => {
    event.preventDefault();

    setSelectedCarNumber(event.target.value);
  };

  const onChangePrice = (event) => {
    event.preventDefault();

    setSelectedPrice(event.target.value);
  };

  const onChangePayment = (event) => {
    event.preventDefault();

    setSelectedPayment(event.target.value);
  };

  const onChangeContact = (event) => {
    event.preventDefault();

    setSelectedContact(event.target.value);
  };

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(updateCarFormSchema),
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

    const updateObj = {
      carId: car._id,
      body: newData,
    };

    dispatch(updateCar(updateObj));

    reset();
    onCloseModal();
  };

  return (
    <Container className={css.container}>
      <form className={css.updateCarForm} onSubmit={handleSubmit(onSubmit)}>
        <label
          className={clsx(css.field, { [css.errorField]: errors.carModel })}
        >
          Model
          <Controller
            control={control}
            name={"carModel"}
            rules={{ required: "Recipe picture is required" }}
            render={({ field: { value, ...field } }) => {
              return (
                <input
                  className={css.input}
                  {...field}
                  {...register("carModel", { required: true })}
                  value={selectedModel}
                  onChange={onChangeModel}
                />
              );
            }}
          />
          {errors.carModel && (
            <span className={css.errorsMessage}>{errors.carModel.message}</span>
          )}
        </label>

        <label
          className={clsx(css.field, { [css.errorField]: errors.carNumber })}
        >
          Number
          <Controller
            control={control}
            name={"carNumber"}
            rules={{ required: "Recipe picture is required" }}
            render={({ field: { value, ...field } }) => {
              return (
                <input
                  className={css.input}
                  {...field}
                  {...register("carNumber", { required: true })}
                  value={selectedCarNumber && selectedCarNumber.toUpperCase()}
                  onChange={onChangeCarNumber}
                />
              );
            }}
          />
          {errors.carNumber && (
            <span className={css.errorsMessage}>
              {errors.carNumber.message}
            </span>
          )}
        </label>

        <label className={clsx(css.field, { [css.errorField]: errors.price })}>
          Price
          <Controller
            control={control}
            name={"price"}
            rules={{ required: "Recipe picture is required" }}
            render={({ field: { value, ...field } }) => {
              return (
                <input
                  className={css.input}
                  {...field}
                  {...register("price", { required: true })}
                  value={selectedPrice}
                  onChange={onChangePrice}
                />
              );
            }}
          />
          {errors.price && (
            <span className={css.errorsMessage}>{errors.price.message}</span>
          )}
        </label>

        <label
          className={clsx(css.field, { [css.errorField]: errors.paymentDate })}
        >
          Payment date
          <Controller
            control={control}
            name={"paymentDate"}
            rules={{ required: "Recipe picture is required" }}
            render={({ field: { value, ...field } }) => {
              return (
                <input
                  className={css.input}
                  {...field}
                  {...register("paymentDate", { required: true })}
                  value={selectedPayment}
                  onChange={onChangePayment}
                />
              );
            }}
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
          <Controller
            control={control}
            name={"contact"}
            rules={{ required: "Recipe picture is required" }}
            render={({ field: { value, ...field } }) => {
              return (
                <input
                  className={css.input}
                  {...field}
                  {...register("contact", { required: true })}
                  value={selectedContact}
                  onChange={onChangeContact}
                />
              );
            }}
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
