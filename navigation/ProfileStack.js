import { createStackNavigator } from "react-navigation";

import ProfileScreen from "../components/Profile";
import LoginScreen from "../components/Login";
const ProfileStack = createStackNavigator(
  {
    Profile: ProfileScreen,
    Login: LoginScreen
  },
  {
    initialRouteName: "Login",
    defaultNavigationOptions: {
      title: "WhatTheShop"
    }
  }
);

export default ProfileStack;
