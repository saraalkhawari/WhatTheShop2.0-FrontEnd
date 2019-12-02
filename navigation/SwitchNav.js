import { createSwitchNavigator } from "react-navigation";

import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";
import StackNav from "./StackNav";

const SwitchNav = createSwitchNavigator({
  Login: Login,
  Signup: Signup,
  StackNav: StackNav
});

export default SwitchNav;
