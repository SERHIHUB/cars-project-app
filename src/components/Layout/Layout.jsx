import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppBar } from "../AppBar/AppBar";
import css from "./Layout.module.css";

export const Layout = ({ children }) => {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getCurrentUser());
  // }, [dispatch]);

  return (
    <>
      <AppBar />
      {children}
    </>
  );
};
