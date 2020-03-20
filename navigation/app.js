import {createAppContainer, createSwitchNavigator} from "react-navigation"

import Welcome from "../screens/welcome"
import VPN from "../screens/vpn"

const Screens=createSwitchNavigator({
    Welcome,
    VPN
});

export default createAppContainer(Screens);
