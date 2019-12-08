import React from "react";
import { withNavigation } from "react-navigation";
// NativeBase Components
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Right,
  Button
} from "native-base";

// Style
import styles from "./styles";

// //Stores
import creaturesStore from "../../stores/creatureStore";
import cartStore from "../../stores/cartStore";
import CreatureDetail from "../CreatureDetail";

const CreatureItem = ({ creature, navigation }) => {
  // item = [];
  const handlePress = () =>
    navigation.navigate("DetailScreen", {
      creatureID: creature.id,
      creatureName: creature.name
    });

  // handleAdd = () =>
  // cartStore.addItemToCart((name: creature.name), (quantity: 1));

  return (
    <ListItem thumbnail onPress={handlePress}>
      <Left>
        <Thumbnail source={{ uri: creature.image }} />
      </Left>
      <Body>
        <Text>{creature.name}</Text>
        <Text note numberOfLines={1}>
          {creature.description}
        </Text>
      </Body>
      {/* <Button full onPress={this.handleAdd}>
        <Text>Add</Text>
      </Button> */}
      <Right>
        <Text>{creature.price}</Text>
      </Right>
    </ListItem>
  );
};

export default withNavigation(CreatureItem);
