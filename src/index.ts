import express, { Request, Response } from 'express';
import usersRouter from './routes/user'
import { sequelize } from './db';

const app = express();
const port = process.env.APP_PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, TypeScript Express!');
  });

app.use('/users', usersRouter);

// Запуск сервера с проверкой подключения к БД
const start = async () => {
    try {
        // Проверяем подключение к БД
        await sequelize.authenticate();
        console.log('Successfully connected to database');

        // Запускаем сервер
        app.listen(port, () => {
            console.log(`Server running at http://localhost:${port}`);
        });
    } catch (error) {
        console.error('Unable to connect to the database:', error);
        process.exit(1);
    }
};

start();

// Обработка ошибок
process.on('unhandledRejection', (error: Error) => {
    console.error('Unhandled rejection:', error);
});
