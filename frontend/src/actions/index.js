import {
    ADD_PRODUCT,
    ADD_TO_CART,
    CHANGE_STATUS_PRODUCT,
    REMOVE_FROM_CART,
    SET_CART,
    SET_PRODS,
    SET_PRODUCTS,
    SET_PRODUCT_DETAIL,
    SET_PROD_DETAIL,
    UPDATE_CART,
    UPDATE_PRODUCT,
    SET_MYORDERS, SET_AUTH, REMOVE_ORDER
} from "../constants/constants"

export const setProds = (prods) => {
    return {
        type: SET_PRODS,
        prods
    }
}

export const setProdDetail = (prod) => {
    return {
        type: SET_PROD_DETAIL,
        prod
    }
}

export const setCart = (cart) => {
    return {
        type: SET_CART,
        cart
    }
}

export const addToCart = (cartItem) => {
    return {
        type: ADD_TO_CART,
        cartItem
    }
}

export const updateCart = (cartItem) => {
    return {
        type: UPDATE_CART,
        cartItem
    }
}

export const removeFromCart = (cartItem) => {
    return {
        type: REMOVE_FROM_CART,
        cartItem
    }
}

export const setMyOrders = (orders) => {
    return {
        type: SET_MYORDERS,
        orders
    }
}

export const setAuth = (auth) => {
    return {
        type: SET_AUTH,
        auth
    }
}

export const removeOrder = (order) => {
    return {
        type: REMOVE_ORDER,
        order
    }
}

/// staff/products

export const setProducts = (products) => {
    return {
        type: SET_PRODUCTS,
        products
    }
}

export const changeStatusProduct = (product) => {
    return {
        type: CHANGE_STATUS_PRODUCT,
        product
    }
}

export const setProductDetail = (product) => {
    return {
        type: SET_PRODUCT_DETAIL,
        product
    }
}

export const addProduct = (product) => {
    return {
        type: ADD_PRODUCT,
        product
    }
}

export const updateProduct = (product) => {
    return {
        type: UPDATE_PRODUCT,
        product
    }
}
