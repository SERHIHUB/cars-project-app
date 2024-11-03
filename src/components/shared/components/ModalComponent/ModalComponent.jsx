import css from "./ModalComponent.module.css";
import Modal from "react-modal";
import clsx from "clsx";
import { GrClose } from "react-icons/gr";
import { Button } from "../Button/Button";

Modal.setAppElement("#root");

export const ModalComponent = ({
  children,
  className,
  closeModal,
  modalIsOpen,
}) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",

      maxHeight: "80vh",
      overflow: "auto",
    },
  };

  return (
    <div className={clsx(css.container, { [className]: className })}>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className={css.btnContainer}>
          <Button onClick={closeModal} className={css.closeBtn}>
            <GrClose />
          </Button>
        </div>
        {children}
      </Modal>
    </div>
  );
};
