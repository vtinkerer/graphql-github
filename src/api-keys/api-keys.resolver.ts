import { UseGuards } from '@nestjs/common';
import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { LocalAuthGuard } from '../auth/local-auth.guard';
import { ContextUtils } from '../utils/context.utils';
import { ApiKey } from './api-key.entity';
import { ApiKeysService } from './api-keys.service';
import { ApiKeyAuthGuard } from './custom-auth.guard';
import { GetApiKeyUserInput } from './dto/get-api-key-user-input';

@Resolver(() => ApiKey)
export class ApiKeysResolver {
  constructor(private apiKeysService: ApiKeysService) {}

  @Query(() => ApiKey)
  @UseGuards(LocalAuthGuard)
  authData(
    @Args('getApiKeyUserInput') getApiKeyUserInput: GetApiKeyUserInput,
    @Context() context,
  ) {
    return ContextUtils.extractApiKeyFromContext(context);
  }

  @Mutation(() => ApiKey)
  @UseGuards(ApiKeyAuthGuard)
  async rotateApiKey(@Context() context) {
    console.log(Object.keys(context));
    const username = ContextUtils.extractUsernameFromRequest(context);
    return this.apiKeysService.rotateApiKey(username);
  }
}
