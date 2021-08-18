import * as cartTypes from './cartType';

const INITIAL_STATE = {
    products: [
        {
            id: 1,
            title: "test",
            description: "NASDS",
            price: 12312,
            image: "../../images/apple-64.png"
        },
    ],
    cart: [],
    currentItem: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {

    switch(action.type){

        case cartTypes.ADD_TO_CART:
            const item = state.products.find((prod) => prod.id === action.payload.id);
            const inCart = state.cart.find((item) =>
                item.id === action.payload.id ? true : false);
            return {
                ...state,
                cart: inCart ? state.cart.map((item) => item.id === action.payload.id ? {...item, qty: item.qty + 1 } : item )
                : [ ... state.cart, {...item, qty : 1}],
            };

        case cartTypes.REMOVE_TO_CART:
            return{
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload.id),
            };

        case cartTypes.ADJUST_QTY:
            return{
                ...state,
                cart: state.cart.map(item => item.id === action.payload.id ? {...item, qty: action.payload.qty} : item)
            };

        case cartTypes.LOAD_ITEM:
            return{
                ...state,
                currentItem: action.payload,
            };
        default:
            return state;
    }
};

export default shopReducer;