import { Environment } from './environment';

const env = process.env;

export const productionEnvironment: Environment = {
  name: 'production',
  dbConnection: {
    type: 'postgres',
    url: env.DATABASE_URL,
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    synchronize: true
  }
};
