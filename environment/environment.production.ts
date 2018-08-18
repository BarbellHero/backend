import { Environment } from './environment';

const env = process.env;

const devEnvironment: Environment = {
  dbConnection: {
    type: 'postgres',
    url: env.DATABASE_URL,
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    synchronize: true
  }
};

export default devEnvironment;
