import { useDispatch } from "react-redux";
import { deleteCar } from "../../redux/cars/operations";
import { Button } from "../shared/components/Button/Button";
import { Container } from "../shared/components/Container/Container";
import css from "./DeleteCar.module.css";

export const DeleteCar = ({ car, closeModal }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteCar(car._id));
    closeModal();
  };

  return (
    <Container>
      <Button onClick={handleDelete}>DELETE</Button>
    </Container>
  );
};
