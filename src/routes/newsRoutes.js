import express from 'express';
import NewsController from '../controllers/newsController.js';
import NewsService from '../services/newsService.js';
import NewsRepository from '../repositories/newsRepository.js';
import News from '../models/news.js';

const router = express.Router();

// Инициализация зависимостей
const newsRepository = new NewsRepository(News);
const newsService = new NewsService(newsRepository);
const newsController = new NewsController(newsService);

// Роуты
router.get('/', newsController.getAllNews.bind(newsController));
router.get('/:id', newsController.getNewsById.bind(newsController));

export default router;
