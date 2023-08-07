import {OrganizationInsureModel} from '@/domain/models/organization-insure';

export interface OrganizationInsure {
  getOrganizationInsurer: () => Promise<OrganizationInsureModel[]>;
}
