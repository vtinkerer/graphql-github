import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';

import { DatabaseModule } from './database/database.module';
import { UsersModule } from './users/users.module';
import { ApiKeysModule } from './api-keys/api-keys.module';
import { AuthModule } from './auth/auth.module';
import { GithubModule } from './github/github.module';
import { AppResolver } from './app.resolver';
import { AppService } from './app.service';
@Module({
  imports: [
    UsersModule,
    DatabaseModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      debug: false,
    }),
    ApiKeysModule,
    AuthModule,
    GithubModule,
  ],
  controllers: [],
  providers: [AppResolver, AppService],
})
export class AppModule {}
