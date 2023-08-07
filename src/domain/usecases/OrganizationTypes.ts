import {OrganizationTypesModel} from '../models/organization-types-model';

export interface OrganizationTypes {
  listOrganizationTypes: () => Promise<OrganizationTypesModel[]>;
}
