import React from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { Text, List, Button } from "native-base";

// Component
import CartItem from "./CartItem";

//Buttons
import LogButton from "../Buttons/LogButton";

// Stores
import cartStore from "../../stores/cartStore";

const CreatureCart = () => {
  const cartItems = cartStore.items.map(item => (
    <CartItem item={item} key={`${item.name}`} />
  ));

  return (
    <List>
      {cartItems}
      <Button full danger onPress={cartStore.checkoutCart}>
        <Text>Checkout</Text>
      </Button>
    </List>
  );
};

CreatureCart.navigationOptions = {
  title: "Cart",
  headerLeft: <LogButton />
};

export default observer(CreatureCart);
