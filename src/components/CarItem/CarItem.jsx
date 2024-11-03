import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";
import { ModalComponent } from "../shared/components/ModalComponent/ModalComponent";
import css from "./CarItem.module.css";
import { Button } from "../shared/components/Button/Button";
import { Link, useLocation, useSearchParams } from "react-router-dom";
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
  const currentMonth = now.getMonth() + 1;

  const isPaidValue = () => {
    if (currentMonth <= car.isPaidMonth) return;
    if (car.isPaid === false) return;

    const payload = {
      carId: car._id,
      body: {
        isPaid: false,
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
      <h3
        id="car-title"
        className={clsx(car.isPaid ? css.greenText : css.redText)}
      >{`Model: ${car.carModel}`}</h3>
      <p>{`Number: ${car.carNumber.toUpperCase()}`}</p>
      <p>{`Price: ${car.price}`}</p>
      <p
        className={clsx(car.isPaid ? css.greenText : css.redText)}
      >{`Date of pay: ${car.paymentDate}`}</p>

      {car.contact ? (
        <p>{`Contact: ${car.contact}`}</p>
      ) : (
        <p>{`Contact: _ _ _`}</p>
      )}

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
