import { BigNumber } from '@0xproject/utils';
import * as _ from 'lodash';
import * as React from 'react';
import { connect } from 'react-redux';

import { State } from '../redux/reducer';

import { BuyerHeading } from '../components/buyer_heading';

export interface SelectedAssetBuyerHeadingProps {}

interface ConnectedState {
    selectedAssetAmount?: BigNumber;
    totalEthBaseAmount?: BigNumber;
    ethUsdPrice?: BigNumber;
}

const mapStateToProps = (state: State, _ownProps: SelectedAssetBuyerHeadingProps): ConnectedState => ({
    selectedAssetAmount: state.selectedAssetAmount,
    totalEthBaseAmount: _.get(state, 'latestBuyQuote.worstCaseQuoteInfo.totalEthAmount'),
    ethUsdPrice: state.ethUsdPrice,
});

export const SelectedAssetBuyerHeading: React.ComponentClass<SelectedAssetBuyerHeadingProps> = connect(
    mapStateToProps,
)(BuyerHeading);
