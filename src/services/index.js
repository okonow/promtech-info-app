import UserService from './userService.js';
import UserRepository from '../repositories/userRepository.js';

import CompanyService from './companyService.js';
import CompanyRepository from '../repositories/companyRepository.js';

import DepartmentService from './departmentService.js';
import DepartmentRepository from '../repositories/departmentRepository.js';

import { sequelize } from '../db.js';

const companyRepository = new CompanyRepository(sequelize.models.Company);
const companyService = new CompanyService(companyRepository);

const departmentRepository = new DepartmentRepository(sequelize.models.Department);
const departmentService = new DepartmentService(departmentRepository);

const userRepository = new UserRepository(sequelize.models.User);
const userService = new UserService(userRepository);


export {
    userService,
    departmentService,
    companyService
}; 