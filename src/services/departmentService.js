class DepartmentService {
    constructor(departmentRepository) {
        this.departmentRepository = departmentRepository;
    }

    async getAllDepartments() {
        return await this.departmentRepository.findAll();
    }

    async getDepartmentById(id) {
        const department = await this.departmentRepository.findById(id);
        if (!department) {
            throw new Error('Department not found');
        }
        return department;
    }

    async createDepartment(departmentData) {
        if (!departmentData.name || !departmentData.company_id) {
            throw new Error('Name and company_id are required');
        }
        return await this.departmentRepository.create(departmentData);
    }

    async updateDepartment(id, departmentData) {
        const department = await this.departmentRepository.update(id, departmentData);
        if (!department) {
            throw new Error('Department not found');
        }
        return department;
    }

    async deleteDepartment(id) {
        const department = await this.departmentRepository.delete(id);
        if (!department) {
            throw new Error('Department not found');
        }
        return department;
    }
}

export default DepartmentService; 