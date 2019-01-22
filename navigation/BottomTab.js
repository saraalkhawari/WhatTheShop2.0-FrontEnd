import React from "react";
import { Icon } from "native-base";

import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import LolStack from "./LolStack";
import ProfileStack from "./ProfileStack";

const BottomTab = createBottomTabNavigator({
  ProfileTab: ProfileStack,
  LolTab: LolStack
});

const AppContainer = createAppContainer(BottomTab);

export default AppContainer;
