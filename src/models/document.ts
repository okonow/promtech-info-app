// src/models/Document.ts
import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/db.ts';
import { ModelStaticWithAssociations } from './common.ts';

interface DocumentAttributes {
  id: string;
  title: string;
  description?: string;
  file_url: string;
  category?: string;
  uploaded_by: string;
  created_at?: Date;
}

type DocumentCreationAttributes = Optional<DocumentAttributes, 'id'>;

interface DocumentInstance
  extends Model<DocumentAttributes, DocumentCreationAttributes>,
    DocumentAttributes {}

const Document: ModelStaticWithAssociations<DocumentInstance> = sequelize.define('Document', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: DataTypes.TEXT,
  file_url: {
    type: DataTypes.STRING,
    allowNull: false
  },
  category: DataTypes.STRING,
  uploaded_by: {
    type: DataTypes.UUID,
    allowNull: false,
  }
}, {
  tableName: 'documents',
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: false
}) as ModelStaticWithAssociations<DocumentInstance>;

Document.associate = models => {
  Document.belongsTo(models.User, { foreignKey: 'uploaded_by' });
};

export default Document;