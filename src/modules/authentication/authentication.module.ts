import { PassportModule } from '@nestjs/passport';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { TokensStrategy } from './strategies';
import AuthenticationConfigurationFactory from '@/modules/authentication/factories/authentication-configuration.factory';

@Module({
  imports: [
    ConfigModule.forFeature(AuthenticationConfigurationFactory),
    PassportModule.register({ defaultStrategy: 'tokens' }),
  ],
  providers: [TokensStrategy],
  exports: [],
})
export class AuthenticationModule {}
