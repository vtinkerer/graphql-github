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

  static checkIfHasNext(data, page): boolean {
    const regex = /&page=(\d+)/gm;
    const link = data.headers.link
      .split(',')
      .find((val) => val.includes('rel="last"'));

    if (!link) return false;

    let [last] = link.match(regex);
    last = last.split('=')[1];
    return Number(last) !== page;
  }
}
