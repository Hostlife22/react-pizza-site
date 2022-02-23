import { combineReducers } from 'redux';
import cartReducer from './cart';
import filtersReducer from './filters';
import pizzasReducer from './pizzas';

const rootReducer = combineReducers({
  filters: filtersReducer,
  pizzas: pizzasReducer,
  cart: cartReducer,
});

export default rootReducer;
