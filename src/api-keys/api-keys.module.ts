import { Module } from '@nestjs/common';
import { ApiKeysService } from './api-keys.service';
import { ApiKeysResolver } from './api-keys.resolver';
import { apiKeysProviders } from './api-keys.providers';
import { CustomStrategy } from './custom.strategy';

@Module({
  providers: [
    ApiKeysService,
    ApiKeysResolver,
    ...apiKeysProviders,
    CustomStrategy,
  ],
  exports: [ApiKeysService, ApiKeysResolver],
  imports: [],
  controllers: [],
})
export class ApiKeysModule {}
