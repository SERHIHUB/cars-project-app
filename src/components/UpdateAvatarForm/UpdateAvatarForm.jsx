import { useForm, Controller } from "react-hook-form";
import { useDispatch } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import clsx from "clsx";
import { useState } from "react";
import css from "./UpdateAvatarForm.module.css";
import { updateUser } from "../../redux/users/operations";
import { updateUserFormSchema } from "../../validationSchemas/updateUserFormSchema";

export const UpdateAvatarForm = ({ onCloseModal, user }) => {
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
    resolver: yupResolver(updateUserFormSchema),
    mode: "onBlur",
  });

  const onSubmit = () => {
    if (selectedFile === null) return;

    const formData = new FormData();

    formData.append("avatar", selectedFile);

    const updateObj = {
      userId: user._id,
      body: formData,
    };
    console.log("avatar");
    dispatch(updateUser(updateObj));

    reset();

    onCloseModal();
  };

  return (
    <div>
      <form className={css.updateAvatarForm} onSubmit={handleSubmit(onSubmit)}>
        <label
          className={clsx(css.field, { [css.errorField]: errors.avatarURL })}
        >
          Photo
          <Controller
            control={control}
            name={"avatar"}
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
          {errors.avatarURL && (
            <span className={css.errorsMessage}>
              {errors.avatarURL.message}
            </span>
          )}
        </label>

        <input className={css.submit} type="submit" value="Select photo" />
      </form>
    </div>
  );
};
