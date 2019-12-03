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

<<<<<<< HEAD
//store
import creaturesStore from "../../stores/creatureStore";
=======
// Style
import styles from "./styles";

// //List
import CartButton from "../Buttons/CartButton";

// //Stores
import creaturesStore from "../../stores/creatureStore";

class CreatureDetail extends Component {
  state = {
    quantity: 1
  };

  changeName = value =>
    this.setState({
      name: value
    });
>>>>>>> 5c5aa118cf0d34a55c4934ec05d406304ca2083f

export default class CardImageExample extends Component {
  render() {
    const creature = {
      name: "Pikachu",
<<<<<<< HEAD
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
=======
      origin: "WorldWide",
      description: "Mshary's secret pet",
      wig: "yellow",
      price: "10.000",
      image: "http://127.0.0.1:8000/media/media/Pikachu_.png"
    };
    // const creatureID = this.props.navigation.getParam("creatureID");
    // const creature = creaturesStore.creatures.find(
    //   creature => creatureID === creature.id
    // );
    return (
      <Container>
        <Content>
          <Card transparent style={styles.card}>
            <CardItem>
              <Left>
                <Text style={styles.text}>
                  {creature.name + "\n"}
                  <Text note>{creature.origin}</Text>
                </Text>
              </Left>
              <Body />
              <Right>
                <Thumbnail bordered source={creature.image} />
              </Right>
            </CardItem>
            {/*             
            <CardItem>
              <Body style={styles.numericInput}>
                <NumericInput
                  value={this.state.value}
                  onChange={quantity => this.setState({ quantity })}
                  initValue={1}
                />
              </Body>

>>>>>>> 5c5aa118cf0d34a55c4934ec05d406304ca2083f
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem> */}
          </Card>
        </Content>
      </Container>
    );
  }
}
<<<<<<< HEAD
=======

CreatureDetail.navigationOptions = ({ navigation }) => ({
  title: navigation.getParam("creatureName"),
  headerRight: <CartButton />
});

export default CreatureDetail;
>>>>>>> 5c5aa118cf0d34a55c4934ec05d406304ca2083f
