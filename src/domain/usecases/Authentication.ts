import {AuthModel} from '@/domain/models/auth-model';

export type AuthenticationParams = {
  password: string;
  cpf: string;
};

export interface Authentication {
  auth: (params: AuthenticationParams) => Promise<AuthModel>;
}
