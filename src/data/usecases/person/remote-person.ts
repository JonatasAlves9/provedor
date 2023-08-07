import {type HttpClient, HttpStatusCode} from '@/data/protocols/http/';
import {Person} from '@/domain/usecases/';
import {PersonModel} from '@/domain/models';
import {InvalidCredentialsError, UnexpectedError} from '@/domain/errors';

export class RemotePersons implements Person {
  constructor(private readonly url: string, private readonly httpClient) {}

  async getListPerson(): Promise<PersonModel[]> {
    const client = this.httpClient as HttpClient<PersonModel[]>;
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

  async getListPersonByID(id: string): Promise<PersonModel> {
    const client = this.httpClient as HttpClient<PersonModel>;

    const httpResponse = await client.request({
      method: 'get',
      url: this.url + `/${id}`,
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
