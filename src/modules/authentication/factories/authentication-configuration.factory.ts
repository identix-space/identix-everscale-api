import { registerAs } from '@nestjs/config';
import { AuthorizationConfiguration } from '../types';
import * as Joi from 'joi';
import { join } from 'path';
import { readFileAsUTF8Sync } from '@/libs/common/helpers/files.helpers';

export default registerAs('authorization', (): AuthorizationConfiguration => {
  // TOKENS_PATH = `./.secrets/tokens.json`
  const tokensPath = Joi.attempt(process.env.TOKENS_PATH, Joi.string().required());
  const tokensAbsPath = join(process.cwd(), tokensPath);
  const authorizationTokens: string[] = Joi.attempt(
    JSON.parse(readFileAsUTF8Sync(tokensAbsPath)),
    Joi.array().items(Joi.string()).required(),
  );

  return {
    authorizationTokenHeaderName: process.env.AUTHORIZATION_TOKEN_HEADER_NAME || 'authorization',
    authorizationTokens,
  };
});
