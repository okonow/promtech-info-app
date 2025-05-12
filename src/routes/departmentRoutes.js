import express from 'express';
import DepartmentController from '../controllers/departmentController.js';

const router = express.Router();

export default (departmentService) => {
    const departmentController = new DepartmentController(departmentService);

    router.get('/:id', departmentController.getDepartmentById.bind(departmentController));
    router.get('/', departmentController.getAllDepartments.bind(departmentController));
    router.post('/', departmentController.createDepartment.bind(departmentController));
    router.put('/:id', departmentController.updateDepartment.bind(departmentController));
    router.delete('/:id', departmentController.deleteDepartment.bind(departmentController));

    return router;
}; 