import clsx from "clsx";
import css from "./Section.module.css";

export const Section = ({ children, className }) => {
  return (
    <div className={clsx(css.section, { [className]: className })}>
      {children}
    </div>
  );
}

// export default Section;
