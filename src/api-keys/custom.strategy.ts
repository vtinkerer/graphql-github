import { Strategy } from 'passport-custom';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ApiKeysService } from './api-keys.service';

@Injectable()
export class CustomStrategy extends PassportStrategy(Strategy) {
  constructor(private apiKeysService: ApiKeysService) {
    super();
  }

  async validate(req): Promise<any> {
    console.log(`Headers: ${JSON.stringify(req.headers)}`);
    const user = await this.apiKeysService.getUserByApiKey(
      req.headers.authorization,
    );
    console.log(`user: ${JSON.stringify(user)}`);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
