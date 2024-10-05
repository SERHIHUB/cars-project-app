import css from "./CarItem.module.css";

export const CarItem = ({ car }) => {
  return (
    <div className={css.wrapper}>
      <h3>{car.carModel}</h3>
      <p>{car.carNumber}</p>
      <p>{car.price}</p>
      <p>{car.paymentDate}</p>
    </div>
  );
};
