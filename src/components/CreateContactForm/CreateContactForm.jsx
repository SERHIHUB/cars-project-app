import { Container } from "../shared/components/Container/Container";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import clsx from "clsx";
import css from "./CreateContactForm.module.css";
import { createContactFormSchema } from "../../validationSchemas/createContactFormSchema";
import { createContact } from "../../redux/contacts/operations";

export const CreateContactForm = ({ onCloseModal }) => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(createContactFormSchema),
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    // for (const key in data) {
    //   if (data[key] === "" || data[key] === undefined) {
    //     delete data[key];
    //   }
    // }

    let newData = Object.fromEntries(
      Object.entries(data).map((entry) => [
        entry[0],
        entry[1].toLowerCase().trim(),
      ])
    );

    dispatch(createContact(newData));

    reset();
    onCloseModal();
  };

  return (
    <Container>
      <form className={css.createContactForm} onSubmit={handleSubmit(onSubmit)}>
        <label className={clsx(css.field, { [css.errorField]: errors.name })}>
          Name
          <input
            className={clsx(css.input, {
              [css.inputError]: errors.name,
            })}
            placeholder="Enter name"
            {...register("name", { required: true })}
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
          <input
            className={clsx(css.input, {
              [css.inputError]: errors.number,
            })}
            placeholder="Enter number"
            {...register("number", { required: true })}
          />
          {errors.number && (
            <span className={css.errorsMessage}>{errors.number.message}</span>
          )}
        </label>

        {/* <label
          className={clsx(css.field, { [css.errorField]: errors.department })}
        >
          Department
          <input
            className={clsx(css.input, { [css.inputError]: errors.department })}
            placeholder="Enter department"
            {...register("department", { required: true })}
          />
          {errors.department && (
            <span className={css.errorsMessage}>
              {errors.department.message}
            </span>
          )}
        </label> */}

        <input className={css.submit} type="submit" value="Select" />
      </form>
    </Container>
  );
};
