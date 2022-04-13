import { useInput } from "../hooks/useInput";

const BasicForm = (props) => {
  const {
    value: enteredFirstName,
    isValid: enteredFirstNameIsValid,
    hasError: firstNameInputIsInvalid,
    onInputChange: firstNameInputChangeHandler,
    onInputBlur: firstNameInputBlurHandler,
    resetInput: resetFirstNameInput,
  } = useInput((value) => value.trim() !== "");
  const {
    value: enteredLastName,
    isValid: enteredLastNameIsValid,
    hasError: lastNameInputIsInvalid,
    onInputChange: lastNameInputChangeHandler,
    onInputBlur: lastNameInputBlurHandler,
    resetInput: resetLastNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputIsInvalid,
    onInputChange: emailInputChangeHandler,
    onInputBlur: emailInputBlurHandler,
    resetInput: resetEmailInput,
  } = useInput((value) =>
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      value
    )
  );
  let formIsValid = false;

  if (
    enteredFirstNameIsValid &&
    enteredLastNameIsValid &&
    enteredEmailIsValid
  ) {
    formIsValid = true;
  }
  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }
    console.log(enteredFirstName);
    console.log(enteredLastName);
    console.log(enteredEmail);

    resetFirstNameInput();
    resetLastNameInput();
    resetEmailInput();
  };
  const firstNameInputClasses = firstNameInputIsInvalid
    ? "form-control invalid"
    : "form-control";
  const lastNameInputClasses = lastNameInputIsInvalid
    ? "form-control invalid"
    : "form-control";
  const emailInputClasses = emailInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="control-group">
        <div className={firstNameInputClasses}>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            onChange={firstNameInputChangeHandler}
            onBlur={firstNameInputBlurHandler}
            value={enteredFirstName}
          />
          {firstNameInputIsInvalid && (
            <p className="error-text">Fisrt name must not be empty.</p>
          )}
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            onChange={lastNameInputChangeHandler}
            onBlur={lastNameInputBlurHandler}
            value={enteredLastName}
          />
          {lastNameInputIsInvalid && (
            <p className="error-text">
              Last name must not be empty and should be valid.
            </p>
          )}
        </div>
        <div className={emailInputClasses}>
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            onChange={emailInputChangeHandler}
            onBlur={emailInputBlurHandler}
            value={enteredEmail}
          />
          {emailInputIsInvalid && (
            <p className="error-text">email must not be empty.</p>
          )}
        </div>
      </div>
    </form>
  );
};

export default BasicForm;
