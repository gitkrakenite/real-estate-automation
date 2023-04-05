import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import tenantService from "./tenantService";

const initialState = {
  tenant: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// get my property
export const getTenant = createAsyncThunk(
  "tenant/getTenant",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await tenantService.getTenant(token);
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

// create a tenant
export const createTenant = createAsyncThunk(
  "/tenant/createTenant",
  async (tenantData, thunkAPI) => {
    try {
      // this is a protected route we need our token to create tenant
      const token = thunkAPI.getState().auth.user.token;
      return await tenantService.createTenant(tenantData, token);
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

export const tenantSlice = createSlice({
  name: "tenant",
  initialState,
  reducers: {
    resetTenant: (state) => initialState, //won't persist like user
  },

  extraReducers: (builder) => {
    builder
      .addCase(getTenant.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTenant.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.tenant = action.payload;
      })
      .addCase(getTenant.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(createTenant.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createTenant.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.tenant.push(action.payload);
      })
      .addCase(createTenant.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { resetTenant } = tenantSlice.actions;
export default tenantSlice.reducer;
