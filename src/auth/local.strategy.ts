import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from 'src/users/user.entity';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(username: string, password: string): Promise<User> {
    const userWithApiKey = await this.authService.validateUser(
      username,
      password,
    );
    if (!userWithApiKey) {
      throw new UnauthorizedException();
    }
    return userWithApiKey;
  }
}
