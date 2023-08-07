import {QuestionModel} from '@/domain/models';

export interface Questions {
  getListQuestions: (id: string) => Promise<QuestionModel[]>;
  getQuestionById: (id: string) => Promise<QuestionModel>;
  createQuestion: (question: QuestionModel) => Promise<QuestionModel>;
  updateQuestion: (id: string, question: QuestionModel) => Promise<QuestionModel>;
  deleteQuestion: (id: string) => Promise<void>;
}
