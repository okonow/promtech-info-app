// src/app.ts
import express from 'express';
import { config } from './config/config.ts';
import sequelize from './config/db.ts';
import companyRouter from './routers/company-router.ts';

const app = express();

// Подключаем middleware для работы с JSON
app.use(express.json());

// Подключаем роуты
app.use('/api', companyRouter);

// Тестовый эндпоинт
app.get('/', (req, res) => {
  res.send('API is running');
});

// Синхронизация с БД и запуск сервера
sequelize.sync().then(() => {
  app.listen(config.APP_PORT, () => {
    console.log(`Server running on port ${config.APP_PORT}`);
    console.log(`Database connected: ${config.DB_NAME}`);
  });
}).catch(error => {
  console.error('Database connection error:', error);
});