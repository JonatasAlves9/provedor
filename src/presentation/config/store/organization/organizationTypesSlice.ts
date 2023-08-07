import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import type {RootState} from '../index';
import {OrganizationTypesModel} from '@/domain/models';

// Define a type for the slice state
interface OrganizationTypesState {
  organizationTypes: OrganizationTypesModel[];
  organizationType: OrganizationTypesModel;
}

interface PayloadLoadOrganizationTypes extends PayloadAction<OrganizationTypesModel[]> {}

// Define the initial state using that type
const initialState: OrganizationTypesState = {
  organizationTypes: [],
  organizationType: null,
};

export const organizationTypesSlice = createSlice({
  name: 'organizationTypes',
  initialState,
  reducers: {
    loadOrganizationTypes: (state, action: PayloadLoadOrganizationTypes) => {
      state.organizationTypes = action.payload;
    },
  },
});

export const {loadOrganizationTypes} = organizationTypesSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter.value;

export default organizationTypesSlice.reducer;
