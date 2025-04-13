import { Table, Column, Model, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { v4 as uuidv4 } from 'uuid';
import User from './User';

@Table
export default class Document extends Model<Document> {
  @Column({
    type: 'UUID',
    primaryKey: true,
    defaultValue: () => uuidv4(),
  })
  id: string;

  @Column
  title: string;

  @Column('TEXT')
  description: string;

  @Column
  fileUrl: string;

  @Column
  category: string;

  @ForeignKey(() => User)
  @Column({ type: 'UUID' })
  uploadedBy: string;

  @BelongsTo(() => User)
  uploader: User;

  @Column({ defaultValue: new Date() })
  createdAt: Date;
}
