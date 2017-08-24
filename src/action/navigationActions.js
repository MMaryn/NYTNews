import * as actionTypes from "../constants/actionTypes";

export const push = key => ({
	type: actionTypes.NAVIGATION_PUSH,
	payload: key
});

export const pop = () => ({
	type: actionTypes.NAVIGATION_POP
});