import { createSlice, Slice } from "@reduxjs/toolkit";

export interface ICityState {
  value: string;
}

const initialState: ICityState = {
  value: "Kiev",
};

export const citySlice: Slice<ICityState> = createSlice({
  name: "city",
  initialState,
  reducers: {
    syncState: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { syncState } = citySlice.actions;

export default citySlice.reducer;
