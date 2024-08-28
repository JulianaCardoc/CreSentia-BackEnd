import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'root',
    password: '6688CS',
    database:'my_db',
    synchronize: false,
    logging: false,
    migrations: ['src/database/migrations/*.ts'],
    migrationsTableName: 'migrations',
    entities: ['src/**/*.entity.ts']
});