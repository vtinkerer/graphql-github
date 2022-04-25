import { Injectable } from '@nestjs/common';
import { Octokit } from 'octokit';
import { GithubUtils } from 'src/utils/github.utils';
import { Env } from '../env';
import { CommitInfo } from './dto/commit-info';

@Injectable()
export class GithubService {
  private octokit = new Octokit({ auth: Env.GITHUB_TOKEN });
  private owner = 'facebook';
  private repo = 'react';

  async getCommitsInfo(per_page: number, page: number): Promise<CommitInfo[]> {
    const resp = await this.octokit
      .request(`GET /repos/{owner}/{repo}/commits`, {
        owner: this.owner,
        repo: this.repo,
        per_page,
        page,
      })
      .then((responce) => GithubUtils.extractInfoFromCommits(responce.data));

    return resp;
  }
}
