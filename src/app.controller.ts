import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/healthcheck')
  getHealthCheck(): string {
    console.log('healthcheck');
    return 'hello world';
  }

  @Get()
  getHello(): string {
    console.log('hello');
    return this.appService.getHello();
  }
}
