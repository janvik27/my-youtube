import { configureStore } from "@reduxjs/toolkit";
import collapseSlice from "./collapseSlice.js";

const myStore = configureStore({
  reducer: {
    collapse: collapseSlice,
  },
});

export default myStore;
