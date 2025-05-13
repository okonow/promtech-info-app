import express from 'express';
import NewsController from '../controllers/newsController.js';

const router = express.Router();

export default (newsService) => {
    const newsController = new NewsController(newsService);

    router.get('/', newsController.getAllNews.bind(newsController));
    router.get('/:id', newsController.getNewsById.bind(newsController));
    router.get('/company/:company_id', newsController.getNewsByCompanyId.bind(newsController));

    return router;
}; 