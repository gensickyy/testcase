import * as types from '../constants';
import {products} from "../../constants/products";

const initialState = {
    products: products,
};

export function product(state = initialState, action) {
    switch (action.type) {
        case types.SET_PRODUCTS:
            return {products: action.products};
        case types.ADD_PRODUCT:
            return {products: [...state.products, action.product]};
        case types.REMOVE_PRODUCT:
            return {products: state.products.filter(product => product.id !== action.id)};
        case types.UPDATE_PRODUCT:
            return {products: state.products.map(product => { return product.id == action.product.id ? action.product : product})};
        default:
            return state;
    }
}
