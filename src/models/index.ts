// src/models/index.ts
import { Sequelize } from 'sequelize';
import Company from './company.ts';
import Contact from './contact.ts';
import Document from './document.ts';
import News from './news.ts';
import Notification from './notification.ts';
import User from './user.ts';
import { ModelStaticWithAssociations } from './common.ts';

const models = {
  Company,
  Contact,
  Document,
  News,
  Notification,
  User,
};

type Models = typeof models;

type ModelsRecord = Record<keyof Models, ModelStaticWithAssociations>;

Object.values(models as ModelsRecord).forEach(model => {
  model.associate(models as ModelsRecord);
});

export { Company, Contact, Document, News, Notification, User };
export type { Models };