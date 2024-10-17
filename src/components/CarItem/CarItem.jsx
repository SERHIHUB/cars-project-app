import { useState } from "react";
import { ModalComponent } from "../shared/components/ModalComponent/ModalComponent";
import css from "./CarItem.module.css";
import { Button } from "../shared/components/Button/Button";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { DeleteCar } from "../DeleteCar/DeleteCar";

export const CarItem = ({ car }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const location = useLocation();

  const handleOpenModal = () => {
    setModalIsOpen(true);
  };

  function handleCloseModal() {
    setModalIsOpen(false);
  }
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
      {/* -------------------------------------- */}
      <div className={css.btnContainer}>
        <Button>
          <Link to={`/abonements/${car._id}`} state={location}>
            {"DETAILS"}
          </Link>
        </Button>
        <Button onClick={handleOpenModal}>DELETE</Button>
      </div>
      <ModalComponent closeModal={handleCloseModal} modalIsOpen={modalIsOpen}>
        <DeleteCar car={car} closeModal={handleCloseModal} />
      </ModalComponent>
    </div>
  );
};
