import { Transactions } from '@tycoon69-labs/crypto'
import * as MagistrateCrypto from '@arkecosystem/core-magistrate-crypto'

Transactions.TransactionRegistry.registerTransactionType(
  MagistrateCrypto.Transactions.BusinessRegistrationTransaction
)
Transactions.TransactionRegistry.registerTransactionType(
  MagistrateCrypto.Transactions.BusinessResignationTransaction
)
Transactions.TransactionRegistry.registerTransactionType(
  MagistrateCrypto.Transactions.BusinessUpdateTransaction
)
Transactions.TransactionRegistry.registerTransactionType(
  MagistrateCrypto.Transactions.BridgechainRegistrationTransaction
)
Transactions.TransactionRegistry.registerTransactionType(
  MagistrateCrypto.Transactions.BridgechainResignationTransaction
)
Transactions.TransactionRegistry.registerTransactionType(
  MagistrateCrypto.Transactions.BridgechainUpdateTransaction
)
