import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import css from "./AbonementsPage.module.css";

export const AbonementsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch();
  }, [dispatch]);

  return (
    <div>
      <h2>AbonementsPage</h2>
    </div>
  );
};
