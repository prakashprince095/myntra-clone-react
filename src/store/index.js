import { configureStore } from "@reduxjs/toolkit"; // Make sure you import configureStore
import itemSlice from "../store/ItemSlice"; // Import the default export from the slice
import fetchStatusReducer from "./fetchStatusSlice";
import bagSlice from "./bagSlice";

// Configuring the store
const myntraStore = configureStore({
  reducer: {
    items: itemSlice.reducer, // Use the imported itemReducer here
    fetchStatus: fetchStatusReducer,
    bagSlice: bagSlice,
  },
});

export default myntraStore;
