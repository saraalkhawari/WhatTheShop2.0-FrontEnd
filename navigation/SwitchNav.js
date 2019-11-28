import { createSwitchNavigator } from "react-navigation";

import ProfileStack from "../navigation/ProfileStack";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";

const SwitchNav = createSwitchNavigator({
  ProfileStack: ProfileStack,
  Signup: Signup,
  Login: Login
});

export default SwitchNav;
