import {Questions} from '@/domain/usecases';
import {QuestionModel} from '@/domain/models';
import {HttpClient, HttpStatusCode} from '@/data/protocols/http';
import {InvalidCredentialsError, UnexpectedError} from '@/domain/errors';

export class RemoteQuestions implements Questions {
  constructor(private readonly url: string, private readonly httpClient) {}

  async createQuestion(question: QuestionModel): Promise<QuestionModel> {
    const client = this.httpClient as HttpClient<QuestionModel>;

    const httpResponse = await client.request({
      method: 'post',
      url: this.url,
      body: question,
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

  async deleteQuestion(id: string): Promise<void> {
    const client = this.httpClient as HttpClient<void>;

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

  async getListQuestions(id: string): Promise<QuestionModel[]> {
    const client = this.httpClient as HttpClient<QuestionModel[]>;

    const httpResponse = await client.request({
      method: 'get',
      url: this.url + '?criterio_avaliacao_id=' + `${id}`,
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

  async getQuestionById(id: string): Promise<QuestionModel> {
    const client = this.httpClient as HttpClient<QuestionModel>;
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

  async updateQuestion(id: string, question: QuestionModel): Promise<QuestionModel> {
    const client = this.httpClient as HttpClient<QuestionModel>;
    const httpResponse = await client.request({
      method: 'put',
      url: `${this.url}/${id}`,
      body: question,
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
}
