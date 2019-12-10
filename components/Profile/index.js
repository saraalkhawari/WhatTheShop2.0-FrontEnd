import React, { Component } from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { Container, CardItem, Text, H1, H3 } from "native-base";
import { Avatar } from "react-native-elements";

//Store
import authStore from "../../stores/authStore";
import cartStore from "../../stores/cartStore";

//Buttons
import CartButton from "../Buttons/CartButton";
import HistoryButton from "../Buttons/HistoryButton";

class Profile extends Component {
  async componentDidMount() {
    await cartStore.retrieveHistory();
  }
  render() {
    console.log("user from profile >>", authStore.username);
    return (
      <Container style={{ alignSelf: "center" }}>
        <H1></H1>
        <H1></H1>
        <Avatar
          size="xlarge"
          rounded
          source={require("../../assets/avatar1.png")}
          activeOpacity={0.1}
        />
        <H3 style={{ alignSelf: "center", paddingTop: 20 }}>Hi </H3>
        <H1 style={{ alignSelf: "center", paddingTop: 10 }}>
          {authStore.username}
        </H1>
        <H1></H1>
        <HistoryButton />
      </Container>
    );
  }
}

Profile.navigationOptions = {
  headerRight: <CartButton />,
  headerTintColor: "gray",
  headerTitleStyle: {
    color: "white",
    fontWeight: "bold",
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.9
  }
};
export default observer(Profile);
