import { BigNumber } from '@0xproject/utils';

import { ActionTypes } from '../types';
import { coinbaseApi } from '../util/coinbase_api';

import { store } from './store';

// Initialize async data
export const fetchAsyncData = async () => {
    let ethUsdPriceStr = '0';
    try {
        ethUsdPriceStr = await coinbaseApi.getEthUsdPrice();
    } catch (e) {
        // ignore
    } finally {
        store.dispatch({
            type: ActionTypes.UPDATE_ETH_USD_PRICE,
            data: new BigNumber(ethUsdPriceStr),
        });
    }
};

