<table align="center">
  <tr>
     <td align="center" width="9999"> <a href="https://identix.space/" target="blank"><img src="./logo.png" align="center" width="120" alt="Identix.Space"></a> </td>
  </tr>
</table>

# Identix Everscale API

## Description

The GraphQL API that implements the basic functions for work with the Everscale blockchain (https://everscale.network/)

As a dependence the API uses Identix Everscale SDK: https://www.npmjs.com/package/identix-everscale-sdk

## Installation

```bash
$ npm install
$ npm run build
$ npm run start
```

## Test

```bash
# unit tests
$ npm run test
```
## Example

https://everscale-api.identix.space/graphql

## Authorization

The application uses token authorization. Each request should include header "authorization":

```
headers: {
  "authorization": "bearer <TOKEN>"
}
```

## API functions

Queries:
```
checkTokensTransactions(address: String!, tokens: [TokenInfo!]!): Boolean!

input TokenInfo {
  title: String!
  ownerTransferType: OwnerTransferType!
  operationKind: OperationKind!
}
```

Mutations:
```
transferEver(address: String!, amount: Float!): TransferResultType!
  transferTip3Token(
    address: String!
    amount: Float!
    token: String!
  ): TransferResultType!
  
transferTip3Token(
    address: String!
    amount: Float!
    token: String!
  ): TransferResultType!
    
type TransferResultType {
  transactionHash: String!
}  
```
