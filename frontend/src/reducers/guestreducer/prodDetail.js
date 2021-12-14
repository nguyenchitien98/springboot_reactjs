import { SET_PROD_DETAIL } from "../../constants/constants"

const prodDetail = {
    id: -1,
    name: "",
    image: "",
    price: "",
    createDate: "",
    status: -1,
    categoryId: -1,
}

const myReducer = (state = prodDetail, action) => {
    switch(action.type) {
        case SET_PROD_DETAIL : {
            return action.prod;
        }
        default: {
            return state;
        }
    }
}
export default myReducer;