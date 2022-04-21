import { useContext, useRef } from "react";
import AuthContext from "../../store/authContext";
import classes from "./ProfileForm.module.css";
import { useHistory } from "react-router-dom";
const UpdatePasswordURL =
  "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBdfSjcnFPRHFXnQxg7cHSqwPo4wyY63C8";
const ProfileForm = () => {
  const { accessToken: idToken } = useContext(AuthContext);
  const passwordRef = useRef();
  const history = useHistory();
  const submitHandler = (e) => {
    e.preventDefault();
    const password = passwordRef.current.value;
    fetch(UpdatePasswordURL, {
      method: "POST",
      body: JSON.stringify({ idToken, password, returnSecureToken: false }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let error = "request failed";
            if (data && data.error && data.error.message) {
              error = data.error.message;
            }
            throw new Error(error);
          });
        }
      })
      .then((data) => {
        console.log(data);
        history.replace("/");
        alert("Password changed successfully");
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input
          ref={passwordRef}
          minLength="7"
          type="password"
          id="new-password"
        />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
