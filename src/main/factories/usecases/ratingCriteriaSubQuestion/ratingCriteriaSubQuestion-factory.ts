import {RemoteRatingCriteriaSubQuestions} from '@/data/usecases/ratingCriterialSubQuestions/remote-ratingCriteriaSubQuestions';
import {RatingCriteriaSubQuestion} from '@/domain/usecases';
import {makeApiEvaluationSubQuestion} from '@/main/factories/http/api-url-factory';
import {makeAxiosHttpClient} from '@/main/factories/http/axios-http-client-factory';

export const makeRemoteRatingCriteriaSubQuestion = (): RatingCriteriaSubQuestion => {
  return new RemoteRatingCriteriaSubQuestions(
    makeApiEvaluationSubQuestion(),
    makeAxiosHttpClient()
  );
};
