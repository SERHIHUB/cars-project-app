import { Section } from "../../components/shared/components/Section/Section";
import css from "./NotFoundPage.module.css";

export const NotFoundPage = () => {
  return (
    <Section className={css.section}>
      <div className={css.wrapper}>
        <h2 className={css.title}>404</h2>
        <p>Page not found!</p>
      </div>
    </Section>
  );
};
