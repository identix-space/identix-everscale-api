export interface BaseTransaction {
  transactionHash: string;
}

export interface BaseTransactionsSearchParams {
  address?: string;
  limit?: number;
}

export interface BaseBlockchainClient<TransactionsSearchParams, Transaction> {
  transfer(
    address: string,
    amount: number,
    callback?: (transactionHash: string) => Promise<void>,
  ): Promise<{ transactionHash: string }>;
  getTransactions(params: TransactionsSearchParams): Promise<Transaction[]>;
}
