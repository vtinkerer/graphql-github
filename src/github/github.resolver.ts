import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { GithubService } from './github.service';
import { Github } from './github.entity';
import { UseGuards } from '@nestjs/common';
import { ApiKeyAuthGuard } from 'src/api-keys/custom-auth.guard';
import { CommitInfo } from './dto/commit-info';

@Resolver(() => Github)
export class GithubResolver {
  constructor(private readonly githubService: GithubService) {}

  @Query(() => [CommitInfo])
  @UseGuards(ApiKeyAuthGuard)
  async commits(
    @Args({ name: 'per_page', type: () => Int }) per_page: number,
    @Args({ name: 'page', type: () => Int }) page: number,
  ) {
    return this.githubService.getCommitsInfo(per_page, page);
  }
}
