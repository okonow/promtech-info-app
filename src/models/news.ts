import { Table, Column, Model, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { v4 as uuidv4 } from 'uuid';
import User from './user';
import Company from './companies';

@Table
export default class News extends Model<News> {
  @Column({
    type: 'UUID',
    primaryKey: true,
    defaultValue: () => uuidv4(),
  })
  id!: string;

  @Column
  title!: string;

  @Column('TEXT')
  content!: string;

  @ForeignKey(() => User)
  @Column({ type: 'UUID' })
  authorId!: string;

  @BelongsTo(() => User)
  author!: User;

  @ForeignKey(() => Company)
  @Column({ type: 'UUID' })
  companyId!: string;

  @BelongsTo(() => Company)
  company!: Company;

  @Column({ defaultValue: new Date() })
  createdAt!: Date;
}
