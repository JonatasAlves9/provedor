import {AssessmentQuestionModel} from '@/domain/models';

export interface AssessmentQuestions {
  getListAssessmentQuestionModel: () => Promise<AssessmentQuestionModel[]>;
  getAssessmentQuestionsById: (id: string) => Promise<AssessmentQuestionModel>;
  createAssessmentQuestions: (
    assessmentQuestions: AssessmentQuestionModel
  ) => Promise<AssessmentQuestionModel>;
}
