// import { createSlice } from "@reduxjs/toolkit";

// const cartSlice = createSlice({
//   name: "cart",
//   initialState: {
//     data: JSON.parse(localStorage.getItem('cart')|| []),
//   },
//   reducers: {
//     addToCart: (state, action) => {
//       const itemInCart = state.data.find(
//         (item) => item.id === action.payload.id
//       );
//       if (itemInCart) {
//         itemInCart.qty++;
//       } else {
//         state.data.push(action.payload);
//       }
//     },
//   },
// });

// export const { addToCart } = cartSlice.actions;
// export default cartSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

// Get cart data from localStorage, or set an empty array if it doesn't exist or is invalid
const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart")) || [];

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    data: cartFromLocalStorage,
  },
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.data.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart) {
        itemInCart.qty++;
      } else {
        state.data.push(action.payload);
      }
      // Update localStorage with the modified cart data
      localStorage.setItem("cart", JSON.stringify(state.data));
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;

