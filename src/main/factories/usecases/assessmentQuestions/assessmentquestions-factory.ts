import {RemoteAssessmentQuestions} from '@/data/usecases/assessmentQuestions/remote-assessmentQuestions';
import {AssessmentQuestions} from '@/domain/usecases';
import {makeApiUrlAssessmentQuestion} from '@/main/factories/http/api-url-factory';
import {makeAxiosHttpClient} from '@/main/factories/http/axios-http-client-factory';

export const makeRemoteAssessmentQuestions = (): AssessmentQuestions => {
  return new RemoteAssessmentQuestions(makeApiUrlAssessmentQuestion(), makeAxiosHttpClient());
};
