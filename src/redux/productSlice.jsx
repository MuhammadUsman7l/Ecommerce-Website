import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: {
    loading: false,
    error: null,
    data: [],
  },
  reducers: {
    setProducts: (state, action) => action.payload,
    addProduct: (state, action) => [...state, action.payload],
  },
});

export const { setProducts, addProduct } = productSlice.actions;
export default productSlice.reducer;
