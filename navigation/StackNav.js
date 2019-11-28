import { createStackNavigator } from "react-navigation-stack";

import CreaturesList from "../components/CreaturesList";

const StackNav = createStackNavigator(
  {
    ListScreen: CreaturesList
  },
  {
    initialRouteName: "ListScreen"
  }
);

export default StackNav;
