import { BuyQuote } from '@0xproject/asset-buyer';
import * as _ from 'lodash';
import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { State } from '../redux/reducer';
import { Action, ActionTypes, AsyncProcessState } from '../types';
import { assetBuyer } from '../util/asset_buyer';
import { web3Wrapper } from '../util/web3_wrapper';

import { BuyButton } from '../components/buy_button';

export interface SelectedAssetBuyButtonProps {}

interface ConnectedState {
    text: string;
    buyQuote: BuyQuote;
}

interface ConnectedDispatch {
    onClick?: (buyQuote: BuyQuote) => void;
}

const textForState = (state: AsyncProcessState): string => {
    switch (state) {
        case AsyncProcessState.NONE:
            return 'Buy';
        case AsyncProcessState.PENDING:
            return '...Loading';
        case AsyncProcessState.SUCCESS:
            return 'Success!';
        case AsyncProcessState.FAILURE:
            return 'Failed';
        default:
            return 'Buy';
    }
};

const mapStateToProps = (state: State, _ownProps: SelectedAssetBuyButtonProps): ConnectedState => ({
    text: textForState(state.selectedAssetBuyState),
    buyQuote: state.latestBuyQuote,
});

const mapDispatchToProps = (dispatch: Dispatch<Action>, ownProps: SelectedAssetBuyButtonProps): ConnectedDispatch => ({
    onClick: async buyQuote => {
        // Set loading
        dispatch({ type: ActionTypes.UPDATE_SELECTED_ASSET_BUY_STATE, data: AsyncProcessState.PENDING });
        try {
            const txnHash = await assetBuyer.executeBuyQuoteAsync(buyQuote);
            // tslint:disable-next-line:no-floating-promises
            await web3Wrapper.awaitTransactionSuccessAsync(txnHash);
        } catch {
            dispatch({ type: ActionTypes.UPDATE_SELECTED_ASSET_BUY_STATE, data: AsyncProcessState.FAILURE });
        }
        dispatch({ type: ActionTypes.UPDATE_SELECTED_ASSET_BUY_STATE, data: AsyncProcessState.SUCCESS });
    },
});

export const SelectedAssetBuyButton: React.ComponentClass<SelectedAssetBuyButtonProps> = connect(
    mapStateToProps,
    mapDispatchToProps,
)(BuyButton);