import {makeAxiosHttpClient} from '@/main/factories/http/axios-http-client-factory';
import {makeApiUrlTasks} from '@/main/factories/http/api-url-factory';
import {Task} from '@/domain/usecases/Task';
import {RemoteTasks} from '@/data/usecases/task/remote-tasks';

export const makeRemoteTask = (): Task => {
  return new RemoteTasks(makeApiUrlTasks(), makeAxiosHttpClient());
};
