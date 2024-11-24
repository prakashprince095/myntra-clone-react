import { createSlice } from "@reduxjs/toolkit";
import INITIAL_ITEMS from "../data/items";
// Creating the slice
const itemSlice = createSlice({
  name: "items",
  initialState: [], // Default state is an empty array
  reducers: {
    // This reducer adds initial items to the state
    addInitialItems: (state, action) => {
      // console.log("reducer has been dispatched ", action.payload);
      return action.payload; // Assuming `action.payload` contains the items you want to add
    },
  },
});

// Exporting the actions from the slice
export const itemsActions = itemSlice.actions;

// Default export
export default itemSlice;
