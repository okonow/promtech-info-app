
// export interface User {
//     id: string;
//     first_name: string;
//     middle_name: string;
//     last_name: string;
//     email: string;
//     password: string;
//     phone_number: string;
//     position: string;
//     department: string;
//     role: 'admin' | 'user';
//     phone: string;
//     company_id: string;
//     createdAt: Date;
//     updatedAt: Date;
//   }
  
import { Table, Column, Model, HasMany, Scopes, BelongsTo, PrimaryKey } from 'sequelize-typescript';
import Company from './companies';
import Department from './departments';
import { v4 as uuidv4 } from 'uuid';

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

    @Column
    last_name!: string;

    // @Column
    // middle_name?: string; нет отчества?
  
    @Column
    email!: string;

    @Column
    password!: string;

    @Column
    phone_number!: string;

    @Column({
      type: 'UUID'
    })
    position_id!: string;

    @Column({
      type: 'UUID'
    })
    company_id!: string;

    @ForeignKey(() => Department)
    @Column({
      type: 'UUID'
    })
    department_id!: string;

    @Column({
      type: 'UUID'
    })
    role_id!: string;

    @Column({ defaultValue: new Date() })
    createdAt!: Date;

    @BelongsTo(() => Company)
    department!: Company;

    // @Column
    // birthday?: Date; нет ДР?
  

  }