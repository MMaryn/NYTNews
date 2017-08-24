import { NavigationExperimental } from "react-native";

import * as actionTypes from "../constants/actionTypes";
import Home from "../components/HomeScreen";
import Into from "../components/IntoScreen";

const { StateUtils } = NavigationExperimental;

const routes = {
	home: {
		key: "home",
		title: "Main",
		component: Home
	},
	intro: {
		key: "intro",
		title: "Welcome",
		component: Into
	}
}

const initState = {
	key: 0,
	routes: [
		routes.intro
	]
};

export default (state = initState, action) => {
	switch (action.type) {
		case actionTypes.NAVIGATION_PUSH: {
			return StateUtils.push(state, routes[action.payload]);
		}
		case actionTypes.NAVIGATION_POP: {
			return StateUtils.pop(state);
		}
		default:
			return state;
	};
};