import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { LocalStrategy } from './local.strategy';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'src/users/users.module';
import { ApiKeysModule } from 'src/api-keys/api-keys.module';

@Module({
  providers: [AuthService, AuthResolver, LocalStrategy],
  imports: [PassportModule, UsersModule, ApiKeysModule],
})
export class AuthModule {}
