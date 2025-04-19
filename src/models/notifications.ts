import { Table, Column, Model, ForeignKey, BelongsTo, Index, HasMany } from 'sequelize-typescript';
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

  @Column
  title!: string;

  @Column('TEXT')
  message!: string;

  @Column({ type: 'BOOLEAN', defaultValue: false })
  read!: boolean;

  @ForeignKey(() => User)
  @Column({ type: 'UUID' })
  user_id!: string;

  @BelongsTo(() => User)
  user!: User;
  
}
