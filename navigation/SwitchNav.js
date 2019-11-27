import { createSwitchNavigator } from "react-navigation";

import login from "../stores/authStore/";
import signup from "../stores/authStore/";

const SwitchNav = createSwitchNavigator({
  Login: login,
  Signup: signup
});

export default SwitchNav;
