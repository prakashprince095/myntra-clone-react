import { createSlice } from "@reduxjs/toolkit";

const fetchStatusSlice = createSlice({
  name: "fetchStatus",
  initialState: {
    fetchDone: false, // false :PENDING true:DONE
    currentlyFetching: false,
  },
  reducers: {
    markFetchDone: (state) => {
      console.log("the value of the fetch status: ", state);
      state.fetchDone = true; // Mutating the state directly
    },
    markFetchingStarted: (state) => {
      console.log("markFetch status is being generated", state);
      state.currentlyFetching = true; // Mutating the state directly
    },
    markFetchingFinished: (state) => {
      console.log("The markFetchingFinished action is being executed");
      state.currentlyFetching = false; // Mutating the state directly
    },
  },
});

export const fetchStatusActions = fetchStatusSlice.actions; // Exporting actions
export default fetchStatusSlice.reducer; // Exporting reducer
