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
    },
  };

  let subtitle;

  // function afterOpenModal() {
  //   subtitle.style.color = "#f00";
  // }

  return (
    <div className={clsx(css.container, { [className]: className })}>
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
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
        {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2> */}
      </Modal>
    </div>
  );
};
