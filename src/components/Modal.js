import * as React from "react";
import { createPortal } from "react-dom";

import styles from "./Modal.module.css";
import closeIcon from "../assets/close.svg";

const modalRoot = document.getElementById("modal-root");
const modalBody = document.createElement("div");

const Portal = ({ children }) => {
  React.useEffect(() => {
    modalRoot.appendChild(modalBody);

    return () => {
      modalRoot.removeChild(modalBody);
    };
  }, []);

  return createPortal(children, modalBody);
};

const Modal = ({ handleClose, children }) => {
  React.useEffect(() => {
    document.body.classList.add("modal-open");

    return () => {
      document.body.classList.remove("modal-open");
    };
  }, []);

  return (
    <Portal>
      <div className={styles.container}>
        <div className={styles.content}>
          <button type="button" className={styles.button} onClick={handleClose}>
            <img src={closeIcon} alt="close" className={styles.icon} />
          </button>
          {children}
        </div>
      </div>
    </Portal>
  );
};

export default Modal;
