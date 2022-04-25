import { Field, ObjectType } from '@nestjs/graphql';
import { CommitInfo } from './commit-info';

@ObjectType()
export class CommitsInfoResponse {
  @Field(() => [CommitInfo])
  commits: CommitInfo[];

  @Field()
  hasNext: boolean;
}
