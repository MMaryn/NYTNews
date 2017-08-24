import * as actionType from "../constants/actionTypes";

export default (state = "", action) => {
    switch (action.type) {
        case actionType.SEARCH_TERM:
            return action.payload;
        default:
            return state;
    }
};
