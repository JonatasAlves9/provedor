import {type HttpClient, HttpStatusCode} from '@/data/protocols/http/';
import {Intership} from '@/domain/usecases/';
import {IntershipModel} from '@/domain/models';
import {InvalidCredentialsError, UnexpectedError} from '@/domain/errors';

export class RemoteIntership implements Intership {
  constructor(private readonly url: string, private readonly httpClient) {}

  async getListIntership(): Promise<IntershipModel[]> {
    const client = this.httpClient as HttpClient<IntershipModel[]>;
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

  async getIntershipById(id: string): Promise<IntershipModel> {
    const client = this.httpClient as HttpClient<IntershipModel>;
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

  async createIntership(intership: IntershipModel): Promise<IntershipModel> {
    const client = this.httpClient as HttpClient<IntershipModel>;

    const httpResponse = await client.request({
      method: 'post',
      url: this.url,
      body: intership,
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

  async updateIntership(id: string, intership: IntershipModel): Promise<IntershipModel> {
    const client = this.httpClient as HttpClient<IntershipModel>;

    const httpResponse = await client.request({
      method: 'put',
      url: `${this.url}/${id}`,
      body: intership,
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

  async deleteIntership(id: string): Promise<void> {
    const client = this.httpClient as HttpClient<IntershipModel>;

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
