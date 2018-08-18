import { Environment } from './environment';

export const developmentEnvironment: Environment = {
  name: 'development',
  dbConnection: {
    type: 'postgres',
    host: 'db',
    port: 5432,
    username: 'docker',
    password: 'docker',
    database: 'barbellhero',
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    synchronize: true
  }
};
