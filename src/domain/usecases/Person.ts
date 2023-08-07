import {PersonModel} from '@/domain/models';

export interface Person {
  getListPerson: () => Promise<PersonModel[]>;
  getListPersonByID: (id: string) => Promise<PersonModel>;
}
