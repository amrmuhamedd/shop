import { MigrationInterface, QueryRunner, Table } from 'typeorm';
import DB_DATA_TYPES from '../typeorm-polyfills/DB_DATA_TYPES';

const USERS_TABLE_NAME = 'users';

export class createUsersTable1687797786513 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(USERS_TABLE_NAME, true);
    await queryRunner.createTable(
      new Table({
        name: USERS_TABLE_NAME,
        columns: [
          {
            name: 'userId',
            type: DB_DATA_TYPES.int4MigrationFiles,
            isPrimary: true,
            isUnique: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'firstName',
            type: 'varchar',
            length: '30',
          },
          {
            name: 'lastName',
            type: 'varchar',
            length: '30',
          },
          {
            name: 'username',
            type: 'varchar',
            length: '30',
            isUnique: true,
          },
          {
            name: 'email',
            type: 'varchar',
            length: '120',
            isUnique: true,
            isNullable: true,
          },
          {
            name: 'password',
            type: 'varchar',
            length: '120',
            isNullable: false,
          },
          {
            name: 'isActive',
            type: DB_DATA_TYPES.int4MigrationFiles,
            default: 1,
          },
          {
            name: 'refreshToken',
            type: 'varchar',
            length: '450',
            isNullable: true,
          },
          {
            name: 'registeredAt',
            type: DB_DATA_TYPES.timestamp,
            default: DB_DATA_TYPES.currentTime,
          },
        ],
      }),
      true,
    );
  }

  public async down(): Promise<void> {
    //
  }
}
