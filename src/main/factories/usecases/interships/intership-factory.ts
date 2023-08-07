import {makeAxiosHttpClient} from '@/main/factories/http/axios-http-client-factory';
import {makeApiUrlIntership} from '@/main/factories/http/api-url-factory';
import {Intership} from '@/domain/usecases/Intership';
import {RemoteIntership} from '@/data/usecases/Intership/remote-intership';

export const makeRemoteIntership = (): Intership => {
  return new RemoteIntership(makeApiUrlIntership(), makeAxiosHttpClient());
};
