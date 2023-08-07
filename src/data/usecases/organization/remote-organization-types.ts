import { HttpStatusCode } from "@/data/protocols/http";
import { InvalidCredentialsError, UnexpectedError } from "@/domain/errors";
import { OrganizationTypesModel } from "@/domain/models/organization-types-model";
import { OrganizationTypes } from "@/domain/usecases/OrganizationTypes";

export class RemoteOrganizationTypes implements OrganizationTypes {
    constructor(
        private readonly url: string,
        private readonly httpClient
      ) {}

      async listOrganizationTypes(): Promise<OrganizationTypesModel[]>{
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
      };      
}