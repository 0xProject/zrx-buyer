export enum ActionTypes {
    UPDATE_ETH_USD_PRICE,
    UPDATE_SELECTED_ASSET_AMOUNT,
    UPDATE_LATEST_BUY_QUOTE,
}

export interface Action {
    type: ActionTypes;
    data?: any;
}
