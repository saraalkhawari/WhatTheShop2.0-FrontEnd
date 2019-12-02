import React from "react";
import { withNavigation } from "react-navigation";
import { Icon } from "native-base";

const CartButton = ({ navigation }) => {
  return (
    <Icon
      name="shoppingcart"
      type="AntDesign"
      onPress={() => navigation.navigate("CartScreen")}
    />
  );
};

export default withNavigation(CartButton);
