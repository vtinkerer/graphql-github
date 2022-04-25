import { Module } from '@nestjs/common';
import { usersProviders } from './users.providers';
import { UsersService } from './users.service';
import { ApiKeysModule } from 'src/api-keys/api-keys.module';
@Module({
  providers: [UsersService, ...usersProviders],
  imports: [ApiKeysModule],
  exports: [UsersService],
  controllers: [],
})
export class UsersModule {}
