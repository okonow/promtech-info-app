import { Model, DataTypes } from 'sequelize';
import { v4 as uuidv4 } from 'uuid';

class Position extends Model {
    static init(sequelize) {
        super.init({
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: () => uuidv4()
            },
            name: DataTypes.STRING,
            description: DataTypes.TEXT
        }, {
            sequelize,
            modelName: 'Position',
            tableName: 'positions'
        });
    }

    static associate(models) {
        this.hasMany(models.User, { foreignKey: 'position_id' });
    }
}

export default Position; 