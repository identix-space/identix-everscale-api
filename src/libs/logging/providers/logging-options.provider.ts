import { Params } from 'nestjs-pino';
import { ConfigService } from '@nestjs/config';

import { LoggingOptions } from '../types';

export const loggingFactory =
  (loggingOptions: LoggingOptions) =>
  (configService: ConfigService): Params => {
    const { serviceName } = loggingOptions;

    const pinoHttp = {
      name: serviceName,
      level: configService.get<string>('LOG_LEVEL') || 'info',
    };

    return { pinoHttp };
  };
