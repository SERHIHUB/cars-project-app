import { useState } from "react";
import { ModalComponent } from "../shared/components/ModalComponent/ModalComponent";
import css from "./CarItem.module.css";
import { Button } from "../shared/components/Button/Button";

export const CarItem = ({ car }) => {
  // @@@@@@@@@@@@@@@@     Модалка    @@@@@@@@@@@@@@@@@@@@@
  // const [modalIsOpen, setModalIsOpen] = useState(false);

  // function openModal() {
  //   setModalIsOpen(true);
  // }

  // const handleClickItem = () => {
  //   openModal();
  // };

  // function onCloseModal() {
  //   setModalIsOpen(false);
  // }
  // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

  return (
    <div className={css.wrapper}>
      <h3>{car.carModel}</h3>
      <p>{car.carNumber}</p>
      <p>{car.price}</p>
      <p>{car.paymentDate}</p>
      {/* <ModalComponent closeModal={onCloseModal} modalIsOpen={modalIsOpen}>
        <h2>MODAL</h2>
      </ModalComponent> */}
      {/* <Button onClick={handleClickItem}>Modal</Button> */}
    </div>
  );
};
