import { Fragment, useState } from "react";
import Card from "../UI/Card";
import CustomButton from "../UI/CustomButton";
import ErrorModal from "../UI/ErrorModal";
import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const [userName, setUserName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();
  const addNewUserHandler = (e) => {
    e.preventDefault();
    if (userName.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "Name/Age required",
        message: "Please enter name and age.",
      });
      return;
    } if (+age < 1) {
      setError({
        title: "Invalid Age",
        message: "Age must be greator then 0",
      });
      return;
    }
    props.addUser({ id: Math.random(), name: userName, age: age });
  };
  const userNameOnChange = (e) => {
    setUserName(e.target.value);
  };
  const ageOnChange = (e) => {
    setAge(e.target.value);
  };
  const okErrorHandler = () => {
    setError(null);
  };
  return (
    <Fragment>
      {error && (
        <ErrorModal onClickOk={okErrorHandler} title={error.title} message={error.message}></ErrorModal>
      )}
      <Card className={styles.input}>
        <form onSubmit={addNewUserHandler}>
          <label htmlFor="userName">User Name</label>
          <input
            type="text"
            id="userName"
            value={userName}
            onChange={userNameOnChange}
          />
          <label htmlFor="age">Age</label>
          <input type="text" id="age" value={age} onChange={ageOnChange} />

          <CustomButton type="submit">Save User</CustomButton>
        </form>
      </Card>
    </Fragment>
  );
};

export default AddUser;
