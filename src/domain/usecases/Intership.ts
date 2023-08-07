import {IntershipModel} from '@/domain/models';

export interface Intership {
  getListIntership: () => Promise<IntershipModel[]>;
  getIntershipById: (id: string) => Promise<IntershipModel>;
  createIntership: (intership: IntershipModel) => Promise<IntershipModel>;
  updateIntership: (id: string, intership: IntershipModel) => Promise<IntershipModel>;
  deleteIntership: (id: string) => Promise<void>;
}
