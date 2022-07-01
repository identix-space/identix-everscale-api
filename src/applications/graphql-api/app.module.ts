import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';

import { LoggingModule } from '@/libs/logging/logging.module';
import { AppLoggerMiddleware } from '@/libs/logging/middlewares/app-logger.middleware';
import { GraphQLAppModule } from '@/libs/graphql/graphql.module';

import { AuthenticationModule } from '@/modules/authentication/authentication.module';
import { GraphqlApiModule } from '@/modules/graphql-api/graphql-api.module';

@Module({
  imports: [
    GraphQLAppModule.forRoot(),
    LoggingModule.forRoot({ serviceName: 'Identix.Space GraphQL API' }),
    AuthenticationModule,
    GraphqlApiModule,
  ],
  providers: [],
  controllers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(AppLoggerMiddleware).forRoutes('*');
  }
}
