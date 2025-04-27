import express from 'express';
import usersRouter from './routes/user.js';
import { sequelize } from './db.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.APP_PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello, Express!');
});

app.use('/users', usersRouter);

// Server startup with DB connection check
const start = async () => {
    try {
        // Check DB connection
        await sequelize.authenticate();
        console.log('Successfully connected to database');

        // Start server
        app.listen(port, () => {
            console.log(`Server running at http://localhost:${port}`);
        });
    } catch (error) {
        console.error('Unable to connect to the database:', error);
        process.exit(1);
    }
};

start();

// Error handling
process.on('unhandledRejection', (error) => {
    console.error('Unhandled rejection:', error);
}); 