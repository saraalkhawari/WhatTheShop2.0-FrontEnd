import React from "react";
import { observer } from "mobx-react";
import { withNavigation } from "react-navigation";
import { Icon, Text, Button } from "native-base";

// Stores
import cartStore from "../../stores/cartStore";

const CartButton = ({ navigation }) => {
  const handlePress = () => navigation.navigate("CartScreen");

  return (
    <Button onPress={handlePress} transparent light>
      <Text style={{ color: "black" }}>{cartStore.quantity}</Text>
      <Icon
        name="shoppingcart"
        type="AntDesign"
        style={{ color: "black" }}
        onPress={handlePress}
      />
    </Button>
  );
};

export default withNavigation(observer(CartButton));
