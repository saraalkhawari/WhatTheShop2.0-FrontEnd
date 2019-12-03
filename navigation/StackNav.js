import { createStackNavigator } from "react-navigation-stack";

import CreaturesList from "../components/CreaturesList";
import CreatureDetail from "../components/CreatureDetail";

const StackNav = createStackNavigator(
  {
    ListScreen: CreaturesList,
    DetailScreen: CreatureDetail
  },
  {
    initialRouteName: "DetailScreen"
  }
);

export default StackNav;
