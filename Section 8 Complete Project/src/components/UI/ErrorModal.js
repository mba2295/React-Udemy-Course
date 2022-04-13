import Card from "./Card";
import CustomButton from "./CustomButton";
import styles from "./ErrorModal.module.css";
const ErrorModal = (props) => {
  return (
    <div>
      <div className={styles.backdrop} onClick={props.onClickOk}></div>
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
    </div>
  );
};

export default ErrorModal;
