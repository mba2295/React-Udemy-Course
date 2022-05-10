export const TOGGLE_FAV = "TOGGLE_FAVORITE";

export const toggleFav = (id) => {
  return { type: TOGGLE_FAV, productId: id };
};
