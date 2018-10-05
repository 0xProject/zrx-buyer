import * as React from 'react';
import { Provider } from 'react-redux';

import { store } from '../redux/store';
import { fonts } from '../style/fonts';
import { theme, ThemeProvider } from '../style/theme';

import { ZeroExBuyerContainer } from './zero_ex_buyer_container';

fonts.include();

export interface ZeroExBuyerProps {}

export const ZeroExBuyer: React.StatelessComponent<ZeroExBuyerProps> = () => (
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <ZeroExBuyerContainer />
        </ThemeProvider>
    </Provider>
);
