import {
  SHOW_HIDE_CART,
  ADD_TO_CART,
  REMOVE_ITEM,
  SEARCH,
  ADDSIZE,
  CLEARCART,
} from "../Types";

const CartReducer = (state, action) => {
  switch (action.type) {
    case SHOW_HIDE_CART: {
      return {
        ...state,
        showCart: !state.showCart,
      };
    }
    case ADD_TO_CART: {
      const inCart = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      return {
        ...state,
        cartItems: inCart
          ? state.cartItems.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cartItems, action.payload],
      };
    }
    case REMOVE_ITEM: {
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };
    }

    case SEARCH: {
      return {
        ...state,
        search: action.payload,
      };
    }

    case ADDSIZE: {
      return {
        ...state,
        size: action.payload,
      };
    }

    case CLEARCART: {
      return {
        ...state,
        cartItems: [],
      };
    }

    default:
      return state;
  }
};

export default CartReducer;
