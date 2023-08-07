import {type HttpClient, HttpStatusCode} from '@/data/protocols/http/';
import {type Authentication, type AuthenticationParams} from '@/domain/usecases';
import {InvalidCredentialsError, UnexpectedError} from '@/domain/errors';
import {AuthModel} from '@/domain/models/auth-model';

export class RemoteAuthentication implements Authentication {
  constructor(private readonly url: string, private readonly httpClient: HttpClient<AuthModel>) {}

  async auth(params: AuthenticationParams): Promise<AuthModel> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      body: params,
      method: 'post',
    });

    // to improve later
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return httpResponse.body;
      case HttpStatusCode.unauthorized:
        throw new InvalidCredentialsError();
      default:
        throw new UnexpectedError();
    }
  }
}
