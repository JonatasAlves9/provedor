import {Questions} from '@/domain/usecases';
import {makeApiUrlQuestions} from '@/main/factories/http/api-url-factory';
import {makeAxiosHttpClient} from '@/main/factories/http/axios-http-client-factory';
import {RemoteQuestions} from '@/data/usecases/questions/remote-questions';

export const makeRemoteQuestions = (): Questions => {
  return new RemoteQuestions(makeApiUrlQuestions(), makeAxiosHttpClient());
};
