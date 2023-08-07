import {type HttpClient, HttpStatusCode} from '@/data/protocols/http/';
import {OrganizationInsure} from '@/domain/usecases/OrganizationInsure';
import {InvalidCredentialsError, UnexpectedError} from '@/domain/errors';
import {OrganizationInsureModel} from '@/domain/models/organization-insure';

export class RemoteOrganizationsInsure implements OrganizationInsure {
  constructor(private readonly url: string, private readonly httpClient) {}

  async getOrganizationInsurer(): Promise<OrganizationInsureModel[]> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'get',
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
