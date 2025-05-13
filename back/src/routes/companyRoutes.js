import express from 'express';
import CompanyController from '../controllers/companyController.js';

const router = express.Router();

export default (companyService) => {
    const companyController = new CompanyController(companyService);

    router.get('/:id', companyController.getCompanyById.bind(companyController));
    router.get('/', companyController.getAllCompanies.bind(companyController));
    router.post('/', companyController.createCompany.bind(companyController));
    router.put('/:id', companyController.updateCompany.bind(companyController));
    router.delete('/:id', companyController.deleteCompany.bind(companyController));

    return router;
}; 