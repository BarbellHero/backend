import { ConnectionOptions } from 'typeorm';
import { developmentEnvironment } from './environment.development';
import { productionEnvironment } from './environment.production';

const environments = [
  developmentEnvironment,
  productionEnvironment
];

export let environment: Environment;

const environmentMap: { [key: string]: Environment } = {};
environments.forEach((env) => {
  environmentMap[env.name] = env;
});

const nodeEnv = process.env.NODE_ENV || 'development';
// tslint:disable-next-line:no-var-requires
environment = environmentMap[nodeEnv];

export interface Environment {
  name: string;
  dbConnection?: ConnectionOptions;
}