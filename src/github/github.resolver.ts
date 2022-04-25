import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { GithubService } from './github.service';
import { UseGuards } from '@nestjs/common';
import { ApiKeyAuthGuard } from '../api-keys/api-key-auth.guard';
import { CommitsInfoResponse } from './dto/commits-info-response';

@Resolver()
export class GithubResolver {
  constructor(private readonly githubService: GithubService) {}

  @Query(() => CommitsInfoResponse)
  @UseGuards(ApiKeyAuthGuard)
  async commits(
    @Args({ name: 'per_page', type: () => Int }) per_page: number,
    @Args({ name: 'page', type: () => Int }) page: number,
  ) {
    return this.githubService.getCommitsInfo(per_page, page);
  }
}
