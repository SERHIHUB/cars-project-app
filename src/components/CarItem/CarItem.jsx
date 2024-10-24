import { useState } from "react";
import { ModalComponent } from "../shared/components/ModalComponent/ModalComponent";
import css from "./CarItem.module.css";
import { Button } from "../shared/components/Button/Button";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { DeleteCar } from "../DeleteCar/DeleteCar";
import { TbListDetails } from "react-icons/tb";
import { AiOutlineDelete } from "react-icons/ai";

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
      <div className={css.carPictureContainer}>
        {car.carPhotoURL && (
          <img className={css.carPicture} src={car.carPhotoURL} alt="car" />
        )}
      </div>
      <h3>{`Model: ${car.carModel}`}</h3>
      <p>{`Number: ${car.carNumber.toUpperCase()}`}</p>
      <p>{`Price: ${car.price}`}</p>
      <p>{`Date of pay: ${car.paymentDate}`}</p>
      <p>{`Contact: ${car.contact !== null ? car.contact : "_ _ _"}`}</p>

      <ul className={css.btnList}>
        <li className={css.btnItem}>
          <Button className={css.btn} onClick={handleOpenModal}>
            <AiOutlineDelete />
          </Button>
        </li>
        <li className={css.btnItem}>
          <Button className={css.btn}>
            <Link to={`/abonements/${car._id}`} state={location}>
              <TbListDetails />
            </Link>
          </Button>
        </li>
      </ul>
      <ModalComponent closeModal={handleCloseModal} modalIsOpen={modalIsOpen}>
        <DeleteCar car={car} closeModal={handleCloseModal} />
      </ModalComponent>
    </div>
  );
};
