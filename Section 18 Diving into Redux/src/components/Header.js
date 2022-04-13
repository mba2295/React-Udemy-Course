import { useDispatch, useSelector } from "react-redux";
import { authSliceActions } from "../store/slices/authSlice";
import classes from "./Header.module.css";

const Header = () => {
  const dispatch = useDispatch();
  const logoutHandler = (event) => {
    event.preventDefault();
    dispatch(authSliceActions.logout());
  };
  const isAuthenticated = useSelector(
    (state) => state.authSlice.isAuthenticated
  );
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuthenticated && (
        <nav>
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
