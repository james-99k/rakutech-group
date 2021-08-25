import * as cartFunction from './cartType';

export const addToCart = (itemID) => {

    return{
        type: cartFunction.ADD_TO_CART,
        payload:{
            id: itemID
        },
    };
};

export const removeToCart = (itemID) => {

    return{
        type: cartFunction.REMOVE_TO_CART,
        payload:{
            id: itemID
        },
    };
};

export const adjustQty = (itemID, value) => {

    return{
        type: cartFunction.ADJUST_QTY,
        payload:{
            id: item,
            qty: value
        },
    };
};

export const loadItem = (item) => {

    return{
        type: cartFunction.LOAD_ITEM,
        payload: item,
    };

};