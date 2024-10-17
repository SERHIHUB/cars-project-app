import { Section } from "../../components/shared/components/Section/Section";
import css from "./HomePage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { useEffect } from "react";

export const HomePage = () => {
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
    </Section>
  );
};
