import { useState } from "react";
import { useSelector } from "react-redux";
import { CarsList } from "../../components/CarsList/CarsList";
import { Button } from "../../components/shared/components/Button/Button";
import { ModalComponent } from "../../components/shared/components/ModalComponent/ModalComponent";
import css from "./AbonementsPage.module.css";
import { CreateCarForm } from "../../components/CreateCarForm/CreateCarForm";
import { Section } from "../../components/shared/components/Section/Section";
import { selectLoading } from "../../redux/cars/selectors";
import { Loader } from "../../components/shared/components/Loader/Loader";
import { selectCurrentUser } from "../../redux/users/selectors";

export const AbonementsPage = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const currentUser = useSelector(selectCurrentUser);
  const loading = useSelector(selectLoading);

  const handleClickModal = () => {
    setModalIsOpen(true);
  };

  function onCloseModal() {
    setModalIsOpen(false);
  }

  return (
    <Section className={css.carWrapper}>
      {loading && <Loader />}
      <CarsList />
      <div className={css.btnWrapper}>
        {currentUser.role !== "observer" && (
          <Button className={css.addCar} onClick={handleClickModal}>
            Add abonement
          </Button>
        )}
      </div>
      <ModalComponent closeModal={onCloseModal} modalIsOpen={modalIsOpen}>
        <CreateCarForm onCloseModal={onCloseModal} />
      </ModalComponent>
    </Section>
  );
};
