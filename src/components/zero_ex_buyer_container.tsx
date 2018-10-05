import * as React from 'react';

import { ColorOption } from '../style/theme';

import { BuyButton } from './buy_button';
import { BuyerHeading } from './buyer_heading';
import { OrderDetails } from './order_details';
import { Container, Flex } from './ui';

export interface ZeroExBuyerContainerProps {}

export const ZeroExBuyerContainer: React.StatelessComponent<ZeroExBuyerContainerProps> = props => (
    <Container hasBoxShadow={true} width="350px" backgroundColor={ColorOption.white} borderRadius="3px">
        <Flex direction="column" justify="flex-start">
            <BuyerHeading />
            <OrderDetails />
            <BuyButton />
        </Flex>
    </Container>
);
