import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true,
    logger: console,
  });
  app.setGlobalPrefix('api');
  await app.listen(3001, '0.0.0.0');
}
bootstrap();
