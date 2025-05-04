class DepartmentRepository {
    constructor(Department) {
        this.Department = Department;
    }

    async findAll() {
        return await this.Department.findAll();
    }

    async findById(id) {
        return await this.Department.findByPk(id);
    }

    async create(departmentData) {
        return await this.Department.create(departmentData);
    }

    async update(id, departmentData) {
        const department = await this.Department.findByPk(id);
        if (!department) {
            return null;
        }
        return await department.update(departmentData);
    }

    async delete(id) {
        const department = await this.Department.findByPk(id);
        if (!department) {
            return null;
        }
        await department.destroy();
        return department;
    }
}

export default DepartmentRepository; 