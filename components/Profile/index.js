import React, { Component } from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { Container, CardItem, Text } from "native-base";
import { Avatar } from "react-native-elements";

//Store
import authStore from "../../stores/authStore";
import cartStore from "../../stores/cartStore";

//Buttons
import CartButton from "../Buttons/CartButton";
import LogButton from "../Buttons/LogButton";
import HistoryButton from "../Buttons/HistoryButton";

class Profile extends Component {
  async componentDidMount() {
    await cartStore.retrieveHistory();
  }
  render() {
    console.log("user from profile >>", authStore.username);
    return (
      <Container>
        <Avatar
          size="xlarge"
          rounded
          source={require("../../assets/avatar1.png")}
          activeOpacity={0.1}
        />

        <HistoryButton />
      </Container>
    );
  }
}

Profile.navigationOptions = {
  headerRight: <CartButton />
};
export default observer(Profile);
