import { Model, DataTypes } from 'sequelize';
import { v4 as uuidv4 } from 'uuid';

class Company extends Model {
    static init(sequelize) {
        super.init({
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: () => uuidv4()
            },
            name: DataTypes.STRING,
            description: DataTypes.TEXT,
            address: DataTypes.STRING
        }, {
            sequelize,
            modelName: 'Company',
            tableName: 'companies'
        });
    }

    static associate(models) {
        this.hasMany(models.Department, { foreignKey: 'company_id' });
        this.hasMany(models.User, { foreignKey: 'company_id' });
        this.hasMany(models.News, { foreignKey: 'company_id' });
    }
}

export default Company; 