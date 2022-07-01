import StatusCodes from '@/libs/common/types/status-codes';

import { ApolloError } from 'apollo-server-express';

export default class GraphQLError extends ApolloError {
  constructor({
    message,
    code,
    extension,
    internalData,
  }: {
    message: string;
    code?: StatusCodes;
    extension?: Record<string, unknown>;
    internalData?: Record<string, unknown>;
  }) {
    const extensionRes = extension || {};

    extensionRes.internalData = internalData;
    super(message, code ? String(code) : undefined, extensionRes);
  }
}

export const getGraphQLError = (message: string, code: StatusCodes) =>
  new GraphQLError({ message, code });
