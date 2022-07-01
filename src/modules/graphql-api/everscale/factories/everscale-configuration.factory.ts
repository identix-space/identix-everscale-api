import { EverscaleClientConfiguration } from 'identix-everscale-sdk';
import * as Joi from 'joi';
import { join } from 'path';
import { readFileAsUTF8Sync } from '@/libs/common/helpers/files.helpers';
import { everscaleNetworks } from '../constants/everscale-networks.constant';

export const everscaleClientSDKConfigurationFactory = () => {
  // EVERSCALE_CONTRACTS_ADDRESSES_PATH = `./.secrets/everscale-contract-addresses.json`
  const everscaleContractsAddressesPath = Joi.attempt(
    process.env.EVERSCALE_CONTRACTS_ADDRESSES_PATH,
    Joi.string().required(),
  );
  const everscaleAddressesAbsPath = join(process.cwd(), everscaleContractsAddressesPath);
  const contractsAddresses = JSON.parse(readFileAsUTF8Sync(everscaleAddressesAbsPath));

  // EVERSCALE_DEFAULT_NETWORK = mainnet
  const everscaleDefaultNetwork = Joi.attempt(
    process.env.EVERSCALE_DEFAULT_NETWORK,
    Joi.string().required(),
  );

  // EVERSCALE_WONGO_TOKEN_ADDRESS = 0:c270f0cb38f70856fe756fbbddb811782bc5e9e9bdfadbababf81a81da6fba27
  const everscaleWongoTokenAddress = Joi.attempt(
    process.env.EVERSCALE_WONGO_TOKEN_ADDRESS,
    Joi.string().required(),
  );

  // EVERSCALE_TOKENS_API_URL = https://token-indexer.broxus.com/v1
  const everscaleTokensApiUrl = Joi.attempt(
    process.env.EVERSCALE_TOKENS_API_URL,
    Joi.string().required(),
  );

  // EVERSCALE_LOOK_LAST_TRANSACTIONS_NUMBER = 1000
  const everscaleLookLastTransactionsNumber = Joi.attempt(
    process.env.EVERSCALE_LOOK_LAST_TRANSACTIONS_NUMBER,
    Joi.number().required(),
  );

  // EVERSCALE_LOOK_TRANSACTIONS_PERIOD_AGO_IN_SEC = 600
  const everscaleLookPeriodAgoInSec = Joi.attempt(
    process.env.EVERSCALE_LOOK_TRANSACTIONS_PERIOD_AGO_IN_SEC,
    Joi.number().required(),
  );

  return {
    defaultNetwork: everscaleDefaultNetwork,
    networks: everscaleNetworks,
    tokens: {
      wongo: everscaleWongoTokenAddress,
    },
    api: {
      tokens: {
        url: everscaleTokensApiUrl,
        lookLastTransactionsNumber: everscaleLookLastTransactionsNumber,
        lookPeriodAgoInSec: everscaleLookPeriodAgoInSec,
      },
    },
    contracts: contractsAddresses,
  } as EverscaleClientConfiguration;
};
