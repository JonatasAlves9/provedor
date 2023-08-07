import {RatingCriteriaSubQuestion} from '@/domain/usecases/';
import {RatingCriteriaSubQuestionModel} from '@/domain/models';
import {type HttpClient, HttpStatusCode} from '@/data/protocols/http/';
import {InvalidCredentialsError, UnexpectedError} from '@/domain/errors';

export class RemoteRatingCriteriaSubQuestions implements RatingCriteriaSubQuestion {
  constructor(private readonly url: string, private readonly httpClient) {}

  async getListRatingCriteriaSubQuestions(id: string): Promise<RatingCriteriaSubQuestionModel[]> {
    const client = this.httpClient as HttpClient<RatingCriteriaSubQuestionModel[]>;

    const httpResponse = await client.request({
      method: 'get',
      url: this.url + '?questao_id=' + `${id}`,
    });

    switch (httpResponse.statusCode) {
      case HttpStatusCode.unauthorized:
        throw new InvalidCredentialsError();
      case HttpStatusCode.ok:
        return httpResponse.body;
      default:
        throw new UnexpectedError();
    }
  }

  async getRatingCriteriaSubQuestionsById(id: string): Promise<RatingCriteriaSubQuestionModel> {
    const client = this.httpClient as HttpClient<RatingCriteriaSubQuestionModel>;
    const httpResponse = await client.request({
      method: 'get',
      url: `${this.url}/${id}`,
    });

    switch (httpResponse.statusCode) {
      case HttpStatusCode.unauthorized:
        throw new InvalidCredentialsError();
      case HttpStatusCode.ok:
        return httpResponse.body;
      default:
        throw new UnexpectedError();
    }
  }

  async createRatingCriteriaSubQuestions(
    ratingCriteria: RatingCriteriaSubQuestionModel
  ): Promise<RatingCriteriaSubQuestionModel> {
    const client = this.httpClient as HttpClient<RatingCriteriaSubQuestionModel>;

    const httpResponse = await client.request({
      method: 'post',
      url: this.url,
      body: ratingCriteria,
    });

    switch (httpResponse.statusCode) {
      case HttpStatusCode.unauthorized:
        throw new InvalidCredentialsError();
      case HttpStatusCode.ok:
        return httpResponse.body;
      default:
        throw new UnexpectedError();
    }
  }

  async updateRatingCriteriaSubQuestions(
    id: string,
    ratingCriteria: RatingCriteriaSubQuestionModel
  ): Promise<RatingCriteriaSubQuestionModel> {
    const client = this.httpClient as HttpClient<RatingCriteriaSubQuestionModel>;

    const httpResponse = await client.request({
      method: 'put',
      url: `${this.url}/${id}`,
      body: ratingCriteria,
    });

    switch (httpResponse.statusCode) {
      case HttpStatusCode.unauthorized:
        throw new InvalidCredentialsError();
      case HttpStatusCode.ok:
        return httpResponse.body;
      default:
        throw new UnexpectedError();
    }
  }

  async deleteratingCriteriaSubQuestions(id: string): Promise<void> {
    const client = this.httpClient as HttpClient<RatingCriteriaSubQuestionModel>;

    const httpResponse = await client.request({
      method: 'delete',
      url: `${this.url}/${id}`,
    });

    switch (httpResponse.statusCode) {
      case HttpStatusCode.unauthorized:
        throw new InvalidCredentialsError();
      case HttpStatusCode.ok:
        return;
      default:
        throw new UnexpectedError();
    }
  }
}
