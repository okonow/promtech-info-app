class CompanyRepository {
    constructor(Company) {
        this.Company = Company;
    }

    async getCompanyById(id, options = {}) {
        const defaultOptions = {
            where: { id },
            include: [
                {
                    model: this.Company.sequelize.models.Department,
                    attributes: ['id', 'name']
                }
            ]
        };

        const finalOptions = { ...defaultOptions, ...options };
        return await this.Company.findOne(finalOptions);
    }

    async getAllCompanies(options = {}) {
        const defaultOptions = {
            attributes: ['id', 'name', 'description'],
            include: [
                {
                    model: this.Company.sequelize.models.Department,
                    attributes: ['id', 'name']
                }
            ],
            order: [['name', 'ASC']]
        };

        const finalOptions = { ...defaultOptions, ...options };
        return await this.Company.findAll(finalOptions);
    }

    async createCompany(companyData) {
        return await this.Company.create(companyData);
    }

    async updateCompany(id, companyData) {
        const [updatedRows] = await this.Company.update(companyData, {
            where: { id },
            returning: true
        });
        
        if (updatedRows === 0) {
            throw new Error('Company not found');
        }
        
        return await this.getCompanyById(id);
    }

    async deleteCompany(id) {
        const deletedRows = await this.Company.destroy({
            where: { id }
        });
        
        if (deletedRows === 0) {
            throw new Error('Company not found');
        }
        
        return true;
    }
}

export default CompanyRepository; 