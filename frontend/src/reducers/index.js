import { combineReducers } from "redux";
import prods from "./guestreducer/prods";
import prodDetail from "./guestreducer/prodDetail";
import cart from "./guestreducer/cart";
import products from "./staffreducer/products";
import productDetail from "./staffreducer/productDetail";
import myOrders from "./guestreducer/myOrder";
import auth from "./guestreducer/auth";
import profile from "./profile";
const myReducer = combineReducers({
    prods,
    prodDetail,
    cart,
    myOrders,
    auth,
    //staff
    products,
    productDetail,
    profile,
});

export default myReducer;
