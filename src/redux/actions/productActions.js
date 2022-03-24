import * as types from '../constants';

import {getData} from './helpers';
import {products} from "../../constants/products";

export const setProducts = (products) => ({
    type: types.SET_PRODUCTS,
    products,
});
export const updateProduct = (product) => ({
    type: types.UPDATE_PRODUCT,
    product,
});
export const addProduct = (product) => ({
    type: types.ADD_PRODUCT,
    product,
});
export const removeProduct = (id) => ({
    type: types.REMOVE_PRODUCT,
    id,
});

export const getProductsFetch = (dispatch) => {
    return new Promise(resolve => {
        getData('/posts')
            .then(json => {
                resolve(products);
                dispatch(setProducts(products));
            })
            .catch(error => {
                console.error(error);
            });
    });
};
export const getProductFetch = (dispatch, id) => {
    return new Promise(resolve => {
        getData('/posts',{id})
            .then(json => {
                resolve(json);
            })
            .catch(error => {
                console.error(error);
            });
    });
};
export const updateProductFetch = (dispatch, product) => {
    return new Promise(resolve => {
        getData('/posts',{product})
            .then(json => {
                resolve(json);
                dispatch(updateProduct(product));
            })
            .catch(error => {
                console.error(error);
            });
    });
};
export const addProductFetch = (dispatch, product) => {
    return new Promise(resolve => {
        getData('/posts',{product})
            .then(json => {
                resolve(json);
                dispatch(addProduct(product));
            })
            .catch(error => {
                console.error(error);
            });
    });
};
export const removeProductFetch = (dispatch, id) => {
    return new Promise(resolve => {
        getData('/posts',{id})
            .then(json => {
                resolve(json);
                dispatch(removeProduct(id));
            })
            .catch(error => {
                console.error(error);
            });
    });
};