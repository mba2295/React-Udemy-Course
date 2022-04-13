import { cartSliceActions } from "./cartSlice";
import { uiSliceActions } from "./uiSlice";

export const getCartItems = () => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const response = await fetch(
        "https://react-http-demo-944cb-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",
        { method: "GET", "Content-Type": "application/json" }
      );
      if (!response.ok) {
        throw Error("Failed to get the cart items from server");
      }
      return await response.json();
    };
    try {
      const cartItems = await sendRequest();
      dispatch(cartSliceActions.replaceCart(cartItems));
    } catch (error) {
      dispatch(
        uiSliceActions.showNotification({
          status: "error",
          title: "Error",
          message: error.message,
        })
      );
    } finally {
      setTimeout(() => {
        dispatch(uiSliceActions.hideNotification());
      }, 3000);
    }
  };
};
export const postCartItems = (cartItems) => {
  return async (dispatch) => {
    dispatch(
      uiSliceActions.showNotification({
        status: "pending",
        title: "Sending.........",
        message: "Sending cart data to server, thank you for your patience",
      })
    );
    const sendRequest = async () => {
      const response = await fetch(
        "https://react-http-demo-944cb-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({
            items: cartItems.items,
            totalAmount: cartItems.totalAmount,
          }),
        }
      );
      if (!response.ok) {
        throw Error("Failed to send the cart items to server");
      }
    };
    try {
      await sendRequest();
      dispatch(
        uiSliceActions.showNotification({
          status: "success",
          title: "Success",
          message: "Cart items sent to server successfully",
        })
      );
    } catch (error) {
      dispatch(
        uiSliceActions.showNotification({
          status: "error",
          title: "Error",
          message: error.message,
        })
      );
    } finally {
      setTimeout(() => {
        dispatch(uiSliceActions.hideNotification());
      }, 3000);
    }
  };
};
