import { BigNumber } from '@0xproject/utils';
import { Web3Wrapper } from '@0xproject/web3-wrapper';
import * as _ from 'lodash';
import * as React from 'react';

import { SelectedAssetAmountInput } from '../containers/selected_asset_amount_input';
import { ColorOption } from '../style/theme';

import { Container, Flex, Text } from './ui';

export interface BuyerHeadingProps {
    ethAmount?: BigNumber;
    ethUsdPrice?: BigNumber;
}

const displayEthAmount = ({ ethAmount }: BuyerHeadingProps): string => {
    if (_.isUndefined(ethAmount)) {
        return '...loading';
    }
    const ethUnitAmount = Web3Wrapper.toUnitAmount(ethAmount, 18);
    const roundedAmount = ethUnitAmount.round(4);
    return `${roundedAmount} ETH`;
};

const displayUsdAmount = ({ ethAmount, ethUsdPrice }: BuyerHeadingProps): string => {
    if (_.isUndefined(ethAmount) || _.isUndefined(ethUsdPrice)) {
        return '...loading';
    }
    return `$${ethAmount.mul(ethUsdPrice)}`;
};

export const BuyerHeading: React.StatelessComponent<BuyerHeadingProps> = props => (
    <Container backgroundColor={ColorOption.primaryColor} padding="20px" width="100%" borderRadius="3px 3px 0px 0px">
        <Container marginBottom="5px">
            <Text
                letterSpacing="1px"
                fontColor={ColorOption.white}
                opacity={0.7}
                fontWeight={500}
                textTransform="uppercase"
                fontSize="12px"
            >
                I want to buy
            </Text>
        </Container>
        <Flex direction="row" justify="space-between">
            <Container>
                <SelectedAssetAmountInput fontSize="45px" />
                <Container display="inline-block" marginLeft="10px">
                    <Text fontSize="45px" fontColor={ColorOption.white} textTransform="uppercase">
                        zrx
                    </Text>
                </Container>
            </Container>
            <Flex direction="column" justify="space-between">
                <Container marginBottom="5px">
                    <Text fontSize="16px" fontColor={ColorOption.white} fontWeight={500}>
                        {displayEthAmount(props)}
                    </Text>
                </Container>
                <Text fontSize="16px" fontColor={ColorOption.white} opacity={0.7}>
                    {displayUsdAmount(props)}
                </Text>
            </Flex>
        </Flex>
    </Container>
);
