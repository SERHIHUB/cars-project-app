import { Container } from "../shared/components/Container/Container";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import clsx from "clsx";
import css from "./UpdateCarForm.module.css";
import { updateCarPaymentDateFormSchema } from "../../validationSchemas/updateCarFormSchema";

export const UpdateCarPaymentDateForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(updateCarPaymentDateFormSchema),
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <Container>
      <form className={css.updateCarForm} onSubmit={handleSubmit(onSubmit)}>
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

        <input className={css.submit} type="submit" value="Update" />
      </form>
    </Container>
  );
};
