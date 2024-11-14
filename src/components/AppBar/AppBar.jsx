import { Navigation } from "../Navigation/Navigation";
import { Container } from "../shared/components/Container/Container";
import { useSelector } from "react-redux";
import css from "./AppBar.module.css";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { LogOutComponent } from "../LogOutComponent/LogOutComponent";
import { AuthNav } from "../AuthNav/AuthNav";
import { useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Button } from "../shared/components/Button/Button";
import { ModalComponent } from "../shared/components/ModalComponent/ModalComponent";
import { NavigationBurger } from "../NavigationBurger/NavigationBurger";
import { Loader } from "../shared/components/Loader/Loader";

export const AppBar = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const handleOpenModal = () => {
    setModalIsOpen(true);
  };

  const onCloseModal = () => {
    setModalIsOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Container className={css.container}>
      <div className={css.wrapper}>
        {windowWidth >= 768 && <Navigation />}
        {isLoggedIn ? (
          <LogOutComponent windowWidth={windowWidth} />
        ) : (
          <AuthNav />
        )}
        {windowWidth < 768 && (
          <Button className={css.menuBtn} onClick={handleOpenModal}>
            <RxHamburgerMenu size={26} />
          </Button>
        )}
      </div>
      <ModalComponent closeModal={onCloseModal} modalIsOpen={modalIsOpen}>
        <NavigationBurger onCloseModal={onCloseModal} />
      </ModalComponent>
    </Container>
  );
};
