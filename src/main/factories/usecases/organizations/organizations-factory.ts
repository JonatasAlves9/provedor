import {makeAxiosHttpClient} from '@/main/factories/http/axios-http-client-factory';
import {makeApiUrlOrganizations} from '@/main/factories/http/api-url-factory';
import {Organization} from '@/domain/usecases/Organization';
import {RemoteOrganizations} from '@/data/usecases/organization/remote-organizations';

export const makeRemoteOrganization = (): Organization => {
  return new RemoteOrganizations(makeApiUrlOrganizations(), makeAxiosHttpClient());
};
