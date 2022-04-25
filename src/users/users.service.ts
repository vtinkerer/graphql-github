import { Inject, Injectable } from '@nestjs/common';
import { USERS_REPOSITORY } from 'src/constants';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';
import { RegisterUserInput } from 'src/auth/dto/register-user-input';
import { ApiKey } from 'src/api-keys/api-key.entity';

@Injectable()
export class UsersService {
  constructor(
    @Inject(USERS_REPOSITORY)
    private usersRepository: typeof User,
  ) {}

  async createUser(registerUserInput: RegisterUserInput): Promise<User> {
    const { username, password } = registerUserInput;
    const passwordHash = await bcrypt.hash(password, 10);

    const user = await this.usersRepository.create({
      username,
      password: passwordHash,
    });

    return user;
  }

  async getUserWithApiKey(username: string): Promise<User> {
    return this.usersRepository.findOne({
      where: { username },
      include: [
        {
          model: ApiKey,
          required: true,
        },
      ],
    });
  }
}
