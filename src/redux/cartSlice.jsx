import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    loading: false,
    error: null,
    data: [],
  },
  reducers: {
    addToCart: (state, action) => [...state, action.payload],
    removeFromCart: (state, action) =>
      state.filter((item) => item.id !== action.payload),
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
