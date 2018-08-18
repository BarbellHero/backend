import { Environment } from './environment';

const devEnvironment: Environment = {
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

export default devEnvironment;
