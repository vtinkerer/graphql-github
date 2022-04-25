import { Strategy } from 'passport-custom';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ApiKeysService } from './api-keys.service';

@Injectable()
export class ApiKeyStrategy extends PassportStrategy(Strategy) {
  constructor(private apiKeysService: ApiKeysService) {
    super();
  }

  async validate(req): Promise<any> {
    const user = await this.apiKeysService.getUserByApiKey(
      req.headers.authorization,
    );
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
