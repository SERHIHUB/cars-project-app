import { Section } from "../../components/shared/components/Section/Section";
import css from "./HomePage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { useState } from "react";
import Calendar from "react-calendar";
import { ModalComponent } from "../../components/shared/components/ModalComponent/ModalComponent";
import { Button } from "../../components/shared/components/Button/Button";

export const HomePage = () => {
  const [value, onChange] = useState(new Date());
  const [modalIsOpen, setModalIsOpen] = useState(false);
  // const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const handleClickCalendar = () => {
    setModalIsOpen(true);
  };

  function onCloseModal() {
    setModalIsOpen(false);
  }

  return (
    <Section className={css.section}>
      {!isLoggedIn && (
        <>
          <h1>Вітаю!</h1>
          <p className={css.content}>
            Ти можеш створити свій власний список клієнтів, або приєднатися до
            існуючого, вказавши в полі &#171; Admin email &#187;, під час
            реєстрації, електронну пошту власника списку.
          </p>
        </>
      )}

      <div className={css.decorWrapper}>
        <Button className={css.calendarBtn} onClick={handleClickCalendar}>
          Calendar
        </Button>
        <div className={css.topElement}></div>
        <div className={css.bottomLeftElement}></div>
        <div className={css.bottomRightElement}></div>
      </div>

      <ModalComponent closeModal={onCloseModal} modalIsOpen={modalIsOpen}>
        <div className={css.dateContainer}>
          <Calendar
            className={css.calendar}
            onChange={onChange}
            value={value}
            locale={"uk"}
          />
        </div>
      </ModalComponent>
    </Section>
  );
};
