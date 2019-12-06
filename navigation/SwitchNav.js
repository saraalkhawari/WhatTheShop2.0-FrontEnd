import { createSwitchNavigator } from "react-navigation";

import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";
import StackNav from "./StackNav";
import Profile from "../components/Profile/index";

const SwitchNav = createSwitchNavigator({
  StackNav: StackNav,
  Login: Login,
  Signup: Signup,
  Profile: Profile
});

export default SwitchNav;
