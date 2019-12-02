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

class CreatureDetail extends Component {
  state = {
    name: "C",
    quantity: 1
  };

  changeName = value =>
    this.setState({
      name: value
    });

  render() {
    const creatureID = this.props.navigation.getParam("creatureID");
    const creatureshop = creatureshops.find(
      creatureshop => creatureID === creatureshop.id
    );
    return (
      <Container>
        <Content>
          <Card transparent style={styles.card}>
            <CardItem>
              <Left>
                <Text style={styles.text}>
                  {creatureshop.name + "\n"}
                  <Text note>{creatureshop.location}</Text>
                </Text>
              </Left>
              <Body />
              <Right>
                <Thumbnail bordered source={creatureshop.img} />
              </Right>
            </CardItem>
            <CardItem>
              <Left>
                <Picker
                  note
                  mode="dropdown"
                  style={styles.picker}
                  onValueChange={this.changeCreature}
                  placeholder="Choose Creature"
                >
                  <Picker.Item label="C1" value="C1" />
                  <Picker.Item label="C2" value="C2" />
                  <Picker.Item label="C3" value="C3" />
                </Picker>
              </Left>
            </CardItem>
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
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

CreatureDetail.navigationOptions = ({ navigation }) => ({
  title: navigation.getParam("creatureshopName"),
  headerRight: <CartButton />
});

export default CreatureDetail;
