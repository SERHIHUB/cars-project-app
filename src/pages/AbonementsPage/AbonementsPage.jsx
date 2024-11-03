import { useState } from "react";
import { CarsList } from "../../components/CarsList/CarsList";
import { Button } from "../../components/shared/components/Button/Button";
import { ModalComponent } from "../../components/shared/components/ModalComponent/ModalComponent";
import css from "./AbonementsPage.module.css";
import { CreateCarForm } from "../../components/CreateCarForm/CreateCarForm";
import { Section } from "../../components/shared/components/Section/Section";

export const AbonementsPage = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleClickModal = () => {
    setModalIsOpen(true);
  };

  function onCloseModal() {
    setModalIsOpen(false);
  }

  return (
    <Section className={css.carWrapper}>
      <CarsList />
      <div className={css.btnWrapper}>
        <Button className={css.addCar} onClick={handleClickModal}>
          Add abonement
        </Button>
      </div>
      <ModalComponent closeModal={onCloseModal} modalIsOpen={modalIsOpen}>
        <CreateCarForm onCloseModal={onCloseModal} />
      </ModalComponent>
    </Section>
  );
};
