import { Field, ObjectType } from '@nestjs/graphql';
import {
  Table,
  Column,
  Model,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { User } from '../users/user.entity';

@Table
@ObjectType()
export class ApiKey extends Model {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @ForeignKey(() => User)
  @Column({ allowNull: false, unique: true })
  @Field()
  username: string;

  @Column({ allowNull: false, unique: true })
  @Field()
  apiKey: string;

  @BelongsTo(() => User)
  user: User;
}
