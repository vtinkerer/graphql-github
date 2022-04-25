import dotenv from 'dotenv';
dotenv.config();

export abstract class Env {
  public static PORT = process.env.PORT;
  public static GITHUB_TOKEN = process.env.GITHUB_TOKEN;
}
