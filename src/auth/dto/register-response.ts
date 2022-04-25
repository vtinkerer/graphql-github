import { Field, ObjectType } from '@nestjs/graphql';
import { User } from 'src/users/user.entity';

@ObjectType()
export class RegisterResponse {
  @Field(() => User)
  user: User;
}
