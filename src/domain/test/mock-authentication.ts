import {type AuthenticationParams} from '@/domain/usecases';
import {type AccountModel} from '@/domain/models';

import {faker} from '@faker-js/faker';

export const mockAuthentication = (): AuthenticationParams => ({
  username: faker.internet.userName(),
  password: faker.internet.password(),
  company: faker.company.companySuffix(),
});

export const mockAccountModel = (): AccountModel => ({
  accessToken: faker.datatype.uuid(),
});
