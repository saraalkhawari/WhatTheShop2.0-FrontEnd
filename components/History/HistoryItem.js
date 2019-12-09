import React from "react";
import { withNavigation } from "react-navigation";
// NativeBase Components
import { ListItem, Text, Left, Body, Right, Thumbnail } from "native-base";

//stores
import creaturesStore from "../../stores/creatureStore";

const HistoryItem = ({ item }) => {
  let items = item.cart_items.map(obj => ({
    creature: creaturesStore.creatures.find(creat => creat.id === obj.creature),
    quantity: obj.quantity
  }));
  let items_display = items.map(obj => (
    <>
      <ListItem>
        <Left>
          <Thumbnail source={{ uri: obj.creature.image }} />
        </Left>
        <Body>
          <Text>{obj.creature.name}</Text>
        </Body>
        <Right>
          <Text>{obj.quantity}</Text>
        </Right>
      </ListItem>
    </>
  ));
  return (
    <>
      <ListItem itemDivider>
        <Text>Date : {item.date}</Text>
      </ListItem>
      <ListItem itemDivider>
        <Left>
          <Text>creature</Text>
        </Left>
        <Body>
          <Text>N</Text>
        </Body>
        <Right>
          <Text>Q</Text>
        </Right>
      </ListItem>
      {items_display}
    </>
  );
};

export default withNavigation(HistoryItem);
