import { Injectable } from '@nestjs/common';
import { SmileyUtils } from './utils/smiley.utils';

@Injectable()
export class AppService {
  getHelloWorld(): string {
    return 'Hello World ' + SmileyUtils.getRandomSmiley();
  }
}
