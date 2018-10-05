import * as _ from 'lodash';
import { createStore, Store as ReduxStore } from 'redux';

import { reducer, State } from './reducer';

export const store: ReduxStore<State> = createStore(reducer);

store.subscribe(
    _.throttle(() => {
        const state = store.getState();
        (window as any).latestState = state;
    }, 500),
);
