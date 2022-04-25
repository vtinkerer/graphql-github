import { Field, ObjectType } from '@nestjs/graphql';
import { User } from 'src/users/user.entity';

@ObjectType()
export class LoginReponse {
  @Field()
  apiKey: string;

  @Field(() => User)
  user: User;
}
