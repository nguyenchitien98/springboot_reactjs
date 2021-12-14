import { SET_PRODUCT_DETAIL } from "../../constants/constants"

const productDetail = {
    "id": -1,
    "name": "",
    "image": "",
    "price": 1,
    "createDate": new Date(),
    "status": 1,
    "categoryId": -1
}

var myReducer = (state = productDetail, action) => {
    switch (action.type) {
        case SET_PRODUCT_DETAIL: {
            return action.product;
        }
        default: return state
    }
}



export default myReducer