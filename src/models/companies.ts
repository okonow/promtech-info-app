import { Table, Column, Model, HasMany } from 'sequelize-typescript';
import { v4 as uuidv4 } from 'uuid';
import User from './user';
import News from './news';

@Table({
  timestamps: true, //createdAt updateAt будут создаваться автоматически
})
export default class Company extends Model<Company> {
  @Column({
    type: 'UUID',
    primaryKey: true,
    defaultValue: () => uuidv4(),
  })
  id!: string;

  @Column
  name!: string;

  @Column
  address!: string;

  @HasMany(() => User)
  users?: User[];

  @HasMany(() => News)
  news?: News[];

}
