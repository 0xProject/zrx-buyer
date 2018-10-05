import * as React from 'react';
import { Provider } from 'react-redux';

import { fetchAsyncData } from '../redux/fetch_async_data';
import { store } from '../redux/store';
import { fonts } from '../style/fonts';
import { theme, ThemeProvider } from '../style/theme';

import { ZeroExBuyerContainer } from './zero_ex_buyer_container';

fonts.include();
fetchAsyncData();

export interface ZeroExBuyerProps {}

export const ZeroExBuyer: React.StatelessComponent<ZeroExBuyerProps> = () => (
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <ZeroExBuyerContainer />
        </ThemeProvider>
    </Provider>
);
