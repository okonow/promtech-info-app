class CompanyService {
    constructor(companyRepository) {
        this.companyRepository = companyRepository;
    }

    async getCompanyById(id) {
        const company = await this.companyRepository.getCompanyById(id);
        if (!company) {
            throw new Error('Company not found');
        }
        return company;
    }

    async getAllCompanies() {
        try {
            const companies = await this.companyRepository.getAllCompanies();
            return companies;
        } catch (error) {
            throw new Error('Failed to fetch companies: ' + error.message);
        }
    }

    async createCompany(companyData) {
        // Validate required fields
        if (!companyData.name) {
            throw new Error('Company name is required');
        }

        return await this.companyRepository.createCompany(companyData);
    }

    async updateCompany(id, companyData) {
        // Check if company exists
        const existingCompany = await this.companyRepository.getCompanyById(id);
        if (!existingCompany) {
            throw new Error('Company not found');
        }

        return await this.companyRepository.updateCompany(id, companyData);
    }

    async deleteCompany(id) {
        // Check if company exists
        const existingCompany = await this.companyRepository.getCompanyById(id);
        if (!existingCompany) {
            throw new Error('Company not found');
        }

        return await this.companyRepository.deleteCompany(id);
    }
}

export default CompanyService; 