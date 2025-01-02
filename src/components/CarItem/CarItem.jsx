import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";
import { ModalComponent } from "../shared/components/ModalComponent/ModalComponent";
import css from "./CarItem.module.css";
import { Button } from "../shared/components/Button/Button";
import { Link, useLocation } from "react-router-dom";
import { DeleteCar } from "../DeleteCar/DeleteCar";
import { TbListDetails } from "react-icons/tb";
import { AiOutlineDelete } from "react-icons/ai";
import { selectCurrentUser } from "../../redux/users/selectors";
import { updateCar } from "../../redux/cars/operations";
import { useEffect } from "react";

export const CarItem = ({ car }) => {
  const dispatch = useDispatch();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const location = useLocation();
  const currentUser = useSelector(selectCurrentUser);

  const now = new Date();
  const currentDate = now.getDate();
  const currentMonth = now.getMonth() + 1;

  // console.log(`current Month: ${currentMonth}`);

  const isPaidValue = () => {
    // if (currentMonth <= car.isPaidMonth) return;
    if (currentMonth <= car.isPaidMonth && currentDate < car.isPaid) return;
    if (car.isPaid === false) return;

    const payload = {
      carId: car._id,
      body: {
        isPaid: currentMonth <= car.isPaidMonth ? true : false,
      },
    };

    dispatch(updateCar(payload));
  };

  useEffect(() => {
    return isPaidValue();
  }, [currentMonth]);

  const handleOpenModal = () => {
    setModalIsOpen(true);
  };

  function handleCloseModal() {
    setModalIsOpen(false);
  }

  return (
    <div
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
      <div className={css.carDetails}>
        <h3
          id="car-title"
          className={clsx(car.isPaid ? css.greenText : css.redText)}
        >
          {"Model: "} <span className={css.modelName}>{car.carModel}</span>
        </h3>
        <p>{`Number: ${car.carNumber.toUpperCase()}`}</p>
        <p>{`Price: ${car.price}`}</p>
        <p
          className={clsx(car.isPaid ? css.greenText : css.redText)}
        >{`Date of pay: ${car.paymentDate}`}</p>
      </div>
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
            <Link to={`/abonements/${car._id}`} state={location}>
              <Button className={css.btn}>
                <TbListDetails />
              </Button>
            </Link>
          </li>
        </ul>
      )}
      <ModalComponent closeModal={handleCloseModal} modalIsOpen={modalIsOpen}>
        <DeleteCar car={car} closeModal={handleCloseModal} />
      </ModalComponent>
    </div>
  );
};
