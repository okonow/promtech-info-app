class NewsController {
    constructor(newsService) {
        this.newsService = newsService;
    }

    async getAllNews(req, res) {
        try {
            const { company_id } = req.query;
            
            if (!company_id) {
                return res.status(400).json({ 
                    message: 'Company ID is required in query parameters' 
                });
            }

            const news = await this.newsService.getAllNews(company_id);
            res.json(news);
        } catch (error) {
            res.status(500).json({ 
                message: 'Error fetching news',
                error: error.message 
            });
        }
    }

    async getNewsById(req, res) {
        try {
            const { id } = req.params;
            
            if (!id) {
                return res.status(400).json({ 
                    message: 'News ID is required in URL parameters' 
                });
            }

            const news = await this.newsService.getNewsById(id);
            res.json(news);
        } catch (error) {
            if (error.message === 'News not found') {
                return res.status(404).json({ 
                    message: error.message 
                });
            }
            res.status(500).json({ 
                message: 'Error fetching news',
                error: error.message 
            });
        }
    }
}

export default NewsController;
