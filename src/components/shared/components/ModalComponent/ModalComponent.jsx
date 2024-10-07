import css from "./ModalComponent.module.css";
import Modal from "react-modal";
import clsx from "clsx";

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

  function afterOpenModal() {
    subtitle.style.color = "#f00";
  }

  return (
    <div className={clsx(css.container, { [className]: className })}>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {children}
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
        <button onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
};
