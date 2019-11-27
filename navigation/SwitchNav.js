import { createSwitchNavigator } from "react-navigation";

import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";

const SwitchNav = createSwitchNavigator({
  Signup: Signup,
  Login: Login
});

export default SwitchNav;
