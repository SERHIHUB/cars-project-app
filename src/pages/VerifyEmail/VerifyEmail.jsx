import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Button } from "../../components/shared/components/Button/Button";
import { Container } from "../../components/shared/components/Container/Container";
import { verifyToken } from "../../redux/auth/operations";
import css from "./VerifyEmail.module.css";

export const VerifyEmail = () => {
  const dispatch = useDispatch();
  const { verifytoken } = useParams();

  const handleClick = () => {
    console.log(verifytoken);
    // dispatch(verifyToken(verifytoken));
  };

  return (
    <Container className={css.container}>
      <div className={css.btnWrapper}>
        <Button className={css.btn} onClick={handleClick}>
          Підтвердити email
        </Button>
      </div>
    </Container>
  );
};
