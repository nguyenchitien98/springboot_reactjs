import {SET_AUTH} from "../../constants/constants";

const auth = null;

let myReducer = (state = auth, action) => {
    switch (action.type) {
        case SET_AUTH : {
            return action.auth;
        }
        default: return state;
    }
};

export default myReducer;

