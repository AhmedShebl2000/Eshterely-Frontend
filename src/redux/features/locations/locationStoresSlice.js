import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  stores: [
    {
      id: 0,
      name: "Eshtereely Store at El Sharabeya",
      hours: "10:00 AM - 5:30 PM",
      address: "El Sharabeya, Cairo Governorate, Egypt",
      position: {
        lat: 30.1005,
        lng: 31.2613,
      },
    },
    {
      id: 1,
      name: "Eshtereely Store at Helwan",
      hours: "10:00 AM - 5:30 PM",
      address: "Helwan, Cairo Governorate, Egypt",
      position: {
        lat: 29.851655,
        lng: 31.326888,
      },
    },
    {
      id: 2,
      name: "Eshtereely Store at Nasr City",
      hours: "10:00 AM - 5:30 PM",
      address: "Nasr City, Cairo Governorate, Egypt",
      position: {
        lat: 30.048085,
        lng: 31.356331,
      },
    },
    {
      id: 3,
      name: "Eshtereely Store at Hadayeq Al Ahram",
      hours: "10:00 AM - 5:30 PM",
      address: "Hadayeq Al Ahram, Giza Governorate, Egypt",
      position: {
        lat: 29.981840,
        lng: 31.107387,
      },
    },
    {
      id: 4,
      name: "Eshtereely Store at Al-Warraq",
      hours: "10:00 AM - 5:30 PM",
      address: "Al-Warraq, Giza Governorate, Egypt",
      position: {
        lat: 30.110299,
        lng: 31.216233,
      },
    },
    {
      id: 5,
      name: "Eshtereely Store at Benha",
      hours: "10:00 AM - 5:30 PM",
      address: "Benha, Qalyubia Governorate, Egypt",
      position: {
        lat: 30.4667,
        lng: 31.1837,
      },
    },
  ],
  filterdStores: [],
  governorates: ["Cairo", "Giza", "Qalyubia"],
};

const storesSlice = createSlice({
  name: "stores",
  initialState,
  reducers: {
    addStore(state, action) {
      state.stores.push(action.payload);
    },
    removeStoreById(state, action) {
      state.stores = state.stores.filter(
        (store) => store.id !== action.payload
      );
    },
    filterStores(state, action) {
      state.filterdStores = state.stores.filter((store) =>
        store.address.includes(action.payload)
      );
    },
  },
});

export const { addStore, removeStoreById, filterStores } = storesSlice.actions;
export default storesSlice.reducer;
