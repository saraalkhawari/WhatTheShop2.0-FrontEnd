import { createSwitchNavigator } from "react-navigation";

import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";
import StackNav from "./StackNav";

const SwitchNav = createSwitchNavigator({
  Login: Login,
  StackNav: StackNav,
  Signup: Signup
});

export default SwitchNav;
