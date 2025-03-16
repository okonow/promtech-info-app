// src/models/Contact.ts
import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/db.ts';
import { ModelStaticWithAssociations } from './common.ts';

interface ContactAttributes {
  id: string;
  user_id: string;
  phone: string;
  position?: string;
  department?: string;
  company_id: string;
}

type ContactCreationAttributes = Optional<ContactAttributes, 'id'>;

interface ContactInstance
  extends Model<ContactAttributes, ContactCreationAttributes>,
    ContactAttributes {}

const Contact: ModelStaticWithAssociations<ContactInstance> = sequelize.define('Contact', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  user_id: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false
  },
  position: DataTypes.STRING,
  department: DataTypes.STRING,
  company_id: {
    type: DataTypes.UUID,
    allowNull: false,
  }
}, {
  tableName: 'contacts',
  timestamps: false
}) as ModelStaticWithAssociations<ContactInstance>;

Contact.associate = models => {
  Contact.belongsTo(models.User, { foreignKey: 'user_id' });
  Contact.belongsTo(models.Company, { foreignKey: 'company_id' });
};

export default Contact;