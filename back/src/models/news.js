import { Model, DataTypes } from 'sequelize';
import { v4 as uuidv4 } from 'uuid';

class News extends Model {
    static init(sequelize) {
        super.init({
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: () => uuidv4()
            },
            title: DataTypes.STRING,
            content: DataTypes.TEXT,
            cover_image: {
                type: DataTypes.STRING,
                allowNull: true
            },
            author_id: {
                type: DataTypes.UUID,
                references: {
                    model: 'users',
                    key: 'id'
                }
            },
            company_id: {
                type: DataTypes.UUID,
                references: {
                    model: 'companies',
                    key: 'id'
                }
            }
        }, {
            sequelize,
            modelName: 'News',
            tableName: 'news',
            timestamps: true
        });
    }

    static associate(models) {
        this.belongsTo(models.User, { foreignKey: 'author_id', as: 'author' });
        this.belongsTo(models.Company, { foreignKey: 'company_id' });
    }
}


export default News; 