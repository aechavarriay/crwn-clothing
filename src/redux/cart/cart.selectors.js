import { createSelector } from "reselect";

// Input selector -> gets whole state and return a piece of it.

const selectCart = (state) => state.cart;

// Because we use create selector it is now a memoize selector

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce((prevValue, currObj) => prevValue + currObj.quantity, 0)
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce((prevValue, currObj) => prevValue + currObj.quantity * currObj.price, 0)

);
