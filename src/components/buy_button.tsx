import { BuyQuote } from '@0xproject/asset-buyer';
import * as _ from 'lodash';
import * as React from 'react';

import { ColorOption } from '../style/theme';

import { Button, Container, Text } from './ui';

export interface BuyButtonProps {
    buyQuote?: BuyQuote;
    onClick: (buyQuote: BuyQuote) => void;
    text: string;
}

export class BuyButton extends React.Component<BuyButtonProps> {
    public render(): React.ReactNode {
        const shouldDisableButton = _.isUndefined(this.props.buyQuote);
        return (
            <Container padding="20px" width="100%">
                <Button width="100%" onClick={this._handleClick} isDisabled={shouldDisableButton}>
                    <Text fontColor={ColorOption.white} fontWeight={600} fontSize="20px">
                        {this.props.text}
                    </Text>
                </Button>
            </Container>
        );
    }
    private readonly _handleClick = () => {
        if (_.isUndefined(this.props.buyQuote)) {
            return;
        }
        this.props.onClick(this.props.buyQuote);
    }
}
