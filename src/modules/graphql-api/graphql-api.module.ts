import { Module } from '@nestjs/common';

import { EverscaleModule } from '@/modules/graphql-api/everscale/everscale.module';

@Module({
  imports: [EverscaleModule],
})
export class GraphqlApiModule {}
