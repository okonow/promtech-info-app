class NewsService {
    constructor(newsRepository) {
        this.newsRepository = newsRepository;
    }

    async getAllNews(companyId) {
        try {
            if (!companyId) {
                throw new Error('Company ID is required');
            }
            const news = await this.newsRepository.getAllNews(companyId);
            return news;
        } catch (error) {
            throw new Error('Failed to fetch news: ' + error.message);
        }
    }

    async getNewsById(id) {
        try {
            if (!id) {
                throw new Error('News ID is required');
            }
            const news = await this.newsRepository.getNewsById(id);
            if (!news) {
                throw new Error('News not found');
            }
            return news;
        } catch (error) {
            throw new Error('Failed to fetch news: ' + error.message);
        }
    }

    async getNewsByCompanyId(companyId) {
        try {
            if (!companyId) {
                throw new Error('Company ID is required');
            }
            const news = await this.newsRepository.getNewsByCompanyId(companyId);
            return news;
        } catch (error) {
            throw new Error('Failed to fetch news by company: ' + error.message);
        }
    }
}

export default NewsService;
