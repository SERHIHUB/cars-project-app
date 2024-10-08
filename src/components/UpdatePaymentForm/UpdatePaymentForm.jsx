import { Container } from "../shared/components/Container/Container";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import clsx from "clsx";
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
      // isPaid: true,
      payload,
    };
    dispatch(updateCar(updateObject));

    onCloseModal();
  };

  return (
    <Container>
      <Button onClick={onSubmit}>Confirm payment</Button>
    </Container>
  );
};

// ----------------------
// "carModel":
// "dewoo",
// "carNumber":
// "ai3003hk",
// "carPhotoURL":
// null,
// "price":
// "500",
// "paymentDate":
// "1",
// "contact":
// null,
// "isPaid":
// false,
// "owner":
// "66fae2ba38f66f094801a5eb",
// "author":
// "66fae2ba38f66f094801a5eb",
// "lastPaidDate":
// "Mon Oct 07 2024 15:12:20 GMT+0000 (Coordinated Universal Time)"
// "isPaidMonth":
// "10",
// "createdAt":
// 2024-10-07T17:54:53.807+00:00,
// "updatedAt":
// 2024-10-07T17:54:53.807+00:00,
