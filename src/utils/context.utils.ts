import { ApiKey } from 'src/api-keys/api-key.entity';

export abstract class ContextUtils {
  static extractUsernameFromRequest(context): string {
    return context.req.user.username || context.req.user.dataValues.username;
  }

  static extractApiKeyFromContext(context): ApiKey {
    return context.user.apiKey;
  }
}
