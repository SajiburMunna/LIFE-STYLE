import { SHOW_HIDE_CART, ADD_TO_CART, REMOVE_ITEM, SEARCH } from "../Types";

const CartReducer = (state, action) => {
  switch (action.type) {
    case SHOW_HIDE_CART: {
      return {
        ...state,
        showCart: !state.showCart,
      };
    }
    case ADD_TO_CART: {
      state.cartItems.find((item) => item.id === action.payload.id);

      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
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

    default:
      return state;
  }
};

export default CartReducer;
