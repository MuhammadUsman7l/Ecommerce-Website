import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./redux/productSlice.jsx";
import cartReducer from "./redux/cartSlice.jsx";

const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
  },
});

export default store;
