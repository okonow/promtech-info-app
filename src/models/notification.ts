// src/models/Notification.ts
import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/db.ts';
import { ModelStaticWithAssociations } from './common.ts';

interface NotificationAttributes {
  id: string;
  user_id: string;
  message: string;
  read: boolean;
  created_at?: Date;
}

type NotificationCreationAttributes = Optional<NotificationAttributes, 'id'>;

interface NotificationInstance
  extends Model<NotificationAttributes, NotificationCreationAttributes>,
    NotificationAttributes {}



const Notification: ModelStaticWithAssociations<NotificationInstance> = sequelize.define('Notification', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  user_id: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  message: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  read: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
}, {
  tableName: 'notifications',
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: false
}) as ModelStaticWithAssociations<NotificationInstance>;

Notification.associate = models => {
  Notification.belongsTo(models.User, { foreignKey: 'user_id' });
};

export default Notification;