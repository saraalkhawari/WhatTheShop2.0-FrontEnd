import React from "react";
import { observer } from "mobx-react";
import { Alert } from "react-native";
import { withNavigation } from "react-navigation";
// NativeBase Components
import { Text, List, Button } from "native-base";

// Component
import CartItem from "./CartItem";

//Buttons
import LogButton from "../Buttons/LogButton";

// Stores
import cartStore from "../../stores/cartStore";
import authStore from "../../stores/authStore";

const CreatureCart = ({ navigation }) => {
  const cartItems = cartStore.items.map(item => (
    <CartItem item={item} key={`${item.name}`} />
  ));
  const handleCheckout = () => {
    if (authStore.user === null) {
      return alert("HALT!", "You will need to login to proceed. login now?", [
        {
          text: "OK",
          onPress: ({ navigation }) => navigation.navigate("Login")
        },
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        }
      ]);
    } else {
      cartStore.checkoutCart();

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

export default withNavigation(observer(CreatureCart));
