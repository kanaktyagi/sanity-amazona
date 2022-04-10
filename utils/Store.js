import Cookies from 'js-cookie';
import { createContext, useReducer } from 'react';

export const Store = createContext();

const intialState = {
    darkMode : Cookies.get('darkMode') === 'ON' ? true : false,
    cart: {
        cartItems: Cookies.get('cartItem') ? 
        JSON.parse(Cookies.get('cartItem')):
        []
    }
}

function reducer(state,action) {
    switch(action.type) {
        case 'DARK_MODE_ON': 
        return {
            ...state, darkMode: true
        };
        case 'DARK_MODE_OFF' : 
        return {
            ...state, darkMode: false
        };
        case 'CART_ADD_ITEM': {
            const newItem = action.payload;
            const existItem = state.cart.cartItems.find(item => item._key === newItem.key);
            const cartItems = existItem ? state.cart.cartItems.map(item => item._key === existItem.key ? newItem : item)
            : [...state.cart.cartItems, newItem]
            Cookies.set('cartItems', JSON.stringify(cartItems))
            return{...state, cart: {cartItems}}
        }
        default: 
        return state
    }
}

export function StoreProvider(props) {
    const [state, dispatch] = useReducer(reducer, intialState);
    const value = {state,dispatch};
    return <Store.Provider value={value}>{props.children}</Store.Provider>
}