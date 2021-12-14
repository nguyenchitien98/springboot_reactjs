import { SET_PRODS } from "../../constants/constants"

const prods = []

const myReducer = (state = prods, action) => {
    switch(action.type) {
        case SET_PRODS : {
            return action.prods;
        }
        default: return state;
    }
}
export default myReducer;