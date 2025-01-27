import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload.id);
      if (index !== -1) {
        state[index].quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    //     removeFromCart: (state, action) => {
    //       const index = state.findIndex((item) => item.id === action.payload);
    //       if (index !== -1) {
    //         state.splice(index, 1);
    //       }
    //     },
    //     incrementQuantity: (state, action) => {
    //       const index = state.findIndex((item) => item.id === action.payload);
    //       if (index !== -1) {
    //         state[index].quantity += 1;
    //       }
    //     },
    //     decrementQuantity: (state, action) => {
    //       const index = state.findIndex((item) => item.id === action.payload);
    //       if (index !== -1) {
    //         state[index].quantity -= 1;
    //         if (state[index].quantity === 0) {
    //           state.splice(index, 1);
    //         }
    //       }
    //     },
  },
});

export const {
  addToCart,
  //   removeFromCart,
  //   incrementQuantity,
  //   decrementQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;

export const selectCart = (state) => state.cart;

// export const selectCartTotal = (state) => state.cart.reduce((total, item));
