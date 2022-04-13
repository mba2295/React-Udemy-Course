import styles from "./CustomButton.module.css";
const CustomButton = (props) => {
    return (<button className={styles.button} type={props.type || 'button'} onClick={props.onClickHandler}>{props.children}</button>);
}
 
export default CustomButton;