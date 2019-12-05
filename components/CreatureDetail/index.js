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

// Components
import CartButton from "../Buttons/CartButton";

// //Stores
import creaturesStore from "../../stores/creatureStore";
import cartStore from "../../stores/cartStore";

class CreatureDetail extends Component {
  state = {
    name: this.props.navigation.getParam("creatureName"),
    quantity: 1
  };

<<<<<<< HEAD
  changeName = value =>
    this.setState({
      name: value
    });
>>>>>>> 5c5aa118cf0d34a55c4934ec05d406304ca2083f
=======
  // changeWig = value =>
  //   this.setState({
  //     wig: value
  //   });

  // changeWig = value => this.setState({ wig: value });

  changeQuantity = value => this.setState({ quantity: value });

  handleAdd = () => cartStore.addItemToCart(this.state);
>>>>>>> 8596fdc334afae33f2a19734d1d50133a4e1d692

export default class CardImageExample extends Component {
  render() {
<<<<<<< HEAD
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
=======
    const creatureID = this.props.navigation.getParam("creatureID");
    const creature = creaturesStore.creatures.find(
      creature => creatureID === creature.id
    );
>>>>>>> 8596fdc334afae33f2a19734d1d50133a4e1d692
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
                <Thumbnail source={{ uri: creature.image }} />
              </Right>
            </CardItem>

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
<<<<<<< HEAD
                <Text>11h ago</Text>
=======
                <Button full onPress={this.handleAdd}>
                  <Text>Add</Text>
                </Button>
>>>>>>> 8596fdc334afae33f2a19734d1d50133a4e1d692
              </Right>
            </CardItem>
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
