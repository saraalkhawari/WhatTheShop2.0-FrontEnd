import { createSwitchNavigator } from "react-navigation";

import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";
import StackNav from "./StackNav";
import HomePage from "../components/HomePage";

const SwitchNav = createSwitchNavigator({
  HomePage: HomePage,
  StackNav: StackNav,
  Login: Login,
  Signup: Signup
});

export default SwitchNav;
