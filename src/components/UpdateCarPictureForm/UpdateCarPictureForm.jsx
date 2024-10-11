import css from "./UpdateCarPictureForm.module.css";
import { Container } from "../shared/components/Container/Container";
import { useForm, Controller } from "react-hook-form";
import { useDispatch } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import clsx from "clsx";
import { updateCarFormSchema } from "../../validationSchemas/updateCarFormSchema";
import { updateCar } from "../../redux/cars/operations";
import { useState } from "react";

export const UpdateCarPictureForm = ({ onCloseModal, car }) => {
  const dispatch = useDispatch();
  const [selectedFile, setSelectedFile] = useState(null);

  const onChange = (event) => {
    event.preventDefault();

    setSelectedFile(event.target.files[0]);
  };

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

  const onSubmit = () => {
    if (selectedFile === null) return;

    const formData = new FormData();

    formData.append("carPhoto", selectedFile);

    const updateObj = {
      carId: car._id,
      body: formData,
    };

    dispatch(updateCar(updateObj));

    reset();

    onCloseModal();
  };

  return (
    <div>
      <form className={css.updateCarForm} onSubmit={handleSubmit(onSubmit)}>
        <label
          className={clsx(css.field, { [css.errorField]: errors.carPhoto })}
        >
          Photo
          <Controller
            control={control}
            name={"carPhoto"}
            rules={{ required: "Recipe picture is required" }}
            render={({ field: { value, ...field } }) => {
              return (
                <input
                  {...field}
                  value={value?.fileName}
                  onChange={onChange}
                  type="file"
                  id="picture"
                  accept="image/*"
                />
              );
            }}
          />
          {errors.carPhoto && (
            <span className={css.errorsMessage}>{errors.carPhoto.message}</span>
          )}
        </label>

        <input className={css.submit} type="submit" value="Select photo" />
      </form>
    </div>
  );
};
