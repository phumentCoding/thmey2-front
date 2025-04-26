import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import user from "../services/user";

// Async thunk to fetch users
export const fetchUsers = createAsyncThunk(
  'user/fetchUsers',
  async (_, thunkAPI) => {
    try {
      const response = await user.getAllUser();
      return response.data.users;
    } catch (error) {
      // Return a rejected value to be handled in slice
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);


// Async thunk to create users
export const createUser = createAsyncThunk('user/createUser',async (newUser,thunkAPI) => {
  try {
    const response = await user.createUser(newUser);
    return response.data.user;
  } catch (error) {
    // Return a rejected value to be handled in slice
    return thunkAPI.rejectWithValue(error.response?.data || error.message);
  }
})


// Slice definition
const userSlice = createSlice({
  name: 'user',
  initialState: {
    users: [],
    selectUser: null,
    error: null,
    selectedError: null,
    loading: false,
  },
  reducers: {
    setSelectedUser: (state, action) => {
      state.selectUser = action.payload;
    },
    clearSelectedUser: (state) => {
      state.selectUser = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

// Export actions and reducer
export const { setSelectedUser, clearSelectedUser } = userSlice.actions;
export default userSlice.reducer;
