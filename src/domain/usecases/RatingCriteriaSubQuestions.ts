import {RatingCriteriaSubQuestionModel} from '@/domain/models';

export interface RatingCriteriaSubQuestion {
  getListRatingCriteriaSubQuestions: (id: string) => Promise<RatingCriteriaSubQuestionModel[]>;
  getRatingCriteriaSubQuestionsById: (id: string) => Promise<RatingCriteriaSubQuestionModel>;
  createRatingCriteriaSubQuestions: (
    ratingCriteriaSubQuestions: RatingCriteriaSubQuestionModel
  ) => Promise<RatingCriteriaSubQuestionModel>;
  updateRatingCriteriaSubQuestions: (
    id: string,
    ratingCriteriaSubQuestions: RatingCriteriaSubQuestionModel
  ) => Promise<RatingCriteriaSubQuestionModel>;

  deleteratingCriteriaSubQuestions: (id: string) => Promise<void>;
}
