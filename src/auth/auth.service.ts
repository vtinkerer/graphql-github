/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { RegisterUserInput } from './dto/register-user-input';
import { RegisterResponse } from './dto/register-response';
import { ApiKeysService } from 'src/api-keys/api-keys.service';
import { User } from 'src/users/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private apiKeysService: ApiKeysService,
  ) {}

  async validateUser(username: string, password: string): Promise<User> {
    const user = await this.usersService.getUserWithApiKey(username);
    if (user && (await bcrypt.compare(password, user.password))) {
      return user;
    }
    return null;
  }

  async register(
    registerUserInput: RegisterUserInput,
  ): Promise<RegisterResponse> {
    const user = await this.usersService.createUser(registerUserInput);
    await this.apiKeysService.rotateApiKey(registerUserInput.username);
    return { user } as RegisterResponse;
  }
}
