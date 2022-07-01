import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { LoggingService } from '@/libs/logging/services/logging.service';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = await app.resolve(LoggingService);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }

  const port = process.env.HTTP_PORT || 3000;

  await app.listen(port);

  logger.log(`Identix.space Everscale GraphQL API on http://0.0.0.0:${port}`);
}

bootstrap();

declare const module: any;
