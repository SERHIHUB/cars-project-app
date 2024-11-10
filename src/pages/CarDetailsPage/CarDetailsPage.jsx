import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { Section } from "../../components/shared/components/Section/Section";
import { Container } from "../../components/shared/components/Container/Container";
import css from "./CarDetailsPage.module.css";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { selectCar, selectLoading } from "../../redux/cars/selectors";
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
import { Loader } from "../../components/shared/components/Loader/Loader";

export const CarDetailsPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { carId } = useParams();
  const car = useSelector(selectCar);
  const userName = useSelector(selectName);
  const loading = useSelector(selectLoading);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [openPaymentModal, setOpenPaymentModal] = useState(false);
  const [openPictureModal, setOpenPictureModal] = useState(false);
  const [changeState, setChangeState] = useState(false);

  const handleClickItem = () => {
    setModalIsOpen(true);
  };

  function onCloseModal() {
    setModalIsOpen(false);
    setChangeState(!changeState);
  }

  const handleClickPayment = () => {
    setOpenPaymentModal(true);
  };

  function closePayment() {
    setOpenPaymentModal(false);
    setChangeState(!changeState);
  }

  const handleClickPicture = () => {
    setOpenPictureModal(true);
  };

  function onClosePictureModal() {
    setOpenPictureModal(false);
    setChangeState(!changeState);
  }

  useEffect(() => {
    dispatch(getOneCar(carId));
  }, [dispatch, changeState]);

  return (
    <Section>
      <Container>
        {loading && <Loader />}
        <div className={css.carInfo}>
          <ul className={css.detailsList}>
            <li className={css.detailsItem}>
              <p className={clsx(car.isPaid ? css.greenText : css.redText)}>
                {"Модель: "}{" "}
                <span className={css.carModel}>{car.carModel}</span>
              </p>
            </li>
            <li className={css.detailsItem}>
              <p>{`Номер: ${car.carNumber && car.carNumber.toUpperCase()}`}</p>
            </li>
            <li className={css.detailsItem}>
              <p>{`Вартість: ${car.price}`}</p>
            </li>
            <li className={css.detailsItem}>
              <p>{`Дата оплати: ${car.paymentDate}`}</p>
            </li>
            <li className={css.detailsItem}>
              {car.contact ? (
                <p>
                  Тел:{" "}
                  <a className={css.contactLink} href={`tel:${car.contact}`}>
                    {car.contact}
                  </a>
                </p>
              ) : (
                <p>{`Тел: _ _ _`}</p>
              )}
            </li>
            <li className={css.detailsItem}>
              <p>
                {"Оплату відзначив: "}
                {userName && <span className={css.userName}>{userName}</span>}
              </p>
            </li>
          </ul>

          <div className={css.carImag}>
            {car.carPhotoURL && (
              <img className={css.carPicture} src={car.carPhotoURL} alt="car" />
            )}
          </div>
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

        <ModalComponent
          closeModal={closePayment}
          modalIsOpen={openPaymentModal}
        >
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

          <Button className={css.detailsBtn} onClick={handleClickPayment}>
            <BsCashCoin />
          </Button>
          <Link to={location.state}>
            <Button className={css.detailsBtn}>
              <RiArrowGoBackLine />
            </Button>
          </Link>
        </div>
      </Container>
    </Section>
  );
};
