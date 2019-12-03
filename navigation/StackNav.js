import { createStackNavigator } from "react-navigation-stack";

import CreaturesList from "../components/CreaturesList";
import CreatureDetail from "../components/CreatureDetail";
<<<<<<< HEAD
=======
import CreatureCart from "../components/CreatureCart";
>>>>>>> 5c5aa118cf0d34a55c4934ec05d406304ca2083f

const StackNav = createStackNavigator(
  {
    ListScreen: CreaturesList,
<<<<<<< HEAD
    DetailScreen: CreatureDetail
=======
    DetailScreen: CreatureDetail,
    CartScreen: CreatureCart
>>>>>>> 5c5aa118cf0d34a55c4934ec05d406304ca2083f
  },
  {
    initialRouteName: "DetailScreen"
  }
);

export default StackNav;
