import {
  ADD_PIZZA_CART,
  CLEAR_CART,
  MINUS_CART_ITEM,
  PLUS_CART_ITEM,
  REMOVE_CART_ITEM,
} from '../types';
import getNewState from '../untill';

const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PIZZA_CART: {
      const currentPizzaItems = !state.items[action.payload.id]
        ? [action.payload]
        : [...state.items[action.payload.id].items, action.payload];

      return getNewState(state, action.payload.id, currentPizzaItems);
    }

    case REMOVE_CART_ITEM: {
      const newItems = {
        ...state.items,
      };
      const currentTotalPrice = newItems[action.payload].totalPrice;
      const currentTotalCount = newItems[action.payload].items.length;
      delete newItems[action.payload];

      return {
        ...state,
        items: newItems,
        totalPrice: state.totalPrice - currentTotalPrice,
        totalCount: state.totalCount - currentTotalCount,
      };
    }

    case PLUS_CART_ITEM: {
      const currentPizzaItems = [
        ...state.items[action.payload].items,
        state.items[action.payload].items[0],
      ];

      return getNewState(state, action.payload, currentPizzaItems);
    }

    case MINUS_CART_ITEM: {
      const oldItems = state.items[action.payload].items;
      const currentPizzaItems =
        oldItems.length > 1
          ? state.items[action.payload].items.slice(1)
          : oldItems;

      return getNewState(state, action.payload, currentPizzaItems);
    }

    case CLEAR_CART:
      return {
        ...state,
        items: {},
        totalCount: 0,
        totalPrice: 0,
      };

    default:
      return state;
  }
};

export default cartReducer;
