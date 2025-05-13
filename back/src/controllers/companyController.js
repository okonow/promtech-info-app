class CompanyController {
    constructor(companyService) {
        this.companyService = companyService;
    }

    async getCompanyById(req, res) {
        try {
            const company = await this.companyService.getCompanyById(req.params.id);
            res.json(company);
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }

    async getAllCompanies(req, res) {
        try {
            const companies = await this.companyService.getAllCompanies();
            res.json(companies);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async createCompany(req, res) {
        try {
            const company = await this.companyService.createCompany(req.body);
            res.status(201).json(company);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async updateCompany(req, res) {
        try {
            const company = await this.companyService.updateCompany(req.params.id, req.body);
            res.json(company);
        } catch (error) {
            if (error.message === 'Company not found') {
                res.status(404).json({ error: error.message });
            } else {
                res.status(400).json({ error: error.message });
            }
        }
    }

    async deleteCompany(req, res) {
        try {
            await this.companyService.deleteCompany(req.params.id);
            res.status(204).send();
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }
}

export default CompanyController; 