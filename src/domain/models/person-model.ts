export type PersonModel = {
  id: string;
  name: string;
  cpf: string;
  email: string;
  phone: string;
  profile: typeof PROFILE;
};

export enum PROFILE {
  STUDENT = 'STUDENT',
  ADMIN = 'ADMIN',
}
