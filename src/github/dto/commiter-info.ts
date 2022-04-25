import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CommiterInfo {
  @Field()
  login: string;

  @Field(() => Int)
  id: number;

  @Field()
  avatar_url: string;
}
