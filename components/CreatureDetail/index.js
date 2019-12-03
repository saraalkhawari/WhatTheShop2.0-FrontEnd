import React, { Component } from "react";
import { Image } from "react-native";
import {
  Container,
  Content,
  Card,
  CardItem,
  Text,
  Title,
  Button,
  Icon,
  Left,
  Body,
  Right
} from "native-base";

//store
import creaturesStore from "../../stores/creatureStore";

export default class CardImageExample extends Component {
  render() {
    const creature = {
      name: "Pikachu",
      origion: "WorldWide",
      decreption: "Mshary's secret pet",
      wig: "yellow",
      price: "10.000",
      image:
        "https://i.pinimg.com/originals/f5/1d/08/f51d08be05919290355ac004cdd5c2d6.png"
    };
    return (
      <Container>
        <Content>
          <Card>
            <CardItem cardBody>
              <Image
                source={{
                  uri: creature.image
                }}
                style={{ height: 400, width: null, flex: 1 }}
              />
            </CardItem>
            <CardItem>
              <Left>
                <Title>{creature.name}</Title>
                <Text note>{creature.origin}</Text>
              </Left>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
