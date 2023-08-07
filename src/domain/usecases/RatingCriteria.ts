import {RatingCriteriaModel} from '@/domain/models';

export interface RatingCriteria {
  getListRatingCriteria: () => Promise<RatingCriteriaModel[]>;
  getRatingCriteriaById: (id: string) => Promise<RatingCriteriaModel>;
  createRatingCriteria: (ratingCriteria: RatingCriteriaModel) => Promise<RatingCriteriaModel>;
  updateRatingCriteria: (
    id: string,
    ratingCriteria: RatingCriteriaModel
  ) => Promise<RatingCriteriaModel>;
  deleteRatingCriteria: (id: string) => Promise<void>;
}
