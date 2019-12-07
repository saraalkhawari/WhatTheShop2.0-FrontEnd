import { createSwitchNavigator } from "react-navigation";

import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";
import StackNav from "./StackNav";
import Profile from "../components/Profile/index";
import HomePage from "../components/HomePage";

const SwitchNav = createSwitchNavigator({
  HomePage: HomePage,
  StackNav: StackNav,
  Login: Login,
  Signup: Signup,
  Profile: Profile
});

export default SwitchNav;
