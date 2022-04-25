import { Inject, Injectable } from '@nestjs/common';
import { API_KEYS_REPOSITORY } from 'src/constants';
import { User } from 'src/users/user.entity';
import { ApiKeyUtils } from 'src/utils/api-keys.utilts';
import { ApiKey } from './api-key.entity';

@Injectable()
export class ApiKeysService {
  constructor(
    @Inject(API_KEYS_REPOSITORY)
    private apiKeysRepository: typeof ApiKey,
  ) {}

  async rotateApiKey(username: string): Promise<ApiKey> {
    const newApiKey = await ApiKeyUtils.generateRandomKey(username);
    const apiKey = await this.apiKeysRepository.findOne({
      where: { username },
    });

    if (!apiKey)
      return this.apiKeysRepository.create({ username, apiKey: newApiKey });

    apiKey.set({ apiKey: newApiKey });
    return apiKey.save();
  }

  getUserByApiKey(apiKey: string): Promise<User> {
    return this.apiKeysRepository
      .findOne({
        where: { apiKey },
        include: [
          {
            model: User,
            required: true,
          },
        ],
      })
      .then((result) => result.user)
      .catch(() => null);
  }
}
