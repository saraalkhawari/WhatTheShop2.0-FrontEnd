import React from "react";

// NativeBase Components
import { Text, Left, Body, Right, Button, ListItem, Icon } from "native-base";

// Style
import styles from "./styles";

// Store
import cartStore from "../../stores/cartStore";

const CartItem = ({ item }) => {
  return (
    <ListItem style={styles.listStyle}>
      <Left>
        <Button transparent onPress={() => cartStore.removeItemFromCart(item)}>
          <Icon
            name="trash-can"
            type="MaterialCommunityIcons"
            style={styles.removeItem}
          />
        </Button>
      </Left>
      <Body>
        <Text style={styles.name}> {item.name} </Text>
      </Body>
      <Right>
        <Text style={styles.quantity}>{item.quantity}</Text>
      </Right>
    </ListItem>
  );
};

export default CartItem;
