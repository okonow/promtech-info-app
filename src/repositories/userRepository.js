class UserRepository {
    constructor(User) {
        this.User = User;
    }

    async getUserById(id, options = {}) {
        const defaultOptions = {
            where: { id },
            include: [
                {
                    model: this.User.sequelize.models.Department,
                    include: [{
                        model: this.User.sequelize.models.Company
                    }]
                },
                {
                    model: this.User.sequelize.models.Position
                }
            ]
        };

        const finalOptions = { ...defaultOptions, ...options };
        return await this.User.findOne(finalOptions);
    }

    async getAllUsers(options = {}) {
        const defaultOptions = {
            attributes: ['id', 'first_name', 'last_name', 'middle_name'],
            include: [
                {
                    model: this.User.sequelize.models.Department,
                    attributes: ['name'],
                    include: [{
                        model: this.User.sequelize.models.Company,
                        attributes: ['name']
                    }]
                },
                {
                    model: this.User.sequelize.models.Position,
                    attributes: ['name']
                }
            ],
            order: [
                ['last_name', 'ASC'],
                ['first_name', 'ASC'],
                ['middle_name', 'ASC']
            ]
        };

        const finalOptions = { ...defaultOptions, ...options };
        return await this.User.findAll(finalOptions);
    }
}

export default UserRepository;