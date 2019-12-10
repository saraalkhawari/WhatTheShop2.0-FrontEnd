import React from "react";
import { withNavigation } from "react-navigation";
import { Image } from "react-native";
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
  Button,
  CardItem,
  Card
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
    <Content>
      <Card>
        <CardItem>
          <Body>
            <Button rounded dark>
              <Text>{`            ${creature.name}            `} </Text>
            </Button>
          </Body>
          <Right>
            <Button rounded bordered dark onPress={handlePress}>
              <Text>View ></Text>
            </Button>
          </Right>
        </CardItem>
        <CardItem>
          <Image
            source={{ uri: creature.image }}
            style={{ height: 200, width: null, flex: 1 }}
          />
        </CardItem>
        <CardItem style={{ backgroundColor: "black" }}>
          <Left>
            <Text style={{ color: "white" }} numberOfLines={1}>
              {" "}
              {creature.description}
            </Text>
          </Left>
          <Right>
            <Text style={{ color: "white" }}>{creature.price} $</Text>
          </Right>
        </CardItem>
      </Card>
    </Content>

    // {/* <ListItem thumbnail onPress={handlePress}>
    //   <Left>
    //     <Thumbnail source={{ uri: creature.image }} />
    //   </Left>
    //   <Body>
    //     <Text>{creature.name}</Text>
    //     <Text note numberOfLines={1}>
    //       {creature.description}
    //     </Text>
    //   </Body>
    //   <Right>
    //     <Text>{creature.price} $</Text>
    //   </Right>
    // </ListItem> */}
  );
};

export default withNavigation(CreatureItem);
