import { createSlice } from "@reduxjs/toolkit";

const initialState = { products: [], loading: false, error: null };

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    fetchProductsStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchProductsSuccess(state, action) {
      state.products = action.payload;
      state.loading = false;
    },
    fetchProductsFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

// thunk action creator
export function fetchProductByCategory(category) {
  return async function (dispatch) {
    try {
      dispatch(fetchProductsStart());
      const res = await fetch(
        `https://eshterely.up.railway.app/api/${category}`
      );

      const data = await res.json();
      dispatch(fetchProductsSuccess(data));
    } catch (error) {
      dispatch(fetchProductsFailure(error.message));
    }
  };
}

// action creators
export const {
  fetchProductsStart,
  fetchProductsSuccess,
  fetchProductsFailure,
} = productsSlice.actions;

// reducer
export default productsSlice.reducer;
