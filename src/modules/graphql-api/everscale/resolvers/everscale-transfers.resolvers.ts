import { Args, Float, Query, Mutation, Resolver } from '@nestjs/graphql';
import { Inject, UseGuards } from '@nestjs/common';
import { EverscaleClient, IEverscaleClient } from 'identix-everscale-sdk';
import {
  TokenInfo,
  TransferResultType,
} from '@/modules/graphql-api/everscale/graphql-types/everscale-transfers.graphql-types';
import { TokensAuthGuard } from '@/modules/authentication/guards/tokens-auth.guard';

@Resolver()
@UseGuards(TokensAuthGuard)
export class EverscaleTransfersResolvers {
  constructor(@Inject(EverscaleClient) private everscaleSdkClient: IEverscaleClient) {}

  @Query(() => Boolean)
  async checkTokensTransactions(
    @Args('address', { type: () => String }) address: string,
    @Args('tokens', { type: () => [TokenInfo] }) tokens: TokenInfo[],
  ) {
    return this.everscaleSdkClient.checkTokensTransactions(address, tokens, 1000, 3600);
  }

  @Mutation(() => TransferResultType)
  async transferEver(
    @Args('address', { type: () => String }) address: string,
    @Args('amount', { type: () => Float }) amount: number,
  ) {
    return this.everscaleSdkClient.transfer(address, amount);
  }

  @Mutation(() => TransferResultType)
  async transferTip3Token(
    @Args('address', { type: () => String }) address: string,
    @Args('amount', { type: () => Float }) amount: number,
    @Args('token', { type: () => String }) token: string,
  ) {
    return this.everscaleSdkClient.transferTip3Tokens(address, amount, token);
  }
}
