import * as React from 'react';

import { SelectedAssetBuyButton } from '../containers/selected_asset_buy_button';
import { SelectedAssetBuyerHeading } from '../containers/selected_asset_buyer_heading';

import { ColorOption } from '../style/theme';

import { Container, Flex } from './ui';

export interface ZeroExBuyerContainerProps {}

export const ZeroExBuyerContainer: React.StatelessComponent<ZeroExBuyerContainerProps> = props => (
    <Container hasBoxShadow={true} width="350px" backgroundColor={ColorOption.white} borderRadius="3px">
        <Flex direction="column" justify="flex-start">
            <SelectedAssetBuyerHeading />
            <SelectedAssetBuyButton />
        </Flex>
    </Container>
);
