import { Injectable, ExecutionContext } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GqlExecutionContext } from '@nestjs/graphql';
import { ExtendedRequest } from '../types';

@Injectable()
export class TokensAuthGuard extends AuthGuard('tokens') {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const skipAuthentication =
      process.env.SKIP_AUTHENTICATION && process.env.SKIP_AUTHENTICATION === 'true';

    if (skipAuthentication) {
      return true;
    }

    if (!(await super.canActivate(context))) {
      return false;
    }

    return true;
  }

  getRequest(context: ExecutionContext): ExtendedRequest {
    const ctx = GqlExecutionContext.create(context);
    return ctx.getContext().req;
  }
}
