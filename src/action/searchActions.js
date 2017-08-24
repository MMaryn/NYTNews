import * as actionTypes from "../constants/actionTypes";

export const searchNews = searchTerm => ({
    type: actionTypes.SEARCH_TERM,
    payload: searchTerm
});