import React, { Component } from "react";

// NativeBase Components
import { Text, List, Button } from "native-base";

// Component
import CartItem from "./CartItem";

class CreatureCart extends Component {
  state = {
    items: [
      {
        name: "C",
        quantity: 2
      }
    ]
  };
  render() {
    const cartItems = this.state.items.map(item => (
      <CartItem item={item} key={`${item.name}`} />
    ));

    return (
      <List>
        {cartItems}
        <Button full danger>
          <Text>Checkout</Text>
        </Button>
      </List>
    );
  }
}

CreatureCart.navigationOptions = {
  title: "Cart"
};

export default CreatureCart;
