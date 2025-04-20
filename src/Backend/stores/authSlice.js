import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import auth from '../services/auth';

export const login = createAsyncThunk('auth/login', async (credentials, { rejectWithValue }) => {
  try {
    const response = await auth.login(credentials);
    localStorage.setItem('token', response.data.token);
    return { user: response.data.user, token: response.data.token };
  } catch (error) {
    return rejectWithValue(error.response?.data || 'Login failed');
  }
});

export const logout = createAsyncThunk('auth/logout', async (_, { rejectWithValue }) => {
  try {
    await auth.logout();
    localStorage.removeItem('token');
    // Redirect to login page
    window.location.href = '/admin/login';
    return null;
  } catch (error) {
    // Handle 401 or other errors
    localStorage.removeItem('token');
    window.location.href = '/admin/login';
    return rejectWithValue(error.response?.data || 'Logout failed');
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: localStorage.getItem('token') || null,
    status: 'idle',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.status = 'logged_in';
      })
      .addCase(login.rejected, (state) => {
        state.status = 'failed';
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.token = null;
        state.status = 'logged_out';
      })
      .addCase(logout.rejected, (state) => {
        state.user = null;
        state.token = null;
        state.status = 'logged_out';
      });
  },
});

export const { actions } = authSlice;
export default authSlice.reducer;