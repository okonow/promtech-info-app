import { Sequelize } from "sequelize-typescript";
import * as dotenv from 'dotenv';

dotenv.config();

export const sequelize = new Sequelize({
    dialect: 'postgres',
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: parseInt(process.env.DB_PORT || '5432'),
    models: [__dirname + '/models/*'],
    logging: false // можно включить для отладки SQL-запросов
});