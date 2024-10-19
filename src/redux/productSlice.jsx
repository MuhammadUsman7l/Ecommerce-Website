import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const options = {
      method: "GET",
      url: "https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/categories/list",
      params: {
        lang: "en",
        country: "us",
      },
      headers: {
        "x-rapidapi-key": "2e2f6e93a8mshae15ecfbd6f1662p190319jsn970c23294102",
        "x-rapidapi-host": "apidojo-hm-hennes-mauritz-v1.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      throw error.response ? error.response.data : error;
    }
  }
);

export const fetchMenProducts = createAsyncThunk(
  "products/fetchMenProducts",
  async (category) => {
    const options = {
      method: "GET",
      url: "https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list",
      params: {
        country: "us",
        lang: "en",
        currentpage: "0",
        pagesize: "30",
        categories: category,
      },
      headers: {
        "x-rapidapi-key": "2e2f6e93a8mshae15ecfbd6f1662p190319jsn970c23294102",
        "x-rapidapi-host": "apidojo-hm-hennes-mauritz-v1.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      return response.data.results;
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
      .addCase(fetchMenProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMenProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchMenProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchAllProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchAllProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setProducts, addProduct } = productSlice.actions;
export default productSlice.reducer;
