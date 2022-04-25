import { Injectable } from '@nestjs/common';
import { Octokit } from 'octokit';
import { GithubUtils } from 'src/utils/github.utils';
import { Env } from '../env';
import { CommitsInfoResponse } from './dto/commits-info-response';

@Injectable()
export class GithubService {
  private octokit = new Octokit({ auth: Env.GITHUB_TOKEN });
  private owner = 'facebook';
  private repo = 'react';

  async getCommitsInfo(
    per_page: number,
    page: number,
  ): Promise<CommitsInfoResponse> {
    let hasNext: boolean;
    const commits = await this.octokit
      .request(`GET /repos/{owner}/{repo}/commits`, {
        owner: this.owner,
        repo: this.repo,
        per_page,
        page,
      })
      .then((response) => {
        hasNext = GithubUtils.checkIfHasNext(response, page);
        return response;
      })
      .then((response) => GithubUtils.extractInfoFromCommits(response.data));

    return {
      data: commits,
      hasNext,
    };
  }
}
