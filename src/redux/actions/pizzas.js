import axios from 'axios';
import { SET_LOADING, SET_PIZZAS } from '../types';

export const setLoaded = (payload) => {
  return {
    type: SET_LOADING,
    payload,
  };
};

export const setPizzas = (items) => {
  return {
    type: SET_PIZZAS,
    payload: items,
  };
};

export const fetchPizzas = (sortBy, category) => (dispatch) => {
  dispatch(setLoaded(false));
  axios
    .get(
      `https://pizza-server-by.herokuapp.com/pizzas?${
        category !== null ? `category=${category}` : ''
      }&_sort=${sortBy.type}&_order=${sortBy.order}`,
    )
    .then(({ data }) => dispatch(setPizzas(data)));
};
