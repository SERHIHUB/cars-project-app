import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { Button } from "../../components/shared/components/Button/Button";
import { Container } from "../../components/shared/components/Container/Container";
import { verifyToken } from "../../redux/auth/operations";
import css from "./VerifyEmail.module.css";
// import { selectIsVerify } from "../../redux/auth/selectors";
import { useEffect } from "react";
import { useState } from "react";

export const VerifyEmail = () => {
  const dispatch = useDispatch();
  const { verifytoken } = useParams();
  const [isRedirect, setIsRedirect] = useState(false);
  // const isVerify = useSelector(selectIsVerify);

  // console.log(isVerify);

  const handleClick = () => {
    console.log(verifytoken);
    dispatch(verifyToken(verifytoken));
    setIsRedirect(true);
  };

  // useEffect(() => {}, [dispatch]);

  return (
    <Container className={css.container}>
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
