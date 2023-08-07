import {type HttpClient, HttpStatusCode} from '@/data/protocols/http/';
import {RatingCriteria} from '@/domain/usecases/';
import {RatingCriteriaModel} from '@/domain/models';
import {InvalidCredentialsError, UnexpectedError} from '@/domain/errors';

export class RemoteRatingCriteria implements RatingCriteria {
  constructor(private readonly url: string, private readonly httpClient) {}

  async getListRatingCriteria(): Promise<RatingCriteriaModel[]> {
    const client = this.httpClient as HttpClient<RatingCriteriaModel[]>;
    const httpResponse = await client.request({
      method: 'get',
      url: this.url,
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

  async getRatingCriteriaById(id: string): Promise<RatingCriteriaModel> {
    const client = this.httpClient as HttpClient<RatingCriteriaModel>;
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

  async createRatingCriteria(ratingCriteria: RatingCriteriaModel): Promise<RatingCriteriaModel> {
    const client = this.httpClient as HttpClient<RatingCriteriaModel>;

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

  async updateRatingCriteria(
    id: string,
    ratingCriteria: RatingCriteriaModel
  ): Promise<RatingCriteriaModel> {
    const client = this.httpClient as HttpClient<RatingCriteriaModel>;

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

  async deleteRatingCriteria(id: string): Promise<void> {
    const client = this.httpClient as HttpClient<RatingCriteriaModel>;

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
