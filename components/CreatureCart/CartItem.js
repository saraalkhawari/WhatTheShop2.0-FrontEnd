import React from "react";

// NativeBase Components
import { Text, Left, Body, Right, Button, ListItem, Icon } from "native-base";

// Style
import styles from "./styles";

const CartItem = ({ item }) => {
  return (
    <ListItem style={styles.listStyle}>
      <Left>
        <Text style={styles.name}> {item.name} </Text>
      </Left>
      <Body>
        <Text style={styles.quantity}>{item.quantity}</Text>
      </Body>
      <Right>
        <Button transparent>
          <Icon name="trash" style={styles.removeItem} />
        </Button>
      </Right>
    </ListItem>
  );
};

export default CartItem;
