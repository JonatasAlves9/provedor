import {SessionStorageAdapter} from '@/infra/cache/session-storage-adapter';

export const makeSessionStorage = (): SessionStorageAdapter => {
  return new SessionStorageAdapter();
};
