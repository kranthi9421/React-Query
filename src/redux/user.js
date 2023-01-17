import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  users: [],
  errorMsg: '',
};

export const fetchUsers = createAsyncThunk("user/fetchUsers", async () => {
  const { data } = await axios.get("https://jsonplaceholder.typicode.com/pos");
  return data
});

export const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
      state.errorMsg = "";
    });
    builder.addCase(fetchUsers.rejected, (state,action) => {
      state.loading = false;
      state.users = [];
      state.errorMsg = action.error.message;
  
    });
  },
});

export default userSlice.reducer;
