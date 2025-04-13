import { Table, Column, Model, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { v4 as uuidv4 } from 'uuid';
import User from './user';
import Company from './companies';

@Table
export default class Contact extends Model<Contact> {
  @Column({
    type: 'UUID',
    primaryKey: true,
    defaultValue: () => uuidv4(),
  })
  id: string;

  @ForeignKey(() => User)
  @Column({ type: 'UUID' })
  userId: string;

  @BelongsTo(() => User)
  user: User;

  @Column
  phone: string;

  @Column
  position: string;

  @Column
  department: string;

  @ForeignKey(() => Company)
  @Column({ type: 'UUID' })
  companyId: string;

  @BelongsTo(() => Company)
  company: Company;
}
