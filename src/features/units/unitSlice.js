import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import unitService from "./unitService";

const initialState = {
  unit: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// get unit based on propertyName
export const getUnit = createAsyncThunk(
  "/unit/getunit",
  async (propertyData, thunkAPI) => {
    try {
      // this is a protected route we need our token to fetch unit
      const token = thunkAPI.getState().auth.user.token;
      return await unitService.getunits(propertyData, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// create a unit
export const createUnit = createAsyncThunk(
  "/unit/createUnit",
  async (unitData, thunkAPI) => {
    try {
      // this is a protected route we need our token to create unit
      const token = thunkAPI.getState().auth.user.token;
      return await unitService.createUnit(unitData, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const unitSlice = createSlice({
  name: "unit",
  initialState,
  reducers: {
    resetUnit: (state) => initialState, //won't persist like user
  },

  extraReducers: (builder) => {
    builder
      .addCase(getUnit.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUnit.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.unit = action.payload;
      })
      .addCase(getUnit.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(createUnit.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createUnit.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.unit.push(action.payload);
      })
      .addCase(createUnit.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { resetUnit } = unitSlice.actions;
export default unitSlice.reducer;
