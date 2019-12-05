import { createSwitchNavigator } from "react-navigation";

import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";
import StackNav from "./StackNav";

const SwitchNav = createSwitchNavigator({
  StackNav: StackNav,
  Login: Login,
  Signup: Signup
});

export default SwitchNav;
