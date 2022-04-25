import { CommitInfo } from '../github/dto/commit-info';

export abstract class GithubUtils {
  static extractInfoFromCommits(data): CommitInfo[] {
    return data.map((commit) => ({
      sha: commit.sha,
      message: commit.commit.message,
      commiterInfo: commit.author,
      date: commit.commit.author.date,
      url: commit.html_url,
    }));
  }
}
