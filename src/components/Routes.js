import { NavigationExperimental } from "react-native";

import HomeScreen from "../components/HomeScreen";
import IntoScene from "../components/IntoScreen";

const { StateUtils } = NavigationExperimental;

export const routes = {
    home: {
        key: "home",
        component: HomeScreen
    },
    intro: {
        key: "intro",
        component: IntoScene
    }
};

