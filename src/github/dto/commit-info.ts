import { Field, ObjectType } from '@nestjs/graphql';
import { CommiterInfo } from './commiter-info';

@ObjectType()
export class CommitInfo {
  @Field()
  sha: string;

  @Field()
  message: string;

  @Field(() => CommiterInfo, { nullable: true })
  commiterInfo?: CommiterInfo;

  @Field()
  date: string;

  @Field()
  url: string;
}
