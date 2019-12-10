import React, { Component } from "react";
import NumericInput from "react-native-numeric-input";
import FooterComp from "../FooterComp";

// NativeBase Components
import { Image } from "react-native";
import {
  Body,
  Button,
  Card,
  CardItem,
  Container,
  Content,
  Left,
  Picker,
  Right,
  Text
} from "native-base";

// Style
import styles from "./styles";

// Buttons
import CartButton from "../Buttons/CartButton";
import LogButton from "../Buttons/LogButton";

// //Stores
import creaturesStore from "../../stores/creatureStore";
import cartStore from "../../stores/cartStore";

class CreatureDetail extends Component {
  state = {
    name: this.props.navigation.getParam("creatureName"),
    wig: "",
    quantity: 1,
    image: null
    option: "",
    creature: this.props.navigation.getParam("creatureID")
  };

  changeWig = value => {
    this.setState({ wig: value });
    const creatureID = this.props.navigation.getParam("creatureID");
    const creatureWig = creaturesStore.creatureWigs.find(
      creatureWig =>
        +creatureID === +creatureWig.creature && +value === +creatureWig.wig
    );
    console.log("hehee", creatureWig);
    this.setState({ image: creatureWig.image });
  };

  changeQuantity = value => this.setState({ quantity: value });

  handleAdd = () => {
    cartStore.addItemToCart(this.state);
  };

  render() {
    const creatureID = this.props.navigation.getParam("creatureID");
    const creature = creaturesStore.creatures.find(
      creature => creatureID === creature.id
    );
    return (
      <Container>
        <Content>
          <Card transparent style={styles.card}>
            <CardItem>
              <Image
                source={{ uri: creature.image }}
                style={{ height: 500, width: null, flex: 1 }}
              />
            </CardItem>
            <CardItem>
              <Left>
                <Button rounded dark>
                  <Text>{`         ${creature.name}                 `}</Text>
                </Button>
                <Text note>{creature.origin}</Text>
              </Left>
              <Body />

              <Right>
                <Thumbnail
                  source={{
                    uri: this.state.image ? this.state.image : creature.image
                  }}
                />
              </Right>

            </CardItem>
            <CardItem>
              <Text note style={{ color: "gray" }}>
                Description :
              </Text>
              <Text> {creature.description} </Text>
            </CardItem>
            <Body>
              <Picker
                note
                mode="dropdown"
                style={styles.picker}
                onValueChange={this.changeWig}
                selectedValue={this.state.wig}
                placeholder="Choose Option"
              >
                <Picker.Item label="No Wig" value="NOWIG" />
                <Picker.Item label="Blue" value="1" />
                <Picker.Item label="Red" value="2" />
                <Picker.Item label="Yellow" value="3" />
                <Picker.Item label="Green" value="4" />
                <Picker.Item label="Purple" value="5" />
              </Picker>
            </Body>
            <CardItem>
              <Text></Text>
              <Body style={styles.numericInput}>
                <NumericInput
                  value={this.state.value}
                  onChange={quantity => this.setState({ quantity })}
                  initValue={1}
                />
              </Body>
              <Right>
                <Button rounded dark onPress={this.handleAdd}>
                  <Text>{`           Add            `}</Text>
                </Button>
              </Right>
            </CardItem>
          </Card>
        </Content>
        <FooterComp />
      </Container>
    );
  }
}

CreatureDetail.navigationOptions = ({ navigation }) => ({
  title: navigation.getParam("creatureName"),
  headerRight: <CartButton />,
  headerTintColor: "gray",
  headerTitleStyle: {
    color: "white",
    fontWeight: "bold",
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.9
  }
});

export default CreatureDetail;
