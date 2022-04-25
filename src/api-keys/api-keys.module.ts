import { Module } from '@nestjs/common';
import { ApiKeysService } from './api-keys.service';
import { ApiKeysResolver } from './api-keys.resolver';
import { apiKeysProviders } from './api-keys.providers';
import { ApiKeyStrategy } from './api-key.strategy';

@Module({
  providers: [
    ApiKeysService,
    ApiKeysResolver,
    ...apiKeysProviders,
    ApiKeyStrategy,
  ],
  exports: [ApiKeysService, ApiKeysResolver],
  imports: [],
  controllers: [],
})
export class ApiKeysModule {}
