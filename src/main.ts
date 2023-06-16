import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

dotenv.config();

async function bootstrap() {
  console.log(process.env.MESSAGE);
  console.log(process.env.PHASE);
  const app = await NestFactory.create(AppModule);
  await app.listen(80);
}
bootstrap();
