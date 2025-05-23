import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./features/products/productsSlice";
import storesReducer from "./features/locations/locationStoresSlice";

const store = configureStore({
  reducer: {
    products: productsReducer,
    stores: storesReducer,
  },
});

export default store;
