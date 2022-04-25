import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Github {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
