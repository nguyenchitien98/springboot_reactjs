import { ADD_PRODUCT, CHANGE_STATUS_PRODUCT, SET_PRODUCTS, UPDATE_PRODUCT } from "../../constants/constants";

const products = [];

var myReducer = (state = products, action) => {
    switch(action.type){
        case SET_PRODUCTS : {
            return action.products
        }
        case CHANGE_STATUS_PRODUCT : {
            return [...state].filter(val => {
                return val.id !== action.product.id 
            })
        }
        case ADD_PRODUCT : {
            return [...state, action.product]
        }
        case UPDATE_PRODUCT: {
            return [...state].map(val => {
                return val.id === action.product.id ? action.product : val
            })
        }
        default: return state;
    }
}

export default myReducer;