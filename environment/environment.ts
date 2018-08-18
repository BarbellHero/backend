import { ConnectionOptions } from 'typeorm';

export const environment: Environment = {};

const env = process.env.NODE_ENV || 'development';
// tslint:disable-next-line:no-var-requires
Object.assign(environment, require(`./environment.${env}`).default);

export interface Environment {
  dbConnection?: ConnectionOptions;
}