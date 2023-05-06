import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter", // name of slice
  initialState, // initial state values
  reducers: {
    increase: (state) => {
      state.count = state.count + 1;
    }, // increase the count state by 1
    decrease: (state) => {
      state.count = state.count - 1;
    }, // decrease the count state by 1
    multiplyByAmount: (state, action) => {
      state.count = state.count * action.payload;
    }, // multiply the count state by any amount chosen
    resetCount: (state) => {
      state.count = 0;
    }, // reset the count state back to default
  },
}); // action that defines how the state of your application should be updated.

// action creators generated for each reducer function
export const { increase, decrease, multiplyByAmount, resetCount } =
  counterSlice.actions;

export default counterSlice.reducer;
