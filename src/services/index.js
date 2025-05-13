import CompanyService from './companyService.js';
import CompanyRepository from '../repositories/companyRepository.js';

import DepartmentService from './departmentService.js';
import DepartmentRepository from '../repositories/departmentRepository.js';

import UserService from './userService.js';
import UserRepository from '../repositories/userRepository.js';

import DocumentService from './documentService.js';
import DocumentRepository from '../repositories/documentRepository.js';

import NewsService from '../repositories/newsRepository.js';
import NewsRepository from '../repositories/newsRepository.js';

import { sequelize } from '../db.js';

const companyRepository = new CompanyRepository(sequelize.models.Company);
const companyService = new CompanyService(companyRepository);

const departmentRepository = new DepartmentRepository(sequelize.models.Department);
const departmentService = new DepartmentService(departmentRepository);

const userRepository = new UserRepository(sequelize.models.User);
const userService = new UserService(userRepository);

const documentRepository = new DocumentRepository(sequelize.models.Document);
const documentService = new DocumentService(documentRepository);

const newsRepository = new NewsRepository(sequelize.models.News);
const newsService = new NewsService(newsRepository);


export {
    companyService,
    departmentService,
    userService,
    documentService,
    newsService
}; 