import { createStackNavigator } from "react-navigation-stack";

import CreaturesList from "../components/CreaturesList";
import CreatureDetail from "../components/CreatureDetail";
import CreatureCart from "../components/CreatureCart";
import Profile from "../components/Profile/index";

const StackNav = createStackNavigator(
  {
    Profile: Profile,
    ListScreen: CreaturesList,
    DetailScreen: CreatureDetail,
    CartScreen: CreatureCart
  },
  {
    initialRouteName: "ListScreen"
  }
);

export default StackNav;
