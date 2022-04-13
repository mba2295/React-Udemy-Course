import { useDispatch } from "react-redux";
import { uiSliceActions } from "../../store/slices/uiSlice";
import CartButton from "../Cart/CartButton";
import classes from "./MainHeader.module.css";

const MainHeader = (props) => {
  const dispatch = useDispatch();
  const toggleShowCart = () => {
    dispatch(uiSliceActions.toggleCart());
  };
  return (
    <header className={classes.header}>
      <h1>ReduxCart</h1>
      <nav>
        <ul>
          <li>
            <CartButton onClick={toggleShowCart} />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
