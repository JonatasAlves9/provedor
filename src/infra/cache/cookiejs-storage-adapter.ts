import {GetStorage, SetStorage} from '@/data/protocols/cache';
import Cookies from 'js-cookie';

interface IValue {
  expires?: number;
  path?: string;
  secure?: boolean;
  domain?: string;
  sameSite?: 'strict' | 'Lax' | 'none';
  data?: string;
}

export class CookieJsStorageAdapter implements SetStorage, GetStorage {
  /**
   * For create a default config use this const and use in calls to get`s and set`s
   * const api = Cookies.withAttributes({ path: '/', domain: '.example.com' })
   * */

  set(key: string, value: IValue): void {
    if (value) {
      Cookies.set(key, JSON.stringify(value.data), {
        expires: value.expires,
        path: value.expires,
        secure: value.expires,
        domain: value.expires,
        sameSite: value.expires,
      });
    } else {
      Cookies.removeItem(key);
    }
  }

  get(key: string): any {
    return JSON.parse(Cookies.getItem(key));
  }
}
