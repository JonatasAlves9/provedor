import {HttpClient, HttpStatusCode} from '@/data/protocols/http';
import {InvalidCredentialsError, UnexpectedError} from '@/domain/errors';
import {AssessmentQuestionModel} from '@/domain/models';
import {AssessmentQuestions} from '@/domain/usecases/AssessmentQuestions';

export class RemoteAssessmentQuestions implements AssessmentQuestions {
  constructor(private readonly url: string, private readonly httpClient) {}

  async getAssessmentQuestionsById(id: string): Promise<AssessmentQuestionModel> {
    const client = this.httpClient as HttpClient<AssessmentQuestionModel>;
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

  async getListAssessmentQuestionModel(): Promise<AssessmentQuestionModel[]> {
    const client = this.httpClient as HttpClient<AssessmentQuestionModel[]>;
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

  async createAssessmentQuestions(
    assessmentQuestions: AssessmentQuestionModel
  ): Promise<AssessmentQuestionModel> {
    // CRIAR
    const client = this.httpClient as HttpClient<AssessmentQuestionModel>;

    const httpResponse = await client.request({
      method: 'post',
      url: this.url,
      body: assessmentQuestions,
    });

    switch (httpResponse.statusCode) {
      case HttpStatusCode.unauthorized:
        throw new InvalidCredentialsError();
      case HttpStatusCode.created:
        return httpResponse.body;
      default:
        throw new UnexpectedError();
    }
    // CRIAR
  }
}
