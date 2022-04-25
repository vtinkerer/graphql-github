import { Query, Resolver } from '@nestjs/graphql';
import { AppService } from './app.service';
import { HelloWorldResponse } from './dto/hello-world-response';

@Resolver()
export class AppResolver {
  constructor(private appService: AppService) {}

  @Query(() => HelloWorldResponse)
  async helloWorld() {
    const message = await this.appService.getHelloWorld();
    return { message } as HelloWorldResponse;
  }
}
