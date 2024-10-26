import { Section } from "../../components/shared/components/Section/Section";
import css from "./HomePage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { useState } from "react";
import Calendar from "react-calendar";

export const HomePage = () => {
  const [value, onChange] = useState(new Date());
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  // console.log(isLoggedIn);

  // useEffect(() => {
  //   dispatch(getUser());
  // }, [dispatch]);

  return (
    <Section className={css.section}>
      <h1>Вітаю!</h1>
      <p className={css.content}>
        Ти можеш створити свій власний список клієнтів, або приєднатися до
        існуючого, вказавши в полі &#171; Admin email &#187;, під час
        реєстрації, електронну пошту власника списку.
      </p>
      <div className={css.dateContainer}>
        <Calendar
          className={css.calendar}
          onChange={onChange}
          value={value}
          locale={"uk"}
        />
      </div>
    </Section>
  );
};
