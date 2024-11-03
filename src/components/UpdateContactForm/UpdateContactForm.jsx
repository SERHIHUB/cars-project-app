import { Container } from "../shared/components/Container/Container";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import clsx from "clsx";
import css from "./UpdateContactForm.module.css";
import { updateContactFormSchema } from "../../validationSchemas/updateContactForm";
import { useDispatch } from "react-redux";
import { updateContact } from "../../redux/contacts/operations";
import { useState } from "react";

export const UpdateContactForm = ({ contact, onCloseModal }) => {
  const dispatch = useDispatch();
  const [selectedName, setSelectedName] = useState(contact.name);
  const [selectedNumber, setSelectedNumber] = useState(contact.number);

  const onChangeName = (event) => {
    event.preventDefault();

    setSelectedName(event.target.value);
  };

  const onChangeNumber = (event) => {
    event.preventDefault();

    setSelectedNumber(event.target.value);
  };

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(updateContactFormSchema),
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    for (const key in data) {
      if (data[key] === "" || data[key] === undefined) {
        delete data[key];
      }
    }

    let body = Object.fromEntries(
      Object.entries(data).map((entry) => [
        entry[0],
        entry[1].toLowerCase().trim(),
      ])
    );

    dispatch(updateContact({ contactId: contact._id, body }));
    reset();
    onCloseModal();
  };

  return (
    <Container className={css.container}>
      <form className={css.updateContactForm} onSubmit={handleSubmit(onSubmit)}>

        <label className={clsx(css.field, { [css.errorField]: errors.name })}>
          Name
          <Controller
            control={control}
            name={"name"}
            rules={{ required: "Recipe picture is required" }}
            render={({ field: { value, ...field } }) => {
              return (
                <input
                  className={css.input}
                  {...field}
                  {...register("name", { required: true })}
                  value={selectedName}
                  onChange={onChangeName}
                />
              );
            }}
          />
          {errors.name && (
            <span className={css.errorsMessage}>{errors.name.message}</span>
          )}
        </label>

        <label
          className={clsx(css.field, {
            [css.errorField]: errors.number,
          })}
        >
          Number
          <Controller
            control={control}
            name={"number"}
            rules={{ required: "Recipe picture is required" }}
            render={({ field: { value, ...field } }) => {
              return (
                <input
                  className={css.input}
                  {...field}
                  {...register("number", { required: true })}
                  value={selectedNumber}
                  onChange={onChangeNumber}
                />
              );
            }}
          />
          {errors.number && (
            <span className={css.errorsMessage}>{errors.number.message}</span>
          )}
        </label>

        <input className={css.submit} type="submit" value="Select" />
      </form>
    </Container>
  );
};
