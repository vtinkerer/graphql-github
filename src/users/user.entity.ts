import { Field, ObjectType } from '@nestjs/graphql';
import { Table, Column, Model, HasOne } from 'sequelize-typescript';
import { ApiKey } from 'src/api-keys/api-key.entity';

@Table
@ObjectType()
export class User extends Model {
  @Column({ primaryKey: true })
  @Field()
  username: string;

  @Column({ allowNull: false })
  password: string;

  @HasOne(() => ApiKey)
  apiKey: ApiKey;
}
