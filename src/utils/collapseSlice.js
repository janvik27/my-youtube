import { createSlice } from "@reduxjs/toolkit";

const collapseSlice = createSlice({
  name: "collapse",
  initialState: {
    isMenuopen: true,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuopen = !state.isMenuopen;
    },
  },
});

export const { toggleMenu } = collapseSlice.actions;
export default collapseSlice.reducer;
