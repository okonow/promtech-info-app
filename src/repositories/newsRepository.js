class NewsRepository {
    constructor(News, models) {
        this.News = News;
        this.models = models;
    }

    async getAllNews(companyId, options = {}) {
        const defaultOptions = {
            where: { company_id: companyId },
            attributes: ['id', 'title', 'cover_image', 'createdAt'],
            include: [
                {
                    model: this.models.User,
                    as: 'author',
                    attributes: ['id', 'first_name', 'last_name']
                },
                {
                    model: this.models.Company,
                    attributes: ['id', 'name']
                }
            ],
            order: [['createdAt', 'DESC']]
        }

        const finalOptions = { ...defaultOptions, ...options };
        return await this.News.findAll(finalOptions);
    }

    async getNewsById(id) {
        const options = {
            attributes: ['id', 'title', 'content', 'cover_image', 'createdAt'],
            include: [
                {
                    model: this.models.User,
                    as: 'author',
                    attributes: ['id', 'first_name', 'last_name']
                },
                {
                    model: this.models.Company,
                    attributes: ['id', 'name', 'description']
                }
            ]
        };

        return await this.News.findByPk(id, options);
    }

    async getNewsByCompanyId(companyId) {
        const options = {
            where: { company_id: companyId },
            attributes: ['id', 'title', 'content', 'cover_image', 'createdAt'],
            include: [
                {
                    model: this.models.User,
                    as: 'author',
                    attributes: ['id', 'first_name', 'last_name']
                },
                {
                    model: this.models.Company,
                    attributes: ['id', 'name', 'description']
                }
            ],
            order: [['createdAt', 'DESC']]
        };

        return await this.News.findAll(options);
    }
}

export default NewsRepository;
