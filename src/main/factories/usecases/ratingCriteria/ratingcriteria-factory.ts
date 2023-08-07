import {RemoteRatingCriteria} from '@/data/usecases/ratingCriteria/remote-ratingcriteria';
import {RatingCriteria} from '@/domain/usecases';
import {makeApiUrlRatingCriteria} from '@/main/factories/http/api-url-factory';
import {makeAxiosHttpClient} from '@/main/factories/http/axios-http-client-factory';

export const makeRemoteRatingCriteria = (): RatingCriteria => {
  return new RemoteRatingCriteria(makeApiUrlRatingCriteria(), makeAxiosHttpClient());
};
