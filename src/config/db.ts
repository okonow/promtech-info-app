import { Sequelize } from "sequelize";
import { config } from './config.ts';

interface Config {
  host: string | undefined;
  port: string | undefined;
  database: string | undefined;
  user: string | undefined;
  password: string | undefined;
}

const pg_config: Config = {
  host: config.DB_HOST,
  port: config.DB_PORT,
  database: config.DB_NAME,
  user: config.DB_USER,
  password: config.DB_PASSWORD
};

// Преобразуем порт в число
const portAsNumber: number | undefined = pg_config.port ? parseInt(pg_config.port) : undefined;

// Проверка конфигурации
if (!pg_config.host || !pg_config.database || !pg_config.user || !pg_config.password) {
  throw new Error('Недостаточная конфигурация для подключения к базе данных');
}

// Создаём объект Sequelize
const sequelize = new Sequelize(
  pg_config.database,
  pg_config.user,
  pg_config.password,
  {
    host: pg_config.host,
    port: portAsNumber,
    dialect: 'postgres', // Укажите нужный диалект базы данных, например, 'postgres'
  }
);

async function initDatabase() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    // Здесь можно добавить более безопасное логирование ошибок
  }
}

initDatabase();

export default sequelize;
