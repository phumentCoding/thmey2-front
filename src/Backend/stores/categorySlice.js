import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import category from '../services/category';

// Async action to fetch categories
export const fetchCategories = createAsyncThunk(
  'category/fetchCategories',
  async (_, { rejectWithValue }) => {
    try {
      const response = await category.getAllCategory();
      console.log('API Response (fetchCategories):', response.data);
      return response.data.categories;
    } catch (error) {
      console.error('Fetch Categories Error:', error);
      return rejectWithValue(error.response?.data || 'Failed to fetch categories');
    }
  }
);

// Async action to create a new category
export const createCategory = createAsyncThunk(
  'category/createCategory',
  async (newCategory, { rejectWithValue, dispatch }) => {
    try {
      const response = await category.createCategory(newCategory);
      console.log('API Response (createCategory):', response.data);
      dispatch(fetchCategories());
      return response.data;
    } catch (error) {
      console.error('Create Category Error:', error);
      return rejectWithValue(error.response?.data || 'Failed to create category');
    }
  }
);

// Async action to fetch a single category by ID
export const getCategoryById = createAsyncThunk(
  'category/getCategoryById',
  async (categoryId, { rejectWithValue }) => {
    try {
      const response = await category.getCategoryById(categoryId);
      console.log('API Response (getCategoryById):', response.data.category);
      return response.data.category;
    } catch (error) {
      console.error('Get Category Error:', error);
      return rejectWithValue(error.response?.data || 'Failed to fetch category');
    }
  }
);

// Async action to update a category
export const updateCategory = createAsyncThunk(
  'category/updateCategory',
  async (updatedCategory, { rejectWithValue, dispatch }) => {
    try {
      const { id, ...data } = updatedCategory; // Exclude id from payload
      const response = await category.updateCategory(id, data);
      console.log('API Response (updateCategory):', response.data);
      dispatch(fetchCategories()); // Refresh category list after update
      return response.data;
    } catch (error) {
      console.error('Update Category Error:', error);
      return rejectWithValue(error.response?.data || 'Failed to update category');
    }
  }
);

const categorySlice = createSlice({
  name: 'category',
  initialState: {
    categories: [],
    selectedCategory: null,
    status: 'idle',
    selectedStatus: 'idle',
    error: null,
    selectedError: null,
  },
  reducers: {
    resetSelectedCategory(state) {
      state.selectedCategory = null;
      state.selectedStatus = 'idle';
      state.selectedError = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch categories
      .addCase(fetchCategories.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || 'Something went wrong';
      })
      // Create category
      .addCase(createCategory.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createCategory.fulfilled, (state, action) => {
        state.status = 'succeeded';
      })
      .addCase(createCategory.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || 'Something went wrong';
      })
      // Get single category
      .addCase(getCategoryById.pending, (state) => {
        state.selectedStatus = 'loading';
        state.selectedError = null;
      })
      .addCase(getCategoryById.fulfilled, (state, action) => {
        state.selectedStatus = 'succeeded';
        state.selectedCategory = action.payload;
      })
      .addCase(getCategoryById.rejected, (state, action) => {
        state.selectedStatus = 'failed';
        state.selectedError = action.payload || 'Something went wrong';
      })
      // Update category
      .addCase(updateCategory.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateCategory.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.selectedCategory = action.payload; // Update selectedCategory
        // Optionally update categories list in state
        const index = state.categories.findIndex((cat) => cat.id === action.payload.id);
        if (index !== -1) {
          state.categories[index] = action.payload;
        }
      })
      .addCase(updateCategory.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || 'Something went wrong';
      });
  },
});

export const { resetSelectedCategory } = categorySlice.actions;
export default categorySlice.reducer;