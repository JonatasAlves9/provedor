import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import type {RootState} from '../index';
import {OrganizationModel} from '@/domain/models/organization-model';
import {OrganizationInsureModel} from '@/domain/models/organization-insure';

// Define a type for the slice state
interface OrganizationState {
  organizations: OrganizationModel[];
  organization: OrganizationModel;
  organizationInsure: OrganizationInsureModel[];
}

interface PayloadLoadOrganizations extends PayloadAction<OrganizationModel[]> {}
interface PayloadLoadOrganizationsInsure extends PayloadAction<OrganizationInsureModel[]> {}

interface PayloadLoadOrganization extends PayloadAction<OrganizationModel> {}

// Define the initial state using that type
const initialState: OrganizationState = {
  organizations: [],
  organizationInsure: [],
  organization: null,
};

export const organizationSlice = createSlice({
  name: 'organizations',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    loadOrganizations: (state, action: PayloadLoadOrganizations) => {
      state.organizations = action.payload;
      state.organization = null;
    },
    loadOrganizationById: (state, action: PayloadLoadOrganization) => {
      state.organization = action.payload;
    },
    createOrganization: (state, action: PayloadLoadOrganizations) => {},
    updateOrganization: (state, action: PayloadLoadOrganizations) => {},
    deleteOrganization: (state, action: PayloadLoadOrganizations) => {},
    loadOrganizationInsurer: (state, action: PayloadLoadOrganizationsInsure) => {
      state.organizationInsure = action.payload;
    },
  },
});

export const {
  loadOrganizations,
  loadOrganizationById,
  createOrganization,
  updateOrganization,
  deleteOrganization,
  loadOrganizationInsurer,
} = organizationSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter.value;

export default organizationSlice.reducer;
