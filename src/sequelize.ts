import {Sequelize} from 'sequelize-typescript';

export const sequelize = new Sequelize({
  dialect: 'postgres',
  database: 'movies',
  storage: ':memory:',
  models: [__dirname + '/models']
});