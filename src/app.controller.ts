import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/healthcheck')
  getHealthCheck(): string {
    return 'hello world healthcheck~';
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
