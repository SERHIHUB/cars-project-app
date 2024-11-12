import { nanoid } from "nanoid";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars } from "../../redux/cars/operations";
import {
  selectAllCars,
  selectPaginationInfo,
} from "../../redux/cars/selectors";
import { CarItem } from "../CarItem/CarItem";
import { Container } from "../shared/components/Container/Container";
import css from "./CarsList.module.css";
import { PaginationComponent } from "../PaginationComponent/PaginationComponent";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Button } from "../shared/components/Button/Button";

export const CarsList = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectAllCars);
  const paginationInfo = useSelector(selectPaginationInfo);
  const [page, setPage] = useState(1);
  const [params, setParams] = useSearchParams();
  const currentPage = params.get("page") ?? page;

  const perPage = 12;

  const changePage = (newPage) => {
    params.set("page", newPage);
    setParams(params);
  };

  const prevClick = () => {
    changePage(page - 1);
    setPage(page - 1);
  };

  const nextClick = () => {
    changePage(page + 1);
    setPage(page + 1);
  };

  const handleNumberClick = (itemNumber) => {
    changePage(itemNumber);
    setPage(itemNumber);
  };

  const handlePaid = () => {
    dispatch(fetchCars({ page: currentPage, perPage: perPage }));
  };

  const handleUnpaid = () => {
    dispatch(fetchCars({ page: currentPage, perPage: perPage, paid: false }));
  };

  useEffect(() => {
    dispatch(fetchCars({ page: currentPage, perPage: perPage }));
    window.scrollTo(0, 0);
  }, [dispatch, page]);

  return (
    <Container className={css.container}>
      <ul className={css.filterBtnList}>
        <li className={css.filterBtnItem}>
          <Button className={css.filterBtn} onClick={handlePaid}>
            Всі
          </Button>
        </li>
        <li className={css.filterBtnItem}>
          <Button className={css.filterBtn} onClick={handleUnpaid}>
            Неоплачені
          </Button>
        </li>
      </ul>
      {paginationInfo.totalItems && (
        <div
          className={css.totalCars}
        >{`Кількість абонементів: ${paginationInfo.totalItems}`}</div>
      )}
      <ul className={css.carsList}>
        {cars.map((item) => {
          return (
            <li className={css.carItem} key={nanoid()}>
              <CarItem car={item} />
            </li>
          );
        })}
      </ul>
      <div className={css.paginationWrapper}>
        <PaginationComponent
          pagination={paginationInfo}
          handlePrevClick={prevClick}
          handleNextClick={nextClick}
          handleNumberClick={handleNumberClick}
        />
      </div>
    </Container>
  );
};
