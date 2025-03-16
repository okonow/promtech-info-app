import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Получаем __filename и __dirname в контексте ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Загружаем переменные окружения из файла .env
dotenv.config({ path: __dirname + '/../../.env' });

// Описываем интерфейс для конфигурации
interface Config {
  APP_PORT: string | undefined;
  DB_HOST: string | undefined;
  DB_PORT: string | undefined;
  DB_NAME: string | undefined;
  DB_USER: string | undefined;
  DB_PASSWORD: string | undefined;
}

// Экспортируем конфигурацию с типизацией
export const config: Config = {
  APP_PORT: process.env.APP_PORT,
  DB_HOST: process.env.DB_HOST,
  DB_PORT: process.env.DB_PORT,
  DB_NAME: process.env.DB_NAME,
  DB_USER: process.env.DB_USER,
  DB_PASSWORD: process.env.DB_PASSWORD,
};
