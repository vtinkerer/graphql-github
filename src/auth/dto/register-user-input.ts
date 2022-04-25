import { Field, InputType } from '@nestjs/graphql';
import { Length } from 'class-validator';

@InputType()
export class RegisterUserInput {
  @Length(4, 16)
  @Field()
  username: string;

  @Length(8, 16)
  @Field()
  password: string;
}
