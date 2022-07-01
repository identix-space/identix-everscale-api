import { Strategy } from 'passport-custom';
import { PassportStrategy } from '@nestjs/passport';
import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { Headers } from '@/modules/authentication/types';
import { Request } from 'express';
import { ConfigService } from '@nestjs/config';
import { AuthorizationConfiguration } from '../types';

@Injectable()
export class TokensStrategy extends PassportStrategy(Strategy, 'tokens') {
  private readonly authTokenHeaderName: string;
  private authTokens: string[];

  constructor(@Inject(ConfigService) private config: ConfigService) {
    super();

    this.authTokenHeaderName =
      config.get<AuthorizationConfiguration>('authorization')!.authorizationTokenHeaderName;
    this.authTokens = config.get<AuthorizationConfiguration>('authorization')!.authorizationTokens;
  }

  async validate(request: Request): Promise<boolean> {
    const headers = this.getHeaders(request);

    if (!headers || !headers[this.authTokenHeaderName]) {
      throw new UnauthorizedException();
    }

    const headerSessionToken = String(headers[this.authTokenHeaderName]).split('bearer ')[1];

    if (!this.authTokens.includes(headerSessionToken)) {
      throw new UnauthorizedException();
    }

    return true;
  }

  getHeaders(request: Request): Headers {
    if (
      !request.rawHeaders ||
      !Array.isArray(request.rawHeaders) ||
      request.rawHeaders.length === 0
    ) {
      return {};
    }

    return request.rawHeaders.reduce((result, current, index) => {
      if (index % 2 === 0) {
        result[request.rawHeaders[index]] = request.rawHeaders[index + 1];
        return result;
      }
      return result;
    }, {});
  }
}
