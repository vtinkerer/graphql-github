import { Sequelize } from 'sequelize-typescript';
import { User } from '../users/user.entity';
import { SEQUELIZE, SQLITE } from '../constants';
import { ApiKey } from 'src/api-keys/api-key.entity';

export const databaseProviders = [
  {
    provide: SEQUELIZE,
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: SQLITE,
      });
      sequelize.addModels([User, ApiKey]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
