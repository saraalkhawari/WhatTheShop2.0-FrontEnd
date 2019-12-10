import React from "react";
import { withNavigation } from "react-navigation";
import { Image } from "react-native";
// NativeBase Components
import {
  Content,
  Text,
  Left,
  Body,
  Right,
  Button,
  CardItem,
  Card
} from "native-base";

const CreatureItem = ({ creature, navigation }) => {
  // item = [];
  const handlePress = () =>
    navigation.navigate("DetailScreen", {
      creatureID: creature.id,
      creatureName: creature.name
    });

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
  );
};

export default withNavigation(CreatureItem);
