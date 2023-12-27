import { DataSourceOptions, DataSource } from 'typeorm';
import 'dotenv/config';

export const config: DataSourceOptions = {
  type: 'sqlite',
  // host: process.env.DB_HOST,
  // port: 5432,
  // username: process.env.DATABASE_USERNAME,
  // database: process.env.DATABASE_NAME,
  // password: process.env.DATABASE_PASSWORD,
  database: './data.db',
  synchronize: true,
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
  migrationsRun: true,
  migrationsTableName: 'migrations',
  logging: false,
};

const dataSource = new DataSource(config);
export default dataSource;
