class DepartmentController {
    constructor(departmentService) {
        this.departmentService = departmentService;
    }

    async getAllDepartments(req, res) {
        try {
            const departments = await this.departmentService.getAllDepartments();
            res.json(departments);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getDepartmentById(req, res) {
        try {
            const department = await this.departmentService.getDepartmentById(req.params.id);
            res.json(department);
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }

    async createDepartment(req, res) {
        try {
            const department = await this.departmentService.createDepartment(req.body);
            res.status(201).json(department);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async updateDepartment(req, res) {
        try {
            const department = await this.departmentService.updateDepartment(req.params.id, req.body);
            res.json(department);
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }

    async deleteDepartment(req, res) {
        try {
            await this.departmentService.deleteDepartment(req.params.id);
            res.status(204).send();
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }
}

export default DepartmentController; 