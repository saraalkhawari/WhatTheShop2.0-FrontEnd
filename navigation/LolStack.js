import { createStackNavigator } from "react-navigation";

import LolScreen from "../components/Lol";

const LolStack = createStackNavigator(
  {
    Lol: LolScreen
  },
  {
    defaultNavigationOptions: {
      title: "WhatTheShop"
    }
  }
);

export default LolStack;
