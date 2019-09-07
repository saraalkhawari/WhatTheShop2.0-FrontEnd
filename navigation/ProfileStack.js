import { createStackNavigator } from "react-navigation";

// Components
import ProfileScreen from "../components/Profile";
import LoginScreen from "../components/Login";

const ProfileStack = createStackNavigator(
  {
    Profile: ProfileScreen,
    Login: LoginScreen
  },
  {
    initialRouteName: "Profile",
    defaultNavigationOptions: {
      title: "WhatTheShop"
    }
  }
);

export default ProfileStack;
