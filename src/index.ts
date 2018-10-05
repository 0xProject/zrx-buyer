import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { ZeroExBuyer } from './components/zero_ex_buyer';

export interface ZeroExBuyerOptions {}

export const render = (selector: string = '#zeroExBuyerContainer') => {
    ReactDOM.render(React.createElement(ZeroExBuyer, {}), document.querySelector(selector));
};
