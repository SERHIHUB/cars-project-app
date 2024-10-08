import { Container } from "../shared/components/Container/Container";
import { useForm, Controller } from "react-hook-form";
import { useDispatch } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import clsx from "clsx";
import css from "./UpdateCarForm.module.css";
import { updateCarFormSchema } from "../../validationSchemas/updateCarFormSchema";
import { updateCar } from "../../redux/cars/operations";
import { Picture } from "../Picture/Picture";

export const UpdateCarForm = ({ onCloseModal, car }) => {
  const dispatch = useDispatch();

  let fileUrl;
  // ------------------------------
  const onChange = (event) => {
    console.log(event.target.files[0]);
    // fileUrl = URL.createObjectURL(event.target.files[0]);
    fileUrl = event.target.files[0];

    return fileUrl;
  };
  // ------------------------------

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    control,
  } = useForm({
    resolver: yupResolver(updateCarFormSchema),
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    for (const key in data) {
      if (data[key] === "") {
        delete data[key];
      }
    }

    let newData = Object.fromEntries(
      Object.entries(data).map((entry) => [
        entry[0],
        entry[1].toLowerCase().trim(),
      ])
    );

    const payloadObj = {
      body: newData,
      file: fileUrl,
    };

    // console.log(data.carPhotoURL[0]);

    const updateObj = {
      carId: car._id,
      payload: payloadObj,
    };

    // picUrl = URL.createObjectURL(data.carPhotoURL[0]);

    dispatch(updateCar(updateObj));

    console.log(updateObj);

    reset();
    onCloseModal();
  };

  return (
    <Container>
      <form className={css.updateCarForm} onSubmit={handleSubmit(onSubmit)}>
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
          {/* <input
            className={clsx(css.input, {
              [css.inputError]: errors.carPhotoURL,
            })}
            type="file"
            placeholder="Select photo"
            {...register("carPhotoURL")}
          /> */}
          {/* -------------------------------- */}
          <Controller
            control={control}
            name={"carPhotoURL"}
            rules={{ required: "Recipe picture is required" }}
            render={({ field: { value, ...field } }) => {
              return (
                <input
                  {...field}
                  value={value?.fileName}
                  // onChange={(event) => {
                  //   onChange(event.target.files[0]);
                  // }}
                  onChange={onChange}
                  type="file"
                  id="picture"
                  accept="image/*,.jpg,.png,"
                />
              );
            }}
          />
          {/* ---------------------------------- */}
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
            {...register("contact")}
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
