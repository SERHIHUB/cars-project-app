import clsx from "clsx";
import css from "./Button.module.css";

export const Button = ({
  children,
  className,
  type = "button",
  onClick,
  ...props
}) => {
  return (
    <div>
      <button
        className={clsx(css.btn, { [className]: className })}
        type={type}
        onClick={onClick}
        {...props}
      >
        {children}
      </button>
    </div>
  );
};
