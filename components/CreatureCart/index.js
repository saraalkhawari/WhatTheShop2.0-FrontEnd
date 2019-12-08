import React from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { Text, List, Button, Alert } from "native-base";

// Component
import CartItem from "./CartItem";

//Buttons
import LogButton from "../Buttons/LogButton";

// Stores
import cartStore from "../../stores/cartStore";
import authStore from "../../stores/authStore";

const CreatureCart = () => {
  const cartItems = cartStore.items.map(item => (
    <CartItem item={item} key={`${item.name}`} />
  ));
  const handleCheckout = () => {
    if (authStore.user === null) {
      return Alert.alert(
        "HALT!",
        "You will need to login to proceed. login now?",
        [
          {
            text: "OK",
            onPress: ({ navigation }) => navigation.navigate("Login")
          },
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          }
        ]
      );
    } else {
      cartStore.checkoutCart;
    }
  };

  return (
    <List>
      {cartItems}
      <Button full danger onPress={handleCheckout}>
        <Text>Checkout</Text>
      </Button>
      <LogButton />
    </List>
  );
};

CreatureCart.navigationOptions = {
  title: "Cart"
};

export default observer(CreatureCart);
