import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 0,
    name: "Eshterely Store at El Sharabeya",
    hours: "10:00 AM - 5:30 PM",
    address: "El Sharabeya, Cairo Governorate, Egypt",
    position: {
      lat: 30.1005,
      lng: 31.2613,
    },
  },
  {
    id: 1,
    name: "Eshterely Store at Helwan",
    hours: "10:00 AM - 5:30 PM",
    address: "Helwan, Cairo Governorate, Egypt",
    position: {
      lat: 29.8414,
      lng: 31.3008,
    },
  },
  {
    id: 2,
    name: "Eshterely Store at Nasr City",
    hours: "10:00 AM - 5:30 PM",
    address: "Nasr City, Cairo Governorate, Egypt",
    position: {
      lat: 30.0561,
      lng: 31.33,
    },
  },
  {
    id: 3,
    name: "Eshterely Store at Hadayeq Al Ahram",
    hours: "10:00 AM - 5:30 PM",
    address: "Hadayeq Al Ahram, Giza Governorate, Egypt",
    position: {
      lat: 29.9893,
      lng: 31.1272,
    },
  },
  {
    id: 4,
    name: "Eshterely Store at Al-Warraq",
    hours: "10:00 AM - 5:30 PM",
    address: "Al-Warraq, Giza Governorate, Egypt",
    position: {
      lat: 30.0911,
      lng: 31.2233,
    },
  },
];

const storesSlice = createSlice({
  name: "stores",
  initialState,
  reducers: {
    addStore(state, action) {
      state.push(action.payload);
    },
    removeStoreById(state, action) {
      state = state.filter((store) => store.id !== action.payload);
    },
  },
});

export const { addStore, removeStoreById } = storesSlice.actions;
export default storesSlice.reducer;
