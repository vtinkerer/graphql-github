import { API_KEYS_REPOSITORY } from 'src/constants';
import { ApiKey } from './api-key.entity';

export const apiKeysProviders = [
  {
    provide: API_KEYS_REPOSITORY,
    useValue: ApiKey,
  },
];
