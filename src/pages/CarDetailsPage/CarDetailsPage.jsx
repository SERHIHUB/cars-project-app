import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { Container } from "../../components/shared/components/Container/Container";
import css from "./CarDetailsPage.module.css";
import { useEffect, useState } from "react";
import { selectCar } from "../../redux/cars/selectors";
import { getOneCar } from "../../redux/cars/operations";
import { Button } from "../../components/shared/components/Button/Button";
import { ModalComponent } from "../../components/shared/components/ModalComponent/ModalComponent";
import { UpdateCarForm } from "../../components/UpdateCarForm/UpdateCarForm";
import { selectName } from "../../redux/users/selectors";
import { UpdataPaymentForm } from "../../components/UpdatePaymentForm/UpdatePaymentForm";
import { UpdateCarPictureForm } from "../../components/UpdateCarPictureForm/UpdateCarPictureForm";
import { RiArrowGoBackLine } from "react-icons/ri";
import { BsCashCoin } from "react-icons/bs";
import { IoImageOutline } from "react-icons/io5";
import { MdEdit } from "react-icons/md";

export const CarDetailsPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { carId } = useParams();
  const car = useSelector(selectCar);
  const userName = useSelector(selectName);

  // @@@@@@@@@@@@@@@@     Модалка    @@@@@@@@@@@@@@@@@@@@@
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [openPaymentModal, setOpenPaymentModal] = useState(false);
  const [openPictureModal, setOpenPictureModal] = useState(false);

  const handleClickItem = () => {
    setModalIsOpen(true);
  };

  function onCloseModal() {
    setModalIsOpen(false);
  }

  const handleClickPayment = () => {
    setOpenPaymentModal(true);
  };

  function closePayment() {
    setOpenPaymentModal(false);
  }

  const handleClickPicture = () => {
    setOpenPictureModal(true);
  };

  function onClosePictureModal() {
    setOpenPictureModal(false);
  }
  // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

  useEffect(() => {
    dispatch(getOneCar(carId));
  }, [dispatch]);

  return (
    <Container>
      <div>
        <div className={css.carImag}></div>
        <ul className={css.detailsList}>
          <li className={css.detailsItem}>
            <p>Модель:</p>
            <p>{car.carModel}</p>
          </li>
          <li className={css.detailsItem}>
            <p>Номер:</p>
            <p>{car.carNumber}</p>
          </li>
          <li className={css.detailsItem}>
            <p>Вартість:</p>
            <p>{car.price}</p>
          </li>
          <li className={css.detailsItem}>
            <p>Дата Оплати:</p>
            <p>{car.paymentDate}</p>
          </li>
          <li className={css.detailsItem}>
            <p>Тел:</p>
            <p>{car.contact}</p>
          </li>
          <li className={css.detailsItem}>
            <p>Оплачено:</p>
            <p>{car.isPaid ? "Так" : "Ні"}</p>
          </li>
          <li className={css.detailsItem}>
            <p>Оплату відзначив:</p>
            <p>{userName}</p>
          </li>
        </ul>
      </div>
      <ModalComponent closeModal={onCloseModal} modalIsOpen={modalIsOpen}>
        <UpdateCarForm car={car} onCloseModal={onCloseModal} />
      </ModalComponent>

      <ModalComponent
        closeModal={onClosePictureModal}
        modalIsOpen={openPictureModal}
      >
        <UpdateCarPictureForm car={car} onCloseModal={onClosePictureModal} />
      </ModalComponent>

      <ModalComponent closeModal={closePayment} modalIsOpen={openPaymentModal}>
        <UpdataPaymentForm
          lastPaidDate={car.lastPaidDate}
          carId={car._id}
          onCloseModal={closePayment}
        />
      </ModalComponent>

      <div className={css.detailsButtonsList}>
        <Button className={css.detailsBtn} onClick={handleClickPicture}>
          <IoImageOutline />
        </Button>

        <Button className={css.detailsBtn} onClick={handleClickItem}>
          <MdEdit />
        </Button>

        <Button className={css.payment} onClick={handleClickPayment}>
          <BsCashCoin />
        </Button>

        <Button className={css.detailsBtn}>
          <Link to={location.state}>
            <RiArrowGoBackLine />
          </Link>
        </Button>
      </div>
    </Container>
  );
};
