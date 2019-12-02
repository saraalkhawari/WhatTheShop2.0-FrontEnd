import { createStackNavigator } from "react-navigation-stack";

import CreaturesList from "../components/CreaturesList";
import CreatureDetail from "../components/CreatureDetail";
import CreatureCart from "../components/CreatureCart";

const StackNav = createStackNavigator(
  {
    ListScreen: CreaturesList,
    DetailScreen: CreatureDetail,
    CartScreen: CreatureCart
  },
  {
    initialRouteName: "ListScreen"
  }
);

export default StackNav;
