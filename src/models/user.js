import { Model, DataTypes } from 'sequelize';
import { v4 as uuidv4 } from 'uuid';

class User extends Model {
    static init(sequelize) {
        super.init({
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: () => uuidv4()
            },
            first_name: DataTypes.STRING,
            corporate_login: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            },
            last_name: DataTypes.STRING,
            middle_name: DataTypes.STRING,
            email: DataTypes.STRING,
            password: DataTypes.STRING,
            phone_number: DataTypes.STRING,
            corporate_phone_number: {
                type: DataTypes.STRING,
                defaultValue: function() {
                    return this.phone_number;
                }
            },
            birthday: DataTypes.DATE,
            role: {
                type: DataTypes.ENUM('admin', 'user'),
                defaultValue: 'user'
            },
            position_id: {
                type: DataTypes.UUID,
                references: {
                    model: 'positions',
                    key: 'id'
                }
            },
            department_id: {
                type: DataTypes.UUID,
                references: {
                    model: 'departments',
                    key: 'id'
                }
            },
            refresh_token: DataTypes.STRING
        }, {
            sequelize,
            modelName: 'User',
            tableName: 'users',
            timestamps: true
        });
    }

    static associate(models) {
        this.belongsTo(models.Department, { foreignKey: 'department_id' });
        this.belongsTo(models.Position, { foreignKey: 'position_id' });
        this.hasMany(models.News, { foreignKey: 'user_id' });
        this.hasMany(models.Notification, { foreignKey: 'user_id' });
    }
}

export default User; 