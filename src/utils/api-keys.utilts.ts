import * as bcrypt from 'bcrypt';

export abstract class ApiKeyUtils {
  static generateRandomKey(data: string): Promise<string> {
    const randString = (Math.random() + 1).toString(36).substring(2);
    return bcrypt.hash(data + randString, 10);
  }
}
