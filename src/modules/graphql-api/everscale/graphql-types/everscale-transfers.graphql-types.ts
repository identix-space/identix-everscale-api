import { Field, ObjectType, InputType } from '@nestjs/graphql';
import { registerEnumType } from '@nestjs/graphql';

export enum OwnerTransferType {
  send = 'send',
  receive = 'receive',
}

registerEnumType(OwnerTransferType, {
  name: 'OwnerTransferType',
});

export enum OperationKind {
  send = 'send',
  receive = 'receive',
  mint = 'mint',
}

registerEnumType(OperationKind, {
  name: 'OperationKind',
});


@ObjectType()
export class TransferResultType {
  @Field(() => String, { nullable: false })
  transactionHash!: string;
}

@InputType()
export class TokenInfo {
  @Field(() => String, { nullable: false })
  title!: string;

  @Field(() => OwnerTransferType, { nullable: false })
  ownerTransferType!: OwnerTransferType;

  @Field(() => OperationKind, { nullable: false })
  operationKind!: OperationKind;
}
