import * as actionTypes from "../constants/actionTypes";

export default (state = [], action) => {
    switch (action.type) {
        case actionTypes.LOAD_NEWS:
            return action.payload.results || [];
        default:
            return state;
    }
};
