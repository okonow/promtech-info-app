// src/routes/company.routes.ts
import { Router } from 'express';
import * as companyController from '../controllers/company-controller.ts';

const router = Router();

router.post('/companies', companyController.createCompany);
router.get('/companies', companyController.getCompanies);

export default router;