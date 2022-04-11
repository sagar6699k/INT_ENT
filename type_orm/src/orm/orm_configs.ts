import { DataSourceOptions } from 'typeorm';

const config: DataSourceOptions = {
  type: 'mongodb',
  host: 'localhost',
  port: 27017,
  username: '',
  password: '',
  database: 'typeorm_trail_db',
  synchronize: true,
  logging: false,
  entities: ['src/entities/*.ts'],
  useUnifiedTopology: true
};

export = config;