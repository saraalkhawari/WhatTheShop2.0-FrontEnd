import React, { Component } from "react";
import NumericInput from "react-native-numeric-input";

// NativeBase Components
import {
  Body,
  Button,
  Card,
  CardItem,
  Container,
  Content,
  Thumbnail,
  Left,
  Picker,
  Right,
  Text
} from "native-base";

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

  render() {
    const creature = {
      name: "Pikachu",
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

              <Right>
                <Button full style={styles.addButton}>
                  <Text>Add</Text>
                </Button>
              </Right>
            </CardItem> */}
          </Card>
        </Content>
      </Container>
    );
  }
}

CreatureDetail.navigationOptions = ({ navigation }) => ({
  title: navigation.getParam("creatureName"),
  headerRight: <CartButton />
});

export default CreatureDetail;
