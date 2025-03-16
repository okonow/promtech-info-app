// src/models/Company.ts
import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/db.ts';
import { ModelStaticWithAssociations } from './common.ts';

interface CompanyAttributes {
  id: string;
  name: string;
  address?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

type CompanyCreationAttributes = Optional<CompanyAttributes, 'id'>;

interface CompanyInstance
  extends Model<CompanyAttributes, CompanyCreationAttributes>,
    CompanyAttributes {}

const Company: ModelStaticWithAssociations<CompanyInstance> = sequelize.define(
  'Company',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: DataTypes.STRING,
  },
  {
    tableName: 'companies',
    timestamps: true,
  }
) as ModelStaticWithAssociations<CompanyInstance>;

Company.associate = (models) => {
  Company.hasMany(models.User, { foreignKey: 'company_id' });
  Company.hasMany(models.Contact, { foreignKey: 'company_id' });
  Company.hasMany(models.News, { foreignKey: 'company_id' });
};

export default Company;