import {makeApiInsurer} from '@/main/factories/http/api-url-factory';
import {OrganizationInsure} from '@/domain/usecases/OrganizationInsure';
import {makeAxiosHttpClient} from '@/main/factories/http/axios-http-client-factory';
import {RemoteOrganizationsInsure} from '@/data/usecases/organization/organization-insure';

export const makeRemoteOrganizationInsure = (): OrganizationInsure => {
  return new RemoteOrganizationsInsure(makeApiInsurer(), makeAxiosHttpClient());
};
