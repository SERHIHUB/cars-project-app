import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CarsList } from "../../components/CarsList/CarsList";
import { Button } from "../../components/shared/components/Button/Button";
import { ModalComponent } from "../../components/shared/components/ModalComponent/ModalComponent";
import { fetchCars } from "../../redux/cars/operations";
import { getCurrentUser } from "../../redux/users/operations";
import css from "./AbonementsPage.module.css";
import { CreateCarForm } from "../../components/CreateCarForm/CreateCarForm";

export const AbonementsPage = () => {
  const dispatch = useDispatch();

  // @@@@@@@@@@@@@@@@     Модалка    @@@@@@@@@@@@@@@@@@@@@
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // function openModal() {
  //   setModalIsOpen(true);
  // }

  const handleClickModal = () => {
    setModalIsOpen(true);
    // openModal();
  };

  function onCloseModal() {
    setModalIsOpen(false);
  }
  // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

  // useEffect(() => {
  //   dispatch(getCurrentUser());
  // }, [dispatch]);

  return (
    <div className={css.carWrapper}>
      <h2>AbonementsPage</h2>
      <CarsList />
      <Button className={css.addCar} onClick={handleClickModal}>
        Add abonement
      </Button>
      <ModalComponent closeModal={onCloseModal} modalIsOpen={modalIsOpen}>
        <CreateCarForm onCloseModal={onCloseModal} />
      </ModalComponent>
    </div>
  );
};
