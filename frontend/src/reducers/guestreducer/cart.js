import { ADD_TO_CART, REMOVE_FROM_CART, SET_CART, UPDATE_CART } from "../../constants/constants";
import _ from "lodash"
const cart = [];

const myReducer = (state = cart, action) => {
    switch(action.type) {
        case SET_CART : {
            return action.cart
        }
        case ADD_TO_CART : {
            var check = false;
            _.forEach(state, val => {
                if(val.prod.id === action.cartItem.prod.id && val.size === action.cartItem.size) {
                    check = true;
                    return;
                }
            })
            if(check) {
                return [...state].map(val => {
                    return val.prod.id === action.cartItem.prod.id && val.size === action.cartItem.size ? 
                    {prod: val.prod, size: val.size, qty: Number(val.qty) + action.cartItem.qty} : val
                })
            }
            else return [...state, action.cartItem]
        }
        case UPDATE_CART : {
            return [...state].map(val => {
                return val.prod.id === action.cartItem.prod.id && val.size === action.cartItem.size ? action.cartItem : val
            })
        }
        case REMOVE_FROM_CART : {
            console.log("remove")
            return [...state].filter(val => {
                return val.prod.id !== action.cartItem.prod.id || val.size !== action.cartItem.size
            })
        }
        default: return state
    }
}
export default myReducer;