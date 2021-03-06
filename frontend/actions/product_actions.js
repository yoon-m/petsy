import * as ProductAPIUtil from '../util/product_util';

export const RECEIVE_ALL_PRODUCTS = 'RECEIVE_ALL_PRODUCTS';
export const RECEIVE_PRODUCT = 'RECEIVE_PRODUCT';
export const RECEIVE_PRODUCT_ERRORS = 'RECEIVE_PRODUCT_ERRORS';
export const CLEAR_PRODUCT_ERRORS = 'CLEAR_PRODUCT_ERRORS';
export const RECEIVE_SEARCH_RESULTS = 'RECEIVE_SEARCH_RESULTS';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';

export const receiveProducts = products => {
    return {
        type: RECEIVE_ALL_PRODUCTS,
        products
    };
};

export const receiveProduct = product => {
    return {
        type: RECEIVE_PRODUCT,
        product      
    };
};

export const receiveErrors = errors => ({
    type: RECEIVE_PRODUCT_ERRORS,
    errors
});

export const clearErrors = () => ({
    type: CLEAR_PRODUCT_ERRORS,
});

export const search = searchResults => ({
    type: RECEIVE_SEARCH_RESULTS,
    searchResults
});

export const removeProduct = product => {
    return {
        type: REMOVE_PRODUCT,
        product
    };
};

export const fetchProducts = () => dispatch => {
    return ProductAPIUtil.fetchAllProducts().then(products => dispatch(receiveProducts(products)));
};

export const fetchProduct = id => dispatch => {
    return ProductAPIUtil.fetchProduct(id).then(product => dispatch(receiveProduct(product)));
};

export const createProduct = product => dispatch => {
    return ProductAPIUtil.createProduct(product).then(product => dispatch(receiveProduct(product)))
        .fail(err => dispatch(receiveErrors(err.responseJSON)));
};

export const searchProducts = searchValue => dispatch => {
    return ProductAPIUtil.searchProducts(searchValue).then(products => dispatch(search(products)));
};

export const deleteProduct = id => dispatch => {
    return ProductAPIUtil.deleteProduct(id).then(product => dispatch(removeProduct(product)));
};