import { Model, DataTypes } from 'sequelize';
import { v4 as uuidv4 } from 'uuid';

// User Model
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

// Company Model
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
        this.hasMany(models.User, { foreignKey: 'company_id' });
        this.hasMany(models.News, { foreignKey: 'company_id' });
    }
}

// Department Model
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

// Position Model
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

// News Model
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

// Notification Model
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

// Document Model
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

export { User, Company, Department, Position, News, Document, Notification }; 