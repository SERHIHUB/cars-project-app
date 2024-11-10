import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { Button } from "../../components/shared/components/Button/Button";
import { Container } from "../../components/shared/components/Container/Container";
import { Loader } from "../../components/shared/components/Loader/Loader";
import { verifyToken } from "../../redux/auth/operations";
import { selectLoading } from "../../redux/auth/selectors";
import css from "./VerifyEmail.module.css";

export const VerifyEmail = () => {
  const dispatch = useDispatch();
  const { verifytoken } = useParams();
  const loading = useSelector(selectLoading);

  const handleClick = () => {
    if (!verifytoken) return;

    dispatch(verifyToken(verifytoken));
  };

  return (
    <Container className={css.container}>
      {loading && <Loader />}
      <div className={css.btnWrapper}>
        <Link to="/login">
          <Button className={css.btn} onClick={handleClick}>
            Підтвердити email
          </Button>
        </Link>
      </div>
    </Container>
  );
};
