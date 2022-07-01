import { ExecutionContext } from "@nestjs/common";
import { Request } from "express";

export type Headers = { [key: string]: string | number };

export interface ExtendedExecutionContext extends ExecutionContext {
  headers: Headers;
}

export interface ExtendedRequest extends Request {
  userDid: string;
}

export type AuthorizationConfiguration = {
  authorizationTokenHeaderName: string;
  authorizationTokens: string[];
};

