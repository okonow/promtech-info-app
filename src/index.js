import express from 'express';
import { sequelize } from './db.js';
import dotenv from 'dotenv';
import userRouter from './routes/userRouter.js';
import newsRouter from './routes/newsRouter.js';

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.APP_PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/users', userRouter);
app.use('/api/news', newsRouter);

// Health check endpoint
app.get('/health', async (req, res) => {
    try {
        // Проверяем подключение к базе данных
        await sequelize.authenticate();
        res.status(200).json({ status: 'healthy', database: 'connected' });
    } catch (error) {
        res.status(500).json({ 
            status: 'unhealthy', 
            database: 'disconnected',
            error: error.message 
        });
    }
});

// Basic route
app.get('/', (req, res) => {
    res.send('Hello, Express!');
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ 
        message: 'Something went wrong!',
        error: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
});

// Server startup with DB connection check
const start = async () => {
    try {
        // Check DB connection
        await sequelize.authenticate();
        console.log('Successfully connected to database');

        // Sync models with database
        await sequelize.sync();
        console.log('Database synchronized');

        // Start server
        app.listen(port, () => {
            console.log(`Server running at http://localhost:${port}`);
        });
    } catch (error) {
        console.error('Unable to start the server:', error);
        process.exit(1);
    }
};

start();

// Handle unhandled promise rejections
process.on('unhandledRejection', (error) => {
    console.error('Unhandled rejection:', error);
}); 