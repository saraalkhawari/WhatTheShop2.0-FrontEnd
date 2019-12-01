import { createSwitchNavigator } from "react-navigation";

import ProfileStack from "../navigation/ProfileStack";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";
import DummyPage from "../components/Dummy(Test)/DummyPage";

const SwitchNav = createSwitchNavigator({
  Signup: Signup,
  Login: Login,
  DummyPage: DummyPage,
  ProfileStack: ProfileStack
});

export default SwitchNav;
