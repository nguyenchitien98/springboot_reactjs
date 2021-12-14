import { UPDATE_PROFILE } from "./../constants/constants";

const initProfile = {
    username: "",
    fullname: "",
    email: "",
    photo: "",
    status: "",
    password: "",
};

const myReducer = (state = initProfile, action) => {
    switch (action.type) {
        case UPDATE_PROFILE:
            return {
                ...state,
                action,
            };
        default:
            return state;
    }
};

export default myReducer;
