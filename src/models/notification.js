import { Model, DataTypes } from 'sequelize';
import { v4 as uuidv4 } from 'uuid';

class Notification extends Model {
    static init(sequelize) {
        super.init({
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: () => uuidv4()
            },
            title: DataTypes.STRING,
            message: DataTypes.TEXT,
            read: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            },
            user_id: {
                type: DataTypes.UUID,
                references: {
                    model: 'users',
                    key: 'id'
                }
            }
        }, {
            sequelize,
            modelName: 'Notification',
            tableName: 'notifications',
            timestamps: true
        });
    }

    static associate(models) {
        this.belongsTo(models.User, { foreignKey: 'user_id' });
    }
}

export default Notification;
