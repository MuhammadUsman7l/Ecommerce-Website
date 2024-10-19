import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const options = {
      method: "GET",
      url: "https://real-time-amazon-data.p.rapidapi.com/deals-v2",
      headers: {
        "x-rapidapi-key": "2e2f6e93a8mshae15ecfbd6f1662p190319jsn970c23294102",
        "x-rapidapi-host": "real-time-amazon-data.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      return response.data.data.deals;
    } catch (error) {
      throw error.response ? error.response.data : error;
    }
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    loading: false,
    error: null,
    data: [],
  },
  reducers: {
    setProducts: (state, action) => {
      state.data = action.payload;
    },
    addProduct: (state, action) => {
      state.data.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setProducts, addProduct } = productSlice.actions;
export default productSlice.reducer;
