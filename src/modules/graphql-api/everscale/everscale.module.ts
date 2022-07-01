import { Module } from '@nestjs/common';
import { IdentixEverscaleSdkModule } from 'identix-everscale-sdk';
import { everscaleClientSDKConfigurationFactory } from '@/modules/graphql-api/everscale/factories/everscale-configuration.factory';
import { EverscaleTransfersResolvers } from '@/modules/graphql-api/everscale/resolvers/everscale-transfers.resolvers';

@Module({
  imports: [IdentixEverscaleSdkModule.forRoot(everscaleClientSDKConfigurationFactory())],
  providers: [EverscaleTransfersResolvers],
  exports: [],
})
export class EverscaleModule {}
