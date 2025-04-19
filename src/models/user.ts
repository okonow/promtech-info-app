import { Table, Column, Model, HasMany, BelongsTo, ForeignKey } from 'sequelize-typescript';
import Company from './companies';
import Department from './departments';
import { v4 as uuidv4 } from 'uuid';
import Position from './positions';
import News from './news';
import Notification from './notifications';
@Table
export default class User extends Model<User> {
  
  @Column({
    type: 'UUID',
    primaryKey: true,
    defaultValue: () => uuidv4(),
  })
  id!: string;

  @Column
  first_name!: string;

  @Column({
    allowNull: false,
    unique: true
  })
  corporate_login!: string;

  @Column
  last_name!: string;

  @Column
  middle_name?: string;

  @Column
  email!: string;

  @Column
  password!: string;

  @Column
  phone_number!: string;

  @Column
  birthday!: Date;

  @Column({
    type: 'ENUM',
    values: ['admin', 'user'],
    defaultValue: 'user'
  })
  role!: string;

  //explicit foreing keys

  @ForeignKey(() => Position)
  @Column({
    type: 'UUID'
  })
  position_id!: string;

  @ForeignKey(() => Company)
  @Column({
    type: 'UUID'
  })
  company_id!: string;

  @ForeignKey(() => Department)
  @Column({
    type: 'UUID'
  })
  department_id!: string;

  //relations with other models

  @BelongsTo(() => Company)
  company!: Company;

  @BelongsTo(() => Department)
  department!: Department;

  @BelongsTo(() => Position)
  position!: Position;

  @HasMany(() => News)
  news!: News[];

  @HasMany(() => Notification)
  notifications!: Notification[];

  @Column
  refresh_token?: string;
}