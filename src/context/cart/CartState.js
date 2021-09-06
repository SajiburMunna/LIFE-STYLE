import { useReducer } from "react";

import CartContext from "./CartContext";

import CartReducer from "./CartReducer";
import {
  SHOW_HIDE_CART,
  ADD_TO_CART,
  REMOVE_ITEM,
  SEARCH,
  ADDSIZE,
  CLEARCART,
} from "../Types";

const CartState = ({ children }) => {
  const initalState = {
    showCart: false,
    cartItems: [],
    search: "",
    size: "",
  };

  const [state, dispatch] = useReducer(CartReducer, initalState);

  const addToCart = (item) => {
    dispatch({ type: ADD_TO_CART, payload: item });
  };

  const showHideCart = () => {
    dispatch({ type: SHOW_HIDE_CART });
  };

  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: id });
  };

  const searchBar = (value) => {
    dispatch({ type: SEARCH, payload: value });
  };

  const addSize = (value) => {
    dispatch({ type: ADDSIZE, payload: value });
  };

  const clearCart = () => {
    dispatch({ type: CLEARCART });
  };

  return (
    <CartContext.Provider
      value={{
        showCart: state.showCart,
        cartItems: state.cartItems,
        search: state.search,
        size: state.size,

        addToCart,
        showHideCart,
        removeItem,
        searchBar,
        addSize,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartState;
