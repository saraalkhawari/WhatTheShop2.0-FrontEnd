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
    if (authStore.user) cartStore.checkoutCart();
    else {
      Alert.alert(
        "HALT! You're not logged in!",
        "Log in to proceed.",
        [
          {
            text: "Log in",
            onPress: () => navigation.navigate("Login")
          },
          {
            text: "Cancel",
            style: "cancel"
          }
        ],
        { cancelable: true }
      );
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
