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
import { Button } from "../shared/components/Button/Button";
import { PaginationComponent } from "../PaginationComponent/PaginationComponent";
import { useState } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";

export const CarsList = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectAllCars);
  const paginationInfo = useSelector(selectPaginationInfo);
  const [page, setPage] = useState(1);
  const location = useLocation();
  const [params, setParams] = useSearchParams();
  const currentPage = params.get("page") ?? page;

  const perPage = 3;

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

  // const newPaginationInfo = { ...paginationInfo, page: page };

  useEffect(() => {
    dispatch(fetchCars({ page: currentPage, perPage: perPage }));
  }, [dispatch, page]);

  return (
    <Container>
      <ul className={css.carsList}>
        {cars.map((item) => {
          return (
            <li className={css.carItem} key={nanoid()}>
              <CarItem car={item} />
              {/* <Link to={`/abonements/${item._id}`} state={location}>
                {"Details"}
              </Link> */}
              <Button>
                <Link to={`/abonements/${item._id}`} state={location}>
                  {"Details"}
                </Link>
              </Button>
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
