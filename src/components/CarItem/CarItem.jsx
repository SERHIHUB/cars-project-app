import { useState } from "react";
import { useSelector } from "react-redux";
import clsx from "clsx";
import { ModalComponent } from "../shared/components/ModalComponent/ModalComponent";
import css from "./CarItem.module.css";
import { Button } from "../shared/components/Button/Button";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { DeleteCar } from "../DeleteCar/DeleteCar";
import { TbListDetails } from "react-icons/tb";
import { AiOutlineDelete } from "react-icons/ai";
import { selectCurrentUser } from "../../redux/users/selectors";

// const textColor = document.querySelector("#car-title");

export const CarItem = ({ car }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const location = useLocation();
  const currentUser = useSelector(selectCurrentUser);

  // textColor.style.color = "red";

  const handleOpenModal = () => {
    setModalIsOpen(true);
  };

  function handleCloseModal() {
    setModalIsOpen(false);
  }

  return (
    <div
      // className={css.wrapper}
      className={clsx(
        css.wrapper,
        car.isPaid ? css.greenShadow : css.redShadow
      )}
    >
      <div className={css.carPictureContainer}>
        {car.carPhotoURL && (
          <img className={css.carPicture} src={car.carPhotoURL} alt="car" />
        )}
      </div>
      <h3
        id="car-title"
        className={clsx(car.isPaid ? css.greenText : css.redText)}
      >{`Model: ${car.carModel}`}</h3>
      <p>{`Number: ${car.carNumber.toUpperCase()}`}</p>
      <p>{`Price: ${car.price}`}</p>
      <p>{`Date of pay: ${car.paymentDate}`}</p>
      {/* <p>{`Contact: ${car.contact !== null ? car.contact : "_ _ _"}`}</p> */}
      <p>{`Contact: ${
        car.contact !== null ? (
          <a className={css.contactLink} href={`tel:${car.contact}`}>
            {car.contact}
          </a>
        ) : (
          "_ _ _"
        )
      }`}</p>

      {currentUser.role === "observer" ? (
        <div className={css.notAccessBtn}>Тільки перегляд</div>
      ) : (
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
      )}
      <ModalComponent closeModal={handleCloseModal} modalIsOpen={modalIsOpen}>
        <DeleteCar car={car} closeModal={handleCloseModal} />
      </ModalComponent>
    </div>
  );
};
