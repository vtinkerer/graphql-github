import { Field, ObjectType } from '@nestjs/graphql';
import { CommitInfo } from './commit-info';

@ObjectType()
export class CommitsInfoResponse {
  @Field(() => [CommitInfo])
  data: CommitInfo[];

  @Field()
  hasNext: boolean;
}
