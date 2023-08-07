import {StringSchema} from 'yup';

declare module 'Yup' {
  interface StringSchema {
    cnpjType(errorMessage: string): StringSchema;
    cpfType(errorMessage: string): StringSchema;
  }
}
