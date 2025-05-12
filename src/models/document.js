import { Model, DataTypes } from 'sequelize';
import { v4 as uuidv4 } from 'uuid';

class Document extends Model {
    static init(sequelize) {
        super.init({
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: () => uuidv4()
            },
            title: DataTypes.STRING,
            description: DataTypes.TEXT,
            fileUrl: DataTypes.STRING,
            category: DataTypes.STRING,
            status: {
                type: DataTypes.ENUM('draft', 'pending', 'approved', 'rejected'),
                defaultValue: 'draft'
            },
            uploader_id: {
                type: DataTypes.UUID,
                references: {
                    model: 'users',
                    key: 'id'
                }
            }
        }, {
            sequelize,
            modelName: 'Document',
            tableName: 'documents',
            timestamps: true
        });
    }

    static associate(models) {
        this.belongsTo(models.User, { foreignKey: 'uploader_id', as: 'uploader' });
    }
}

export default Document; 