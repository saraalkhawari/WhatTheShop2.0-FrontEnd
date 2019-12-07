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

const CreatureItem = ({ creature, navigation }) => {
  const handlePress = () =>
    navigation.navigate("DetailScreen", {
      creatureID: creature.id,
      creatureName: creature.name
    });

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
      <Button
        full
        onPress={() =>
          this.props.navigation(cartStore.addItemToCart("creatureName"))
        }
      >
        <Text>Add</Text>
      </Button>
      <Right>
        <Text>{creature.price}</Text>
      </Right>
    </ListItem>
  );
};

export default withNavigation(CreatureItem);
