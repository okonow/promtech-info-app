import { Model, DataTypes } from 'sequelize';
import { v4 as uuidv4 } from 'uuid';

class Department extends Model {
    static init(sequelize) {
        super.init({
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: () => uuidv4()
            },
            name: DataTypes.STRING,
            description: DataTypes.TEXT,
            company_id: {
                type: DataTypes.UUID,
                references: {
                    model: 'companies',
                    key: 'id'
                }
            }
        }, {
            sequelize,
            modelName: 'Department',
            tableName: 'departments'
        });
    }

    static associate(models) {
        this.belongsTo(models.Company, { foreignKey: 'company_id' });
        this.hasMany(models.User, { foreignKey: 'department_id' });
    }
}

export default Department; 