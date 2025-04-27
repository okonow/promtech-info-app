class NewsRepository {
    constructor(News) {
        this.News = News;
    }

    async getAllNews(companyId, options = {}) {
        const defaultOptions = {
            where: { company_id: companyId },
            attributes: ['id', 'title', 'cover_image', 'created_at'],
            include: [
                {
                    model: this.News.sequelize.models.User,
                    as: 'author',
                    attributes: ['id', 'first_name', 'last_name']
                },
                {
                    model: this.News.sequelize.models.Company,
                    attributes: ['id', 'name']
                }
            ],
            order: [['created_at', 'DESC']]
        };

        const finalOptions = { ...defaultOptions, ...options };
        return await this.News.findAll(finalOptions);
    }

    async getNewsById(id) {
        const options = {
            attributes: ['id', 'title', 'content', 'cover_image', 'created_at'],
            include: [
                {
                    model: this.News.sequelize.models.User,
                    as: 'author',
                    attributes: ['id', 'first_name', 'last_name']
                },
                {
                    model: this.News.sequelize.models.Company,
                    attributes: ['id', 'name', 'description']
                }
            ]
        };

        return await this.News.findByPk(id, options);
    }
}

export default NewsRepository;
