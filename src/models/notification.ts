import { Table, Column, Model, ForeignKey, BelongsTo, Index } from 'sequelize-typescript';
import { v4 as uuidv4 } from 'uuid';
import User from './user';

@Table
export default class Notification extends Model<Notification> {
  @Index
  @Column({
    type: 'UUID',
    primaryKey: true,
    defaultValue: () => uuidv4(),
  })
  id!: string;

  @ForeignKey(() => User)
  @Column({ type: 'UUID' })
  userId!: string;

  @BelongsTo(() => User)
  user!: User;

  @Column('TEXT')
  message!: string;

  @Column({ type: 'BOOLEAN', defaultValue: false })
  read!: boolean;

  @Column({ defaultValue: new Date() })
  createdAt!: Date;
}
