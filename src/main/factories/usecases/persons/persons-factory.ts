import {makeAxiosHttpClient} from '@/main/factories/http/axios-http-client-factory';
import {makeApiUrlPersons} from '@/main/factories/http/api-url-factory';
import {Person} from '@/domain/usecases';
import {RemotePersons} from '@/data/usecases/person/remote-person';

export const makeRemotePersons = (): Person => {
  return new RemotePersons(makeApiUrlPersons(), makeAxiosHttpClient());
};
