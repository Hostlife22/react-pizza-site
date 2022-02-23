const getTotalPrice = (arr) => arr.reduce((acc, obj) => acc + obj.price, 0);

const getTotalValues = (newItems) => {
  const items = Object.values(newItems).map((obj) => obj.items);
  const allPizzas = [].concat.apply([], items);
  const totalPrice = getTotalPrice(allPizzas);
  const totalCount = allPizzas.length;

  return { totalPrice, totalCount };
};

const getNewState = (state, id, currentPizzaItems) => {
  const newItems = {
    ...state.items,
    [id]: {
      items: currentPizzaItems,
      totalPrice: getTotalPrice(currentPizzaItems),
    },
  };
  const { totalCount, totalPrice } = getTotalValues(newItems);

  return {
    ...state,
    items: newItems,
    totalCount,
    totalPrice,
  };
};

export default getNewState;
