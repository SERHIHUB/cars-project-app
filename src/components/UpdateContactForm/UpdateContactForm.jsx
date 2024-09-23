import { Container } from "../shared/components/Container/Container";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import clsx from "clsx";
import css from "./UpdateContactForm.module.css";
import { updateContactFormSchema } from "../../validationSchemas/updateContactForm";

export const UpdateContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(updateContactFormSchema),
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <Container>
      <form className={css.updateContactForm} onSubmit={handleSubmit(onSubmit)}>
        <label
          className={clsx(css.field, { [css.errorField]: errors.employeeName })}
        >
          Name
          <input
            className={clsx(css.input, {
              [css.inputError]: errors.employeeName,
            })}
            placeholder="Enter name"
            {...register("employeeName", { required: true })}
          />
          {errors.employeeName && (
            <span className={css.errorsMessage}>
              {errors.employeeName.message}
            </span>
          )}
        </label>

        <label
          className={clsx(css.field, {
            [css.errorField]: errors.employeeNumber,
          })}
        >
          Number
          <input
            className={clsx(css.input, {
              [css.inputError]: errors.employeeNumber,
            })}
            placeholder="Enter number"
            {...register("employeeNumber", { required: true })}
          />
          {errors.employeeNumber && (
            <span className={css.errorsMessage}>
              {errors.employeeNumber.message}
            </span>
          )}
        </label>

        <label
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
        </label>

        <input className={css.submit} type="submit" value="Select" />
      </form>
    </Container>
  );
};
