import { Button } from "../shared/components/Button/Button";
import { PiArrowFatLinesRightFill } from "react-icons/pi";
import { PiArrowFatLinesLeftFill } from "react-icons/pi";
import clsx from "clsx";
import css from "./PaginationComponent.module.css";
import { nanoid } from "nanoid";

export const PaginationComponent = ({
  pagination,
  handlePrevClick,
  handleNextClick,
  handleNumberClick,
}) => {
  const { hasNextPage, hasPreviousPage, page, totalPages } = pagination;

  function addButtons(countPage) {
    const newArray = Array.from({ length: countPage }, (_, i) => i + 1);

    return newArray;
  }

  return (
    <div className={css.paginationWrapper}>
      {hasPreviousPage ? (
        <Button className={clsx(css.active, css.btn)} onClick={handlePrevClick}>
          <PiArrowFatLinesLeftFill className={css.arrowIcon} />
        </Button>
      ) : (
        <Button className={css.btn}></Button>
      )}

      <ul className={css.paginationList}>
        {addButtons(totalPages).map((item) => {
          return (
            <li
              className={clsx(
                css.paginationItem,
                item === page && css.currentNumber
              )}
              key={nanoid()}
            >
              <Button
                onClick={() => handleNumberClick(item)}
                // className={css.numberAtive}
                className={clsx(css.numberAtive, css.btn)}
              >
                {item}
              </Button>
            </li>
          );
        })}
      </ul>
      {hasNextPage ? (
        <Button className={clsx(css.active, css.btn)} onClick={handleNextClick}>
          <PiArrowFatLinesRightFill className={css.arrowIcon} />
        </Button>
      ) : (
        <Button className={css.btn}></Button>
      )}
    </div>
  );
};
