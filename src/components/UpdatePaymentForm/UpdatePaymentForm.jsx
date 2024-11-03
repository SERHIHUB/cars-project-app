import { Container } from "../shared/components/Container/Container";
import css from "./UpdatePaymentForm.module.css";
import { Button } from "../shared/components/Button/Button";
import { useDispatch } from "react-redux";
import { updateCar } from "../../redux/cars/operations";

export const UpdataPaymentForm = ({ onCloseModal, carId, lastPaidDate }) => {
  const dispatch = useDispatch();

  const payload = {
    isPaid: true,
    lastPaidDate,
  };

  const onSubmit = () => {
    const updateObject = {
      carId: carId,
      body: payload,
    };
    dispatch(updateCar(updateObject));

    onCloseModal();
  };

  return (
    <Container className={css.paymentContainer}>
      <Button onClick={onSubmit} className={css.paymentBtn}>
        Confirm payment
      </Button>
    </Container>
  );
};
