import {REMOVE_ORDER, SET_MYORDERS} from "../../constants/constants";

const myOrders = [];

var myReducer = (state = myOrders, action) => {
    switch (action.type) {
        case SET_MYORDERS: {
            return action.orders;
        }
        case REMOVE_ORDER: {
            return [...state].filter(val => {
                return val.id !== action.order.id
            })
        }
        default: return state;
    }
}

export default myReducer;