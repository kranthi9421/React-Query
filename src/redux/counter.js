import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
  loading: false,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(incrementAsync.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(incrementAsync.fulfilled, (state) => {
      state.count += 1;
      state.loading = false;
    });
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// const res = () => new Promise((resolve) => setTimeout(resolve, 5000));

export const incrementAsync = createAsyncThunk("count/incrementAsync", () => {
  return new Promise((resolve) => {
    setTimeout(resolve, 5000);
  });
});


export default counterSlice.reducer;
