import { createSlice } from "@reduxjs/toolkit";

const bagSlice = createSlice({
  name: "bag",
  initialState: [], // Example initial state, an array of item IDs
  reducers: {
    addToBag: (state, action) => {
      console.log(" add to bag is being clicked ", action.payload);
      state.push(action.payload); // Add the item ID to the bag
    },
    removeFromBag: (state, action) => {
      return state.filter((itemId) => itemId !== action.payload); // Remove item by ID
    },
  },
});

export const bagActions = bagSlice.actions; // Export the actions

export default bagSlice.reducer; // Export the reducer
