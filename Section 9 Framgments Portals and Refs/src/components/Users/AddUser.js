import { useRef } from "react";
import { Fragment, useState } from "react";
import Card from "../UI/Card";
import CustomButton from "../UI/CustomButton";
import ErrorModal from "../UI/ErrorModal";
import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const userNameRef = useRef();
  const ageRef = useRef();
  const [error, setError] = useState();
  const addNewUserHandler = (e) => {
    const userName = userNameRef.current.value;
    const age = ageRef.current.value;
    e.preventDefault();
    if (userName.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "Name/Age required",
        message: "Please enter name and age.",
      });
      return;
    }
    if (+age < 1 || !Number.isInteger(+age)) {
      setError({
        title: "Invalid Age",
        message: "Age must be greater then 0",
      });
      return;
    }
    props.addUser({
      id: Math.random(),
      name: userName,
      age: age,
    });
    userNameRef.current.value = "";
    ageRef.current.value = "";
  };

  const okErrorHandler = () => {
    setError(null);
  };
  return (
    <Fragment>
      {error && (
        <ErrorModal
          onClickOk={okErrorHandler}
          title={error.title}
          message={error.message}
        ></ErrorModal>
      )}
      <Card className={styles.input}>
        <form onSubmit={addNewUserHandler}>
          <label htmlFor="userName">User Name</label>
          <input type="text" id="userName" ref={userNameRef} />
          <label htmlFor="age">Age</label>
          <input type="text" id="age" ref={ageRef} />

          <CustomButton type="submit">Save User</CustomButton>
        </form>
      </Card>
    </Fragment>
  );
};

export default AddUser;
