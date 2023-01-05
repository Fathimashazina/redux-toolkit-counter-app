import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { counter: 0 },
  reducers: {
    increament(state, action) {
      state.counter++;
      console.log("incremented");
    },
    decreament(state, action) {
      state.counter--;
      console.log("decreamented");
    },
    addBy(state, action) {
      state.counter += action.payload;
      console.log("added");
    },
  },
});

export const actions = counterSlice.actions;

const store = configureStore({
  reducer: counterSlice.reducer,
});
export default store;
