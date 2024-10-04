import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CarsList } from "../../components/CarsList/CarsList";
import { fetchCars } from "../../redux/cars/operations";
import css from "./AbonementsPage.module.css";

export const AbonementsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  return (
    <div>
      <h2>AbonementsPage</h2>
      <CarsList />
    </div>
  );
};
