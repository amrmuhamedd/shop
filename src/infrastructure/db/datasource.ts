import { log } from 'console';
import { DataSource, DataSourceOptions } from 'typeorm';
let dataSourceOptions: DataSourceOptions = {
  type: 'better-sqlite3',
  database: ':memory:',
  entities: [`${__dirname}/db-entities/*{.ts,.js}`, `${__dirname}/db-entities/**/*{.ts,.js}`],
  // migrations: [`${__dirname}/migrations/*{.ts,.js}`, `${__dirname}/migrations/**/*{.ts,.js}`],
  migrations: [`${__dirname}/migrations/**/*{.ts,.js}`],
  // logging: true,
};

if (process.env.NODE_ENV === 'test' || process.env.WITH_MEMORY_DB) {
  dataSourceOptions = {
    ...dataSourceOptions,
    // synchronize: true,
    synchronize: process.env.WITH_DB_MIGRATION_RUN ? false : true,
  };
} else {
  dataSourceOptions = {
    ...dataSourceOptions,
    type: 'postgres',
    host: process.env.DB_HOST,
    port: parseInt(`${process.env.DB_PORT}`) || 5432,
    database: process.env.DB_NAME,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
  };

  if (process.env.ALLOW_DB_SSL_CONNECTION === 'true') {
    dataSourceOptions = {
      ...dataSourceOptions,
      ssl: true,
      extra: {
        ssl: {
          rejectUnauthorized: false,
        },
      },
    };
    log('SSL connection to DB is allowed');
  }
}

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
