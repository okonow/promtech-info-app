import { Table, Column, Model, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { v4 as uuidv4 } from 'uuid';
import User from './user';
import Company from './companies';

@Table({
  timestamps: true, //createdAt updateAt будут создаваться автоматически
})
export default class News extends Model<News>  {
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
  author_id!: string;

  @BelongsTo(() => User)
  author!: User;

  @ForeignKey(() => Company)
  @Column({ type: 'UUID' })
  company_id!: string;

  @BelongsTo(() => Company)
  company!: Company;

}
