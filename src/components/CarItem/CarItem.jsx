import css from "./CarItem.module.css";

export const CarItem = ({ car }) => {
  console.log(car);
  return <div className={css.wrapper}>car</div>;
};
