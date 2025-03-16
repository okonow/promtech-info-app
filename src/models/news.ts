// src/models/News.ts
import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/db.ts';
import { ModelStaticWithAssociations } from './common.ts';

interface NewsAttributes {
  id: string;
  title: string;
  content: string;
  author_id: string;
  company_id: string;
  createdAt?: Date;
  updatedAt?: Date;
}

type NewsCreationAttributes = Optional<NewsAttributes, 'id'>;

interface NewsInstance
  extends Model<NewsAttributes, NewsCreationAttributes>,
    NewsAttributes {}

const News: ModelStaticWithAssociations<NewsInstance> = sequelize.define('News', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  author_id: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  company_id: {
    type: DataTypes.UUID,
    allowNull: false,
  }
}, {
  tableName: 'news',
  timestamps: true
}) as ModelStaticWithAssociations<NewsInstance>;

News.associate = (models) => {
  News.belongsTo(models.User, { foreignKey: 'author_id' });
  News.belongsTo(models.Company, { foreignKey: 'company_id' });
};

export default News;