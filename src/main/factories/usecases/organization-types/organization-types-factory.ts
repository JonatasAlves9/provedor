import {OrganizationTypes} from '@/domain/usecases/OrganizationTypes';
import {makeApiUrlOrganizationTypes} from '../../http/api-url-factory';
import {makeAxiosHttpClient} from '../../http/axios-http-client-factory';
import {RemoteOrganizationTypes} from '@/data/usecases/organization/remote-organization-types';

export const makeRemoteOrganizationTypes = (): OrganizationTypes => {
  return new RemoteOrganizationTypes(makeApiUrlOrganizationTypes(), makeAxiosHttpClient());
};
