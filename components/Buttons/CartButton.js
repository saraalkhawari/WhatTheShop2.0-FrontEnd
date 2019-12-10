import React from "react";
import { observer } from "mobx-react";
import { withNavigation } from "react-navigation";
import { Icon, Text, Button, Badge } from "native-base";

// Stores
import cartStore from "../../stores/cartStore";

const CartButton = ({ navigation }) => {
  const handlePress = () => navigation.navigate("CartScreen");

  return (
    <>
      <Badge style={{ backgroundColor: "black" }}>
        <Text>{cartStore.quantity}</Text>
      </Badge>
      <Button onPress={handlePress} transparent large>
        <Icon
          name="cart"
          type="MaterialCommunityIcons"
          style={{ color: "black" }}
          onPress={handlePress}
        />
      </Button>
    </>
  );
};

export default withNavigation(observer(CartButton));
