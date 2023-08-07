import {OrganizationModel} from '@/domain/models/organization-model';

export interface Organization {
  createOrganization: (organization: OrganizationModel) => Promise<OrganizationModel>;
  listOrganizations: () => Promise<OrganizationModel[]>;
  getOrganizationById: (id: string) => Promise<OrganizationModel>;
  updateOrganization: (id: string, organization: OrganizationModel) => Promise<OrganizationModel>
  deleteOrganization: (id: string) => Promise<void>
}
