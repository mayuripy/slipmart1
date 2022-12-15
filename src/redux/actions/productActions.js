import { ActionTypes } from "../contants/action-types";

export const setproducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products,
    };
    
};

export const selectedproducts = (products) => {
    return {
        type: ActionTypes.SELECTED_PRODUCTS,
        payload: products,
    };
};     

