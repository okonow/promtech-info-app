import { Table, Column, Model, HasMany } from 'sequelize-typescript';
import { v4 as uuidv4 } from 'uuid';
import User from './user';

@Table
export default class Position extends Model<Position> {
  @Column({
    type: 'UUID',
    primaryKey: true,
    defaultValue: () => uuidv4(),
  })
  id!: string;

  @Column
  name!: string;

  @HasMany(() => User)
  users?: User[];

}
