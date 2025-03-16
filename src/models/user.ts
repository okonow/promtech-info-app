// src/models/User.ts
import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/db.ts';
import { ModelStaticWithAssociations } from './common.ts';

interface UserAttributes {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  phone_number?: string;
  position?: string;
  department?: string;
  role: 'admin' | 'user';
  phone?: string;
  company_id: string;
  createdAt?: Date;
  updatedAt?: Date;
}

type UserCreationAttributes = Optional<UserAttributes, 'id'>;

interface UserInstance
  extends Model<UserAttributes, UserCreationAttributes>,
    UserAttributes {}

const User: ModelStaticWithAssociations<UserInstance> = sequelize.define('User', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  first_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  phone_number: DataTypes.STRING,
  position: DataTypes.STRING,
  department: DataTypes.STRING,
  role: {
    type: DataTypes.ENUM('admin', 'user'),
    defaultValue: 'user'
  },
  phone: DataTypes.STRING,
  company_id: {
    type: DataTypes.UUID,
    allowNull: false,
  }
}, {
  tableName: 'users',
  timestamps: true
}) as ModelStaticWithAssociations<UserInstance>;

User.associate = models => {
  User.belongsTo(models.Company, { foreignKey: 'company_id' });
  User.hasMany(models.Contact, { foreignKey: 'user_id' });
  User.hasMany(models.Document, { foreignKey: 'uploaded_by' });
  User.hasMany(models.News, { foreignKey: 'author_id' });
  User.hasMany(models.Notification, { foreignKey: 'user_id' });
};

export default User;