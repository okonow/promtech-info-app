import { Table, Column, Model, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { v4 as uuidv4 } from 'uuid';
import User from './user';

@Table
export default class Document extends Model<Document> {
  @Column({
    type: 'UUID',
    primaryKey: true,
    defaultValue: () => uuidv4(),
  })
  id!: string;

  @Column
  title!: string;

  @Column('TEXT')
  description?: string;

  @Column
  fileUrl!: string;

  @Column
  category!: string;

  @Column({
    type: 'ENUM',
    values: ['draft', 'pending', 'approved', 'rejected'],
    defaultValue: 'draft'
  })
  status!: string;

  @ForeignKey(() => User)
  @Column({ type: 'UUID' })
  uploader_id!: string;

  @BelongsTo(() => User)
  uploader!: User;
  
}
