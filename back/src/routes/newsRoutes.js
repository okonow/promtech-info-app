import express from 'express';
import NewsController from '../controllers/newsController.js';

const router = express.Router();

export default (newsService) => {
    const newsController = new NewsController(newsService);

    router.get('/', newsController.getAllNews.bind(newsController));
    router.get('/:id', newsController.getNewsById.bind(newsController));

    return router;
}; 