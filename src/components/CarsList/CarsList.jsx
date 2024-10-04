import { nanoid } from "nanoid";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars } from "../../redux/cars/operations";
import { selectAllCars } from "../../redux/cars/selectors";
import { CarItem } from "../CarItem/CarItem";
import { Container } from "../shared/components/Container/Container";
import css from "./CarsList.module.css";

// const cars = [
//   {
//     _id: "66e84a1d11685b54705a38fc",
//     carModel: "Audi",
//     carNumber: "AA1770KP",
//     carPhotoURL: "http://localhost:3000/upload/1726608234303-jeep.jpg",
//     price: "500",
//     paymentDate: "1",
//     contact: null,
//     owner: "66d618878180a277354cbfd6",
//     author: "66e847a71e97dc3f3cf10f80",
//     createdAt: "2024-09-16T15:09:17.593+00:00",
//     updatedAt: "2024-09-17T21:23:54.425+00:00",
//   },
//   {
//     _id: "66e84d1748c1bf7d26e60b2f",
//     carModel: "Acura",
//     carNumber: "AA1990KP",
//     carPhotoURL:
//       "http://localhost:3000/upload/1726597866328-pexels-pixabay-159515.jpg",
//     price: "500",
//     paymentDate: "1",
//     contact: null,
//     owner: "66d618878180a277354cbfd6",
//     author: "66e847a71e97dc3f3cf10f80",
//     createdAt: "2024-09-16T15:21:59.492+00:00",
//     updatedAt: "2024-09-17T18:31:06.893+00:00",
//   },
// ];

export const CarsList = () => {
  // const dispatch = useDispatch();
  const cars = useSelector(selectAllCars);

  // useEffect(() => {
  //   dispatch(fetchCars());
  // }, [dispatch]);

  return (
    <Container>
      <ul className={css.carsList}>
        {/* {cars.map((item) => {
          return (
            <li className={css.carItem} key={nanoid()}>
              <CarItem car={item} />
            </li>
          );
        })} */}
      </ul>
    </Container>
  );
};
