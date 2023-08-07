import {RemoteCourses} from '@/data/usecases/courses/remote-courses';
import {Courses} from '@/domain/usecases';
import {makeApiUrlCourses} from '@/main/factories/http/api-url-factory';
import {makeAxiosHttpClient} from '@/main/factories/http/axios-http-client-factory';

export const makeRemoteCourses = (): Courses => {
  return new RemoteCourses(makeApiUrlCourses(), makeAxiosHttpClient());
};
