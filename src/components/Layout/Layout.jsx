import { AppBar } from "../AppBar/AppBar";
import css from "./Layout.module.css";

export const Layout = ({ children }) => {
  return (
    <div className={css.wrapper}>
      <AppBar />
      {children}
    </div>
  );
};
