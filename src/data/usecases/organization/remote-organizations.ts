import {type HttpClient, HttpStatusCode} from '@/data/protocols/http/';
import {Organization} from '@/domain/usecases/Organization';
import {OrganizationModel} from '@/domain/models/organization-model';
import {InvalidCredentialsError, UnexpectedError} from '@/domain/errors';

export class RemoteOrganizations implements Organization {
  constructor(
    private readonly url: string,
    private readonly httpClient
  ) {}

  async createOrganization(organization: OrganizationModel): Promise<OrganizationModel> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'post',
      body: organization
    });

    switch (httpResponse.statusCode) {
      case HttpStatusCode.unauthorized:
        throw new InvalidCredentialsError();
      case HttpStatusCode.ok:
        return httpResponse.body;
      default:
        throw new UnexpectedError();
    }
  };
  
  async listOrganizations(): Promise<OrganizationModel[]> {
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

  async getOrganizationById(id: string): Promise<OrganizationModel> {
    const httpResponse = await this.httpClient.request({
      url: `${this.url}/${id}`,
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
  };

  async updateOrganization(id: string, organization: OrganizationModel): Promise<OrganizationModel>{
    const httpResponse = await this.httpClient.request({
      url: `${this.url}/${id}`,
      method: 'put',
      body: organization
    });

    switch (httpResponse.statusCode) {
      case HttpStatusCode.unauthorized:
        throw new InvalidCredentialsError();
      case HttpStatusCode.ok:
        return httpResponse.body;
      default:
        throw new UnexpectedError();
    }
  };

  async deleteOrganization(id: string): Promise<void>{
    const httpResponse = await this.httpClient.request({
      url: `${this.url}/${id}`,
      method: 'delete',
    });

    switch (httpResponse.statusCode) {
      case HttpStatusCode.unauthorized:
        throw new InvalidCredentialsError();
      case HttpStatusCode.ok:
        return httpResponse.body;
      default:
        throw new UnexpectedError();
    }
  };
}
