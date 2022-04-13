import { Fragment } from "react";
import Card from "./Card";
import CustomButton from "./CustomButton";
import styles from "./ErrorModal.module.css";
import { createPortal } from "react-dom";
const BackDrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onClickOk}></div>;
};
const Modal = (props) => {
  return (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h3>{props.title}</h3>
      </header>
      <div className={styles.content}>
        <p>{props.message}</p>
      </div>
      <footer className={styles.actions}>
        <CustomButton onClickHandler={props.onClickOk}>Ok</CustomButton>
      </footer>
    </Card>
  );
};
const ErrorModal = (props) => {
  return (
    <Fragment>
      {createPortal(
        <BackDrop onClickOk={props.onClickOk}></BackDrop>,
        document.getElementById("backdrop-root")
      )}
      {createPortal(
        <Modal
          title={props.title}
          message={props.message}
          onClickOk={props.onClickOk}
        ></Modal>,
        document.getElementById("modal-root")
      )}
    </Fragment>
  );
};

export default ErrorModal;
